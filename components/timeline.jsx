'use client';

import { useEffect, useState, useRef } from 'react';

// Icon components for different milestone types
const IconComponents = {
  train: () => (
    <svg className="w-full h-full" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C8 2 4 2.5 4 6V15.5C4 17.43 5.57 19 7.5 19L6 20.5V21H7L9 19H15L17 21H18V20.5L16.5 19C18.43 19 20 17.43 20 15.5V6C20 2.5 16 2 12 2M7.5 17C6.67 17 6 16.33 6 15.5S6.67 14 7.5 14 9 14.67 9 15.5 8.33 17 7.5 17M11 10H6V6H11V10M13 10V6H18V10H13M16.5 17C15.67 17 15 16.33 15 15.5S15.67 14 16.5 14 18 14.67 18 15.5 17.33 17 16.5 17Z" />
    </svg>
  ),
  castle: () => (
    <svg className="w-full h-full" viewBox="0 0 24 24" fill="currentColor">
      <path d="M11 13H13V20H11V13M1 22H23V24H1V22M3 2V11H7V9H17V11H21V2H19V7H17V2H15V7H13V2H11V7H9V2H7V7H5V2H3Z" />
    </svg>
  ),
  tree: () => (
    <svg className="w-full h-full" viewBox="0 0 24 24" fill="currentColor">
      <path d="M11 21V16.74C10.53 16.91 10.03 17 9.5 17C7 17 5 15 5 12.5C5 11.3 5.5 10.21 6.32 9.43C6.12 8.98 6 8.5 6 8C6 5.79 7.79 4 10 4C10.69 4 11.34 4.16 11.92 4.46C12.53 2.46 14.39 1 16.5 1C19 1 21 3 21 5.5C21 6.38 20.75 7.2 20.31 7.9C21.32 8.69 22 9.95 22 11.5C22 13.43 20.43 15 18.5 15C18.14 15 17.8 14.95 17.47 14.86L16 16.69V21H11Z" />
    </svg>
  ),
  shop: () => (
    <svg className="w-full h-full" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 3L2 9L12 15L22 9L12 3M2 17V19L12 25L22 19V17L12 23L2 17Z" />
    </svg>
  ),
  wand: () => (
    <svg className="w-full h-full" viewBox="0 0 24 24" fill="currentColor">
      <path d="M9.64 5.93L8.59 4.88L4.88 8.59L5.93 9.64L9.64 5.93M15 6.5L14 8L16 10L17.5 9L15 6.5M22 11.5L21.87 11.63L18.36 15.14L17.5 14.28L19.59 12.19C19.78 12 19.78 11.67 19.59 11.5L18.45 10.32C18.26 10.13 17.93 10.13 17.74 10.32L15.64 12.42L14.78 11.56L18.29 8.05L18.42 7.92C19.2 7.14 20.47 7.14 21.25 7.92L22 8.66C22.78 9.44 22.78 10.72 22 11.5M2 20V22H7V20C7 19.45 6.55 19 6 19H3C2.45 19 2 19.45 2 20M15.04 8.87C15.43 8.5 15.43 7.87 15.04 7.5L14.66 7.1C14.27 6.71 13.64 6.71 13.27 7.1L3.7 16.67C3.31 17.06 3.31 17.69 3.7 18.06L4.08 18.45C4.47 18.84 5.1 18.84 5.47 18.45L15.04 8.87Z" />
    </svg>
  ),
  star: () => (
    <svg className="w-full h-full" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.62L12 2L9.19 8.62L2 9.24L7.45 13.97L5.82 21L12 17.27Z" />
    </svg>
  ),
  wizard: () => (
    <svg className="w-full h-full" viewBox="0 0 24 24" fill="currentColor" className="animate-wizard">
      <path d="M7.5 5.6L5 7L6.4 4.5L5 2L7.5 3.4L10 2L8.6 4.5L10 7L7.5 5.6M19.5 15.4L22 14L20.6 16.5L22 19L19.5 17.6L17 19L18.4 16.5L17 14L19.5 15.4M22 2L20.6 4.5L22 7L19.5 5.6L17 7L18.4 4.5L17 2L19.5 3.4L22 2M13.34 12.78L15.78 10.34L13.66 8.22L11.22 10.66L13.34 12.78M14.37 7.29L16.71 9.63C17.1 10 17.1 10.65 16.71 11.04L5.04 22.71C4.65 23.1 4 23.1 3.63 22.71L1.29 20.37C0.9 20 0.9 19.35 1.29 18.96L12.96 7.29C13.35 6.9 14 6.9 14.37 7.29Z" />
    </svg>
  ),
  ticket: () => (
    <svg className="w-full h-full" viewBox="0 0 24 24" fill="currentColor">
      <path d="M22 10V6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V10C3.1 10 4 10.9 4 12S3.1 14 2 14V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V14C20.9 14 20 13.1 20 12S20.9 10 22 10Z" />
    </svg>
  ),
  document: () => (
    <svg className="w-full h-full" viewBox="0 0 24 24" fill="currentColor">
      <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2M13 9V3.5L18.5 9H13Z" />
    </svg>
  ),

  food: () => (
    <svg className="w-full h-full" viewBox="0 0 24 24" fill="currentColor">
      <path d="M11 9H9V2H7V9H5V2H3V9C3 11.21 4.79 13 7 13V22H9V13C11.21 13 13 11.21 13 9V2H11V9M16 6V14H18V22H20V2C17.79 2 16 3.79 16 6Z" />
    </svg>
  ),

  car: () => (
    <svg className="w-full h-full" viewBox="0 0 24 24" fill="currentColor">
      <path d="M5 11L6.5 6.5H17.5L19 11M18 16.5C17.17 16.5 16.5 15.83 16.5 15S17.17 13.5 18 13.5 19.5 14.17 19.5 15 18.83 16.5 18 16.5M6 16.5C5.17 16.5 4.5 15.83 4.5 15S5.17 13.5 6 13.5 7.5 14.17 7.5 15 6.83 16.5 6 16.5M18.92 6C18.72 5.42 18.16 5 17.5 5H6.5C5.84 5 5.29 5.42 5.08 6L3 12V20C3 20.55 3.45 21 4 21H5C5.55 21 6 20.55 6 20V19H18V20C18 20.55 18.45 21 19 21H20C20.55 21 21 20.55 21 20V12L18.92 6Z" />
    </svg>
  ),

  bus: () => (
    <svg className="w-full h-full" viewBox="0 0 24 24" fill="currentColor">
      <path d="M4 16C4 17.1 4.9 18 6 18L5 19V20H7L9 18H15L17 20H19V19L18 18C19.1 18 20 17.1 20 16V6C20 3 16.42 2 12 2S4 3 4 6V16M7.5 16C6.67 16 6 15.33 6 14.5S6.67 13 7.5 13 9 13.67 9 14.5 8.33 16 7.5 16M16.5 16C15.67 16 15 15.33 15 14.5S15.67 13 16.5 13 18 13.67 18 14.5 17.33 16 16.5 16M18 11H6V6H18V11Z" />
    </svg>
  ),

  plane: () => (
    <svg className="w-full h-full" viewBox="0 0 24 24" fill="currentColor">
      <path d="M21 16V14L13 9V3.5C13 2.67 12.33 2 11.5 2S10 2.67 10 3.5V9L2 14V16L10 13.5V19L8 20.5V22L11.5 21L15 22V20.5L13 19V13.5L21 16Z" />
    </svg>
  ),

  "plane-arrival": () => (
    <svg className="w-full h-full" viewBox="0 0 24 24" fill="currentColor">
      <path d="M2.5 19H21.5V21H2.5V19M21 10.5V8.5L13 3V7.5L21 10.5M2 8.5V10.5L10 7.5V3L2 8.5M10.5 14.5H13.5L14.5 18H9.5L10.5 14.5Z" />
    </svg>
  ),

  home: () => (
    <svg className="w-full h-full" viewBox="0 0 24 24" fill="currentColor">
      <path d="M10 20V14H14V20H19V12H22L12 3L2 12H5V20H10Z" />
    </svg>
  )
};

