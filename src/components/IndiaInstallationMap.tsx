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

  // Convert lat/lng to SVG coordinates with accurate India bounds
  const latLngToSVG = (lat: number, lng: number) => {
    // Accurate India bounds
    const minLat = 6.5, maxLat = 35.5;
    const minLng = 68, maxLng = 97.5;
    
    // SVG viewBox dimensions
    const width = 500;
    const height = 700;
    
    const x = ((lng - minLng) / (maxLng - minLng)) * width;
    const y = height - ((lat - minLat) / (maxLat - minLat)) * height;
    
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
    <div className="relative w-full max-w-4xl mx-auto">
      <svg
        viewBox="0 0 500 700"
        className="w-full h-auto"
        style={{ filter: 'drop-shadow(0 4px 20px rgba(0, 0, 0, 0.1))' }}
      >
        {/* Accurate India map outline - Major regions */}
        <g className="text-muted-foreground/30" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          {/* Kashmir & North */}
          <path d="M 180 80 L 185 75 L 195 72 L 205 70 L 215 69 L 225 70 L 232 73 L 238 78 L 242 85 L 245 93 L 247 102 L 248 112 L 248 122 L 246 132 L 243 140 L 238 147 L 232 152 L 225 155 L 218 157 L 210 158 L 202 157 L 195 154 L 190 150 L 185 145 L 182 138 L 180 130 L 179 120 L 180 110 L 181 100 L 182 90 L 180 80 Z" />
          
          {/* Gujarat & West Coast */}
          <path d="M 95 280 L 92 270 L 90 260 L 89 250 L 90 240 L 93 232 L 97 225 L 102 220 L 108 217 L 115 216 L 122 217 L 128 220 L 133 225 L 137 232 L 140 240 L 142 250 L 143 260 L 143 270 L 142 280 L 140 290 L 137 298 L 133 305 L 128 310 L 122 313 L 115 314 L 108 313 L 102 310 L 97 305 L 93 298 L 90 290 L 88 280 Z" />
          
          {/* Main Peninsula - Western Coast */}
          <path d="M 115 314 L 112 325 L 110 340 L 109 355 L 108 370 L 108 385 L 109 400 L 111 415 L 114 430 L 118 445 L 123 460 L 129 475 L 136 490 L 144 505 L 153 518 L 163 530 L 174 540 L 186 548" />
          
          {/* Southern tip */}
          <path d="M 186 548 L 198 554 L 210 558 L 222 560 L 234 559 L 245 555 L 254 548" />
          
          {/* Eastern Coast */}
          <path d="M 254 548 L 263 540 L 271 530 L 278 518 L 284 505 L 289 490 L 293 475 L 296 460 L 298 445 L 299 430 L 300 415 L 300 400 L 300 385 L 299 370 L 298 355 L 296 340 L 293 325 L 289 310 L 284 295 L 278 280 L 271 265 L 263 250 L 254 235 L 244 220 L 233 205 L 221 190 L 208 175 L 194 160 L 179 145" />
          
          {/* North-East connection */}
          <path d="M 300 280 L 305 275 L 312 272 L 320 270 L 330 269 L 340 270 L 348 273 L 355 278 L 360 285 L 363 293 L 364 302 L 363 311 L 360 318 L 355 323 L 348 326 L 340 327 L 332 325 L 325 320" />
          
          {/* Connecting paths */}
          <path d="M 179 145 L 185 140 L 192 137 L 200 135 L 208 135 L 216 137 L 223 141 L 229 147 L 233 155 L 236 165 L 237 175 L 237 185 L 236 195 L 233 205" />
          
          <path d="M 143 270 L 148 268 L 155 267 L 163 268 L 170 271 L 176 276 L 180 283 L 183 291 L 185 300 L 185 310 L 183 319 L 179 327 L 174 333 L 168 337 L 161 339 L 154 339 L 147 337 L 141 333 L 136 327 L 132 319 L 129 310 L 128 300 L 128 290" />
        </g>

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
                r="3"
                fill="currentColor"
                className="text-primary"
              >
                <animate
                  attributeName="r"
                  from="0"
                  to="3"
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
