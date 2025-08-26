import React, { useEffect, useState } from 'react';

const ReloadLoader: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame: number;
    let start: number | null = null;
    const duration = 1800; // 1.8 seconds for 0-100%
    function animate(ts: number) {
      if (!start) start = ts;
      const elapsed = ts - start;
      const percent = Math.min(100, Math.round((elapsed / duration) * 100));
      setProgress(percent);
      if (percent < 100) {
        frame = requestAnimationFrame(animate);
      }
    }
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div className="reload-loader-overlay">
      <div className="reload-loader-content">
        {/* SVG Mug Pouring Coffee Animation */}
        <div className="mug-animation">
          <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Mug */}
            <rect x="30" y="50" width="40" height="40" rx="10" fill="#fff" stroke="#2D1810" strokeWidth="3" />
            {/* Mug handle */}
            <ellipse cx="75" cy="70" rx="8" ry="15" fill="none" stroke="#2D1810" strokeWidth="3" />
            {/* Cup */}
            <ellipse cx="90" cy="100" rx="18" ry="8" fill="#fff" stroke="#2D1810" strokeWidth="3" />
            {/* Coffee stream (animated) */}
            <rect className="coffee-stream" x="60" y="70" width="6" height="30" rx="3" fill="#6B3E26" />
            {/* Coffee in cup (animated fill) */}
            <ellipse className="coffee-fill" cx="90" cy="100" rx="14" ry="5" fill="#6B3E26" />
          </svg>
        </div>
        <div className="reload-loader-progress">
          <div className="reload-loader-bar" style={{ width: `${progress}%` }} />
        </div>
        <div className="reload-loader-percent">{progress}%</div>
      </div>
    </div>
  );
};

export default ReloadLoader;