export function Timeline() {
  const [timelineData, setTimelineData] = useState(null);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [progressPercent, setProgressPercent] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const scrollContainerRef = useRef(null);
  const miniTimelineRef = useRef(null);

  // Constants for navigation
  const KEYBOARD_SCROLL_INCREMENT = 100; // pixels to scroll on arrow key press
  const SINGLE_MILESTONE_POSITION = 50; // center position for single milestone (%)

  // Calculate scroll position from mouse event
  const calculateScrollFromPosition = (clientX) => {
    if (!scrollContainerRef.current || !miniTimelineRef.current) return;
    
    const rect = miniTimelineRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
    
    const container = scrollContainerRef.current;
    const maxScroll = container.scrollWidth - container.clientWidth;
    container.scrollLeft = (percent / 100) * maxScroll;
  };

  useEffect(() => {
    // Load timeline data
    fetch('/timeline.json')
      .then(res => res.json())
      .then(data => setTimelineData(data))
      .catch(err => console.error('Error loading timeline:', err));
  }, []);

  useEffect(() => {
    // Update current time every second
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!timelineData) return;

    const now = currentTime.getTime();
    const milestones = timelineData.milestones;
    const startTime = new Date(timelineData.startDate).getTime();
    const firstMilestone = new Date(milestones[0].date).getTime();
    const lastMilestone = new Date(milestones[milestones.length - 1].date).getTime();

    // Handle single milestone edge case
    if (milestones.length === 1) {
      const percent = now >= firstMilestone ? 100 : 0;
      setProgressPercent(percent);
      return;
    }

    // Find which segment we're in
    let segmentIndex = 0;
    let positionInSegment = 0;

    if (now < firstMilestone) {
      // Before first milestone
      segmentIndex = 0;
      positionInSegment = 0;
    } else if (now >= lastMilestone) {
      // After last milestone
      segmentIndex = milestones.length - 1;
      positionInSegment = 1;
    } else {
      // Between milestones - find which segment
      for (let i = 0; i < milestones.length - 1; i++) {
        const currentMilestoneTime = new Date(milestones[i].date).getTime();
        const nextMilestoneTime = new Date(milestones[i + 1].date).getTime();
        
        if (now >= currentMilestoneTime && now < nextMilestoneTime) {
          segmentIndex = i;
          const segmentDuration = nextMilestoneTime - currentMilestoneTime;
          const timeIntoSegment = now - currentMilestoneTime;
          // Guard against division by zero when consecutive milestones have the same date
          positionInSegment = segmentDuration > 0 ? timeIntoSegment / segmentDuration : 0;
          break;
        }
      }
    }

    // Calculate percentage based on milestone segments (each milestone is evenly spaced)
    const percent = ((segmentIndex + positionInSegment) / (milestones.length - 1)) * 100;
    setProgressPercent(Math.max(0, Math.min(100, percent)));
  }, [timelineData, currentTime]);

  // Track scroll position
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const maxScroll = container.scrollWidth - container.clientWidth;
      const scrollPercent = maxScroll > 0 ? (scrollLeft / maxScroll) * 100 : 0;
      setScrollPosition(scrollPercent);
    };

    container.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial position
    
    return () => container.removeEventListener('scroll', handleScroll);
  }, [timelineData]);

  // Handle mini-timeline interaction
  const handleMiniTimelineInteraction = (e) => {
    calculateScrollFromPosition(e.clientX);
  };

  useEffect(() => {
    if (!isDragging) return;

    const handleMouseMove = (e) => {
      calculateScrollFromPosition(e.clientX);
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  if (!timelineData) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-2xl text-yellow-400 animate-pulse">Loading magical timeline...</div>
      </div>
    );
  }

  const startDate = new Date(timelineData.startDate);
  const endDate = new Date(timelineData.milestones[timelineData.milestones.length - 1].date);
  const totalDuration = endDate - startDate;

  return (
    <div className="timeline-container-horizontal min-h-screen flex flex-col py-8 px-6">
      <div className="text-center mb-8 mt-8">
        <h1 className="text-3xl font-bold text-gold-400 mb-3 magical-text">{timelineData.title}</h1>
        <p className="text-base text-gray-300">Your magical journey through time</p>
      </div>

      <div 
        ref={scrollContainerRef}
        className="relative w-full overflow-x-auto pb-20 timeline-scroll-container" 
        style={{ minHeight: '400px', paddingTop: '60px' }}
      >
        <div className="min-w-max px-8" style={{ paddingTop: '160px', paddingBottom: '140px' }}>
          {/* Timeline line - horizontal base */}
          <div className="relative">
            <div className="h-1 bg-gradient-to-r from-gryffindor-gold via-gryffindor-red to-gryffindor-gold opacity-30" 
                 style={{ width: `${timelineData.milestones.length * 220}px` }} />
            
            {/* Animated progress line - highlighted portion */}
            <div 
              className="absolute left-0 top-0 h-1 bg-gradient-to-r from-gryffindor-gold to-gryffindor-red transition-all duration-1000 shadow-glow-strong"
              style={{ width: `${(progressPercent / 100) * timelineData.milestones.length * 220}px` }}
            />

            {/* Wizard "Now" indicator - at end of progress line */}
            {progressPercent > 0 && progressPercent < 100 && (
              <div 
                className="absolute top-1/2 -translate-y-1/2 z-30 transition-all duration-1000"
                style={{ left: `${(progressPercent / 100) * timelineData.milestones.length * 220}px` }}
              >
                <div className="relative -ml-7">
                  <div className="w-14 h-14">
                    <div className="absolute inset-0 rounded-full bg-gryffindor-gold opacity-30 animate-ping" />
                    <div className="relative w-full h-full rounded-full bg-gradient-to-br from-gryffindor-gold to-gryffindor-red flex items-center justify-center p-3 shadow-glow-strong">
                      <IconComponents.wizard className="animate-pulse-slow" />
                    </div>
                  </div>
                  <div className="absolute left-1/2 -translate-x-1/2 whitespace-nowrap" style={{ top: '60px' }}>
                    <div className="bg-black/90 border-2 border-gryffindor-gold rounded-lg px-3 py-1 text-gryffindor-gold font-bold text-xs shadow-lg">
                      Now
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Milestones - horizontal layout */}
          <div className="relative flex items-start" style={{ marginTop: '-6px' }}>
            {timelineData.milestones.map((milestone, index) => {
              const milestoneDate = new Date(milestone.date);
              const isPast = currentTime >= milestoneDate;
              const Icon = IconComponents[milestone.icon] || IconComponents.star;
              const isAbove = index % 2 === 0;

              return (
                <div key={milestone.id} className="relative" style={{ width: '220px' }}>
                  {/* Vertical connector line */}
                  <div 
                    className={`absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gradient-to-b ${isPast ? 'from-gryffindor-gold to-transparent' : 'from-gray-600 to-transparent'}`}
                    style={{ 
                      height: '50px',
                      top: isAbove ? 'auto' : '12px',
                      bottom: isAbove ? '12px' : 'auto'
                    }}
                  />

                  {/* Icon on timeline */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10" style={{ top: '0' }}>
                    <div className={`milestone-icon ${isPast ? 'icon-past' : 'icon-future'} w-12 h-12 rounded-full flex items-center justify-center p-2 transition-all duration-500 shadow-glow`}>
                      <Icon />
                    </div>
                  </div>

                  {/* Content card - alternating above/below */}
                  <div 
                    className={`absolute left-1/2 transform -translate-x-1/2 ${isAbove ? 'bottom-16' : 'top-16'}`}
                    style={{ width: '200px' }}
                  >
                    <div className={`milestone-card ${isPast ? 'milestone-past' : 'milestone-future'} p-3 rounded-lg transform transition-all duration-500 hover:scale-105`}>
                      <h3 className="text-base font-bold text-gryffindor-gold mb-1 text-center">{milestone.title}</h3>
                      <p className="text-gray-300 mb-1 text-xs text-center">{milestone.description}</p>
                      <div className="text-xs text-gray-400 text-center">
                        {milestoneDate.toLocaleDateString(milestone.locale, { 
                          month: 'short', 
                          day: 'numeric', 
                          year: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit',
                          hour12: false
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Mini-timeline navigation with draggable wand */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 w-4/5 max-w-4xl z-50">
        <div className="bg-black/90 backdrop-blur-sm border border-gryffindor-gold/50 rounded-lg px-4 py-2 shadow-lg">
          <div 
            ref={miniTimelineRef}
            className="mini-timeline-track relative h-10 cursor-pointer"
            role="slider"
            aria-label="Timeline navigation slider"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(scrollPosition)}
            aria-valuetext={`${Math.round(scrollPosition)}% through timeline`}
            tabIndex={0}
            onMouseDown={(e) => {
              setIsDragging(true);
              handleMiniTimelineInteraction(e);
            }}
            onKeyDown={(e) => {
              if (e.key === 'ArrowLeft') {
                e.preventDefault();
                const container = scrollContainerRef.current;
                if (container) container.scrollLeft -= KEYBOARD_SCROLL_INCREMENT;
              } else if (e.key === 'ArrowRight') {
                e.preventDefault();
                const container = scrollContainerRef.current;
                if (container) container.scrollLeft += KEYBOARD_SCROLL_INCREMENT;
              } else if (e.key === 'Home') {
                e.preventDefault();
                const container = scrollContainerRef.current;
                if (container) container.scrollLeft = 0;
              } else if (e.key === 'End') {
                e.preventDefault();
                const container = scrollContainerRef.current;
                if (container) container.scrollLeft = container.scrollWidth - container.clientWidth;
              }
            }}
          >
            {/* Background track line */}
            <div className="absolute top-1/2 -translate-y-1/2 w-full h-0.5 bg-gradient-to-r from-gryffindor-red/30 via-gryffindor-gold/30 to-gryffindor-red/30" />
            
            {/* Miniature milestone icons */}
            {timelineData.milestones.map((milestone, index) => {
              // Handle single milestone case to avoid division by zero
              const position = timelineData.milestones.length > 1 
                ? (index / (timelineData.milestones.length - 1)) * 100 
                : SINGLE_MILESTONE_POSITION;
              const milestoneDate = new Date(milestone.date);
              const isPast = currentTime >= milestoneDate;
              const Icon = IconComponents[milestone.icon] || IconComponents.star;
              
              return (
                <div
                  key={milestone.id}
                  className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 pointer-events-none"
                  style={{ left: `${position}%` }}
                  aria-hidden="true"
                >
                  <div className={`w-5 h-5 rounded-full flex items-center justify-center p-1 ${
                    isPast 
                      ? 'bg-gryffindor-gold/80 text-gryffindor-red' 
                      : 'bg-gray-700/50 text-gray-500'
                  }`}>
                    <Icon />
                  </div>
                </div>
              );
            })}
            
            {/* Draggable wand indicator */}
            <div 
              className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 pointer-events-none z-10"
              style={{ left: `${scrollPosition}%` }}
              aria-hidden="true"
            >
              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-gryffindor-gold to-gryffindor-red flex items-center justify-center shadow-lg border-2 border-gryffindor-gold/50">
                <IconComponents.wand />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
