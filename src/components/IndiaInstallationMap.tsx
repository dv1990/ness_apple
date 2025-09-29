import { useEffect, useState } from "react";
import { MapPin, Zap } from "lucide-react";

interface Installation {
  lat: number;
  lng: number;
}

const IndiaInstallationMap = () => {
  const [animatedDots, setAnimatedDots] = useState<number[]>([]);

  // Installation coordinates
  const installations: Installation[] = [
    { lat: 12.026493119572473, lng: 79.81152427361688 },
    { lat: 14.290822099433639, lng: 76.70421575443999 },
    { lat: 17.4278333, lng: 78.4143889 },
    { lat: 12.949446846255215, lng: 80.24856973264899 },
    { lat: 12.005197125272755, lng: 79.80800616619418 },
    { lat: 12.683689317287461, lng: 77.59158754384055 },
    { lat: 12.91914247375848, lng: 77.43820396069495 },
    { lat: 12.919047574705452, lng: 77.43681771466728 },
    { lat: 13.3717822, lng: 77.7026517 },
    { lat: 13.372807, lng: 77.70226 },
    { lat: 13.020042, lng: 77.765361 },
    { lat: 12.83167614402777, lng: 77.49875773185931 },
    { lat: 13.191113, lng: 77.625397 },
    { lat: 13.229599, lng: 77.717913 },
    { lat: 13.0651397, lng: 77.5769132 },
    { lat: 13.204297, lng: 77.652463 },
    { lat: 12.834868315657053, lng: 77.49800115340861 },
    { lat: 12.871233908890908, lng: 77.80292540788618 },
    { lat: 12.880479758443313, lng: 77.69008248960681 },
    { lat: 12.778431905861817, lng: 77.71105259574121 },
    { lat: 12.912063231624709, lng: 77.43150426069494 },
    { lat: 12.921642171529314, lng: 77.47393000302367 },
    { lat: 12.90170578043578, lng: 77.53396759021894 },
    { lat: 12.758865710688937, lng: 77.69987479680282 },
    { lat: 13.02903452303508, lng: 77.76960096809063 },
    { lat: 12.964032701869526, lng: 77.60747482318179 },
    { lat: 12.597952111173756, lng: 77.5361392972661 },
    { lat: 12.314488556341361, lng: 77.15985901390908 },
    { lat: 13.040540021245471, lng: 77.69973325767218 },
    { lat: 12.89085270231792, lng: 77.6899812245735 },
    { lat: 23.0345475, lng: 84.5386631 },
    { lat: 23.165098070202145, lng: 84.57908596069497 },
    { lat: 23.170553878023842, lng: 84.50386580302367 },
    { lat: 23.18887692964792, lng: 84.59416661545013 },
    { lat: 23.077710943386354, lng: 84.5667235876811 },
    { lat: 23.082269334958088, lng: 84.61124781651675 },
    { lat: 23.17183418290367, lng: 84.48087011110356 },
    { lat: 23.518583904736854, lng: 84.66553324256482 },
    { lat: 23.14387745445214, lng: 84.80864670128304 },
    { lat: 23.1271488, lng: 84.641816 },
    { lat: 23.07403743377379, lng: 84.67141868069677 },
    { lat: 13.077590466766438, lng: 77.7959258335266 },
    { lat: 12.961727, lng: 77.508092 },
    { lat: 12.905105276785909, lng: 77.59836444187458 },
    { lat: 9.336275748313026, lng: 78.98920370612217 },
    { lat: 13.168535493660576, lng: 77.63593743647958 },
    { lat: 31.663135925198034, lng: 77.35993406996926 },
    { lat: 19.198620909779464, lng: 84.7144709880457 },
    { lat: 13.1831153, lng: 77.6792057 },
    { lat: 21.1499844, lng: 72.8098776 },
    { lat: 28.501125, lng: 77.085158 },
    { lat: 29.692610776817126, lng: 77.01140286736656 },
    { lat: 17.201749481728626, lng: 79.36900598804571 },
    { lat: 17.1697817, lng: 79.3572457 },
    { lat: 13.01134, lng: 77.7596126 },
    { lat: 10.155863247331974, lng: 76.35570835307206 },
    { lat: 13.06397200626822, lng: 80.25767838480176 },
    { lat: 13.093497998701698, lng: 80.21680186931174 },
    { lat: 13.0498638, lng: 80.0279883 },
    { lat: 11.916308403014627, lng: 76.31839279460381 },
    { lat: 12.02148941985375, lng: 76.26495621189758 },
    { lat: 15.773031893928339, lng: 76.7591453790075 },
    { lat: 12.924405743236063, lng: 77.75806235570849 },
    { lat: 12.9293056, lng: 77.5844167 },
    { lat: 26.49994298926332, lng: 81.4521536790075 },
    { lat: 12.94161888549629, lng: 77.78349301163907 },
    { lat: 13.123998800396643, lng: 77.8375988091255 },
    { lat: 12.90534876418237, lng: 77.66573677000653 },
    { lat: 12.892817671287673, lng: 77.64528303704326 },
    { lat: 12.980787997057535, lng: 77.70021009559264 },
    { lat: 12.891580009566242, lng: 77.55404853795713 },
    { lat: 12.985834116938051, lng: 77.6998291254787 },
    { lat: 27.5215671, lng: 95.3320998 },
    { lat: 12.871953647276849, lng: 77.53962565734756 },
    { lat: 13.068057001063288, lng: 77.59595402362034 },
  ];

  // Convert lat/lng to SVG coordinates
  const latLngToSVG = (lat: number, lng: number) => {
    // India bounds: lat 8-37, lng 68-97
    const minLat = 8, maxLat = 37;
    const minLng = 68, maxLng = 97;
    
    // SVG viewBox: 0 0 400 600
    const x = ((lng - minLng) / (maxLng - minLng)) * 400;
    const y = 600 - ((lat - minLat) / (maxLat - minLat)) * 600;
    
    return { x, y };
  };

  // Animate dots on mount
  useEffect(() => {
    const timer = setInterval(() => {
      setAnimatedDots(prev => {
        if (prev.length >= installations.length) {
          return prev;
        }
        return [...prev, prev.length];
      });
    }, 30);

    return () => clearInterval(timer);
  }, [installations.length]);

  return (
    <div className="relative w-full max-w-5xl mx-auto">
      <svg
        viewBox="0 0 400 600"
        className="w-full h-auto"
        style={{ filter: 'drop-shadow(0 4px 20px rgba(0, 0, 0, 0.1))' }}
      >
        {/* India outline - simplified line art */}
        <path
          d="M 200 50 L 210 55 L 220 58 L 230 65 L 235 75 L 240 90 L 245 105 L 248 120 L 250 140 L 252 160 L 253 180 L 254 200 L 255 220 L 256 240 L 257 260 L 258 280 L 259 300 L 258 320 L 256 340 L 253 360 L 248 380 L 242 395 L 235 405 L 225 412 L 215 417 L 205 420 L 195 422 L 185 423 L 175 422 L 165 420 L 155 417 L 145 412 L 138 405 L 132 395 L 127 385 L 123 373 L 120 360 L 118 345 L 117 330 L 116 315 L 115 300 L 114 285 L 113 270 L 112 255 L 111 240 L 110 225 L 109 210 L 108 195 L 107 180 L 108 165 L 110 150 L 113 138 L 117 127 L 122 117 L 128 108 L 135 100 L 143 93 L 152 87 L 162 82 L 172 77 L 182 70 L 190 62 L 195 55 L 200 50 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-muted-foreground/30"
          vectorEffect="non-scaling-stroke"
        />
        
        {/* More detailed India map outline */}
        <path
          d="M 180 80 Q 185 75 190 72 Q 200 68 210 70 Q 220 72 228 78 Q 235 85 238 95 Q 242 110 244 125 Q 246 145 247 165 Q 248 190 248 215 Q 248 245 247 275 Q 246 305 244 335 Q 242 360 238 380 Q 235 395 228 405 Q 220 415 210 420 Q 200 424 188 424 Q 178 423 170 419 Q 160 414 153 406 Q 147 398 143 387 Q 138 373 135 357 Q 132 338 130 318 Q 128 295 127 272 Q 126 245 126 218 Q 126 188 128 158 Q 130 130 134 105 Q 138 85 145 72 Q 152 62 162 58 Q 170 55 180 58 Q 185 60 188 65 L 180 80 Z
             M 235 420 L 240 435 L 243 450 L 244 465 L 243 480 L 240 492 L 235 502 L 228 509 L 220 514 L 210 517 L 200 518 L 190 517 L 180 514 L 172 509 L 165 502 L 160 492 L 157 480 L 156 465 L 157 450 L 160 435 L 165 420 L 170 408 L 177 398 L 185 390 L 195 385 L 205 383 L 215 385 L 225 390 L 233 398 L 238 408 L 240 418"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-foreground/20"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Installation dots with pulse animation */}
        {installations.map((installation, index) => {
          const { x, y } = latLngToSVG(installation.lat, installation.lng);
          const isAnimated = animatedDots.includes(index);
          
          return (
            <g key={index} opacity={isAnimated ? 1 : 0}>
              {/* Pulse ring */}
              <circle
                cx={x}
                cy={y}
                r="6"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                className="text-primary/40"
                opacity={isAnimated ? 1 : 0}
              >
                <animate
                  attributeName="r"
                  from="3"
                  to="12"
                  dur="2s"
                  begin={`${index * 0.03}s`}
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  from="0.8"
                  to="0"
                  dur="2s"
                  begin={`${index * 0.03}s`}
                  repeatCount="indefinite"
                />
              </circle>
              
              {/* Main dot */}
              <circle
                cx={x}
                cy={y}
                r="2.5"
                fill="currentColor"
                className="text-primary"
              >
                <animate
                  attributeName="r"
                  from="0"
                  to="2.5"
                  dur="0.3s"
                  begin={`${index * 0.03}s`}
                  fill="freeze"
                />
              </circle>
            </g>
          );
        })}
      </svg>

      {/* Legend */}
      <div className="flex items-center justify-center space-x-8 mt-8 text-sm text-muted-foreground">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-primary animate-pulse"></div>
          <span>Active Installation</span>
        </div>
        <div className="flex items-center space-x-2">
          <Zap className="w-4 h-4 text-primary" />
          <span>{installations.length}+ Locations</span>
        </div>
      </div>
    </div>
  );
};

export default IndiaInstallationMap;
