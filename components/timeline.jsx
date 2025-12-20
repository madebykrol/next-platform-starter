'use client';

import { useEffect, useState } from 'react';

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
  )
};

export function Timeline() {
  const [timelineData, setTimelineData] = useState(null);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [progressPercent, setProgressPercent] = useState(0);

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

    const start = new Date(timelineData.startDate).getTime();
    const end = new Date(timelineData.milestones[timelineData.milestones.length - 1].date).getTime();
    const now = currentTime.getTime();

    let percent = 0;
    if (now < start) {
      percent = 0;
    } else if (now > end) {
      percent = 100;
    } else {
      percent = ((now - start) / (end - start)) * 100;
    }
    setProgressPercent(percent);
  }, [timelineData, currentTime]);

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

      <div className="relative w-full overflow-x-auto pb-20" style={{ minHeight: '400px', paddingTop: '60px' }}>
        <div className="min-w-max px-8" style={{ paddingTop: '160px', paddingBottom: '140px' }}>
          {/* Timeline line - horizontal */}
          <div className="relative h-1 bg-gradient-to-r from-gryffindor-gold via-gryffindor-red to-gryffindor-gold opacity-30" 
               style={{ width: `${timelineData.milestones.length * 220}px` }} />
          
          {/* Animated progress line - horizontal */}
          <div 
            className="absolute left-0 h-1 bg-gradient-to-r from-gryffindor-gold to-gryffindor-red transition-all duration-1000 shadow-glow"
            style={{ width: `${(progressPercent / 100) * timelineData.milestones.length * 220}px`, top: '160px' }}
          />

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
                        {milestoneDate.toLocaleDateString('en-US', { 
                          month: 'short', 
                          day: 'numeric', 
                          year: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit'
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

      {/* Progress indicator at bottom */}
      <div className="w-full max-w-3xl mx-auto mt-6 text-center">
        <div className="text-sm text-gray-400 mb-2">Journey Progress</div>
        <div className="relative w-full h-2 bg-gray-800 rounded-full overflow-hidden">
          <div 
            className="absolute left-0 top-0 h-full bg-gradient-to-r from-gryffindor-gold to-gryffindor-red transition-all duration-1000"
            style={{ width: `${progressPercent}%` }}
          />
          
          {/* Wizard wand icon on progress bar */}
          {progressPercent > 0 && progressPercent < 100 && (
            <div 
              className="absolute top-1/2 transform -translate-y-1/2 transition-all duration-1000 z-20"
              style={{ left: `${progressPercent}%` }}
            >
              <div className="relative">
                <div className="w-10 h-10 -ml-5">
                  <div className="absolute inset-0 rounded-full bg-gryffindor-gold opacity-30 animate-ping" />
                  <div className="relative w-full h-full rounded-full bg-gradient-to-br from-gryffindor-gold to-gryffindor-red flex items-center justify-center p-2 shadow-glow-strong animate-pulse-slow">
                    <IconComponents.wizard />
                  </div>
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 whitespace-nowrap" style={{ bottom: '45px' }}>
                  <div className="bg-black/80 border-2 border-gryffindor-gold rounded-lg px-3 py-1 text-gryffindor-gold font-bold text-xs">
                    Now
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="text-xl text-gryffindor-gold font-bold mt-2">{Math.round(progressPercent)}%</div>
      </div>
    </div>
  );
}
