const processData = [
    { tab: "Raw Material", title: "High-Grade Raw Material Selection", description: "Premium PE100 raw materials...", points: ["PE100 grade material","Optimal molecular weight distribution","High purity resin selection"], image: "assets/images/product1.jpg" },
    { tab: "Extrusion", title: "Precision Pipe Extrusion", description: "Advanced extrusion systems...", points: ["Automated extrusion control","Uniform wall thickness","High production efficiency"], image: "assets/images/product2.jpg" },
    { tab: "Cooling", title: "Controlled Cooling Technology", description: "Cooling systems stabilize...", points: ["Vacuum cooling tanks","Temperature regulation","Dimensional stability"], image: "assets/images/product3.jpg" },
    { tab: "Sizing", title: "Accurate Pipe Sizing", description: "Precision sizing equipment...", points: ["Diameter calibration","Roundness control","Uniform consistency"], image: "assets/images/product4.jpg" },
    { tab: "Quality Control", title: "Strict Quality Inspection", description: "Every pipe undergoes testing...", points: ["Pressure testing","Material analysis","Dimensional verification"], image: "assets/images/product1.jpg" },
    { tab: "Marking", title: "Automated Product Marking", description: "Permanent product markings...", points: ["Batch identification","Laser marking","Production traceability"], image: "assets/images/product2.jpg" },
    { tab: "Cutting", title: "Precision Pipe Cutting", description: "Automated cutting systems...", points: ["Accurate measurements","Smooth finishing","Automated cutting systems"], image: "assets/images/product4.jpg" },
    { tab: "Packaging", title: "Safe Packaging & Dispatch", description: "Finished pipes are securely packed...", points: ["Protective packaging","Secure handling","Efficient dispatch"], image: "assets/images/product3.jpg" }
];

let currentProcess = 0;
const processTitle = document.getElementById("process-title");
const processDescription = document.getElementById("process-description");
const processList = document.getElementById("process-list");
const processImage = document.getElementById("process-image");
const processTabs = document.querySelectorAll(".process-tab");
const processBadge = document.querySelector(".process-badge");

function updateProcess(index) {
    const data = processData[index];
    const textContainer = document.querySelector(".process-text");

    // fade out
    textContainer.classList.add("fade");
    processImage.style.opacity = "0";

    setTimeout(() => {
        // update content
        processTitle.innerText = data.title;
        processDescription.innerText = data.description;

        processList.innerHTML = "";
        data.points.forEach(point => processList.innerHTML += `<li>${point}</li>`);

        processImage.src = data.image;

        // update active tab
        processTabs.forEach(tab => tab.classList.remove("active"));
        processTabs[index].classList.add("active");

        // update badge for mobile
        if (processBadge) processBadge.innerText = `Step ${index+1}/8: ${data.tab}`;

        currentProcess = index;

        // fade in
        textContainer.classList.remove("fade");
        processImage.style.opacity = "1";
    }, 200); // slightly faster fade
}

// TAB CLICK
processTabs.forEach((tab, index) => tab.addEventListener("click", () => updateProcess(index)));

// NEXT / PREV
document.getElementById("processNext").addEventListener("click", () => {
    let next = currentProcess + 1;
    if (next >= processData.length) next = 0;
    updateProcess(next);
});

document.getElementById("processPrev").addEventListener("click", () => {
    let prev = currentProcess - 1;
    if (prev < 0) prev = processData.length - 1;
    updateProcess(prev);
});

// ⚡ Initialize first slide on page load
document.addEventListener("DOMContentLoaded", () => {
    updateProcess(0);
});