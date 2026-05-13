/* ================= PROCESS SECTION ================= */

const processData = [

    {
        tab: "Raw Material",

        title: "High-Grade Raw Material Selection",

        description:
            "Premium PE100 raw materials are selected to ensure maximum durability, flexibility, and long-term performance of HDPE pipes.",

        points: [
            "PE100 grade material",
            "Optimal molecular weight distribution",
            "High purity resin selection"
        ],

        image: "assets/images/product1.jpg"
    },

    {
        tab: "Extrusion",

        title: "Precision Pipe Extrusion",

        description:
            "Advanced extrusion systems ensure uniform pipe dimensions and superior structural consistency.",

        points: [
            "Automated extrusion control",
            "Uniform wall thickness",
            "High production efficiency"
        ],

        image: "assets/images/product2.jpg"
    },

    {
        tab: "Cooling",

        title: "Controlled Cooling Technology",

        description:
            "Cooling systems stabilize pipe structure while maintaining dimensional accuracy and strength.",

        points: [
            "Vacuum cooling tanks",
            "Temperature regulation",
            "Dimensional stability"
        ],

        image: "assets/images/product3.jpg"
    },

    {
        tab: "Sizing",

        title: "Accurate Pipe Sizing",

        description:
            "Precision sizing equipment ensures exact outer diameter and perfect roundness.",

        points: [
            "Diameter calibration",
            "Roundness control",
            "Uniform consistency"
        ],

        image: "assets/images/product4.jpg"
    },

    {
        tab: "Quality Control",

        title: "Strict Quality Inspection",

        description:
            "Every pipe undergoes comprehensive testing to ensure compliance with international standards.",

        points: [
            "Pressure testing",
            "Material analysis",
            "Dimensional verification"
        ],

        image: "assets/images/product1.jpg"
    },

    {
        tab: "Marking",

        title: "Automated Product Marking",

        description:
            "Permanent product markings ensure complete traceability and product identification.",

        points: [
            "Batch identification",
            "Laser marking",
            "Production traceability"
        ],

        image: "assets/images/product2.jpg"
    },

    {
        tab: "Cutting",

        title: "Precision Pipe Cutting",

        description:
            "Automated cutting systems deliver accurate pipe lengths with clean finishing.",

        points: [
            "Accurate measurements",
            "Smooth finishing",
            "Automated cutting systems"
        ],

        image: "assets/images/product4.jpg"
    },

    {
        tab: "Packaging",

        title: "Safe Packaging & Dispatch",

        description:
            "Finished pipes are securely packed to prevent damage during transportation and delivery.",

        points: [
            "Protective packaging",
            "Secure handling",
            "Efficient dispatch"
        ],

        image: "assets/images/product3.jpg"
    }

];

let currentProcess = 0;

const processTitle = document.getElementById("process-title");
const processDescription = document.getElementById("process-description");
const processList = document.getElementById("process-list");
const processImage = document.getElementById("process-image");

const processTabs = document.querySelectorAll(".process-tab");

function updateProcess(index) {

    const data = processData[index];

    const textContainer = document.querySelector(".process-text");

    textContainer.classList.add("fade");
    processImage.style.opacity = "0";

    setTimeout(() => {

        processTitle.innerText = data.title;

        processDescription.innerText = data.description;

        processList.innerHTML = "";

        data.points.forEach(point => {

            processList.innerHTML += `<li>${point}</li>`;

        });

        processImage.src = data.image;

        processTabs.forEach(tab => {
            tab.classList.remove("active");
        });

        processTabs[index].classList.add("active");

        currentProcess = index;

        textContainer.classList.remove("fade");
        processImage.style.opacity = "1";

    }, 300);
}

/* TAB CLICK */

processTabs.forEach((tab, index) => {

    tab.addEventListener("click", () => {

        updateProcess(index);

    });

});

/* NEXT */

document.getElementById("processNext").addEventListener("click", () => {

    let next = currentProcess + 1;

    if (next >= processData.length) {
        next = 0;
    }

    updateProcess(next);

});

/* PREV */

document.getElementById("processPrev").addEventListener("click", () => {

    let prev = currentProcess - 1;

    if (prev < 0) {
        prev = processData.length - 1;
    }

    updateProcess(prev);

});