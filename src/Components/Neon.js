import React from 'react';
// import reactCSS from 'reactcss'

export default class App extends React.Component {
  render() {    
    return (
        <svg style={{display:this.props.neon}} id="neon" width="450px" height="450px" viewBox="0 0 450 450" version="1.1" xmlns="http://www.w3.org/2000/svg">
        
        <title>Artboard</title>
        <desc>Created by Andrew Mundy</desc>
        <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-1">
                <stop stopColor={this.props.backPlate[0]} offset="0%"></stop>
                <stop stopColor={this.props.backPlate[1]} offset="100%"></stop>
            </linearGradient>
            <rect id="path-2" x="0" y="0" width="328.08749" height="401" rx="7.59767442"></rect>
            <filter x="-1.1%" y="-0.9%" width="102.1%" height="101.7%" filterUnits="objectBoundingBox" id="filter-3">
                <feGaussianBlur stdDeviation="0.5" in="SourceAlpha" result="shadowBlurInner1"></feGaussianBlur>
                <feOffset dx="3" dy="-6" in="shadowBlurInner1" result="shadowOffsetInner1"></feOffset>
                <feComposite in="shadowOffsetInner1" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="shadowInnerInner1"></feComposite>
                <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0" type="matrix" in="shadowInnerInner1" result="shadowMatrixInner1"></feColorMatrix>
                <feGaussianBlur stdDeviation="0.5" in="SourceAlpha" result="shadowBlurInner2"></feGaussianBlur>
                <feOffset dx="0" dy="0" in="shadowBlurInner2" result="shadowOffsetInner2"></feOffset>
                <feComposite in="shadowOffsetInner2" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="shadowInnerInner2"></feComposite>
                <feColorMatrix values="0 0 0 0 1   0 0 0 0 1   0 0 0 0 1  0 0 0 0.204625226 0" type="matrix" in="shadowInnerInner2" result="shadowMatrixInner2"></feColorMatrix>
                <feMerge>
                    <feMergeNode in="shadowMatrixInner1"></feMergeNode>
                    <feMergeNode in="shadowMatrixInner2"></feMergeNode>
                </feMerge>
            </filter>
            <linearGradient x1="38.5659724%" y1="96.5499296%" x2="50%" y2="4.74867797%" id="linearGradient-4">
                <stop stopColor={this.props.backColor[0]} offset="0%"></stop>
                <stop stopColor={this.props.backColor[1]} offset="100%"></stop>
            </linearGradient>
            <linearGradient x1="0%" y1="4.59085877%" x2="86.0547952%" y2="92.6414632%" id="linearGradient-5">
                <stop stopColor={this.props.foreColor[0]} offset="0%"></stop>
                <stop stopColor={this.props.foreColor[1]} offset="100%"></stop>
            </linearGradient>
            <polygon id="path-6" points="46.0180854 130.491686 65.8082465 123.347981 239.627854 255.506532 192.179155 275.776527"></polygon>
            <filter x="-0.3%" y="-0.3%" width="100.5%" height="100.7%" filterUnits="objectBoundingBox" id="filter-7">
                <feGaussianBlur stdDeviation="0.5" in="SourceAlpha" result="shadowBlurInner1"></feGaussianBlur>
                <feOffset dx="0" dy="0" in="shadowBlurInner1" result="shadowOffsetInner1"></feOffset>
                <feComposite in="shadowOffsetInner1" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="shadowInnerInner1"></feComposite>
                <feColorMatrix values="0 0 0 0 1   0 0 0 0 1   0 0 0 0 1  0 0 0 0.5 0" type="matrix" in="shadowInnerInner1"></feColorMatrix>
            </filter>
            <linearGradient x1="82.6481618%" y1="7.65369642%" x2="5.37094629%" y2="100%" id="linearGradient-8">
                <stop stopColor={this.props.foreColor[0]} offset="0%"></stop>
                <stop stopColor={this.props.foreColor[1]} offset="100%"></stop>
            </linearGradient>
            <polygon id="path-9" points="45.0643427 225.979216 64.8545038 231.932304 239.86629 101.440618 193.132897 81.4382423"></polygon>
            <filter x="-9.5%" y="-11.6%" width="119.0%" height="124.6%" filterUnits="objectBoundingBox" id="filter-10">
                <feOffset dx="0" dy="1" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
                <feGaussianBlur stdDeviation="6" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
                <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>
            </filter>
            <filter x="-6.4%" y="-7.6%" width="112.8%" height="116.6%" filterUnits="objectBoundingBox" id="filter-11">
                <feGaussianBlur stdDeviation="0.5" in="SourceAlpha" result="shadowBlurInner1"></feGaussianBlur>
                <feOffset dx="0" dy="0" in="shadowBlurInner1" result="shadowOffsetInner1"></feOffset>
                <feComposite in="shadowOffsetInner1" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="shadowInnerInner1"></feComposite>
                <feColorMatrix values="0 0 0 0 1   0 0 0 0 1   0 0 0 0 1  0 0 0 0.5 0" type="matrix" in="shadowInnerInner1"></feColorMatrix>
            </filter>
            <linearGradient x1="75.4963425%" y1="0%" x2="1.72182086%" y2="0%" id="linearGradient-12">
                <stop stopColor={this.props.backColor[0]} offset="0%"></stop>
                <stop stopColor={this.props.backColor[1]} offset="100%"></stop>
            </linearGradient>
            <polygon id="path-13" points="24.0820033 289.558195 368.621555 341.945368 283.500019 377.187648"></polygon>
            <filter x="-0.1%" y="-0.6%" width="100.3%" height="101.1%" filterUnits="objectBoundingBox" id="filter-14">
                <feGaussianBlur stdDeviation="0.5" in="SourceAlpha" result="shadowBlurInner1"></feGaussianBlur>
                <feOffset dx="0" dy="0" in="shadowBlurInner1" result="shadowOffsetInner1"></feOffset>
                <feComposite in="shadowOffsetInner1" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="shadowInnerInner1"></feComposite>
                <feColorMatrix values="0 0 0 0 1   0 0 0 0 1   0 0 0 0 1  0 0 0 0.35193048 0" type="matrix" in="shadowInnerInner1"></feColorMatrix>
            </filter>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-15">
                <stop stopColor={this.props.foreColor[0]} offset="0%"></stop>
                <stop stopColor={this.props.foreColor[1]} offset="100%"></stop>
            </linearGradient>
            <path d="M36.6973915,37.2566305 L333.774265,37.1662791 C337.76054,37.1651242 340.992991,40.3957029 340.994146,44.3819785 C340.994146,44.3834087 340.994146,44.3848389 340.994146,44.3862691 L340.877109,400.333371 C340.875894,404.317978 337.645998,407.547817 333.661391,407.548962 L36.585263,407.642807 C32.5989874,407.643952 29.3665445,404.413365 29.3653998,400.42709 C29.3653993,400.42567 29.3653994,400.424251 29.3653998,400.422832 L29.4816934,44.4765132 C29.4828997,40.4919074 32.712787,37.2620622 36.6973928,37.2609079 Z" id="path-16"></path>
            <filter x="-1.1%" y="-0.9%" width="102.2%" height="101.9%" filterUnits="objectBoundingBox" id="filter-17">
                <feGaussianBlur stdDeviation="0.5" in="SourceAlpha" result="shadowBlurInner1"></feGaussianBlur>
                <feOffset dx="3" dy="-6" in="shadowBlurInner1" result="shadowOffsetInner1"></feOffset>
                <feComposite in="shadowOffsetInner1" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="shadowInnerInner1"></feComposite>
                <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0" type="matrix" in="shadowInnerInner1" result="shadowMatrixInner1"></feColorMatrix>
                <feGaussianBlur stdDeviation="0.5" in="SourceAlpha" result="shadowBlurInner2"></feGaussianBlur>
                <feOffset dx="0" dy="0" in="shadowBlurInner2" result="shadowOffsetInner2"></feOffset>
                <feComposite in="shadowOffsetInner2" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="shadowInnerInner2"></feComposite>
                <feColorMatrix values="0 0 0 0 1   0 0 0 0 1   0 0 0 0 1  0 0 0 0.204625226 0" type="matrix" in="shadowInnerInner2" result="shadowMatrixInner2"></feColorMatrix>
                <feMerge>
                    <feMergeNode in="shadowMatrixInner1"></feMergeNode>
                    <feMergeNode in="shadowMatrixInner2"></feMergeNode>
                </feMerge>
            </filter>
            <filter x="-7.9%" y="-6.8%" width="115.8%" height="113.7%" filterUnits="objectBoundingBox" id="filter-18">
                <feGaussianBlur stdDeviation="7" in="SourceGraphic"></feGaussianBlur>
            </filter>
            <path d="M357.983908,381.317814 L357.983908,383.389229 C357.983908,389.008845 353.435043,393.564444 347.823733,393.564444 C292.200533,393.564444 254.801955,393.564444 235.627997,393.564444 M209.808627,393.564444 C174.196796,393.564444 120.77905,393.564444 49.5553887,393.564444 C43.9440788,393.564444 39.3952133,389.008845 39.3952133,383.389229 L38.0275862,33.7574377 C38.0275862,28.1378214 42.5764517,23.5822222 48.1877616,23.5822222 L346.456106,23.5822222 C352.067415,23.5822222 356.616281,28.1378214 356.616281,33.7574377 L357.57362,46.9029492" id="path-19"></path>
            <path d="M30.8688318,29.0562956 L0.52766751,7.68414904 C-0.0477814746,7.26538587 -0.171729042,6.46360042 0.250822869,5.89331112 C0.41882862,5.66656529 0.657472494,5.50092676 0.929916459,5.42196416 L18.7487259,0.25752799 C20.3572793,-0.208680013 22.0856694,-0.0374570675 23.5692764,0.735075788 L52.2663649,15.6780113 C55.4263607,17.3234609 56.6420745,21.1960751 54.9817378,24.3277372 C54.7635848,24.7392087 54.5008874,25.1259256 54.1982866,25.4810556 L48.6017023,32.0491649" id="path-20"></path>
            <filter x="-58.8%" y="-102.3%" width="217.6%" height="310.0%" filterUnits="objectBoundingBox" id="filter-21">
                <feMorphology radius="4.275" operator="dilate" in="SourceAlpha" result="shadowSpreadOuter1"></feMorphology>
                <feOffset dx="0" dy="0" in="shadowSpreadOuter1" result="shadowOffsetOuter1"></feOffset>
                <feMorphology radius="4.275" operator="erode" in="SourceAlpha" result="shadowInner"></feMorphology>
                <feOffset dx="0" dy="0" in="shadowInner" result="shadowInner"></feOffset>
                <feComposite in="shadowOffsetOuter1" in2="shadowInner" operator="out" result="shadowOffsetOuter1"></feComposite>
                <feGaussianBlur stdDeviation="9.5" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
                <feDropShadow stdDeviation="0" floodColor={this.props.foreColor[0]} floodOpacity=".5" />
            </filter>
            <path d="M143.242873,310.037075 L1.22358023,287.176291 C0.52496769,287.063835 0.0495646973,286.40491 0.161737925,285.704541 C0.259903449,285.09163 0.78127299,284.63682 1.40034579,284.624056 L231.468268,279.880682 C233.826305,279.832066 235.69856,277.876279 235.650066,275.512311 C235.64602,275.31512 235.628388,275.118445 235.597293,274.923691 L192.53594,5.21611004 C192.163175,2.8813604 193.748929,0.685726276 196.077822,0.312023971 C196.623178,0.224514128 197.180289,0.243887204 197.718286,0.369069792 L275.205441,18.3989765 C276.900536,18.7933954 278.18738,20.1794737 278.458344,21.9027242 L318.564209,276.964207 C318.832343,278.669458 318.052654,280.369317 316.586834,281.275234 L245.872501,324.978657 C244.565162,325.786629 243.011777,326.096832 241.4954,325.852741 L164.259646,313.420135" id="path-22"></path>
            <filter x="-10.3%" y="-10.1%" width="120.6%" height="120.1%" filterUnits="objectBoundingBox" id="filter-23">
                <feMorphology radius="4.275" operator="dilate" in="SourceAlpha" result="shadowSpreadOuter1"></feMorphology>
                <feOffset dx="0" dy="0" in="shadowSpreadOuter1" result="shadowOffsetOuter1"></feOffset>
                <feMorphology radius="4.275" operator="erode" in="SourceAlpha" result="shadowInner"></feMorphology>
                <feOffset dx="0" dy="0" in="shadowInner" result="shadowInner"></feOffset>
                <feComposite in="shadowOffsetOuter1" in2="shadowInner" operator="out" result="shadowOffsetOuter1"></feComposite>
                <feGaussianBlur stdDeviation="9.5" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
                <feDropShadow stdDeviation="0" floodColor={this.props.foreColor[0]} floodOpacity=".5" />
            </filter>
            <path d="M155.209139,175.857481 L145.803147,182.163751 C144.306336,183.167292 142.339868,183.126227 140.886411,182.061076 L74.5185662,133.424137 C73.5663249,132.726297 73.3610951,131.39001 74.0601725,130.439455 C74.1029841,130.381243 81.2736628,123.211638 95.5722085,108.930641 C96.2316781,108.272339 97.242419,108.116461 98.0701609,108.545402 L132.045531,126.151656 C133.093976,126.694967 134.385131,126.28698 134.929406,125.240391 C135.141218,124.833096 135.215936,124.368517 135.142486,123.915505 L124.516378,58.377603 C124.327641,57.2135416 123.229307,56.4226142 122.063181,56.6110172 C121.616125,56.6832448 121.203572,56.8952527 120.884943,57.2165046 L17.9087002,161.040391 C17.4100451,161.543151 16.6942859,161.766692 15.9974957,161.637286 L2.09469014,159.055298 C0.933317379,158.839611 0.166997555,157.724951 0.383066906,156.565635 C0.442949908,156.244334 0.575921629,155.941043 0.771737788,155.679128 L115.865252,1.73519471 C116.933308,0.306610376 118.777959,-0.309418105 120.492171,0.190016287 L159.768586,11.6331675 C161.344092,12.0921896 162.517619,13.4105301 162.789009,15.0263094 L185.845108,152.295956 C186.122835,153.949467 185.405554,155.612222 184.01128,156.547016 L172.307338,164.393953" id="path-24"></path>
            <filter x="-17.7%" y="-17.9%" width="135.3%" height="135.8%" filterUnits="objectBoundingBox" id="filter-25">
                <feMorphology radius="4.275" operator="dilate" in="SourceAlpha" result="shadowSpreadOuter1"></feMorphology>
                <feOffset dx="0" dy="0" in="shadowSpreadOuter1" result="shadowOffsetOuter1"></feOffset>
                <feMorphology radius="4.275" operator="erode" in="SourceAlpha" result="shadowInner"></feMorphology>
                <feOffset dx="0" dy="0" in="shadowInner" result="shadowInner"></feOffset>
                <feComposite in="shadowOffsetOuter1" in2="shadowInner" operator="out" result="shadowOffsetOuter1"></feComposite>
                <feGaussianBlur stdDeviation="9.5" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
                <feDropShadow stdDeviation="0" floodColor={this.props.foreColor[0]} floodOpacity=".5" />
            </filter>
        </defs>
        <g id="Artboard" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g id="Neon" transform="translate(14.000000, 15.000000)" fillRule="nonzero">
                <g id="Rectangle" transform="translate(185.179764, 222.404550) rotate(-9.500000) translate(-185.179764, -222.404550) ">
                    <use fill="url(#linearGradient-1)" xlinkHref="#path-16"></use>
                    <use fill="black" fillOpacity="1" filter="url(#filter-17)" xlinkHref="#path-16"></use>
                </g>
                <path d="M357.983908,381.317814 L357.983908,383.389229 C357.983908,389.008845 353.435043,393.564444 347.823733,393.564444 C292.200533,393.564444 254.801955,393.564444 235.627997,393.564444 M209.808627,393.564444 C174.196796,393.564444 120.77905,393.564444 49.5553887,393.564444 C43.9440788,393.564444 39.3952133,389.008845 39.3952133,383.389229 L38.0275862,33.7574377 C38.0275862,28.1378214 42.5764517,23.5822222 48.1877616,23.5822222 L346.456106,23.5822222 C352.067415,23.5822222 356.616281,28.1378214 356.616281,33.7574377 L357.57362,46.9029492" id="Rectangle" stroke="#FFBE00" strokeWidth="8.55" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="2.1375,0.4274999886751175,1.70999995470047" filter="url(#filter-18)" transform="translate(198.005747, 208.573333) rotate(-9.200000) translate(-198.005747, -208.573333) "></path>
                <g id="Rectangle" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="2.1375,0.4274999886751175,1.70999995470047" transform="translate(198.005747, 208.573333) rotate(-9.200000) translate(-198.005747, -208.573333) ">
                    <use stroke="#FFE69D" strokeWidth="8.55" xlinkHref="#path-19"></use>
                    <use stroke="#FFE59A" strokeWidth="5.985" xlinkHref="#path-19"></use>
                    <use stroke="#FFFFFF" strokeWidth="3.42" xlinkHref="#path-19"></use>
                </g>
                <g id="Nib" transform="translate(72.206897, 151.031111)" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M30.8434041,29.0380045 L30.8434041,38.0056236" id="Path-10" strokeOpacity="0.210965806" stroke="#000000" strokeWidth="8.9775"></path>
                    <path d="M48.5100177,32.8812698 L48.5100177,41.8488889" id="Path-10" strokeOpacity="0.210965806" stroke="#000000" strokeWidth="8.9775"></path>
                    <g id="Path-8">
                        <use fill="black" fillOpacity="1" filter="url(#filter-21)" xlinkHref="#path-20"></use>
                        <use stroke={this.props.foreColor[0]} strokeWidth="8.55" xlinkHref="#path-20"></use>
                        <use stroke={this.props.foreColor[1]} strokeWidth="5.985" xlinkHref="#path-20"></use>
                        <use stroke="#FFFFFF" strokeWidth="1.2825" xlinkHref="#path-20"></use>
                    </g>
                </g>
                <g id="Box" transform="translate(94.993103, 33.093333)" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M164.237481,313.815491 L164.237481,322.806113" id="Path-10" strokeOpacity="0.210965806" stroke="#000000" strokeWidth="8.9775"></path>
                    <path d="M143.311995,311.246742 L143.311995,320.237364" id="Path-10" strokeOpacity="0.210965806" stroke="#000000" strokeWidth="8.9775"></path>
                    <g id="Path-9">
                        <use fill="black" fillOpacity="1" filter="url(#filter-23)" xlinkHref="#path-22"></use>
                        <use stroke={this.props.foreColor[0]} strokeWidth="8.55" xlinkHref="#path-22"></use>
                        <use stroke={this.props.foreColor[1]} strokeWidth="5.985" xlinkHref="#path-22"></use>
                        <use stroke="#FFFFFF" strokeWidth="1.2825" xlinkHref="#path-22"></use>
                    </g>
                </g>
                <g id="X" transform="translate(92.144828, 92.062222)" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M172.398171,164.619864 L172.398171,173.587483" id="Path-10" strokeOpacity="0.210965806" stroke="#000000" strokeWidth="8.9775"></path>
                    <path d="M155.28669,179.138866 L155.28669,188.106485" id="Path-10" strokeOpacity="0.210965806" stroke="#000000" strokeWidth="8.9775"></path>
                    <g id="Path-7">
                        <use fill="black" fillOpacity="1" filter="url(#filter-25)" xlinkHref="#path-24"></use>
                        <use stroke={this.props.foreColor[0]} strokeWidth="8.55" xlinkHref="#path-24"></use>
                        <use stroke={this.props.foreColor[1]} strokeWidth="5.985" xlinkHref="#path-24"></use>
                        <use stroke="#FFFFFF" strokeWidth="1.2825" xlinkHref="#path-24"></use>
                    </g>
                </g>
                <path d="" id="Path-2" stroke="#FFFFFF" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round"></path>
            </g>
        </g>
    </svg>
        )
  }
}
