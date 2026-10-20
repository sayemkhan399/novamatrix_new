import  { useState, useEffect, useRef, useCallback } from 'react';
import * as d3 from 'd3';
import * as topojson from 'topojson-client';
import worldData from 'world-atlas/land-110m.json';

// Central Origin Hub (Dhaka)
const DHAKA = {
  id: 'dhaka',
  name: 'Dhaka',
  country: 'Bangladesh',
  continent: 'Asia',
  lat: 23.8103,
  lng: 90.4125,
  isHub: true,
  timezone: 'Asia/Dhaka'
};

// Destination Hub Nodes across 6 regions
const CITIES = [
  // North America
  { id: 'sf', name: 'San Francisco', country: 'USA', continent: 'North America', lat: 37.7749, lng: -122.4194, timezone: 'America/Los_Angeles' },
  { id: 'ny', name: 'New York', country: 'USA', continent: 'North America', lat: 40.7128, lng: -74.0060, timezone: 'America/New_York' },
  { id: 'to', name: 'Toronto', country: 'Canada', continent: 'North America', lat: 43.6532, lng: -79.3832, timezone: 'America/Toronto' },
  // South America
  { id: 'sp', name: 'São Paulo', country: 'Brazil', continent: 'South America', lat: -23.5505, lng: -46.6333, timezone: 'America/Sao_Paulo' },
  { id: 'ba', name: 'Buenos Aires', country: 'Argentina', continent: 'South America', lat: -34.6037, lng: -58.3816, timezone: 'America/Argentina/Buenos_Aires' },
  // Europe
  { id: 'ldn', name: 'London', country: 'United Kingdom', continent: 'Europe', lat: 51.5074, lng: -0.1278, timezone: 'Europe/London' },
  { id: 'ber', name: 'Berlin', country: 'Germany', continent: 'Europe', lat: 52.5200, lng: 13.4050, timezone: 'Europe/Berlin' },
  { id: 'par', name: 'Paris', country: 'France', continent: 'Europe', lat: 48.8566, lng: 2.3522, timezone: 'Europe/Paris' },
  { id: 'sto', name: 'Stockholm', country: 'Sweden', continent: 'Europe', lat: 59.3293, lng: 18.0686, timezone: 'Europe/Stockholm' },
  // Africa
  { id: 'cai', name: 'Cairo', country: 'Egypt', continent: 'Africa', lat: 30.0444, lng: 31.2357, timezone: 'Africa/Cairo' },
  { id: 'nai', name: 'Nairobi', country: 'Kenya', continent: 'Africa', lat: -1.2921, lng: 36.8219, timezone: 'Africa/Nairobi' },
  { id: 'jhb', name: 'Johannesburg', country: 'South Africa', continent: 'Africa', lat: -26.2041, lng: 28.0473, timezone: 'Africa/Johannesburg' },
  // Asia
  { id: 'tky', name: 'Tokyo', country: 'Japan', continent: 'Asia', lat: 35.6762, lng: 139.6503, timezone: 'Asia/Tokyo' },
  { id: 'sgp', name: 'Singapore', country: 'Singapore', continent: 'Asia', lat: 1.3521, lng: 103.8198, timezone: 'Asia/Singapore' },
  { id: 'dxb', name: 'Dubai', country: 'United Arab Emirates', continent: 'Asia', lat: 25.2048, lng: 55.2708, timezone: 'Asia/Dubai' },
  // Oceania
  { id: 'syd', name: 'Sydney', country: 'Australia', continent: 'Oceania', lat: -33.8688, lng: 151.2093, timezone: 'Australia/Sydney' },
  { id: 'akl', name: 'Auckland', country: 'New Zealand', continent: 'Oceania', lat: -36.8485, lng: 174.7633, timezone: 'Pacific/Auckland' }
];

const CONTINENTS = ['Asia', 'Europe', 'North America', 'South America', 'Africa', 'Oceania', 'All'];

