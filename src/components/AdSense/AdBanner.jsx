import React, { useEffect, useRef } from 'react';
import { Box, Typography } from '@mui/material';

const CLIENT_ID = 'ca-pub-6821531199235214';

export default function AdBanner({
  slot = 'default',
  format = 'auto',
  responsive = 'true',
  showAds = true,
  style = {},
  className = '',
}) {
  const adRef = useRef(null);
  const pushedRef = useRef(false);

  useEffect(() => {
    if (!showAds) return;
    try {
      if (typeof window !== 'undefined' && window.adsbygoogle && !pushedRef.current) {
        // Push ad only once per mount
        (window.adsbygoogle = window.adsbygoogle || []).push({});
        pushedRef.current = true;
      }
    } catch (e) {
      // Ignore adsbygoogle errors in development
    }
  }, [showAds]);

  // Strict policy adherence: completely suppress ads on utility, empty, or sensitive screens
  if (!showAds) {
    return null;
  }

  const isDev = process.env.NODE_ENV === 'development';

  return (
    <Box
      className={className}
      sx={{
        my: 3,
        mx: 'auto',
        p: 1.5,
        maxWidth: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: (theme) => (theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.03)' : 'rgba(0, 0, 0, 0.02)'),
        borderRadius: 2,
        border: (theme) => `1px dashed ${theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.1)'}`,
        minHeight: '100px',
        overflow: 'hidden',
        ...style,
      }}
    >
      <Typography
        variant="caption"
        sx={{
          textTransform: 'uppercase',
          letterSpacing: '1px',
          fontSize: '0.68rem',
          color: 'text.secondary',
          mb: 1,
          fontWeight: 600,
          userSelect: 'none',
        }}
      >
        Advertisement
      </Typography>

      <Box sx={{ width: '100%', minHeight: '90px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        {isDev ? (
          <Box
            sx={{
              py: 2,
              px: 3,
              textAlign: 'center',
              color: 'text.disabled',
              fontSize: '0.8rem',
            }}
          >
            Google AdSense Slot ({slot}) — Active in Production
          </Box>
        ) : (
          <ins
            ref={adRef}
            className="adsbygoogle"
            style={{ display: 'block', width: '100%', minHeight: '90px' }}
            data-ad-client={CLIENT_ID}
            data-ad-slot={slot}
            data-ad-format={format}
            data-full-width-responsive={responsive}
          />
        )}
      </Box>
    </Box>
  );
}
