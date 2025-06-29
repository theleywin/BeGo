const OffSwitch = () => {
    return (
        <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_0_1)">
                <circle cx="21.8233" cy="18" r="17.4994" fill="#0E151A"/>
            </g>
            <circle cx="21.8232" cy="18.0001" r="12.6371" stroke="#26333C"/>
            <defs>
                <filter id="filter0_d_0_1" x="0.323853" y="0.50061" width="42.9988" height="42.9988" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="4"/>
                    <feGaussianBlur stdDeviation="2"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape"/>
                </filter>
            </defs>
        </svg>
    )
}

export default OffSwitch;