// Great-circle distance helper (km)
const calculateDistance = (lat1, lon1, lat2, lon2) => {
  const R = 6371;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return Math.round(R * c);
};

export default function Globe() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [tooltip, setTooltip] = useState({ visible: false, x: 0, y: 0, data: null });
  const [stats, setStats] = useState({ continents: 0, countries: 0, team: 0 });

  const mapContainerRef = useRef(null);
  const svgRef = useRef(null);
  const animationFrameRef = useRef(null);

  const handleNodeHover = useCallback((event, data) => {
    const localTime = new Intl.DateTimeFormat('en-US', {
      timeZone: data.timezone,
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    }).format(new Date());

    const dist = data.isHub ? 0 : calculateDistance(DHAKA.lat, DHAKA.lng, data.lat, data.lng);

    setTooltip({
      visible: true,
      x: event.clientX,
      y: event.clientY - 12,
      data: {
        ...data,
        localTime,
        distance: dist
      }
    });
  }, []);

  const handleNodeLeave = useCallback(() => {
    setTooltip((prev) => ({ ...prev, visible: false }));
  }, []);

  // Animated Count-up for Bottom Stats
  useEffect(() => {
    let startTime = null;
    let lastUpdate = 0;
    const duration = 1600;
    let frameId;

    const animateStats = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);

      if (timestamp - lastUpdate >= 80 || progress === 1) {
        lastUpdate = timestamp;
        setStats({
          continents: Math.floor(progress * 7),
          countries: Math.floor(progress * 195),
          team: Math.floor(progress * 1)
        });
      }

      if (progress < 1) {
        frameId = requestAnimationFrame(animateStats);
      } else {
        setStats((current) =>
          current.continents === 7 && current.countries === 195 && current.team === 1
            ? current
            : { continents: 7, countries: 195, team: 1 }
        );
      }
    };

    frameId = requestAnimationFrame(animateStats);
    return () => cancelAnimationFrame(frameId);
  }, []);

  // Curved Bezier Arc Generator
  const getArcPath = useCallback((source, target, projection) => {
    const p1 = projection([source.lng, source.lat]);
    const p2 = projection([target.lng, target.lat]);
    if (!p1 || !p2) return '';

    const dx = p2[0] - p1[0];
    const dy = p2[1] - p1[1];
    const dr = Math.sqrt(dx * dx + dy * dy);

    return `M ${p1[0]} ${p1[1]} A ${dr * 1.12} ${dr * 1.12} 0 0 ${p1[0] < p2[0] ? 1 : 0} ${p2[0]} ${p2[1]}`;
  }, []);

  // Render & Animate SVG Map
  useEffect(() => {
    const container = mapContainerRef.current;
    if (!container) return;

    const width = container.clientWidth || 1000;
    const height = container.clientHeight || 500;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let isMounted = true;
    let isInView = typeof IntersectionObserver === 'undefined';
    let lastFrameTime = 0;
    let particlesData = [];

    // Clear previous SVG contents
    d3.select(container).selectAll('svg').remove();

    const svg = d3
      .select(container)
      .append('svg')
      .attr('width', '100%')
      .attr('height', '100%')
      .attr('viewBox', `0 0 ${width} ${height}`);

    svgRef.current = svg;

    // Projection & Layers
    const projection = d3
      .geoNaturalEarth1()
      .scale(width / 5.2)
      .translate([width / 2, height / 1.85]);

    const gDots = svg.append('g').attr('class', 'layer-dots');
    const gArcs = svg.append('g').attr('class', 'layer-arcs');
    const gParticles = svg.append('g').attr('class', 'layer-particles');
    const gNodes = svg.append('g').attr('class', 'layer-nodes');

    const land = topojson.feature(worldData, worldData.objects.land);
    const dotPattern = svg
      .append('defs')
      .append('pattern')
      .attr('id', 'land-dot-pattern')
      .attr('width', 5)
      .attr('height', 5)
      .attr('patternUnits', 'userSpaceOnUse');

    dotPattern
      .append('circle')
      .attr('cx', 1.1)
      .attr('cy', 1.1)
      .attr('r', 1.05)
      .attr('fill', '#64748b');

    // A patterned land path preserves the dotted map without point-by-point geometry checks.
    gDots
      .append('path')
      .attr('class', 'land-dot-matrix')
      .attr('d', d3.geoPath(projection)(land))
      .attr('fill', 'url(#land-dot-pattern)')
      .attr('opacity', 0.85);

    // Draw Arcs & Setup Particles
    CITIES.forEach((city) => {
      const arcPath = getArcPath(DHAKA, city, projection);

      const pathElement = gArcs
        .append('path')
        .attr('d', arcPath)
        .attr('class', 'arc-line')
        .attr('fill', 'none')
        .attr('stroke', '#f95d04')
        .attr('stroke-width', 1.3)
        .attr('stroke-opacity', 0.5)
        .attr('data-continent', city.continent);

      const pathNode = pathElement.node();
      const pathLength = pathNode.getTotalLength();
      const progress = Math.random() * pathLength;
      const point = pathNode.getPointAtLength(progress);
      const element = gParticles
        .append('circle')
        .attr('r', 2.2)
        .attr('cx', point.x)
        .attr('cy', point.y)
        .attr('fill', '#f32e25')
        .attr('data-continent', city.continent)
        .node();

      particlesData.push({
        element,
        pathNode,
        length: pathLength,
        progress,
        speed: 0.75 + Math.random() * 0.75
      });
    });

    // Draw Dhaka Origin Node
    const dhakaPos = projection([DHAKA.lng, DHAKA.lat]);
    if (dhakaPos) {
      const dhakaGroup = gNodes.append('g').attr('class', 'dhaka-hub cursor-pointer');

      dhakaGroup
        .append('circle')
        .attr('cx', dhakaPos[0])
        .attr('cy', dhakaPos[1])
        .attr('r', 14)
        .attr('class', 'animate-ping origin-center')
        .attr('fill', '#10b981')
        .attr('opacity', 0.22);

      dhakaGroup
        .append('circle')
        .attr('cx', dhakaPos[0])
        .attr('cy', dhakaPos[1])
        .attr('r', 5.5)
        .attr('fill', '#059669')
        .attr('stroke', '#ffffff')
        .attr('stroke-width', 1.8);

      dhakaGroup
        .on('mouseenter', (e) => handleNodeHover(e, DHAKA))
        .on('mouseleave', handleNodeLeave);
    }

    // Draw City Nodes
    CITIES.forEach((city) => {
      const pos = projection([city.lng, city.lat]);
      if (!pos) return;

      const nodeGroup = gNodes.append('g').attr('class', 'city-group cursor-pointer');

      nodeGroup
        .append('circle')
        .attr('class', 'city-node transition-all duration-300')
        .attr('cx', pos[0])
        .attr('cy', pos[1])
        .attr('r', 3.5)
        .attr('fill', '#f95d04')
        .attr('stroke', '#ffffff')
        .attr('stroke-width', 1.2)
        .attr('data-continent', city.continent);

      nodeGroup
        .on('mouseenter', (e) => handleNodeHover(e, city))
        .on('mouseleave', handleNodeLeave);
    });

    const animate = (timestamp) => {
      animationFrameRef.current = null;
      if (!isMounted || !isInView || document.hidden || reducedMotion) return;

      if (timestamp - lastFrameTime >= 1000 / 20) {
        const frameScale = lastFrameTime
          ? (timestamp - lastFrameTime) / (1000 / 60)
          : 1;
        lastFrameTime = timestamp;

        particlesData.forEach((particle) => {
          particle.progress = (particle.progress + particle.speed * frameScale) % particle.length;
          const point = particle.pathNode.getPointAtLength(particle.progress);
          particle.element.setAttribute('cx', point.x);
          particle.element.setAttribute('cy', point.y);
        });
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    const startAnimation = () => {
      if (
        isMounted &&
        isInView &&
        !document.hidden &&
        !reducedMotion &&
        animationFrameRef.current === null
      ) {
        animationFrameRef.current = requestAnimationFrame(animate);
      }
    };

    const handleVisibilityChange = () => {
      if (document.hidden && animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      } else {
        startAnimation();
      }
    };

    const visibilityObserver =
      typeof IntersectionObserver === 'undefined'
        ? null
        : new IntersectionObserver(([entry]) => {
            isInView = entry.isIntersecting;
            if (isInView) {
              startAnimation();
            } else if (animationFrameRef.current !== null) {
              cancelAnimationFrame(animationFrameRef.current);
              animationFrameRef.current = null;
            }
          });

    visibilityObserver?.observe(container);
    document.addEventListener('visibilitychange', handleVisibilityChange);
    startAnimation();

    return () => {
      isMounted = false;
      visibilityObserver?.disconnect();
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }
      svg.selectAll('*').interrupt();
      d3.select(container).selectAll('svg').remove();
    };
  }, [getArcPath, handleNodeHover, handleNodeLeave]);

  // Update Filters Visual State
  useEffect(() => {
    if (!svgRef.current) return;

    const svg = svgRef.current;

    svg.selectAll('.arc-line').each(function () {
      const arcContinent = d3.select(this).attr('data-continent');
      const isActive = activeFilter === 'All' || arcContinent === activeFilter;

      d3.select(this)
        .transition()
        .duration(300)
        .attr('stroke-opacity', isActive ? 0.7 : 0.08)
        .attr('stroke-width', isActive ? 1.5 : 0.9)
        .attr('stroke', isActive ? '#f95d04' : '#cbd5e1');
    });

    svg.selectAll('.city-node').each(function () {
      const nodeContinent = d3.select(this).attr('data-continent');
      const isActive = activeFilter === 'All' || nodeContinent === activeFilter;

      d3.select(this)
        .transition()
        .duration(300)
        .attr('r', isActive ? 3.8 : 2)
        .attr('fill-opacity', isActive ? 1 : 0.2);
    });

    svg.selectAll('circle[data-continent]').each(function () {
      const pContinent = d3.select(this).attr('data-continent');
      if (pContinent) {
        const isActive = activeFilter === 'All' || pContinent === activeFilter;
        d3.select(this).style('opacity', isActive ? 0.95 : 0);
      }
    });
  }, [activeFilter]);

  return (
    <section className="w-full py-12 text-neutral-950 font-sans select-none sm:py-16">
      {/* MAIN CONTAINER */}
      <div className="max-w-7xl w-full mx-auto flex flex-col items-center px-4 sm:px-6 lg:px-8">
        {/* HEADER SECTION */}
        <header className="text-center max-w-3xl mx-auto space-y-4 mb-4 sm:mb-6">
          <div className="text-[11px] font-extrabold tracking-[0.25em] text-emerald-700 uppercase">
            GLOBAL REACH
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-[2.6rem] font-extrabold tracking-tight text-neutral-950 leading-tight">
            One team in Dhaka.{" "} <br/>
            <span className="bg-gradient-to-r from-green-500 via-emerald-600 to-lime-500 bg-clip-text text-transparent">
              Every continent covered.
            </span>
          </h2>

          <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto font-normal">
            Based in Dhaka, Bangladesh — delivering remote services across all 7 continents.
            <br className="hidden sm:inline" />
            Wherever you are, we've got you covered.
          </p>

          {/* Continent Filter Pill Buttons */}
          <div className="flex flex-wrap justify-center gap-2 pt-3">
            {CONTINENTS.map((continent) => {
              const isActive = activeFilter === continent;
              return (
                <button
                  key={continent}
                  onClick={() => setActiveFilter(continent)}
                  className={`text-xs font-semibold px-4 py-1.5 rounded-full border transition-all duration-200 ${
                    isActive
                      ? 'bg-gradient-to-r from-[#f95d04] via-[#f32e25] to-[#f1093f] text-white border-transparent shadow-md shadow-[#f32e25]/20'
                      : 'bg-white/80 text-neutral-700 border-neutral-200 hover:border-emerald-500 hover:text-emerald-700'
                  }`}
                >
                  {continent}
                </button>
              );
            })}
          </div>
        </header>

        {/* BORDERLESS MAP CANVAS */}
        <div className="relative w-full aspect-[2.1/1] min-h-[380px] sm:min-h-[500px] my-2 flex items-center justify-center overflow-hidden ">
          <div ref={mapContainerRef} className="w-full h-full absolute inset-0" />

          {/* Floating Tooltip */}
          {tooltip.visible && tooltip.data && (
            <div
              className="fixed z-50 bg-white/95 backdrop-blur-md text-neutral-900 border border-emerald-100 rounded-xl px-4 py-3 text-xs shadow-xl pointer-events-none transform -translate-x-1/2 -translate-y-full min-w-[200px] transition-opacity duration-150"
              style={{ left: `${tooltip.x}px`, top: `${tooltip.y}px` }}
            >
              <div className="flex items-center justify-between gap-3 border-b border-neutral-100 pb-2 mb-2">
                <span className="font-bold text-sm text-neutral-950">{tooltip.data.name}</span>
                <span
                  className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                    tooltip.data.isHub
                      ? 'bg-emerald-100 text-emerald-700'
                      : 'bg-orange-50 text-orange-700'
                  }`}
                >
                  {tooltip.data.isHub ? 'HQ Hub' : tooltip.data.continent}
                </span>
              </div>
              <div className="space-y-1 text-neutral-600 text-[11px]">
                <div className="flex justify-between">
                  <span className="text-neutral-400">Country:</span>
                  <span className="font-medium text-neutral-800">{tooltip.data.country}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-400">Continent:</span>
                  <span className="font-medium text-neutral-800">{tooltip.data.continent}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-400">Local Time:</span>
                  <span className="font-bold text-emerald-700">{tooltip.data.localTime}</span>
                </div>
                {!tooltip.data.isHub && (
                  <div className="flex justify-between">
                    <span className="text-neutral-400">Distance from Dhaka:</span>
                    <span className="font-medium text-neutral-800">
                      {tooltip.data.distance.toLocaleString()} km
                    </span>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* BOTTOM STATS FOOTER */}
        <footer className="w-full max-w-xl mx-auto pt-6 mt-2">
          <div className="grid grid-cols-3 text-center">
            <div className="px-2">
              <div className="text-2xl sm:text-3xl font-normal tracking-tight bg-gradient-to-r from-[#f95d04] to-[#f1093f] bg-clip-text text-transparent">
                {stats.continents}
              </div>
              <div className="text-[10px] sm:text-[11px] font-bold text-slate-400 tracking-widest uppercase mt-1">
                CONTINENTS
              </div>
            </div>
            <div className="px-2">
              <div className="text-2xl sm:text-3xl font-normal tracking-tight bg-gradient-to-r from-[#f95d04] to-[#f1093f] bg-clip-text text-transparent">
                {stats.countries}+
              </div>
              <div className="text-[10px] sm:text-[11px] font-bold text-slate-400 tracking-widest uppercase mt-1">
                SOVEREIGN COUNTRIES
              </div>
            </div>
            <div className="px-2">
              <div className="text-2xl sm:text-3xl font-normal tracking-tight bg-gradient-to-r from-[#f95d04] to-[#f1093f] bg-clip-text text-transparent">
                {stats.team}
              </div>
              <div className="text-[10px] sm:text-[11px] font-bold text-slate-400 tracking-widest uppercase mt-1">
                TEAM
              </div>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
}