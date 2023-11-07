const breakPoints = document.createElement("style");
breakPoints.textContent = `@media (max-width: 480px) {
    .selector {
        property: value;
    }
} @media (min-width: 481px) and (max-width: 767px) {
    .selector {
        property: value;
    }
} @media (min-width: 768px) and (max-width: 991px) {
    .selector {
        property: value;
    }
} @media (min-width: 992px) and (max-width: 1199px) {
    .selector {
        property: value;
    }
} @media (min-width: 1200px) and (max-width: 1919px) {
    .selector {
        property: value;
    }
} @media (min-width: 1920px) {
    .selector {
        property: value;
    }
}`;
document.head.appendChild(breakPoints);