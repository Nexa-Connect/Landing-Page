import { memo } from 'react'

const flagData = {
  'pt-BR': {
    viewBox: '0 0 640 480',
    content: (
      <>
        <rect fill="#009B3A" width="640" height="480"/>
        <polygon fill="#FEDF00" points="320,60 580,240 320,420 60,240"/>
        <circle fill="#002776" cx="320" cy="240" r="95"/>
        <path fill="#FFF" d="M225,240c0-40,25-75,60-90c-5-2-12-3-18-3c-52,0-95,43-95,95s43,95,95,95c6,0,13-1,18-3c-35-15-60-50-60-94z"/>
      </>
    ),
  },
  'en': {
    viewBox: '0 0 640 480',
    content: (
      <>
        <rect fill="#B22234" width="640" height="480"/>
        <g fill="#FFF">
          <rect y="37" width="640" height="37"/>
          <rect y="111" width="640" height="37"/>
          <rect y="185" width="640" height="37"/>
          <rect y="259" width="640" height="37"/>
          <rect y="333" width="640" height="37"/>
          <rect y="407" width="640" height="37"/>
        </g>
        <rect fill="#3C3B6E" width="256" height="259"/>
        <g fill="#FFF">
          <circle cx="26" cy="17" r="6"/><circle cx="52" cy="17" r="6"/><circle cx="78" cy="17" r="6"/><circle cx="104" cy="17" r="6"/><circle cx="130" cy="17" r="6"/><circle cx="156" cy="17" r="6"/><circle cx="182" cy="17" r="6"/><circle cx="208" cy="17" r="6"/><circle cx="234" cy="17" r="6"/>
          <circle cx="39" cy="43" r="6"/><circle cx="65" cy="43" r="6"/><circle cx="91" cy="43" r="6"/><circle cx="117" cy="43" r="6"/><circle cx="143" cy="43" r="6"/><circle cx="169" cy="43" r="6"/><circle cx="195" cy="43" r="6"/><circle cx="221" cy="43" r="6"/>
          <circle cx="26" cy="69" r="6"/><circle cx="52" cy="69" r="6"/><circle cx="78" cy="69" r="6"/><circle cx="104" cy="69" r="6"/><circle cx="130" cy="69" r="6"/><circle cx="156" cy="69" r="6"/><circle cx="182" cy="69" r="6"/><circle cx="208" cy="69" r="6"/><circle cx="234" cy="69" r="6"/>
          <circle cx="39" cy="95" r="6"/><circle cx="65" cy="95" r="6"/><circle cx="91" cy="95" r="6"/><circle cx="117" cy="95" r="6"/><circle cx="143" cy="95" r="6"/><circle cx="169" cy="95" r="6"/><circle cx="195" cy="95" r="6"/><circle cx="221" cy="95" r="6"/>
          <circle cx="26" cy="121" r="6"/><circle cx="52" cy="121" r="6"/><circle cx="78" cy="121" r="6"/><circle cx="104" cy="121" r="6"/><circle cx="130" cy="121" r="6"/><circle cx="156" cy="121" r="6"/><circle cx="182" cy="121" r="6"/><circle cx="208" cy="121" r="6"/><circle cx="234" cy="121" r="6"/>
          <circle cx="39" cy="147" r="6"/><circle cx="65" cy="147" r="6"/><circle cx="91" cy="147" r="6"/><circle cx="117" cy="147" r="6"/><circle cx="143" cy="147" r="6"/><circle cx="169" cy="147" r="6"/><circle cx="195" cy="147" r="6"/><circle cx="221" cy="147" r="6"/>
          <circle cx="26" cy="173" r="6"/><circle cx="52" cy="173" r="6"/><circle cx="78" cy="173" r="6"/><circle cx="104" cy="173" r="6"/><circle cx="130" cy="173" r="6"/><circle cx="156" cy="173" r="6"/><circle cx="182" cy="173" r="6"/><circle cx="208" cy="173" r="6"/><circle cx="234" cy="173" r="6"/>
          <circle cx="39" cy="199" r="6"/><circle cx="65" cy="199" r="6"/><circle cx="91" cy="199" r="6"/><circle cx="117" cy="199" r="6"/><circle cx="143" cy="199" r="6"/><circle cx="169" cy="199" r="6"/><circle cx="195" cy="199" r="6"/><circle cx="221" cy="199" r="6"/>
          <circle cx="26" cy="225" r="6"/><circle cx="52" cy="225" r="6"/><circle cx="78" cy="225" r="6"/><circle cx="104" cy="225" r="6"/><circle cx="130" cy="225" r="6"/><circle cx="156" cy="225" r="6"/><circle cx="182" cy="225" r="6"/><circle cx="208" cy="225" r="6"/><circle cx="234" cy="225" r="6"/>
        </g>
      </>
    ),
  },
  'es': {
    viewBox: '0 0 640 480',
    content: (
      <>
        <rect fill="#AA151B" width="640" height="480"/>
        <rect fill="#F1BF00" y="120" width="640" height="240"/>
      </>
    ),
  },
  'fr': {
    viewBox: '0 0 640 480',
    content: (
      <>
        <rect fill="#002395" width="213" height="480"/>
        <rect fill="#FFF" x="213" width="214" height="480"/>
        <rect fill="#ED2939" x="427" width="213" height="480"/>
      </>
    ),
  },
  'de': {
    viewBox: '0 0 640 480',
    content: (
      <>
        <rect fill="#000" width="640" height="160"/>
        <rect fill="#DD0000" y="160" width="640" height="160"/>
        <rect fill="#FFCC00" y="320" width="640" height="160"/>
      </>
    ),
  },
  'ja': {
    viewBox: '0 0 640 480',
    content: (
      <>
        <rect fill="#FFF" width="640" height="480"/>
        <circle fill="#BC002D" cx="320" cy="240" r="120"/>
      </>
    ),
  },
  'zh': {
    viewBox: '0 0 640 480',
    content: (
      <>
        <rect fill="#DE2910" width="640" height="480"/>
        <polygon fill="#FFDE00" points="160,72 176,120 228,120 186,152 202,200 160,168 118,200 134,152 92,120 144,120"/>
        <polygon fill="#FFDE00" points="264,36 270,54 290,54 274,66 280,84 264,72 248,84 254,66 238,54 258,54"/>
        <polygon fill="#FFDE00" points="312,72 318,90 338,90 322,102 328,120 312,108 296,120 302,102 286,90 306,90"/>
        <polygon fill="#FFDE00" points="312,144 318,162 338,162 322,174 328,192 312,180 296,192 302,174 286,162 306,162"/>
        <polygon fill="#FFDE00" points="264,180 270,198 290,198 274,210 280,228 264,216 248,228 254,210 238,198 258,198"/>
      </>
    ),
  },
}

function FlagIcon({ code, className }) {
  const flag = flagData[code] || flagData['en']

  return (
    <span className={className}>
      <svg
        viewBox={flag.viewBox}
        style={{ width: '100%', height: '100%', display: 'block', borderRadius: '2px' }}
      >
        {flag.content}
      </svg>
    </span>
  )
}

export default memo(FlagIcon)
