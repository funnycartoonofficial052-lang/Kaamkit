const tools = [
    // Documents
    { name:"PDF Compressor", category:"Documents", icon:"📄" },
    { name:"PDF Merge", category:"Documents", icon:"📑" },
    { name:"PDF Split", category:"Documents", icon:"✂️" },
    { name:"JPG to PDF", category:"Documents", icon:"🖼️" },
    { name:"PDF to JPG", category:"Documents", icon:"📄" },

    // Images
    { name:"Image Compressor", category:"Images", icon:"🖼️" },
    { name:"Image Resizer", category:"Images", icon:"📐" },

    // Calculators
    { name:"Age Calculator", category:"Calculators", icon:"🧮" },
    { name:"Percentage Calculator", category:"Calculators", icon:"%" },
    { name:"Discount Calculator", category:"Calculators", icon:"💰" },
    { name:"EMI Calculator", category:"Calculators", icon:"🏦" },

    // Text
    { name:"Word Counter", category:"Text", icon:"Aa" },
    { name:"Text Case Converter", category:"Text", icon:"🔤" },
    { name:"Remove Extra Spaces", category:"Text", icon:"↔️" },
    { name:"Find & Replace Text", category:"Text", icon:"🔎" },
    { name:"Text Sorter", category:"Text", icon:"↕️" },
    { name:"Duplicate Line Remover", category:"Text", icon:"🧹" },
    { name:"Line Break Remover", category:"Text", icon:"↩️" },
    { name:"Character Frequency Counter", category:"Text", icon:"🔢" },
    { name:"Reading Time Calculator", category:"Text", icon:"⏱️" },

    // Generators
    { name:"QR Generator", category:"Generators", icon:"▦" },
    { name:"Password Generator", category:"Generators", icon:"🔐" },
    { name:"Username Generator", category:"Generators", icon:"👤" },
    { name:"Random Number Generator", category:"Generators", icon:"🎲" },
    { name:"Random Name Picker", category:"Generators", icon:"🎯" },

    // Date & Time
    { name:"Date Difference Calculator", category:"Calculators", icon:"📅" },
    { name:"Days Between Dates", category:"Calculators", icon:"🗓️" },
    { name:"Add/Subtract Days from Date", category:"Calculators", icon:"➕" },
    { name:"Time Duration Calculator", category:"Calculators", icon:"⏰" },
    { name:"Time Zone Converter", category:"Calculators", icon:"🌍" },
    { name:"Stopwatch", category:"Calculators", icon:"⏱️" },
    { name:"Countdown Timer", category:"Calculators", icon:"⏳" },
    { name:"Pomodoro Timer", category:"Calculators", icon:"🍅" },

    // Converters
    { name:"Unit Converter", category:"Calculators", icon:"🔄" },
    { name:"Length Converter", category:"Calculators", icon:"📏" },
    { name:"Weight Converter", category:"Calculators", icon:"⚖️" },
    { name:"Temperature Converter", category:"Calculators", icon:"🌡️" },
    { name:"Area Converter", category:"Calculators", icon:"📐" },
    { name:"Volume Converter", category:"Calculators", icon:"🧊" },
    { name:"Speed Converter", category:"Calculators", icon:"🚀" },
    { name:"Data Storage Converter", category:"Calculators", icon:"💾" },
    { name:"Binary Converter", category:"Calculators", icon:"💻" },
    { name:"Decimal to Binary Converter", category:"Calculators", icon:"🔢" },

    // Number & Education
    { name:"Fraction Calculator", category:"Calculators", icon:"½" },
    { name:"Ratio Calculator", category:"Calculators", icon:"⚖️" },
    { name:"Average Calculator", category:"Calculators", icon:"📊" },
    { name:"GPA Calculator", category:"Calculators", icon:"🎓" },
    { name:"Grade Calculator", category:"Calculators", icon:"📝" },

    // Finance
    { name:"Profit & Loss Calculator", category:"Calculators", icon:"📈" },
    { name:"Simple Interest Calculator", category:"Calculators", icon:"💵" },
    { name:"Compound Interest Calculator", category:"Calculators", icon:"💰" },
    { name:"Tip Calculator", category:"Calculators", icon:"💳" },
    { name:"Split Bill Calculator", category:"Calculators", icon:"🧾" },
    { name:"Currency Calculator", category:"Calculators", icon:"💱" },

    // Health
    { name:"Age from Year Calculator", category:"Calculators", icon:"🎂" },
    { name:"BMI Calculator", category:"Calculators", icon:"⚖️" },
    { name:"BMR Calculator", category:"Calculators", icon:"🔥" },
    { name:"Calorie Calculator", category:"Calculators", icon:"🍎" },
    { name:"Water Intake Calculator", category:"Calculators", icon:"💧" },
    { name:"Pregnancy Due Date Calculator", category:"Calculators", icon:"📅" },

    // Other Calculators
    { name:"Fuel Cost Calculator", category:"Calculators", icon:"⛽" },
    { name:"Electricity Bill Calculator", category:"Calculators", icon:"⚡" },
    { name:"Percentage Change Calculator", category:"Calculators", icon:"📊" },

    // Pakistan
    { name:"Zakat Calculator", category:"Pakistan", icon:"🤲" },
    { name:"Pakistan Salary Calculator", category:"Pakistan", icon:"💼" },
    { name:"Pakistan Mobile Number Formatter", category:"Pakistan", icon:"📱" },
    { name:"CNIC Format Checker", category:"Pakistan", icon:"🪪" },
    { name:"Pakistan IBAN Formatter", category:"Pakistan", icon:"🏦" },
    { name:"Pakistan Postal Code Checker", category:"Pakistan", icon:"📮" },

    // Study & Education
    { name:"Math Solver", category:"Education", icon:"🧮" },
    { name:"Fraction Simplifier", category:"Education", icon:"➗" },
    { name:"Geometry Calculator", category:"Education", icon:"📐" },
    { name:"Pythagorean Calculator", category:"Education", icon:"📏" },
    { name:"Prime Number Checker", category:"Education", icon:"🔢" },
    { name:"Factors & Multiples Finder", category:"Education", icon:"✖️" },
    { name:"Statistics Calculator", category:"Education", icon:"📊" },
    { name:"Standard Deviation Calculator", category:"Education", icon:"📈" },
    { name:"LCM & GCD Calculator", category:"Education", icon:"🔢" },
    { name:"Number System Converter", category:"Education", icon:"💻" },
    { name:"Study Timer", category:"Education", icon:"⏱️" },
    { name:"Quiz Score Calculator", category:"Education", icon:"📝" },
    { name:"Marks Percentage Calculator", category:"Education", icon:"🎯" },
    { name:"Student Word & Character Counter", category:"Education", icon:"🔤" },
    { name:"Study Schedule Planner", category:"Education", icon:"📅" }
];
function openTool(toolName) {
    const toolSections = {
        "PDF Compressor": "pdf-tool",
        "PDF Merge": "pdf-merge-tool",
        "PDF Split": "pdf-split-tool",
        "JPG to PDF": "jpg-pdf-tool",
        "PDF to JPG": "pdf-jpg-tool",

        "Image Compressor": "image-tool",
        "Image Resizer": "resize-tool",

        "Age Calculator": "age-tool",
        "Percentage Calculator": "percentage-tool",
        "Discount Calculator": "discount-tool",
        "EMI Calculator": "emi-tool",

        "Word Counter": "word-tool",
        "Text Case Converter": "text-case-tool",
        "Remove Extra Spaces": "remove-spaces-tool",
        "Find & Replace Text": "find-replace-tool",
        "Text Sorter": "text-sorter-tool",
        "Duplicate Line Remover": "duplicate-lines-tool",
        "Line Break Remover": "line-break-tool",
        "Character Frequency Counter": "character-frequency-tool",
        "Reading Time Calculator": "reading-time-tool",

        "QR Generator": "qr-tool",
        "Password Generator": "password-generator-tool",
        "Username Generator": "username-generator-tool",
        "Random Number Generator": "random-number-tool",
        "Random Name Picker": "random-name-tool",

        "Date Difference Calculator": "date-difference-tool",
        "Days Between Dates": "days-between-tool",
        "Add/Subtract Days from Date": "add-days-tool",
        "Time Duration Calculator": "time-duration-tool",
        "Time Zone Converter": "timezone-tool",
        "Stopwatch": "stopwatch-tool",
        "Countdown Timer": "countdown-tool",
        "Pomodoro Timer": "pomodoro-tool",

        "Unit Converter": "unit-converter-tool",
        "Length Converter": "length-converter-tool",
        "Weight Converter": "weight-converter-tool",
        "Temperature Converter": "temperature-tool",
        "Area Converter": "area-converter-tool",
        "Volume Converter": "volume-converter-tool",
        "Speed Converter": "speed-converter-tool",
        "Data Storage Converter": "storage-converter-tool",
        "Binary Converter": "binary-converter-tool",
        "Decimal to Binary Converter": "decimal-binary-tool",

        "Fraction Calculator": "fraction-tool",
        "Ratio Calculator": "ratio-tool",
        "Average Calculator": "average-tool",
        "GPA Calculator": "gpa-tool",
        "Grade Calculator": "grade-tool",

        "Profit & Loss Calculator": "profit-loss-tool",
        "Simple Interest Calculator": "simple-interest-tool",
        "Compound Interest Calculator": "compound-interest-tool",
        "Tip Calculator": "tip-tool",
        "Split Bill Calculator": "split-bill-tool",
        "Currency Calculator": "currency-tool",

        "Age from Year Calculator": "age-year-tool",
        "BMI Calculator": "bmi-tool",
        "BMR Calculator": "bmr-tool",
        "Calorie Calculator": "calorie-tool",
        "Water Intake Calculator": "water-intake-tool",
        "Pregnancy Due Date Calculator": "pregnancy-due-tool",

        "Fuel Cost Calculator": "fuel-cost-tool",
        "Electricity Bill Calculator": "electricity-bill-tool",
        "Percentage Change Calculator": "percentage-change-tool",

        "Zakat Calculator": "zakat-tool",
        "Pakistan Salary Calculator": "salary-tool",
        "Pakistan Mobile Number Formatter": "mobile-number-tool",
        "CNIC Format Checker": "cnic-tool",
        "Pakistan IBAN Formatter": "iban-tool",
        "Pakistan Postal Code Checker": "postal-code-tool",
        "Math Solver": "math-solver-tool",
"Fraction Simplifier": "fraction-simplifier-tool",
"Geometry Calculator": "geometry-tool",
"Pythagorean Calculator": "pythagorean-tool",
"Prime Number Checker": "prime-number-tool",
"Factors & Multiples Finder": "factors-multiples-tool",
"Statistics Calculator": "statistics-tool",
"Standard Deviation Calculator": "standard-deviation-tool",
"LCM & GCD Calculator": "lcm-gcd-tool",
"Number System Converter": "number-system-tool",
"Study Timer": "study-timer-tool",
"Quiz Score Calculator": "quiz-score-tool",
"Marks Percentage Calculator": "marks-percentage-tool",
"Student Word & Character Counter": "student-counter-tool",
"Study Schedule Planner": "study-schedule-tool"
    };
    

    const sectionId = toolSections[toolName];

    if (sectionId) {
        const section = document.getElementById(sectionId);

        if (section) {
            section.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    } else {
        alert(toolName + "\n\nیہ ٹول ابھی تیار کیا جا رہا ہے۔");
    }
}
// ============================================
// PDF LIBRARIES
// ============================================

function loadScript(url) {

    return new Promise((resolve, reject) => {

        const script = document.createElement("script");

        script.src = url;

        script.onload = resolve;

        script.onerror = reject;

        document.head.appendChild(script);

    });

}


async function loadPDFLibraries() {

    try {

        await loadScript(
            "https://cdn.jsdelivr.net/npm/pdfjs-dist@3.11.174/build/pdf.min.js"
        );

        await loadScript(
            "https://cdn.jsdelivr.net/npm/jspdf@2.5.1/dist/jspdf.umd.min.js"
        );

        if (window.pdfjsLib) {

            pdfjsLib.GlobalWorkerOptions.workerSrc =
                "https://cdn.jsdelivr.net/npm/pdfjs-dist@3.11.174/build/pdf.worker.min.js";

        }

        console.log("PDF libraries loaded successfully.");

        return true;

    } catch (error) {

        console.error(
            "PDF libraries failed to load:",
            error
        );

        return false;

    }

}


// ============================================
// SEARCH
// ============================================

const searchInput =
    document.getElementById("searchInput");

const searchBtn =
    document.getElementById("searchBtn");

const searchResults =
    document.getElementById("searchResults");


function searchTools(query) {

    query =
        query.trim().toLowerCase();

    searchResults.innerHTML = "";

    if (!query) {

        return;

    }


    const results =
        tools.filter(tool =>

            tool.name.toLowerCase().includes(query) ||

            tool.category.toLowerCase().includes(query)

        );


    if (results.length === 0) {

        searchResults.innerHTML = `
            <div class="result-item">
                ❌ کوئی Tool نہیں ملا۔
            </div>
        `;

        return;

    }


    results.forEach(tool => {

        const item =
            document.createElement("div");

        item.className =
            "result-item";


        item.innerHTML = `
            ${tool.icon}
            &nbsp;
            <strong>${tool.name}</strong>
            <small> — ${tool.category}</small>
        `;


       item.addEventListener(
    "click",
    () => {
        openTool(tool.name);
    }
);


        searchResults.appendChild(item);

    });

}


if (searchInput) {

    searchInput.addEventListener(
        "input",
        () => {

            searchTools(
                searchInput.value
            );

        }
    );

}


if (searchBtn) {

    searchBtn.addEventListener(
        "click",
        () => {

            searchTools(
                searchInput.value
            );

        }
    );

}


// ============================================
// QUICK SEARCH
// ============================================

document
    .querySelectorAll("[data-search]")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const query =
                    button.dataset.search;

                if (searchInput) {

                    searchInput.value =
                        query;

                }

                searchTools(query);

                document
                    .querySelector(".hero")
                    ?.scrollIntoView({
                        behavior: "smooth"
                    });

            }
        );

    });


// ============================================
// PDF COMPRESSOR
// ============================================

const pdfInput =
    document.getElementById("pdfInput");

const fileInfo =
    document.getElementById("fileInfo");

const fileName =
    document.getElementById("fileName");

const fileSize =
    document.getElementById("fileSize");

const removeFile =
    document.getElementById("removeFile");

const compressBtn =
    document.getElementById("compressBtn");

const pdfMessage =
    document.getElementById("pdfMessage");


let selectedPDF =
    null;

let librariesReady =
    false;


if (pdfInput) {

    loadPDFLibraries()
        .then(result => {

            librariesReady =
                result;

        });


    pdfInput.addEventListener(
        "change",
        () => {

            const file =
                pdfInput.files[0];


            if (!file) {

                return;

            }


            const isPDF =
                file.type === "application/pdf" ||
                file.name
                    .toLowerCase()
                    .endsWith(".pdf");


            if (!isPDF) {

                alert(
                    "براہ کرم صرف PDF فائل منتخب کریں۔"
                );

                pdfInput.value = "";

                return;

            }


            selectedPDF =
                file;


            if (fileName) {

                fileName.textContent =
                    file.name;

            }


            if (fileSize) {

                fileSize.textContent =
                    formatFileSize(
                        file.size
                    );

            }


            if (fileInfo) {

                fileInfo.style.display =
                    "flex";

            }


            if (compressBtn) {

                compressBtn.disabled =
                    false;

            }

        }
    );

}


if (removeFile) {

    removeFile.addEventListener(
        "click",
        () => {

            selectedPDF =
                null;

            if (pdfInput) {

                pdfInput.value =
                    "";

            }

            if (fileInfo) {

                fileInfo.style.display =
                    "none";

            }

            if (compressBtn) {

                compressBtn.disabled =
                    true;

            }

        }
    );

}


if (compressBtn) {

    compressBtn.addEventListener(
        "click",
        async () => {

            if (!selectedPDF) {

                alert(
                    "پہلے PDF فائل منتخب کریں۔"
                );

                return;

            }


            if (!librariesReady) {

                if (pdfMessage) {

                    pdfMessage.style.display =
                        "block";

                    pdfMessage.textContent =
                        "⏳ PDF system ابھی load ہو رہا ہے۔ چند سیکنڈ بعد دوبارہ کوشش کریں۔";

                }

                return;

            }


            try {

                compressBtn.disabled =
                    true;

                compressBtn.textContent =
                    "⏳ PDF تیار ہو رہی ہے...";


                if (pdfMessage) {

                    pdfMessage.style.display =
                        "block";

                    pdfMessage.textContent =
                        "PDF کو process کیا جا رہا ہے...";

                }


                const compressedBlob =
                    await compressPDF(
                        selectedPDF
                    );


                const oldSize =
                    selectedPDF.size;

                const newSize =
                    compressedBlob.size;


                const downloadURL =
                    URL.createObjectURL(
                        compressedBlob
                    );


                showDownloadButton(
                    downloadURL,
                    selectedPDF.name,
                    oldSize,
                    newSize
                );


                if (pdfMessage) {

                    pdfMessage.textContent =
                        "✅ PDF تیار ہو گئی ہے۔";

                }


            } catch (error) {

                console.error(error);


                if (pdfMessage) {

                    pdfMessage.style.display =
                        "block";

                    pdfMessage.textContent =
                        "❌ PDF process نہیں ہو سکی۔";

                }

            }


            compressBtn.disabled =
                false;

            compressBtn.textContent =
                "PDF Compress کریں";

        }
    );

}


// ============================================
// PDF PROCESSING
// ============================================

async function compressPDF(file) {

    const arrayBuffer =
        await file.arrayBuffer();


    const pdf =
        await pdfjsLib
            .getDocument({
                data: arrayBuffer
            })
            .promise;


    const { jsPDF } =
        window.jspdf;


    let outputPDF =
        null;


    for (
        let pageNumber = 1;
        pageNumber <= pdf.numPages;
        pageNumber++
    ) {

        const page =
            await pdf.getPage(
                pageNumber
            );


        const viewport =
            page.getViewport({
                scale: 1.25
            });


        const canvas =
            document.createElement(
                "canvas"
            );


        const context =
            canvas.getContext(
                "2d"
            );


        canvas.width =
            Math.ceil(
                viewport.width
            );

        canvas.height =
            Math.ceil(
                viewport.height
            );


        await page.render({

            canvasContext:
                context,

            viewport:
                viewport

        }).promise;


        const imageData =
            canvas.toDataURL(
                "image/jpeg",
                0.65
            );


        const pageWidth =
            210;


        const pageHeight =
            (
                viewport.height /
                viewport.width
            ) * pageWidth;


        if (!outputPDF) {

            outputPDF =
                new jsPDF({

                    orientation:
                        pageWidth >
                        pageHeight
                            ? "landscape"
                            : "portrait",

                    unit:
                        "mm",

                    format: [
                        pageWidth,
                        pageHeight
                    ],

                    compress:
                        true

                });

        } else {

            outputPDF.addPage([
                pageWidth,
                pageHeight
            ]);

        }


        outputPDF.addImage(
            imageData,
            "JPEG",
            0,
            0,
            pageWidth,
            pageHeight,
            undefined,
            "FAST"
        );


        canvas.width =
            1;

        canvas.height =
            1;

    }


    return outputPDF.output(
        "blob"
    );

}


// ============================================
// PDF DOWNLOAD
// ============================================

function showDownloadButton(
    url,
    originalName,
    oldSize,
    newSize
) {

    const oldArea =
        document.getElementById(
            "downloadArea"
        );


    if (oldArea) {

        oldArea.remove();

    }


    const area =
        document.createElement(
            "div"
        );


    area.id =
        "downloadArea";


    area.style.marginTop =
        "15px";


    area.style.textAlign =
        "center";


    area.innerHTML = `

        <div
            style="
                padding:15px;
                border:1px solid #e7e7ef;
                border-radius:12px;
                background:#fafaff;
            "
        >

            <strong>
                PDF تیار ہے
            </strong>

            <p
                style="
                    margin:7px 0;
                    color:#6b7280;
                    font-size:14px;
                "
            >

                پہلے:
                ${formatFileSize(oldSize)}

                <br>

                بعد میں:
                ${formatFileSize(newSize)}

            </p>


            <a
                href="${url}"
                download="${getCompressedName(originalName)}"
                style="
                    display:inline-block;
                    padding:12px 22px;
                    background:#635bff;
                    color:white;
                    border-radius:10px;
                    text-decoration:none;
                    font-weight:bold;
                "
            >
                ⬇️ Compressed PDF Download کریں
            </a>

        </div>

    `;


    compressBtn
        ?.parentNode
        ?.appendChild(area);

}


// ============================================
// IMAGE COMPRESSOR
// ============================================

const imageInput =
    document.getElementById(
        "imageInput"
    );

const imageInfo =
    document.getElementById(
        "imageInfo"
    );

const imageName =
    document.getElementById(
        "imageName"
    );

const imageSize =
    document.getElementById(
        "imageSize"
    );

const removeImage =
    document.getElementById(
        "removeImage"
    );

const qualityBox =
    document.getElementById(
        "qualityBox"
    );

const imageQuality =
    document.getElementById(
        "imageQuality"
    );

const qualityValue =
    document.getElementById(
        "qualityValue"
    );

const compressImageBtn =
    document.getElementById(
        "compressImageBtn"
    );

const imageMessage =
    document.getElementById(
        "imageMessage"
    );


let selectedImage =
    null;


// ============================================
// IMAGE SELECT
// ============================================

if (imageInput) {

    imageInput.addEventListener(
        "change",
        () => {

            const file =
                imageInput.files[0];


            if (!file) {

                return;

            }


            selectedImage =
                file;


            if (imageName) {

                imageName.textContent =
                    file.name;

            }


            if (imageSize) {

                imageSize.textContent =
                    formatFileSize(
                        file.size
                    );

            }


            if (imageInfo) {

                imageInfo.style.display =
                    "flex";

            }


            if (qualityBox) {

                qualityBox.style.display =
                    "block";

            }


            if (compressImageBtn) {

                compressImageBtn.disabled =
                    false;

            }

        }
    );

}


// ============================================
// QUALITY
// ============================================

if (imageQuality) {

    imageQuality.addEventListener(
        "input",
        () => {

            if (qualityValue) {

                qualityValue.textContent =
                    imageQuality.value +
                    "%";

            }

        }
    );

}


// ============================================
// REMOVE IMAGE
// ============================================

if (removeImage) {

    removeImage.addEventListener(
        "click",
        () => {

            selectedImage =
                null;


            if (imageInput) {

                imageInput.value =
                    "";

            }


            if (imageInfo) {

                imageInfo.style.display =
                    "none";

            }


            if (qualityBox) {

                qualityBox.style.display =
                    "none";

            }


            if (compressImageBtn) {

                compressImageBtn.disabled =
                    true;

            }


            document
                .getElementById(
                    "imageDownloadArea"
                )
                ?.remove();

        }
    );

}


// ============================================
// COMPRESS IMAGE
// ============================================

if (compressImageBtn) {

    compressImageBtn.addEventListener(
        "click",
        () => {

            if (!selectedImage) {

                alert(
                    "پہلے تصویر منتخب کریں۔"
                );

                return;

            }


            compressImageBtn.disabled =
                true;


            compressImageBtn.textContent =
                "⏳ Image Compress ہو رہی ہے...";


            const reader =
                new FileReader();


            reader.onload =
                event => {

                    const img =
                        new Image();


                    img.onload =
                        () => {

                            const canvas =
                                document.createElement(
                                    "canvas"
                                );


                            canvas.width =
                                img.width;

                            canvas.height =
                                img.height;


                            const ctx =
                                canvas.getContext(
                                    "2d"
                                );


                            ctx.drawImage(
                                img,
                                0,
                                0
                            );


                            const quality =
                                Number(
                                    imageQuality?.value ||
                                    70
                                ) / 100;


                            canvas.toBlob(
                                blob => {

                                    if (!blob) {

                                        showImageError();

                                        return;

                                    }


                                    const url =
                                        URL.createObjectURL(
                                            blob
                                        );


                                    showImageDownload(
                                        url,
                                        selectedImage.name,
                                        selectedImage.size,
                                        blob.size
                                    );


                                    compressImageBtn.disabled =
                                        false;


                                    compressImageBtn.textContent =
                                        "🗜️ Image Compress کریں";

                                },
                                "image/jpeg",
                                quality
                            );

                        };


                    img.onerror =
                        showImageError;


                    img.src =
                        event.target.result;

                };


            reader.onerror =
                showImageError;


            reader.readAsDataURL(
                selectedImage
            );

        }
    );

}


// ============================================
// IMAGE DOWNLOAD
// ============================================

function showImageDownload(
    url,
    originalName,
    oldSize,
    newSize
) {

    document
        .getElementById(
            "imageDownloadArea"
        )
        ?.remove();


    const area =
        document.createElement(
            "div"
        );


    area.id =
        "imageDownloadArea";


    area.style.marginTop =
        "15px";


    area.style.textAlign =
        "center";


    area.innerHTML = `

        <div
            style="
                padding:15px;
                border-radius:12px;
                background:#fafaff;
                border:1px solid #e5e7eb;
            "
        >

            <strong>
                ✅ Image تیار ہے
            </strong>


            <p
                style="
                    color:#666;
                    font-size:14px;
                    line-height:1.8;
                "
            >

                پہلے:
                ${formatFileSize(oldSize)}

                <br>

                بعد میں:
                ${formatFileSize(newSize)}

            </p>


            <a
                href="${url}"
                download="compressed-image.jpg"
                style="
                    display:inline-block;
                    padding:12px 20px;
                    background:#635bff;
                    color:white;
                    border-radius:10px;
                    text-decoration:none;
                    font-weight:bold;
                "
            >
                ⬇️ Compressed Image Download کریں
            </a>

        </div>

    `;


    compressImageBtn
        ?.parentNode
        ?.appendChild(area);

}


// ============================================
// ERROR
// ============================================

function showImageError() {

    alert(
        "❌ Image compress نہیں ہو سکی۔"
    );


    if (compressImageBtn) {

        compressImageBtn.disabled =
            false;

        compressImageBtn.textContent =
            "🗜️ Image Compress کریں";

    }

}


// ============================================
// TOOL CARDS
// ============================================

document
    .querySelectorAll(".tool-card")
    .forEach(card => {

        card.addEventListener(
            "click",
            () => {

                const toolName =
                    card.dataset.tool;

                openTool(toolName);

            }
        );

    });

// ============================================
// CATEGORIES
// ============================================

document
    .querySelectorAll(".category-card")
    .forEach(card => {

        card.addEventListener(
            "click",
            () => {

                const category =
                    card.dataset.category;


                if (searchInput) {

                    searchInput.value =
                        category;

                }


                searchTools(
                    category
                );


                document
                    .querySelector(".hero")
                    ?.scrollIntoView({
                        behavior: "smooth"
                    });

            }
        );

    });


// ============================================
// LANGUAGE
// ============================================

const languageBtn =
    document.getElementById(
        "languageBtn"
    );


if (languageBtn) {

    languageBtn.addEventListener(
        "click",
        () => {

            alert(
                "اردو interface فعال ہے۔"
            );

        }
    );

}


// ============================================
// FILE SIZE
// ============================================

function formatFileSize(bytes) {

    if (bytes === 0) {

        return "0 Bytes";

    }


    const units = [
        "Bytes",
        "KB",
        "MB",
        "GB"
    ];


    const index =
        Math.floor(
            Math.log(bytes) /
            Math.log(1024)
        );


    return (
        parseFloat(
            (
                bytes /
                Math.pow(
                    1024,
                    index
                )
            ).toFixed(2)
        )
        +
        " "
        +
        units[index]
    );

}


// ============================================
// COMPRESSED PDF NAME
// ============================================

function getCompressedName(
    originalName
) {

    const dot =
        originalName.lastIndexOf(".");


    if (dot === -1) {

        return (
            originalName +
            "-compressed.pdf"
        );

    }


    return (
        originalName.substring(
            0,
            dot
        )
        +
        "-compressed.pdf"
    );

}


console.log(
    "KaamKit loaded successfully 🚀"
);
// ============================================
// IMAGE RESIZER
// ============================================

const resizeInput =
    document.getElementById("resizeInput");

const resizeInfo =
    document.getElementById("resizeInfo");

const resizeName =
    document.getElementById("resizeName");

const resizeOriginalSize =
    document.getElementById("resizeOriginalSize");

const removeResizeImage =
    document.getElementById("removeResizeImage");

const resizeControls =
    document.getElementById("resizeControls");

const resizeWidth =
    document.getElementById("resizeWidth");

const resizeHeight =
    document.getElementById("resizeHeight");

const keepRatio =
    document.getElementById("keepRatio");

const resizeImageBtn =
    document.getElementById("resizeImageBtn");

const resizeMessage =
    document.getElementById("resizeMessage");


let resizeImageFile = null;

let originalImageWidth = 0;

let originalImageHeight = 0;


// ============================================
// SELECT IMAGE
// ============================================

if (resizeInput) {

    resizeInput.addEventListener(
        "change",
        () => {

            const file =
                resizeInput.files[0];


            if (!file) {

                return;

            }


            resizeImageFile =
                file;


            const reader =
                new FileReader();


            reader.onload =
                event => {

                    const img =
                        new Image();


                    img.onload =
                        () => {

                            originalImageWidth =
                                img.width;

                            originalImageHeight =
                                img.height;


                            resizeName.textContent =
                                file.name;


                            resizeOriginalSize.textContent =
                                img.width +
                                " × " +
                                img.height +
                                " px";


                            resizeWidth.value =
                                img.width;


                            resizeHeight.value =
                                img.height;


                            resizeInfo.style.display =
                                "flex";


                            resizeControls.style.display =
                                "block";


                            resizeImageBtn.disabled =
                                false;

                        };


                    img.src =
                        event.target.result;

                };


            reader.readAsDataURL(file);

        }
    );

}


// ============================================
// WIDTH CHANGE
// ============================================

if (resizeWidth) {

    resizeWidth.addEventListener(
        "input",
        () => {

            if (
                keepRatio &&
                keepRatio.checked &&
                originalImageWidth > 0
            ) {

                const width =
                    Number(
                        resizeWidth.value
                    );


                const ratio =
                    originalImageHeight /
                    originalImageWidth;


                if (width > 0) {

                    resizeHeight.value =
                        Math.round(
                            width * ratio
                        );

                }

            }

        }
    );

}


// ============================================
// HEIGHT CHANGE
// ============================================

if (resizeHeight) {

    resizeHeight.addEventListener(
        "input",
        () => {

            if (
                keepRatio &&
                keepRatio.checked &&
                originalImageHeight > 0
            ) {

                const height =
                    Number(
                        resizeHeight.value
                    );


                const ratio =
                    originalImageWidth /
                    originalImageHeight;


                if (height > 0) {

                    resizeWidth.value =
                        Math.round(
                            height * ratio
                        );

                }

            }

        }
    );

}


// ============================================
// REMOVE IMAGE
// ============================================

if (removeResizeImage) {

    removeResizeImage.addEventListener(
        "click",
        () => {

            resizeImageFile =
                null;


            resizeInput.value =
                "";


            resizeInfo.style.display =
                "none";


            resizeControls.style.display =
                "none";


            resizeImageBtn.disabled =
                true;


            document
                .getElementById(
                    "resizeDownloadArea"
                )
                ?.remove();

        }
    );

}


// ============================================
// RESIZE IMAGE
// ============================================

if (resizeImageBtn) {

    resizeImageBtn.addEventListener(
        "click",
        () => {

            if (!resizeImageFile) {

                alert(
                    "پہلے تصویر منتخب کریں۔"
                );

                return;

            }


            const width =
                Number(
                    resizeWidth.value
                );


            const height =
                Number(
                    resizeHeight.value
                );


            if (
                width <= 0 ||
                height <= 0
            ) {

                alert(
                    "Width اور Height درست درج کریں۔"
                );

                return;

            }


            resizeImageBtn.disabled =
                true;


            resizeImageBtn.textContent =
                "⏳ Image Resize ہو رہی ہے...";


            const reader =
                new FileReader();


            reader.onload =
                event => {

                    const img =
                        new Image();


                    img.onload =
                        () => {

                            const canvas =
                                document.createElement(
                                    "canvas"
                                );


                            canvas.width =
                                width;


                            canvas.height =
                                height;


                            const ctx =
                                canvas.getContext(
                                    "2d"
                                );


                            ctx.drawImage(
                                img,
                                0,
                                0,
                                width,
                                height
                            );


                            canvas.toBlob(
                                blob => {

                                    if (!blob) {

                                        alert(
                                            "❌ Image resize نہیں ہو سکی۔"
                                        );

                                        resetResizeButton();

                                        return;

                                    }


                                    const url =
                                        URL.createObjectURL(
                                            blob
                                        );


                                    showResizeDownload(
                                        url,
                                        width,
                                        height,
                                        blob.size
                                    );


                                    resetResizeButton();

                                },
                                "image/jpeg",
                                0.90
                            );

                        };


                    img.onerror =
                        () => {

                            alert(
                                "❌ Image load نہیں ہو سکی۔"
                            );

                            resetResizeButton();

                        };


                    img.src =
                        event.target.result;

                };


            reader.readAsDataURL(
                resizeImageFile
            );

        }
    );

}


// ============================================
// DOWNLOAD
// ============================================

function showResizeDownload(
    url,
    width,
    height,
    size
) {

    document
        .getElementById(
            "resizeDownloadArea"
        )
        ?.remove();


    const area =
        document.createElement(
            "div"
        );


    area.id =
        "resizeDownloadArea";


    area.style.marginTop =
        "15px";


    area.style.textAlign =
        "center";


    area.innerHTML = `

        <div
            style="
                padding:15px;
                border:1px solid #e5e7eb;
                border-radius:12px;
                background:#fafaff;
            "
        >

            <strong>
                ✅ Image Resize ہو گئی
            </strong>


            <p
                style="
                    color:#666;
                    font-size:14px;
                    line-height:1.8;
                "
            >

                نئی Size:
                ${width} × ${height} px

                <br>

                File Size:
                ${formatFileSize(size)}

            </p>


            <a
                href="${url}"
                download="resized-image.jpg"
                style="
                    display:inline-block;
                    padding:12px 20px;
                    background:#635bff;
                    color:white;
                    border-radius:10px;
                    text-decoration:none;
                    font-weight:bold;
                "
            >
                ⬇️ Resized Image Download کریں
            </a>

        </div>

    `;


    resizeImageBtn
        ?.parentNode
        ?.appendChild(area);

}


// ============================================
// RESET BUTTON
// ============================================

function resetResizeButton() {

    resizeImageBtn.disabled =
        false;


    resizeImageBtn.textContent =
        "📐 Image Resize کریں";

}
// ===============================
// AGE CALCULATOR
// ===============================

const birthDateInput = document.getElementById("birthDate");
const ageAtDateInput = document.getElementById("ageAtDate");
const calculateAgeBtn = document.getElementById("calculateAgeBtn");
const ageResult = document.getElementById("ageResult");

if (birthDateInput && ageAtDateInput && calculateAgeBtn && ageResult) {

    // آج کی تاریخ بطور default
    const today = new Date();

    const todayString =
        today.getFullYear() + "-" +
        String(today.getMonth() + 1).padStart(2, "0") + "-" +
        String(today.getDate()).padStart(2, "0");

    ageAtDateInput.value = todayString;
    birthDateInput.max = todayString;
    ageAtDateInput.min = "";

    calculateAgeBtn.addEventListener("click", function () {

        if (!birthDateInput.value) {
            ageResult.style.display = "block";
            ageResult.innerHTML = "⚠️ پہلے اپنی تاریخِ پیدائش منتخب کریں۔";
            return;
        }

        if (!ageAtDateInput.value) {
            ageResult.style.display = "block";
            ageResult.innerHTML = "⚠️ تاریخ منتخب کریں۔";
            return;
        }

        const birth = new Date(birthDateInput.value + "T00:00:00");
        const end = new Date(ageAtDateInput.value + "T00:00:00");

        if (birth > end) {
            ageResult.style.display = "block";
            ageResult.innerHTML =
                "⚠️ تاریخِ پیدائش، اختتامی تاریخ سے بعد کی نہیں ہو سکتی۔";
            return;
        }

        let years = end.getFullYear() - birth.getFullYear();
        let months = end.getMonth() - birth.getMonth();
        let days = end.getDate() - birth.getDate();

        if (days < 0) {
            months--;

            const previousMonth = new Date(
                end.getFullYear(),
                end.getMonth(),
                0
            );

            days += previousMonth.getDate();
        }

        if (months < 0) {
            years--;
            months += 12;
        }

        // مکمل دن
        const differenceMs = end - birth;
        const totalDays = Math.floor(
            differenceMs / (1000 * 60 * 60 * 24)
        );

        ageResult.style.display = "block";

        ageResult.innerHTML = `
            🎉 آپ کی عمر ہے:<br>
            <strong>${years} سال، ${months} ماہ، ${days} دن</strong>
            <br><br>
            تقریباً ${totalDays.toLocaleString()} دن
        `;
    });
}
// ===============================
// PERCENTAGE CALCULATOR
// ===============================

const percentageValue = document.getElementById("percentageValue");
const percentageTotal = document.getElementById("percentageTotal");
const calculatePercentageBtn = document.getElementById("calculatePercentageBtn");
const percentageResult = document.getElementById("percentageResult");

if (
    percentageValue &&
    percentageTotal &&
    calculatePercentageBtn &&
    percentageResult
) {

    calculatePercentageBtn.addEventListener("click", function () {

        const value = parseFloat(percentageValue.value);
        const total = parseFloat(percentageTotal.value);

        if (isNaN(value) || isNaN(total)) {
            percentageResult.style.display = "block";
            percentageResult.innerHTML =
                "⚠️ براہِ کرم دونوں نمبر درج کریں۔";
            return;
        }

        if (total <= 0) {
            percentageResult.style.display = "block";
            percentageResult.innerHTML =
                "⚠️ کل نمبر صفر سے زیادہ ہونے چاہئیں۔";
            return;
        }

        const percentage = (value / total) * 100;

        percentageResult.style.display = "block";

        percentageResult.innerHTML = `
            📊 آپ کا نتیجہ:<br>
            <strong>${percentage.toFixed(2)}%</strong>
            <br><br>
            ${value} میں سے ${total}
        `;
    });
}
// ============================================
// WORD COUNTER
// ============================================

const wordText =
    document.getElementById("wordText");

const wordCount =
    document.getElementById("wordCount");

const characterCount =
    document.getElementById("characterCount");

const sentenceCount =
    document.getElementById("sentenceCount");

const readingTime =
    document.getElementById("readingTime");

const clearWordText =
    document.getElementById("clearWordText");


// ============================================
// UPDATE WORD COUNTER
// ============================================

function updateWordCounter() {

    if (!wordText) {
        return;
    }

    const text =
        wordText.value;

    const trimmedText =
        text.trim();


    // WORDS
    let words = 0;

    if (trimmedText.length > 0) {

        words =
            trimmedText
                .split(/\s+/)
                .filter(word => word.length > 0)
                .length;

    }


    // CHARACTERS
    const characters =
        text.length;


    // SENTENCES
    let sentences = 0;

    if (trimmedText.length > 0) {

        sentences =
            trimmedText
                .split(/[.!?؟۔]+/)
                .filter(sentence => sentence.trim().length > 0)
                .length;

    }


    // READING TIME
    const wordsPerMinute = 200;

    const minutes =
        words === 0
            ? 0
            : Math.ceil(
                words / wordsPerMinute
            );


    // UPDATE UI
    if (wordCount) {

        wordCount.textContent =
            words;

    }


    if (characterCount) {

        characterCount.textContent =
            characters;

    }


    if (sentenceCount) {

        sentenceCount.textContent =
            sentences;

    }


    if (readingTime) {

        readingTime.textContent =
            minutes + " منٹ";

    }

}


// ============================================
// TEXT INPUT
// ============================================

if (wordText) {

    wordText.addEventListener(
        "input",
        updateWordCounter
    );

}


// ============================================
// CLEAR TEXT
// ============================================

if (clearWordText) {

    clearWordText.addEventListener(
        "click",
        () => {

            if (wordText) {

                wordText.value = "";

            }

            updateWordCounter();

            if (wordText) {

                wordText.focus();

            }

        }
    );

}


// ============================================
// INITIAL COUNT
// ============================================

updateWordCounter();
// ============================================
// QR GENERATOR
// ============================================

const qrText =
    document.getElementById("qrText");

const generateQRBtn =
    document.getElementById("generateQRBtn");

const qrResult =
    document.getElementById("qrResult");

const qrCode =
    document.getElementById("qrCode");

const downloadQRBtn =
    document.getElementById("downloadQRBtn");

const qrMessage =
    document.getElementById("qrMessage");


// ============================================
// LOAD QR LIBRARY
// ============================================

function loadQRLibrary() {

    return new Promise(
        (resolve, reject) => {

            if (window.QRCode) {

                resolve();

                return;

            }

            const script =
                document.createElement("script");

            script.src =
                "https://cdn.jsdelivr.net/npm/qrcodejs@1.0.0/qrcode.min.js";

            script.onload =
                () => resolve();

            script.onerror =
                () => reject(
                    new Error(
                        "QR Library load failed"
                    )
                );

            document.head.appendChild(
                script
            );

        }
    );

}


// ============================================
// GENERATE QR CODE
// ============================================

if (generateQRBtn) {

    generateQRBtn.addEventListener(
        "click",
        async () => {

            const text =
                qrText
                    ? qrText.value.trim()
                    : "";


            if (!text) {

                if (qrMessage) {

                    qrMessage.textContent =
                        "براہِ کرم پہلے کوئی متن یا لنک لکھیں۔";

                }

                if (qrResult) {

                    qrResult.style.display =
                        "none";

                }

                return;

            }


            generateQRBtn.disabled =
                true;

            generateQRBtn.textContent =
                "⏳ QR Code بنایا جا رہا ہے...";


            try {

                await loadQRLibrary();


                qrCode.innerHTML = "";


                new QRCode(
                    qrCode,
                    {
                        text: text,
                        width: 220,
                        height: 220,
                        correctLevel:
                            QRCode.CorrectLevel.H
                    }
                );


                qrResult.style.display =
                    "block";


                if (qrMessage) {

                    qrMessage.textContent =
                        "✅ QR Code کامیابی سے بن گیا۔";

                }


            } catch (error) {

                console.error(
                    "QR Error:",
                    error
                );


                if (qrMessage) {

                    qrMessage.textContent =
                        "❌ QR Code بنانے میں مسئلہ آیا۔ براہِ کرم دوبارہ کوشش کریں۔";

                }

            }


            generateQRBtn.disabled =
                false;

            generateQRBtn.textContent =
                "▦ کیو آر کوڈ بنائیں";

        }
    );

}


// ============================================
// DOWNLOAD QR CODE
// ============================================

if (downloadQRBtn) {

    downloadQRBtn.addEventListener(
        "click",
        () => {

            const canvas =
                qrCode
                    ? qrCode.querySelector("canvas")
                    : null;


            const image =
                qrCode
                    ? qrCode.querySelector("img")
                    : null;


            let downloadURL =
                "";


            if (canvas) {

                downloadURL =
                    canvas.toDataURL(
                        "image/png"
                    );

            } else if (image) {

                downloadURL =
                    image.src;

            }


            if (!downloadURL) {

                if (qrMessage) {

                    qrMessage.textContent =
                        "براہِ کرم پہلے QR Code بنائیں۔";

                }

                return;

            }


            const link =
                document.createElement("a");

            link.href =
                downloadURL;

            link.download =
                "kaamkit-qr-code.png";

            document.body.appendChild(
                link
            );

            link.click();

            document.body.removeChild(
                link
            );


            if (qrMessage) {

                qrMessage.textContent =
                    "✅ QR Code محفوظ کر دیا گیا۔";

            }

        }
    );

}
// ============================================
// DISCOUNT CALCULATOR
// ============================================

const discountPrice =
    document.getElementById("discountPrice");

const discountPercent =
    document.getElementById("discountPercent");

const calculateDiscountBtn =
    document.getElementById("calculateDiscountBtn");

const discountResult =
    document.getElementById("discountResult");

const discountOriginal =
    document.getElementById("discountOriginal");

const discountAmount =
    document.getElementById("discountAmount");

const discountFinal =
    document.getElementById("discountFinal");

const discountMessage =
    document.getElementById("discountMessage");


// ============================================
// CALCULATE DISCOUNT
// ============================================

if (calculateDiscountBtn) {

    calculateDiscountBtn.addEventListener(
        "click",
        () => {

            const price =
                Number(
                    discountPrice.value
                );

            const percent =
                Number(
                    discountPercent.value
                );


            // VALIDATION
            if (
                !Number.isFinite(price) ||
                price <= 0
            ) {

                discountResult.style.display =
                    "none";

                discountMessage.textContent =
                    "براہِ کرم درست اصل قیمت درج کریں۔";

                return;

            }


            if (
                !Number.isFinite(percent) ||
                percent < 0 ||
                percent > 100
            ) {

                discountResult.style.display =
                    "none";

                discountMessage.textContent =
                    "ڈسکاؤنٹ 0 سے 100 فیصد کے درمیان ہونا چاہیے۔";

                return;

            }


            // CALCULATION
            const amount =
                price *
                (percent / 100);

            const finalPrice =
                price -
                amount;


            // SHOW RESULT
            discountOriginal.textContent =
                formatMoney(price);

            discountAmount.textContent =
                formatMoney(amount);

            discountFinal.textContent =
                formatMoney(finalPrice);


            discountResult.style.display =
                "block";

            discountMessage.textContent =
                "✅ حساب کامیابی سے مکمل ہو گیا۔";

        }
    );

}


// ============================================
// FORMAT MONEY
// ============================================

function formatMoney(value) {

    return new Intl.NumberFormat(
        "ur-PK",
        {
            maximumFractionDigits: 2
        }
    ).format(value);

}
// ============================================
// EMI CALCULATOR
// ============================================

const emiLoanAmount =
    document.getElementById("emiLoanAmount");

const emiInterestRate =
    document.getElementById("emiInterestRate");

const emiYears =
    document.getElementById("emiYears");

const calculateEMIBtn =
    document.getElementById("calculateEMIBtn");

const emiResult =
    document.getElementById("emiResult");

const emiMonthly =
    document.getElementById("emiMonthly");

const emiTotal =
    document.getElementById("emiTotal");

const emiInterest =
    document.getElementById("emiInterest");

const emiMessage =
    document.getElementById("emiMessage");


// ============================================
// CALCULATE EMI
// ============================================

if (calculateEMIBtn) {

    calculateEMIBtn.addEventListener(
        "click",
        () => {

            const principal =
                Number(
                    emiLoanAmount.value
                );

            const annualRate =
                Number(
                    emiInterestRate.value
                );

            const years =
                Number(
                    emiYears.value
                );


            // VALIDATION
            if (
                !Number.isFinite(principal) ||
                principal <= 0
            ) {

                emiResult.style.display =
                    "none";

                emiMessage.textContent =
                    "براہِ کرم قرض کی درست رقم درج کریں۔";

                return;

            }


            if (
                !Number.isFinite(annualRate) ||
                annualRate < 0
            ) {

                emiResult.style.display =
                    "none";

                emiMessage.textContent =
                    "براہِ کرم شرحِ سود درست درج کریں۔";

                return;

            }


            if (
                !Number.isFinite(years) ||
                years <= 0
            ) {

                emiResult.style.display =
                    "none";

                emiMessage.textContent =
                    "براہِ کرم قرض کی درست مدت درج کریں۔";

                return;

            }


            // MONTHLY VALUES
            const months =
                Math.round(
                    years * 12
                );

            const monthlyRate =
                annualRate / 100 / 12;


            // EMI CALCULATION
            let monthlyPayment;


            if (monthlyRate === 0) {

                monthlyPayment =
                    principal / months;

            } else {

                monthlyPayment =
                    principal *
                    monthlyRate *
                    Math.pow(
                        1 + monthlyRate,
                        months
                    ) /
                    (
                        Math.pow(
                            1 + monthlyRate,
                            months
                        ) - 1
                    );

            }


            const totalPayment =
                monthlyPayment *
                months;

            const totalInterest =
                totalPayment -
                principal;


            // SHOW RESULT
            emiMonthly.textContent =
                formatMoney(monthlyPayment);

            emiTotal.textContent =
                formatMoney(totalPayment);

            emiInterest.textContent =
                formatMoney(totalInterest);


            emiResult.style.display =
                "block";

            emiMessage.textContent =
                "✅ EMI کا حساب کامیابی سے مکمل ہو گیا۔";

        }
    );

}
// ============================================
// PDF MERGE
// ============================================

const mergePdfInput =
    document.getElementById("mergePdfInput");

const mergePdfList =
    document.getElementById("mergePdfList");

const mergePdfBtn =
    document.getElementById("mergePdfBtn");

const mergePdfMessage =
    document.getElementById("mergePdfMessage");

let mergePdfFiles = [];

if (mergePdfInput) {

    mergePdfInput.addEventListener(
        "change",
        () => {

            mergePdfFiles =
                Array.from(mergePdfInput.files);

            renderMergePdfList();

            if (mergePdfMessage) {
                mergePdfMessage.textContent =
                    mergePdfFiles.length > 0
                        ? `${mergePdfFiles.length} PDF فائلیں منتخب ہو گئی ہیں۔`
                        : "";
            }
        }
    );

}


function renderMergePdfList() {

    if (!mergePdfList) return;

    mergePdfList.innerHTML = "";

    mergePdfFiles.forEach(
        (file, index) => {

            const item =
                document.createElement("div");

            item.className =
                "merge-file-item";

            const name =
                document.createElement("span");

            name.className =
                "merge-file-name";

            name.textContent =
                `${index + 1}. ${file.name}`;

            const size =
                document.createElement("span");

            size.className =
                "merge-file-size";

            size.textContent =
                formatFileSize(file.size);

            item.appendChild(name);
            item.appendChild(size);

            mergePdfList.appendChild(item);

        }
    );
}


if (mergePdfBtn) {

    mergePdfBtn.addEventListener(
        "click",
        async () => {

            if (mergePdfFiles.length < 2) {

                mergePdfMessage.textContent =
                    "براہِ کرم کم از کم 2 PDF فائلیں منتخب کریں۔";

                return;
            }

            mergePdfBtn.disabled = true;

            mergePdfMessage.textContent =
                "⏳ PDFs کو Merge کیا جا رہا ہے...";

            try {

                await ensurePDFLibraries();

                const {
                    PDFDocument
                } = PDFLib;

                const mergedPdf =
                    await PDFDocument.create();

                for (
                    const file of mergePdfFiles
                ) {

                    const fileBytes =
                        await file.arrayBuffer();

                    const sourcePdf =
                        await PDFDocument.load(
                            fileBytes
                        );

                    const pages =
                        await mergedPdf.copyPages(
                            sourcePdf,
                            sourcePdf.getPageIndices()
                        );

                    pages.forEach(
                        page => {
                            mergedPdf.addPage(page);
                        }
                    );

                }

                const mergedBytes =
                    await mergedPdf.save();

                const blob =
                    new Blob(
                        [mergedBytes],
                        {
                            type: "application/pdf"
                        }
                    );

                const url =
                    URL.createObjectURL(blob);

                const link =
                    document.createElement("a");

                link.href = url;
                link.download =
                    "kaamkit-merged.pdf";

                document.body.appendChild(link);

                link.click();

                link.remove();

                URL.revokeObjectURL(url);

                mergePdfMessage.textContent =
                    "✅ PDFs کامیابی سے Merge ہو گئی ہیں۔";

            } catch (error) {

                console.error(
                    "PDF Merge Error:",
                    error
                );

                mergePdfMessage.textContent =
                    "❌ PDF Merge کرتے وقت مسئلہ پیش آیا۔";

            } finally {

                mergePdfBtn.disabled = false;

            }

        }
    );

}
// ============================================
// PDF-LIBRARY FOR PDF MERGE
// ============================================

let pdfLibReady = false;

function loadPDFLib() {

    return new Promise(
        (resolve, reject) => {

            if (window.PDFLib) {
                pdfLibReady = true;
                resolve();
                return;
            }

            const script =
                document.createElement("script");

            script.src =
                "https://cdn.jsdelivr.net/npm/pdf-lib@1.17.1/dist/pdf-lib.min.js";

            script.onload = () => {
                pdfLibReady = true;
                resolve();
            };

            script.onerror = () => {
                reject(
                    new Error(
                        "PDF Library load failed"
                    )
                );
            };

            document.head.appendChild(script);

        }
    );

}


async function ensurePDFLibraries() {

    if (!pdfLibReady) {
        await loadPDFLib();
    }

}
// ============================================
// PDF SPLIT
// ============================================

const splitPdfInput =
    document.getElementById("splitPdfInput");

const splitPdfInfo =
    document.getElementById("splitPdfInfo");

const splitStartPage =
    document.getElementById("splitStartPage");

const splitEndPage =
    document.getElementById("splitEndPage");

const splitPdfBtn =
    document.getElementById("splitPdfBtn");

const splitPdfMessage =
    document.getElementById("splitPdfMessage");

let splitPdfFile = null;
let splitPdfPageCount = 0;


if (splitPdfInput) {

    splitPdfInput.addEventListener(
        "change",
        async () => {

            splitPdfFile =
                splitPdfInput.files[0];

            if (!splitPdfFile) return;

            try {

                const bytes =
                    await splitPdfFile.arrayBuffer();

                const pdf =
                    await PDFLib.PDFDocument.load(bytes);

                splitPdfPageCount =
                    pdf.getPageCount();

                splitPdfInfo.innerHTML =
                    `<div class="split-file-item">
                        📄 ${splitPdfFile.name}
                        <br>
                        <small>
                            کل صفحات: ${splitPdfPageCount}
                        </small>
                    </div>`;

                splitStartPage.value = 1;
                splitEndPage.value =
                    splitPdfPageCount;

                splitPdfMessage.textContent =
                    "PDF فائل تیار ہے۔ صفحات منتخب کریں۔";

            } catch (error) {

                console.error(
                    "PDF Split Error:",
                    error
                );

                splitPdfMessage.textContent =
                    "❌ PDF فائل کھولی نہیں جا سکی۔";

            }

        }
    );

}


if (splitPdfBtn) {

    splitPdfBtn.addEventListener(
        "click",
        async () => {

            if (!splitPdfFile) {

                splitPdfMessage.textContent =
                    "براہِ کرم پہلے PDF فائل منتخب کریں۔";

                return;
            }

            const start =
                Number(splitStartPage.value);

            const end =
                Number(splitEndPage.value);

            if (
                !Number.isInteger(start) ||
                !Number.isInteger(end) ||
                start < 1 ||
                end > splitPdfPageCount ||
                start > end
            ) {

                splitPdfMessage.textContent =
                    "❌ صفحات کی حد درست درج کریں۔";

                return;
            }

            splitPdfBtn.disabled = true;

            splitPdfMessage.textContent =
                "⏳ PDF Split کی جا رہی ہے...";

            try {

                await ensurePDFLibraries();

                const {
                    PDFDocument
                } = PDFLib;

                const bytes =
                    await splitPdfFile.arrayBuffer();

                const sourcePdf =
                    await PDFDocument.load(bytes);

                const newPdf =
                    await PDFDocument.create();

                const pageNumbers =
                    [];

                for (
                    let i = start - 1;
                    i < end;
                    i++
                ) {
                    pageNumbers.push(i);
                }

                const pages =
                    await newPdf.copyPages(
                        sourcePdf,
                        pageNumbers
                    );

                pages.forEach(
                    page => {
                        newPdf.addPage(page);
                    }
                );

                const outputBytes =
                    await newPdf.save();

                const blob =
                    new Blob(
                        [outputBytes],
                        {
                            type: "application/pdf"
                        }
                    );

                const url =
                    URL.createObjectURL(blob);

                const link =
                    document.createElement("a");

                link.href = url;

                link.download =
                    "kaamkit-split.pdf";

                document.body.appendChild(link);

                link.click();

                link.remove();

                URL.revokeObjectURL(url);

                splitPdfMessage.textContent =
                    "✅ PDF کامیابی سے Split ہو گئی اور Download شروع ہو گیا۔";

            } catch (error) {

                console.error(
                    "PDF Split Error:",
                    error
                );

                splitPdfMessage.textContent =
                    "❌ PDF Split کرتے وقت مسئلہ پیش آیا۔";

            } finally {

                splitPdfBtn.disabled = false;

            }

        }
    );

}
// ============================================
// JPG TO PDF
// ============================================

const jpgPdfInput =
    document.getElementById("jpgPdfInput");

const jpgPdfList =
    document.getElementById("jpgPdfList");

const convertJpgPdfBtn =
    document.getElementById("convertJpgPdfBtn");

const jpgPdfMessage =
    document.getElementById("jpgPdfMessage");

let jpgPdfFiles = [];


if (jpgPdfInput) {

    jpgPdfInput.addEventListener(
        "change",
        () => {

            jpgPdfFiles =
                Array.from(jpgPdfInput.files);

            if (jpgPdfList) {
                jpgPdfList.innerHTML = "";
            }

            jpgPdfFiles.forEach(
                (file, index) => {

                    const item =
                        document.createElement("div");

                    item.className =
                        "jpg-pdf-file-item";

                    item.textContent =
                        `${index + 1}. ${file.name}`;

                    jpgPdfList.appendChild(item);

                }
            );

            if (jpgPdfMessage) {

                jpgPdfMessage.textContent =
                    jpgPdfFiles.length > 0
                        ? `${jpgPdfFiles.length} تصاویر منتخب ہو گئی ہیں۔`
                        : "";

            }

        }
    );

}


function loadImageForPDF(file) {

    return new Promise(
        (resolve, reject) => {

            const reader =
                new FileReader();

            reader.onload = () => {

                const image =
                    new Image();

                image.onload = () => {
                    resolve(image);
                };

                image.onerror = reject;

                image.src =
                    reader.result;

            };

            reader.onerror = reject;

            reader.readAsDataURL(file);

        }
    );

}


if (convertJpgPdfBtn) {

    convertJpgPdfBtn.addEventListener(
        "click",
        async () => {

            if (jpgPdfFiles.length === 0) {

                jpgPdfMessage.textContent =
                    "براہِ کرم پہلے کم از کم ایک تصویر منتخب کریں۔";

                return;
            }

            convertJpgPdfBtn.disabled = true;

            jpgPdfMessage.textContent =
                "⏳ PDF تیار کی جا رہی ہے...";

            try {

                await ensurePDFLibraries();

                const {
                    jsPDF
                } = window.jspdf;

                const pdf =
                    new jsPDF({
                        orientation: "portrait",
                        unit: "mm",
                        format: "a4"
                    });

                for (
                    let i = 0;
                    i < jpgPdfFiles.length;
                    i++
                ) {

                    const image =
                        await loadImageForPDF(
                            jpgPdfFiles[i]
                        );

                    if (i > 0) {
                        pdf.addPage();
                    }

                    const pageWidth = 210;
                    const pageHeight = 297;

                    const margin = 10;

                    const maxWidth =
                        pageWidth - margin * 2;

                    const maxHeight =
                        pageHeight - margin * 2;

                    const ratio =
                        Math.min(
                            maxWidth / image.width,
                            maxHeight / image.height
                        );

                    const width =
                        image.width * ratio;

                    const height =
                        image.height * ratio;

                    const x =
                        (pageWidth - width) / 2;

                    const y =
                        (pageHeight - height) / 2;

                    let imageType = "JPEG";

                    if (
                        jpgPdfFiles[i].type ===
                        "image/png"
                    ) {
                        imageType = "PNG";
                    }

                    pdf.addImage(
                        image,
                        imageType,
                        x,
                        y,
                        width,
                        height
                    );

                }

                pdf.save(
                    "kaamkit-images.pdf"
                );

                jpgPdfMessage.textContent =
                    "✅ PDF کامیابی سے تیار ہو گئی۔";

            } catch (error) {

                console.error(
                    "JPG to PDF Error:",
                    error
                );

                jpgPdfMessage.textContent =
                    "❌ PDF بناتے وقت مسئلہ پیش آیا۔";

            } finally {

                convertJpgPdfBtn.disabled = false;

            }

        }
    );

}
/* ============================================
   PDF TO JPG TOOL
============================================ */

const pdfJpgInput = document.getElementById("pdfJpgInput");
const convertPdfJpgBtn = document.getElementById("convertPdfJpgBtn");
const pdfJpgInfo = document.getElementById("pdfJpgInfo");
const pdfJpgResults = document.getElementById("pdfJpgResults");
const pdfJpgMessage = document.getElementById("pdfJpgMessage");


if (pdfJpgInput) {

    pdfJpgInput.addEventListener("change", () => {

        pdfJpgResults.innerHTML = "";
        pdfJpgMessage.textContent = "";

        if (!pdfJpgInput.files.length) {
            pdfJpgInfo.innerHTML = "";
            return;
        }

        const file = pdfJpgInput.files[0];

        pdfJpgInfo.innerHTML = `
            <div class="pdf-jpg-result-item">
                📄 <strong>${file.name}</strong><br>
                حجم: ${formatFileSize(file.size)}
            </div>
        `;

    });

}


if (convertPdfJpgBtn) {

    convertPdfJpgBtn.addEventListener("click", async () => {

        if (!pdfJpgInput || !pdfJpgInput.files.length) {

            pdfJpgMessage.textContent =
                "براہِ کرم پہلے PDF فائل منتخب کریں۔";

            return;
        }

        try {

            convertPdfJpgBtn.disabled = true;
            convertPdfJpgBtn.textContent = "تبدیل ہو رہا ہے...";
            pdfJpgMessage.textContent = "";
            pdfJpgResults.innerHTML = "";

            await loadPDFLibraries();

            const file = pdfJpgInput.files[0];

            const arrayBuffer = await file.arrayBuffer();

            const pdf = await pdfjsLib.getDocument({
                data: arrayBuffer
            }).promise;

            pdfJpgMessage.textContent =
                `PDF میں ${pdf.numPages} صفحات ہیں۔ تصاویر بنائی جا رہی ہیں...`;

            for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber++) {

                const page = await pdf.getPage(pageNumber);

                const scale = 1.5;

                const viewport = page.getViewport({
                    scale: scale
                });

                const canvas = document.createElement("canvas");

                const context = canvas.getContext("2d");

                canvas.width = viewport.width;
                canvas.height = viewport.height;

                await page.render({
                    canvasContext: context,
                    viewport: viewport
                }).promise;

                const jpgData = canvas.toDataURL(
                    "image/jpeg",
                    0.85
                );

                const resultItem = document.createElement("div");

                resultItem.className = "pdf-jpg-result-item";

                resultItem.innerHTML = `
                    <strong>صفحہ ${pageNumber}</strong>
                    <img
                        src="${jpgData}"
                        alt="PDF Page ${pageNumber}"
                    >
                    <button
                        class="primary-btn download-pdf-jpg-btn"
                        type="button"
                    >
                        JPG ڈاؤن لوڈ کریں 📥
                    </button>
                `;

                pdfJpgResults.appendChild(resultItem);

                const downloadButton =
                    resultItem.querySelector(".download-pdf-jpg-btn");

                downloadButton.addEventListener("click", () => {

                    const link = document.createElement("a");

                    link.href = jpgData;

                    link.download =
                        `${file.name.replace(/\.pdf$/i, "")}-page-${pageNumber}.jpg`;

                    document.body.appendChild(link);

                    link.click();

                    document.body.removeChild(link);

                });

            }

            pdfJpgMessage.textContent =
                "✅ تمام صفحات JPG تصاویر میں تبدیل ہو گئے ہیں۔";

        } catch (error) {

            console.error("PDF to JPG Error:", error);

            pdfJpgMessage.textContent =
                "❌ PDF کو JPG میں تبدیل کرتے وقت مسئلہ پیش آیا۔";

        } finally {

            convertPdfJpgBtn.disabled = false;
            convertPdfJpgBtn.textContent = "JPG بنائیں 🖼️";

        }

    });

}
/* ============================================
   CATEGORY TOOLS
============================================ */

const categoryToolsMap = {
    "Documents": [
        "PDF Compressor",
        "PDF Merge",
        "PDF Split",
        "JPG to PDF",
        "PDF to JPG"
    ],

    "Images": [
        "Image Compressor",
        "Image Resizer"
    ],

    "Calculators": [
        "Age Calculator",
        "Percentage Calculator",
        "Discount Calculator",
        "EMI Calculator",

        "Date Difference Calculator",
        "Days Between Dates",
        "Add/Subtract Days from Date",
        "Time Duration Calculator",
        "Time Zone Converter",
        "Stopwatch",
        "Countdown Timer",
        "Pomodoro Timer",

        "Unit Converter",
        "Length Converter",
        "Weight Converter",
        "Temperature Converter",
        "Area Converter",
        "Volume Converter",
        "Speed Converter",
        "Data Storage Converter",
        "Binary Converter",
        "Decimal to Binary Converter",

        "Fraction Calculator",
        "Ratio Calculator",
        "Average Calculator",
        "GPA Calculator",
        "Grade Calculator",

        "Profit & Loss Calculator",
        "Simple Interest Calculator",
        "Compound Interest Calculator",
        "Tip Calculator",
        "Split Bill Calculator",
        "Currency Calculator",

        "Age from Year Calculator",
        "BMI Calculator",
        "BMR Calculator",
        "Calorie Calculator",
        "Water Intake Calculator",
        "Pregnancy Due Date Calculator",

        "Fuel Cost Calculator",
        "Electricity Bill Calculator",
        "Percentage Change Calculator"
    ],

    "Text": [
        "Word Counter",
        "Text Case Converter",
        "Remove Extra Spaces",
        "Find & Replace Text",
        "Text Sorter",
        "Duplicate Line Remover",
        "Line Break Remover",
        "Character Frequency Counter",
        "Reading Time Calculator"
    ],

    "Generators": [
        "QR Generator",
        "Password Generator",
        "Username Generator",
        "Random Number Generator",
        "Random Name Picker"
    ],

    "Pakistan": [
        "Zakat Calculator",
        "Pakistan Salary Calculator",
        "Pakistan Mobile Number Formatter",
        "CNIC Format Checker",
        "Pakistan IBAN Formatter",
        "Pakistan Postal Code Checker"
    ],
    
"Education": [
    "Math Solver",
    "Fraction Simplifier",
    "Geometry Calculator",
    "Pythagorean Calculator",
    "Prime Number Checker",
    "Factors & Multiples Finder",
    "Statistics Calculator",
    "Standard Deviation Calculator",
    "LCM & GCD Calculator",
    "Number System Converter",
    "Study Timer",
    "Quiz Score Calculator",
    "Marks Percentage Calculator",
    "Student Word & Character Counter",
    "Study Schedule Planner"
]
};

const categoryToolDetails = {
    // Documents
    "PDF Compressor": {
        icon: "📄",
        description: "PDF فائل کا سائز کم کریں۔"
    },
    "PDF Merge": {
        icon: "📑",
        description: "ایک سے زیادہ PDF فائلوں کو ایک فائل میں ملائیں۔"
    },
    "PDF Split": {
        icon: "✂️",
        description: "PDF کے صفحات کو الگ فائلوں میں تقسیم کریں۔"
    },
    "JPG to PDF": {
        icon: "🖼️",
        description: "JPG تصاویر کو PDF فائل میں تبدیل کریں۔"
    },
    "PDF to JPG": {
        icon: "📄",
        description: "PDF کے صفحات کو JPG تصاویر میں تبدیل کریں۔"
    },

    // Images
    "Image Compressor": {
        icon: "🖼️",
        description: "تصویر کا سائز کم کریں اور معیار برقرار رکھیں۔"
    },
    "Image Resizer": {
        icon: "📐",
        description: "تصویر کی Width اور Height تبدیل کریں۔"
    },

    // Existing Calculators
    "Age Calculator": {
        icon: "🧮",
        description: "تاریخِ پیدائش سے عمر معلوم کریں۔"
    },
    "Percentage Calculator": {
        icon: "%",
        description: "فیصد کا آسانی سے حساب کریں۔"
    },
    "Discount Calculator": {
        icon: "💰",
        description: "Discount کے بعد اصل قیمت معلوم کریں۔"
    },
    "EMI Calculator": {
        icon: "🏦",
        description: "Loan کی ماہانہ EMI اور کل ادائیگی معلوم کریں۔"
    },

    // Text Tools
    "Word Counter": {
        icon: "Aa",
        description: "الفاظ، حروف اور لائنوں کی تعداد معلوم کریں۔"
    },
    "Text Case Converter": {
        icon: "🔤",
        description: "Text کو Uppercase، Lowercase اور دوسرے Cases میں تبدیل کریں۔"
    },
    "Remove Extra Spaces": {
        icon: "↔️",
        description: "Text میں موجود اضافی Spaces ختم کریں۔"
    },
    "Find & Replace Text": {
        icon: "🔎",
        description: "Text میں الفاظ تلاش کرکے انہیں تبدیل کریں۔"
    },
    "Text Sorter": {
        icon: "↕️",
        description: "Text کی Lines کو ترتیب سے Sort کریں۔"
    },
    "Duplicate Line Remover": {
        icon: "🧹",
        description: "ایک جیسی Duplicate Lines کو ختم کریں۔"
    },
    "Line Break Remover": {
        icon: "↩️",
        description: "Text سے غیر ضروری Line Breaks ختم کریں۔"
    },
    "Character Frequency Counter": {
        icon: "🔢",
        description: "Text میں ہر Character کی تعداد معلوم کریں۔"
    },
    "Reading Time Calculator": {
        icon: "⏱️",
        description: "Text پڑھنے میں لگنے والا اندازاً وقت معلوم کریں۔"
    },

    // Generators
    "QR Generator": {
        icon: "▦",
        description: "Text یا Link سے QR Code بنائیں۔"
    },
    "Password Generator": {
        icon: "🔐",
        description: "محفوظ اور Random Password بنائیں۔"
    },
    "Username Generator": {
        icon: "👤",
        description: "نئے اور منفرد Username بنائیں۔"
    },
    "Random Number Generator": {
        icon: "🎲",
        description: "مقررہ Range کے اندر Random Number بنائیں۔"
    },
    "Random Name Picker": {
        icon: "🎯",
        description: "ناموں کی فہرست میں سے Random Name منتخب کریں۔"
    },

    // Date & Time
    "Date Difference Calculator": {
        icon: "📅",
        description: "دو تاریخوں کے درمیان فرق معلوم کریں۔"
    },
    "Days Between Dates": {
        icon: "🗓️",
        description: "دو تاریخوں کے درمیان کل دن معلوم کریں۔"
    },
    "Add/Subtract Days from Date": {
        icon: "➕",
        description: "کسی تاریخ میں دن شامل یا کم کریں۔"
    },
    "Time Duration Calculator": {
        icon: "⏰",
        description: "دو اوقات کے درمیان Duration معلوم کریں۔"
    },
    "Time Zone Converter": {
        icon: "🌍",
        description: "ایک Time Zone کا وقت دوسرے Time Zone میں تبدیل کریں۔"
    },
    "Stopwatch": {
        icon: "⏱️",
        description: "وقت ناپنے کے لیے Stopwatch استعمال کریں۔"
    },
    "Countdown Timer": {
        icon: "⏳",
        description: "مقررہ وقت کے لیے Countdown Timer چلائیں۔"
    },
    "Pomodoro Timer": {
        icon: "🍅",
        description: "Focus اور Study کے لیے Pomodoro Timer استعمال کریں۔"
    },

    // Converters
    "Unit Converter": {
        icon: "🔄",
        description: "مختلف Units کو آسانی سے تبدیل کریں۔"
    },
    "Length Converter": {
        icon: "📏",
        description: "Length کی مختلف Units کو تبدیل کریں۔"
    },
    "Weight Converter": {
        icon: "⚖️",
        description: "Weight کی مختلف Units کو تبدیل کریں۔"
    },
    "Temperature Converter": {
        icon: "🌡️",
        description: "Celsius، Fahrenheit اور Kelvin تبدیل کریں۔"
    },
    "Area Converter": {
        icon: "📐",
        description: "Area کی مختلف Units کو تبدیل کریں۔"
    },
    "Volume Converter": {
        icon: "🧊",
        description: "Volume کی مختلف Units کو تبدیل کریں۔"
    },
    "Speed Converter": {
        icon: "🚀",
        description: "Speed کی مختلف Units کو تبدیل کریں۔"
    },
    "Data Storage Converter": {
        icon: "💾",
        description: "KB، MB، GB اور دوسری Storage Units تبدیل کریں۔"
    },
    "Binary Converter": {
        icon: "💻",
        description: "Binary Number کو چیک اور Convert کریں۔"
    },
    "Decimal to Binary Converter": {
        icon: "🔢",
        description: "Decimal Number کو Binary میں تبدیل کریں۔"
    },

    // Number & Education
    "Fraction Calculator": {
        icon: "½",
        description: "Fractions کو جمع، تفریق، ضرب اور تقسیم کریں۔"
    },
    "Ratio Calculator": {
        icon: "⚖️",
        description: "دو نمبروں کا Ratio معلوم کریں۔"
    },
    "Average Calculator": {
        icon: "📊",
        description: "نمبروں کا Average معلوم کریں۔"
    },
    "GPA Calculator": {
        icon: "🎓",
        description: "Subjects اور Credits کی بنیاد پر GPA معلوم کریں۔"
    },
    "Grade Calculator": {
        icon: "📝",
        description: "Marks اور Total Marks سے Grade معلوم کریں۔"
    },

    // Finance
    "Profit & Loss Calculator": {
        icon: "📈",
        description: "Profit یا Loss اور اس کا Percentage معلوم کریں۔"
    },
    "Simple Interest Calculator": {
        icon: "💵",
        description: "Simple Interest اور کل رقم معلوم کریں۔"
    },
    "Compound Interest Calculator": {
        icon: "💰",
        description: "Compound Interest اور کل رقم کا حساب کریں۔"
    },
    "Tip Calculator": {
        icon: "💳",
        description: "Bill کے حساب سے Tip اور Total Amount معلوم کریں۔"
    },
    "Split Bill Calculator": {
        icon: "🧾",
        description: "Bill کو کئی لوگوں میں تقسیم کریں۔"
    },
    "Currency Calculator": {
        icon: "💱",
        description: "رقم کو دی گئی Exchange Rate کے مطابق تبدیل کریں۔"
    },

    // Health
    "Age from Year Calculator": {
        icon: "🎂",
        description: "پیدائش کے سال سے موجودہ عمر معلوم کریں۔"
    },
    "BMI Calculator": {
        icon: "⚖️",
        description: "قد اور وزن کی بنیاد پر BMI معلوم کریں۔"
    },
    "BMR Calculator": {
        icon: "🔥",
        description: "بنیادی روزانہ توانائی کی ضرورت کا اندازہ لگائیں۔"
    },
    "Calorie Calculator": {
        icon: "🍎",
        description: "روزانہ Calorie ضرورت کا اندازہ لگائیں۔"
    },
    "Water Intake Calculator": {
        icon: "💧",
        description: "وزن کی بنیاد پر روزانہ پانی کی اندازاً ضرورت معلوم کریں۔"
    },
    "Pregnancy Due Date Calculator": {
        icon: "📅",
        description: "متوقع Delivery Date کا اندازہ لگائیں۔"
    },

    // Other Calculators
    "Fuel Cost Calculator": {
        icon: "⛽",
        description: "Distance، Mileage اور Fuel Price سے سفر کی لاگت معلوم کریں۔"
    },
    "Electricity Bill Calculator": {
        icon: "⚡",
        description: "Units اور Rate کی بنیاد پر بجلی کے بل کا اندازہ لگائیں۔"
    },
    "Percentage Change Calculator": {
        icon: "📊",
        description: "دو Values کے درمیان Percentage Change معلوم کریں۔"
    },

    // Pakistan
    "Zakat Calculator": {
        icon: "🤲",
        description: "قابلِ زکوٰۃ رقم کا اندازاً حساب کریں۔"
    },
    "Pakistan Salary Calculator": {
        icon: "💼",
        description: "Basic Salary، Allowances اور Deductions کے بعد Net Salary معلوم کریں۔"
    },
    "Pakistan Mobile Number Formatter": {
        icon: "📱",
        description: "پاکستانی موبائل نمبر کو صاف اور درست Format میں تبدیل کریں۔"
    },
    "CNIC Format Checker": {
        icon: "🪪",
        description: "پاکستانی CNIC نمبر کا بنیادی Format چیک کریں۔"
    },
    "Pakistan IBAN Formatter": {
        icon: "🏦",
        description: "پاکستانی IBAN کو صاف اور readable Format میں تبدیل کریں۔"
    },
    "Pakistan Postal Code Checker": {
        icon: "📮",
        description: "پاکستانی Postal Code کا بنیادی Format چیک کریں۔"
    },
    "Math Solver": {
    icon: "🧮",
    description: "بنیادی ریاضی کے سوالات حل کریں۔"
},

"Fraction Simplifier": {
    icon: "➗",
    description: "Fractions کو آسان ترین شکل میں تبدیل کریں۔"
},

"Geometry Calculator": {
    icon: "📐",
    description: "مختلف Shapes کا Area اور Perimeter معلوم کریں۔"
},

"Pythagorean Calculator": {
    icon: "📏",
    description: "Pythagorean theorem سے Hypotenuse معلوم کریں۔"
},

"Prime Number Checker": {
    icon: "🔢",
    description: "چیک کریں کہ Number Prime ہے یا نہیں۔"
},

"Factors & Multiples Finder": {
    icon: "✖️",
    description: "Number کے Factors اور پہلے 10 Multiples معلوم کریں۔"
},

"Statistics Calculator": {
    icon: "📊",
    description: "Mean، Median، Mode اور Sum معلوم کریں۔"
},

"Standard Deviation Calculator": {
    icon: "📈",
    description: "Numbers کا Standard Deviation معلوم کریں۔"
},

"LCM & GCD Calculator": {
    icon: "🔢",
    description: "دو Numbers کا LCM اور GCD معلوم کریں۔"
},

"Number System Converter": {
    icon: "💻",
    description: "Binary، Octal، Decimal اور Hexadecimal تبدیل کریں۔"
},

"Study Timer": {
    icon: "⏱️",
    description: "پڑھائی کے لیے مخصوص وقت کا Timer چلائیں۔"
},

"Quiz Score Calculator": {
    icon: "📝",
    description: "Quiz کے Marks سے Score Percentage معلوم کریں۔"
},

"Marks Percentage Calculator": {
    icon: "🎯",
    description: "Obtained اور Total Marks سے Percentage معلوم کریں۔"
},

"Student Word & Character Counter": {
    icon: "🔤",
    description: "Student Text کے Words، Characters اور Lines گنیں۔"
},

"Study Schedule Planner": {
    icon: "📅",
    description: "اپنی پڑھائی کا Subject اور وقت ترتیب دیں۔"
},
};

const categoryToolsGrid = document.getElementById("categoryToolsGrid");
const categoryToolsPanel = categoryToolsGrid ? categoryToolsGrid.parentElement : null;

const categoryToolsTitle =
    document.getElementById("categoryToolsTitle");

const categoryToolsDescription =
    document.getElementById("categoryToolsDescription");


document
    .querySelectorAll(".category-card")
    .forEach(card => {

        card.addEventListener("click", () => {

            const category =
                card.dataset.category;

            const toolNames =
                categoryToolsMap[category] || [];

            if (!categoryToolsPanel) {
                return;
            }

            categoryToolsTitle.textContent =
                category;

            categoryToolsGrid.innerHTML = "";

            if (toolNames.length === 0) {

                categoryToolsDescription.textContent =
                    "اس Category میں Tools جلد شامل کیے جائیں گے۔";

            } else {

                categoryToolsDescription.textContent =
                    `${toolNames.length} Tools دستیاب ہیں۔`;

                toolNames.forEach(toolName => {

                    const details =
                        categoryToolDetails[toolName];

                    if (!details) {
                        return;
                    }

                    const item =
                        document.createElement("div");

                    item.className =
                        "category-tool-item";

                    item.innerHTML = `
                        <div class="category-tool-icon">
                            ${details.icon}
                        </div>

                        <h4>${toolName}</h4>

                        <p>${details.description}</p>
                    `;

                    item.addEventListener("click", () => {
                        openTool(toolName);
                    });

                    categoryToolsGrid.appendChild(item);

                });
            }

            categoryToolsPanel.style.display = "block";

            categoryToolsPanel.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    });
    /* ============================================
   CLOSE CATEGORY TOOLS PANEL
============================================ */

const closeCategoryTools = document.getElementById("closeCategoryTools");
const categoryToolsPanelElement = categoryToolsGrid ? categoryToolsGrid.parentElement : null;

if (closeCategoryTools && categoryToolsPanelElement) {
    closeCategoryTools.addEventListener("click", () => {
        categoryToolsPanelElement.style.display = "none";
    });
}
/* ============================================
   ZAKAT CALCULATOR
============================================ */

const calculateZakatBtn =
    document.getElementById("calculateZakatBtn");

if (calculateZakatBtn) {

    calculateZakatBtn.addEventListener("click", () => {

        const cash =
            Number(document.getElementById("zakatCash").value) || 0;

        const gold =
            Number(document.getElementById("zakatGold").value) || 0;

        const silver =
            Number(document.getElementById("zakatSilver").value) || 0;

        const business =
            Number(document.getElementById("zakatBusiness").value) || 0;

        const receivable =
            Number(document.getElementById("zakatReceivable").value) || 0;

        const liabilities =
            Number(document.getElementById("zakatLiabilities").value) || 0;


        const totalAssets =
            cash +
            gold +
            silver +
            business +
            receivable;


        const zakatBase =
            Math.max(0, totalAssets - liabilities);


        const zakat =
            zakatBase * 0.025;


        const result =
            document.getElementById("zakatResult");

        const message =
            document.getElementById("zakatMessage");


        if (zakatBase <= 0) {

            result.innerHTML = `
                <strong>
                    قابلِ زکوٰۃ رقم: PKR 0
                </strong>

                <div class="zakat-breakdown">
                    موجودہ دی گئی معلومات کے مطابق
                    قابلِ زکوٰۃ رقم صفر ہے۔
                </div>
            `;

            message.textContent =
                "براہِ کرم اپنی تمام متعلقہ رقمیں درست درج کریں۔";

            return;
        }


        result.innerHTML = `
            <div>
                قابلِ زکوٰۃ رقم
            </div>

            <div class="zakat-total">
                PKR ${zakatBase.toLocaleString("en-PK")}
            </div>

            <div class="zakat-breakdown">
                زکوٰۃ کی شرح: 2.5%<br>
                اندازاً واجب زکوٰۃ:
                <strong>
                    PKR ${zakat.toLocaleString("en-PK", {
                        maximumFractionDigits: 0
                    })}
                </strong>
            </div>
        `;


        message.textContent =
            "✅ زکوٰۃ کا اندازاً حساب مکمل ہو گیا۔";

    });

}
/* ============================================
   PAKISTAN SALARY CALCULATOR
============================================ */

const calculateSalaryBtn =
    document.getElementById("calculateSalaryBtn");

if (calculateSalaryBtn) {

    calculateSalaryBtn.addEventListener("click", () => {

        const basic =
            Number(document.getElementById("salaryBasic").value) || 0;

        const allowances =
            Number(document.getElementById("salaryAllowances").value) || 0;

        const deductions =
            Number(document.getElementById("salaryDeductions").value) || 0;


        const grossSalary =
            basic + allowances;

        const netSalary =
            Math.max(0, grossSalary - deductions);


        const result =
            document.getElementById("salaryResult");

        const message =
            document.getElementById("salaryMessage");


        if (grossSalary <= 0) {

            result.innerHTML = "";

            message.textContent =
                "براہِ کرم Basic Salary درج کریں۔";

            return;
        }


        result.innerHTML = `
            <div>
                Gross Salary
            </div>

            <div class="salary-total">
                PKR ${grossSalary.toLocaleString("en-PK")}
            </div>

            <div class="salary-breakdown">
                Basic Salary:
                PKR ${basic.toLocaleString("en-PK")}<br>

                Allowances:
                PKR ${allowances.toLocaleString("en-PK")}<br>

                Deductions:
                PKR ${deductions.toLocaleString("en-PK")}<br><br>

                <strong>
                    Net Salary:
                    PKR ${netSalary.toLocaleString("en-PK")}
                </strong>
            </div>
        `;


        message.textContent =
            "✅ Salary کا حساب مکمل ہو گیا۔";

    });

}
const formatMobileNumberBtn = document.getElementById("formatMobileNumberBtn");

if (formatMobileNumberBtn) {
    formatMobileNumberBtn.addEventListener("click", () => {
        const input = document.getElementById("mobileNumberInput");
        const result = document.getElementById("mobileNumberResult");
        const message = document.getElementById("mobileNumberMessage");

        let number = input.value.replace(/\D/g, "");

        // اگر نمبر +92 سے شروع ہو
        if (number.startsWith("92")) {
            number = "0" + number.slice(2);
        }

        // پاکستان کے موبائل نمبر کا بنیادی Format
        if (!/^03\d{9}$/.test(number)) {
            result.innerHTML = "";
            message.textContent = "براہِ کرم درست پاکستانی موبائل نمبر درج کریں، مثلاً 03001234567";
            return;
        }

        const formatted = number.replace(
            /^(03\d)(\d{3})(\d{4})$/,
            "$1-$2-$3"
        );

        const international = "+92 " + number.slice(1, 4) + " " + number.slice(4, 7) + " " + number.slice(7);

        result.innerHTML = `
            <div class="mobile-number-result-box">
                <div>Formatted Number</div>
                <div class="mobile-number-format">${formatted}</div>
                <div class="mobile-number-format">${international}</div>
            </div>
        `;

        message.textContent = "✅ موبائل نمبر کامیابی سے Format ہو گیا۔";
    });
}
const checkCnicBtn = document.getElementById("checkCnicBtn");

if (checkCnicBtn) {
    checkCnicBtn.addEventListener("click", () => {
        const input = document.getElementById("cnicInput");
        const result = document.getElementById("cnicResult");
        const message = document.getElementById("cnicMessage");

        let cnic = input.value.replace(/\D/g, "");

        if (cnic.length !== 13) {
            result.innerHTML = `
                <div class="cnic-result-box">
                    <div class="cnic-invalid">❌ CNIC Format درست نہیں ہے</div>
                </div>
            `;
            message.textContent = "CNIC میں 13 digits ہونے چاہئیں۔";
            return;
        }

        const formattedCnic =
            cnic.slice(0, 5) + "-" +
            cnic.slice(5, 12) + "-" +
            cnic.slice(12);

        result.innerHTML = `
            <div class="cnic-result-box">
                <div class="cnic-valid">✅ CNIC Format درست ہے</div>
                <div style="margin-top:10px; direction:ltr; font-weight:700;">
                    ${formattedCnic}
                </div>
            </div>
        `;

        message.textContent = "CNIC کا بنیادی format درست ہے۔";
    });
}
const formatIbanBtn = document.getElementById("formatIbanBtn");

if (formatIbanBtn) {
    formatIbanBtn.addEventListener("click", () => {
        const input = document.getElementById("ibanInput");
        const result = document.getElementById("ibanResult");
        const message = document.getElementById("ibanMessage");

        let iban = input.value
            .replace(/\s/g, "")
            .toUpperCase();

        // پاکستان IBAN کا بنیادی format: PK + 2 check digits + 4 letters + 16 alphanumeric
        const pakistanIbanPattern = /^PK\d{2}[A-Z]{4}[A-Z0-9]{16}$/;

        if (!pakistanIbanPattern.test(iban)) {
            result.innerHTML = `
                <div class="iban-result-box">
                    <div class="iban-invalid">❌ IBAN Format درست نہیں ہے</div>
                </div>
            `;

            message.textContent =
                "پاکستانی IBAN کا بنیادی format چیک کریں۔ مثال: PK36SCBL0000001123456702";
            return;
        }

        const formatted = iban.match(/.{1,4}/g).join(" ");

        result.innerHTML = `
            <div class="iban-result-box">
                <div class="iban-valid">✅ IBAN Format درست ہے</div>
                <div class="iban-formatted">${formatted}</div>
            </div>
        `;

        message.textContent =
            "IBAN کو readable format میں تبدیل کر دیا گیا ہے۔";
    });
}
const checkPostalCodeBtn = document.getElementById("checkPostalCodeBtn");

if (checkPostalCodeBtn) {
    checkPostalCodeBtn.addEventListener("click", () => {
        const input = document.getElementById("postalCodeInput");
        const result = document.getElementById("postalCodeResult");
        const message = document.getElementById("postalCodeMessage");

        const postalCode = input.value.replace(/\D/g, "");

        if (!/^\d{5}$/.test(postalCode)) {
            result.innerHTML = `
                <div class="postal-code-result-box">
                    <div class="postal-code-invalid">
                        ❌ Postal Code درست نہیں ہے
                    </div>
                </div>
            `;

            message.textContent =
                "پاکستانی Postal Code میں 5 digits ہونے چاہئیں۔";

            return;
        }

        result.innerHTML = `
            <div class="postal-code-result-box">
                <div class="postal-code-valid">
                    ✅ Postal Code Format درست ہے
                </div>

                <div class="postal-code-number">
                    ${postalCode}
                </div>
            </div>
        `;

        message.textContent =
   
            "Postal Code کا بنیادی format درست ہے۔";
    });
}
// =========================================================
// 50 NEW TOOLS — TEXT TOOLS
// =========================================================


// =========================================================
// 1. TEXT CASE CONVERTER
const textCaseInput = document.getElementById("textCaseInput");
const uppercaseBtn = document.getElementById("uppercaseBtn");
const lowercaseBtn = document.getElementById("lowercaseBtn");
const titlecaseBtn = document.getElementById("titlecaseBtn");
const textCaseResult = document.getElementById("textCaseResult");
function applyTextCase(type) {
    if (!textCaseInput || !textCaseResult) return;
    const text = textCaseInput.value || "";
    let output = text;
    if (type === "upper") output = text.toUpperCase();
    if (type === "lower") output = text.toLowerCase();
    if (type === "title") output = text.toLowerCase().replace(/(^|\s)\S/g, c => c.toUpperCase());
    textCaseResult.textContent = output;
}
if (uppercaseBtn) uppercaseBtn.addEventListener("click", () => applyTextCase("upper"));
if (lowercaseBtn) lowercaseBtn.addEventListener("click", () => applyTextCase("lower"));
if (titlecaseBtn) titlecaseBtn.addEventListener("click", () => applyTextCase("title"));


// 2. REMOVE EXTRA SPACES
// =========================================================

const removeSpacesBtn = document.getElementById("removeSpacesBtn");

if (removeSpacesBtn) {

    removeSpacesBtn.addEventListener("click", () => {

        const input = document.getElementById("removeSpacesInput");
        const result = document.getElementById("removeSpacesResult");

        if (!input || !result) return;

        const text = input.value;

        if (!text.trim()) {
            result.innerHTML = "براہِ کرم Text درج کریں۔";
            return;
        }

        const cleanedText = text
            .replace(/[ \t]+/g, " ")
            .replace(/\n\s+/g, "\n")
            .trim();

        result.innerHTML = `
            <div class="final-result">
                <strong>صاف کیا گیا Text:</strong>

                <div style="margin-top:10px; white-space:pre-wrap;">
                    ${cleanedText
                        .replace(/&/g, "&amp;")
                        .replace(/</g, "&lt;")
                        .replace(/>/g, "&gt;")}
                </div>
            </div>
        `;

    });

}


// =========================================================
// 3. FIND & REPLACE TEXT
// =========================================================

const findReplaceBtn = document.getElementById("findReplaceBtn");

if (findReplaceBtn) {

    findReplaceBtn.addEventListener("click", () => {

        const textInput = document.getElementById("findReplaceText");
        const findInput = document.getElementById("findText");
        const replaceInput = document.getElementById("replaceText");
        const result = document.getElementById("findReplaceResult");

        if (!textInput || !findInput || !replaceInput || !result) return;

        const text = textInput.value;
        const findText = findInput.value;
        const replaceText = replaceInput.value;

        if (!text.trim()) {
            result.innerHTML = "براہِ کرم Text درج کریں۔";
            return;
        }

        if (!findText) {
            result.innerHTML = "براہِ کرم Find Text درج کریں۔";
            return;
        }

        const escapedText = findText.replace(
            /[.*+?^${}()|[\]\\]/g,
            "\\$&"
        );

        const replacedText = text.replace(
            new RegExp(escapedText, "g"),
            replaceText
        );

        result.innerHTML = `
            <div class="final-result">
                <strong>Updated Text:</strong>

                <div style="margin-top:10px; white-space:pre-wrap;">
                    ${replacedText
                        .replace(/&/g, "&amp;")
                        .replace(/</g, "&lt;")
                        .replace(/>/g, "&gt;")}
                </div>
            </div>
        `;

    });

}


// =========================================================
// 4. TEXT SORTER
const textSorterBtn = document.getElementById("textSorterBtn");
if (textSorterBtn) {
    textSorterBtn.addEventListener("click", () => {
        const input = document.getElementById("textSorterInput");
        const result = document.getElementById("textSorterResult");
        if (!input || !result) return;
        const lines = input.value.split(/\r?\n/).map(x=>x.trim()).filter(Boolean);
        if (!lines.length) { result.textContent = "براہِ کرم Lines درج کریں۔"; return; }
        lines.sort((a,b)=>a.localeCompare(b, undefined, {numeric:true, sensitivity:"base"}));
        result.textContent = lines.join("\n");
    });
}


// 6. LINE BREAK REMOVER
// =========================================================

const removeLineBreakBtn =
    document.getElementById("removeLineBreakBtn");

if (removeLineBreakBtn) {

    removeLineBreakBtn.addEventListener("click", () => {

        const input = document.getElementById("lineBreakInput");
        const result = document.getElementById("lineBreakResult");

        if (!input || !result) return;

        const text = input.value;

        if (!text.trim()) {
            result.innerHTML = "براہِ کرم Text درج کریں۔";
            return;
        }

        const output = text
            .replace(/\r?\n+/g, " ")
            .replace(/\s+/g, " ")
            .trim();

        result.innerHTML = `
            <div class="final-result">

                <strong>Line Breaks ختم:</strong>

                <div style="
                    margin-top:10px;
                    white-space:pre-wrap;
                ">
                    ${output
                        .replace(/&/g, "&amp;")
                        .replace(/</g, "&lt;")
                        .replace(/>/g, "&gt;")}
                </div>

            </div>
        `;

    });

}


// =========================================================
// 7. CHARACTER FREQUENCY COUNTER
// =========================================================

const characterFrequencyBtn =
    document.getElementById("characterFrequencyBtn");

if (characterFrequencyBtn) {

    characterFrequencyBtn.addEventListener("click", () => {

        const input =
            document.getElementById("characterFrequencyInput");

        const result =
            document.getElementById("characterFrequencyResult");

        if (!input || !result) return;

        const text = input.value;

        if (!text.trim()) {
            result.innerHTML = "براہِ کرم Text درج کریں۔";
            return;
        }

        const frequency = {};

        for (const char of text) {

            if (
                char === " " ||
                char === "\n" ||
                char === "\t"
            ) {
                continue;
            }

            frequency[char] =
                (frequency[char] || 0) + 1;
        }

        const sortedCharacters =
            Object.entries(frequency)
                .sort((a, b) => b[1] - a[1]);

        let html = `
            <div class="final-result">

                <strong>
                    Character Frequency:
                </strong>

                <div style="margin-top:15px;">
        `;

        sortedCharacters.forEach(([char, count]) => {

            const safeChar = char
                .replace(/&/g, "&amp;")
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;");

            html += `
                <div style="
                    display:flex;
                    justify-content:space-between;
                    padding:8px 0;
                    border-bottom:1px solid var(--border);
                ">
                    <span>${safeChar}</span>
                    <strong>${count}</strong>
                </div>
            `;

        });

        html += `
                </div>
            </div>
        `;

        result.innerHTML = html;

    });

}


// =========================================================
// 8. READING TIME CALCULATOR
// =========================================================

const readingTimeBtn =
    document.getElementById("readingTimeBtn");

if (readingTimeBtn) {

    readingTimeBtn.addEventListener("click", () => {

        const input =
            document.getElementById("readingTimeInput");

        const result =
            document.getElementById("readingTimeResult");

        if (!input || !result) return;

        const text = input.value.trim();

        if (!text) {
            result.innerHTML = "براہِ کرم Text درج کریں۔";
            return;
        }

        const words =
            text.split(/\s+/).filter(Boolean).length;

        const wordsPerMinute = 200;

        const readingMinutes =
            Math.ceil(words / wordsPerMinute);

        result.innerHTML = `
            <div class="final-result">

                <strong>
                    Reading Time:
                </strong>

                <div style="margin-top:10px;">
                    Words: ${words}<br>
                    تقریباً ${readingMinutes} منٹ
                </div>

            </div>
        `;

    });

}


// =========================================================
// 9. PASSWORD GENERATOR
// =========================================================

const generatePasswordBtn =
    document.getElementById("generatePasswordBtn");

if (generatePasswordBtn) {

    generatePasswordBtn.addEventListener("click", () => {

        const lengthInput =
            document.getElementById("passwordLength");

        const result =
            document.getElementById("passwordResult");

        if (!lengthInput || !result) return;

        let length =
            parseInt(lengthInput.value, 10);

        if (isNaN(length)) {
            length = 12;
        }

        length = Math.max(
            4,
            Math.min(length, 64)
        );

        const characters =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZ" +
            "abcdefghijklmnopqrstuvwxyz" +
            "0123456789" +
            "!@#$%^&*()_+-=[]{}";

        let password = "";

        for (let i = 0; i < length; i++) {

            const randomIndex =
                Math.floor(
                    Math.random() * characters.length
                );

            password += characters[randomIndex];
        }

        result.innerHTML = `
            <div class="final-result">

                <div style="
                    direction:ltr;
                    word-break:break-all;
                    font-weight:700;
                ">
                    ${password}
                </div>

            </div>
        `;

    });

}


// =========================================================
// 10. USERNAME GENERATOR
// =========================================================

const generateUsernameBtn =
    document.getElementById("generateUsernameBtn");

if (generateUsernameBtn) {

    generateUsernameBtn.addEventListener("click", () => {

        const input =
            document.getElementById("usernameKeyword");

        const result =
            document.getElementById("usernameResult");

        if (!input || !result) return;

        const base =
            input.value
                .trim()
                .toLowerCase()
                .replace(/[^a-z0-9]/g, "");

        const prefixes = [
            "cool",
            "smart",
            "fast",
            "pro",
            "the",
            "official",
            "real",
            "daily"
        ];

        const suffixes = [
            "01",
            "07",
            "99",
            "786",
            "123",
            "2026"
        ];

        const randomPrefix =
            prefixes[
                Math.floor(
                    Math.random() * prefixes.length
                )
            ];

        const randomSuffix =
            suffixes[
                Math.floor(
                    Math.random() * suffixes.length
                )
            ];

        let username;

        if (base) {
            username =
                randomPrefix +
                base +
                randomSuffix;
        } else {
            username =
                randomPrefix +
                "user" +
                randomSuffix;
        }

        result.innerHTML = `
            <div class="final-result">

                <div style="
                    direction:ltr;
                    font-weight:700;
                ">
                    @${username}
                </div>

            </div>
        `;

    });

}


// =========================================================
// END — TEXT TOOLS
// =========================================================
// =========================================================
// 11. RANDOM NUMBER GENERATOR
// =========================================================

const generateRandomNumberBtn =
    document.getElementById("generateRandomNumberBtn");

if (generateRandomNumberBtn) {

    generateRandomNumberBtn.addEventListener("click", () => {

        const minInput =
            document.getElementById("randomNumberMin");

        const maxInput =
            document.getElementById("randomNumberMax");

        const result =
            document.getElementById("randomNumberResult");

        if (!minInput || !maxInput || !result) return;

        const min = Number(minInput.value);
        const max = Number(maxInput.value);

        if (
            !Number.isFinite(min) ||
            !Number.isFinite(max)
        ) {
            result.innerHTML = "براہِ کرم دونوں Numbers درج کریں۔";
            return;
        }

        if (min > max) {
            result.innerHTML =
                "Minimum Number، Maximum Number سے کم ہونا چاہیے۔";
            return;
        }

        const randomNumber =
            Math.floor(
                Math.random() * (max - min + 1)
            ) + min;

        result.innerHTML = `
            <div class="final-result">

                <strong>
                    Random Number
                </strong>

                <div style="
                    margin-top:10px;
                    font-size:30px;
                    font-weight:800;
                    direction:ltr;
                ">
                    ${randomNumber}
                </div>

            </div>
        `;

    });

}


// =========================================================
// 12. RANDOM NAME PICKER
// =========================================================

const pickRandomNameBtn =
    document.getElementById("pickRandomNameBtn");

if (pickRandomNameBtn) {

    pickRandomNameBtn.addEventListener("click", () => {

        const input =
            document.getElementById("randomNamesInput");

        const result =
            document.getElementById("randomNameResult");

        if (!input || !result) return;

        const names = input.value
            .split(/\r?\n/)
            .map(name => name.trim())
            .filter(name => name !== "");

        if (!names.length) {
            result.innerHTML =
                "براہِ کرم کم از کم ایک Name درج کریں۔";
            return;
        }

        const randomIndex =
            Math.floor(
                Math.random() * names.length
            );

        const selectedName =
            names[randomIndex];

        result.innerHTML = `
            <div class="final-result">

                <strong>
                    منتخب Name:
                </strong>

                <div style="
                    margin-top:10px;
                    font-size:24px;
                    font-weight:800;
                ">
                    ${selectedName
                        .replace(/&/g, "&amp;")
                        .replace(/</g, "&lt;")
                        .replace(/>/g, "&gt;")}
                </div>

            </div>
        `;

    });

}


// =========================================================
// 13. DATE DIFFERENCE CALCULATOR
// =========================================================

const dateDifferenceBtn =
    document.getElementById("dateDifferenceBtn");

if (dateDifferenceBtn) {

    dateDifferenceBtn.addEventListener("click", () => {

        const startInput =
            document.getElementById("dateDifferenceStart");

        const endInput =
            document.getElementById("dateDifferenceEnd");

        const result =
            document.getElementById("dateDifferenceResult");

        if (!startInput || !endInput || !result) return;

        if (!startInput.value || !endInput.value) {
            result.innerHTML =
                "براہِ کرم دونوں Dates منتخب کریں۔";
            return;
        }

        const startDate =
            new Date(startInput.value + "T00:00:00");

        const endDate =
            new Date(endInput.value + "T00:00:00");

        if (
            Number.isNaN(startDate.getTime()) ||
            Number.isNaN(endDate.getTime())
        ) {
            result.innerHTML =
                "براہِ کرم درست Dates منتخب کریں۔";
            return;
        }

        if (endDate < startDate) {
            result.innerHTML =
                "End Date، Start Date کے بعد ہونی چاہیے۔";
            return;
        }

        const difference =
            endDate.getTime() -
            startDate.getTime();

        const totalDays =
            Math.floor(
                difference / (1000 * 60 * 60 * 24)
            );

        const years =
            Math.floor(totalDays / 365);

        const remainingAfterYears =
            totalDays - (years * 365);

        const months =
            Math.floor(remainingAfterYears / 30);

        const days =
            remainingAfterYears - (months * 30);

        result.innerHTML = `
            <div class="final-result">

                <strong>
                    Date Difference
                </strong>

                <div style="margin-top:12px;">
                    کل دن: ${totalDays}<br>
                    تقریباً ${years} سال، ${months} ماہ، ${days} دن
                </div>

            </div>
        `;

    });

}


// =========================================================
// 14. DAYS BETWEEN DATES
// =========================================================

const daysBetweenBtn =
    document.getElementById("daysBetweenBtn");

if (daysBetweenBtn) {

    daysBetweenBtn.addEventListener("click", () => {

        const startInput =
            document.getElementById("daysBetweenStart");

        const endInput =
            document.getElementById("daysBetweenEnd");

        const result =
            document.getElementById("daysBetweenResult");

        if (!startInput || !endInput || !result) return;

        if (!startInput.value || !endInput.value) {
            result.innerHTML =
                "براہِ کرم دونوں Dates منتخب کریں۔";
            return;
        }

        const start =
            new Date(startInput.value + "T00:00:00");

        const end =
            new Date(endInput.value + "T00:00:00");

        if (
            Number.isNaN(start.getTime()) ||
            Number.isNaN(end.getTime())
        ) {
            result.innerHTML =
                "براہِ کرم درست Dates منتخب کریں۔";
            return;
        }

        const difference =
            Math.abs(
                end.getTime() - start.getTime()
            );

        const days =
            Math.floor(
                difference / (1000 * 60 * 60 * 24)
            );

        result.innerHTML = `
            <div class="final-result">

                <strong>
                    دونوں Dates کے درمیان:
                </strong>

                <div style="
                    margin-top:10px;
                    font-size:26px;
                    font-weight:800;
                ">
                    ${days} دن
                </div>

            </div>
        `;

    });

}


// =========================================================
// 15. ADD / SUBTRACT DAYS FROM DATE
// =========================================================

const addDaysBtn =
    document.getElementById("addDaysBtn");

if (addDaysBtn) {

    addDaysBtn.addEventListener("click", () => {

        const dateInput =
            document.getElementById("addDaysDate");

        const daysInput =
            document.getElementById("addDaysNumber");

        const operation = null;

        const result =
            document.getElementById("addDaysResult");

        if (
            !dateInput ||
            !daysInput ||
            !result
        ) {
            return;
        }

        if (!dateInput.value) {
            result.innerHTML =
                "براہِ کرم Date منتخب کریں۔";
            return;
        }

        const days =
            Number(daysInput.value);

        if (
            !Number.isFinite(days) ||
            days < 0
        ) {
            result.innerHTML =
                "براہِ کرم درست Days درج کریں۔";
            return;
        }

        const date =
            new Date(dateInput.value + "T00:00:00");

        date.setDate(date.getDate() + days);

        const formattedDate =
            date.toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric"
            });

        result.innerHTML = `
            <div class="final-result">

                <strong>
                    Result Date:
                </strong>

                <div style="
                    margin-top:10px;
                    font-size:24px;
                    font-weight:800;
                    direction:ltr;
                ">
                    ${formattedDate}
                </div>

            </div>
        `;

    });

}


// =========================================================
// 16. TIME DURATION CALCULATOR
// =========================================================

const timeDurationBtn =
    document.getElementById("timeDurationBtn");

if (timeDurationBtn) {

    timeDurationBtn.addEventListener("click", () => {

        const startInput =
            document.getElementById("timeDurationStart");

        const endInput =
            document.getElementById("timeDurationEnd");

        const result =
            document.getElementById("timeDurationResult");

        if (!startInput || !endInput || !result) return;

        if (!startInput.value || !endInput.value) {
            result.innerHTML =
                "براہِ کرم Start اور End Time درج کریں۔";
            return;
        }

        const startParts =
            startInput.value.split(":").map(Number);

        const endParts =
            endInput.value.split(":").map(Number);

        let startMinutes =
            startParts[0] * 60 + startParts[1];

        let endMinutes =
            endParts[0] * 60 + endParts[1];

        if (endMinutes < startMinutes) {
            endMinutes += 24 * 60;
        }

        const difference =
            endMinutes - startMinutes;

        const hours =
            Math.floor(difference / 60);

        const minutes =
            difference % 60;

        result.innerHTML = `
            <div class="final-result">

                <strong>
                    Time Duration:
                </strong>

                <div style="
                    margin-top:10px;
                    font-size:24px;
                    font-weight:800;
                ">
                    ${hours} گھنٹے ${minutes} منٹ
                </div>

            </div>
        `;

    });

}


// =========================================================
// 17. TIME ZONE CONVERTER
// =========================================================

const timezoneConvertBtn =
    document.getElementById("timezoneConvertBtn");

if (timezoneConvertBtn) {

    timezoneConvertBtn.addEventListener("click", () => {

        const dateInput =
            document.getElementById("timezoneDate");


        const fromInput =
            document.getElementById("timezoneFrom");

        const toInput =
            document.getElementById("timezoneTo");

        const result =
            document.getElementById("timezoneResult");

        if (
            !dateInput ||
            !fromInput ||
            !toInput ||
            !result
        ) {
            return;
        }

       if (!dateInput.value) {
    result.innerHTML =
        "براہِ کرم Date اور Time درج کریں۔";
    return;
}

        try {

            const localDateTime = dateInput.value;

            const sourceDate =
                new Date(localDateTime);

            if (Number.isNaN(sourceDate.getTime())) {
                result.innerHTML =
                    "براہِ کرم درست Date اور Time درج کریں۔";
                return;
            }

            const converted =
                new Intl.DateTimeFormat("en-GB", {
                    timeZone: toInput.value,
                    dateStyle: "medium",
                    timeStyle: "medium"
                }).format(sourceDate);

            result.innerHTML = `
                <div class="final-result">

                    <strong>
                        Converted Time:
                    </strong>

                    <div style="
                        margin-top:10px;
                        direction:ltr;
                        font-weight:700;
                    ">
                        ${converted}
                    </div>

                </div>
            `;

        } catch (error) {

            result.innerHTML =
                "Time Zone تبدیل کرنے میں مسئلہ آیا۔";

        }

    });

}


// =========================================================
// 18. STOPWATCH
// =========================================================

let stopwatchInterval = null;
let stopwatchSeconds = 0;

function updateStopwatchDisplay() {

    const display =
        document.getElementById("stopwatchDisplay");

    if (!display) return;

    const hours =
        Math.floor(stopwatchSeconds / 3600);

    const minutes =
        Math.floor(
            (stopwatchSeconds % 3600) / 60
        );

    const seconds =
        stopwatchSeconds % 60;

    display.textContent =
        String(hours).padStart(2, "0") + ":" +
        String(minutes).padStart(2, "0") + ":" +
        String(seconds).padStart(2, "0");
}


const stopwatchStartBtn =
    document.getElementById("stopwatchStartBtn");

if (stopwatchStartBtn) {

    stopwatchStartBtn.addEventListener("click", () => {

        if (stopwatchInterval !== null) return;

        stopwatchInterval =
            setInterval(() => {

                stopwatchSeconds++;

                updateStopwatchDisplay();

            }, 1000);

    });

}


const stopwatchStopBtn =
    document.getElementById("stopwatchStopBtn");

if (stopwatchStopBtn) {

    stopwatchStopBtn.addEventListener("click", () => {

        if (stopwatchInterval !== null) {

            clearInterval(stopwatchInterval);

            stopwatchInterval = null;
        }

    });

}


const stopwatchResetBtn =
    document.getElementById("stopwatchResetBtn");

if (stopwatchResetBtn) {

    stopwatchResetBtn.addEventListener("click", () => {

        if (stopwatchInterval !== null) {

            clearInterval(stopwatchInterval);

            stopwatchInterval = null;
        }

        stopwatchSeconds = 0;

        updateStopwatchDisplay();

    });

}

updateStopwatchDisplay();


// =========================================================
// 19. COUNTDOWN TIMER
// =========================================================

let countdownInterval = null;
let countdownSeconds = 0;

function updateCountdownDisplay() {

    const display =
        document.getElementById("countdownDisplay");

    if (!display) return;

    const hours =
        Math.floor(countdownSeconds / 3600);

    const minutes =
        Math.floor(
            (countdownSeconds % 3600) / 60
        );

    const seconds =
        countdownSeconds % 60;

    display.textContent =
        String(hours).padStart(2, "0") + ":" +
        String(minutes).padStart(2, "0") + ":" +
        String(seconds).padStart(2, "0");
}


const countdownStartBtn =
    document.getElementById("countdownStartBtn");

if (countdownStartBtn) {

    countdownStartBtn.addEventListener("click", () => {

        const minutesInput =
            document.getElementById("countdownMinutes");

        if (!minutesInput) return;

        const minutes =
            Number(minutesInput.value);

        if (
            !Number.isFinite(minutes) ||
            minutes <= 0
        ) {
            alert("براہِ کرم درست Minutes درج کریں۔");
            return;
        }

        if (countdownInterval !== null) {
            clearInterval(countdownInterval);
        }

        countdownSeconds =
            Math.floor(minutes * 60);

        updateCountdownDisplay();

        countdownInterval =
            setInterval(() => {

                if (countdownSeconds <= 0) {

                    clearInterval(countdownInterval);

                    countdownInterval = null;

                    updateCountdownDisplay();

                    alert("⏰ Countdown مکمل ہو گیا۔");

                    return;
                }

                countdownSeconds--;

                updateCountdownDisplay();

            }, 1000);

    });

}



updateCountdownDisplay();


// =========================================================
// 20. POMODORO TIMER
// =========================================================

let pomodoroInterval = null;
let pomodoroSeconds = 25 * 60;

function updatePomodoroDisplay() {

    const display =
        document.getElementById("pomodoroDisplay");

    if (!display) return;

    const minutes =
        Math.floor(pomodoroSeconds / 60);

    const seconds =
        pomodoroSeconds % 60;

    display.textContent =
        String(minutes).padStart(2, "0") + ":" +
        String(seconds).padStart(2, "0");
}


const pomodoroStartBtn =
    document.getElementById("pomodoroStartBtn");

if (pomodoroStartBtn) {

    pomodoroStartBtn.addEventListener("click", () => {

        if (pomodoroInterval !== null) return;

        pomodoroInterval =
            setInterval(() => {

                if (pomodoroSeconds <= 0) {

                    clearInterval(pomodoroInterval);

                    pomodoroInterval = null;

                    alert("🍅 Pomodoro مکمل ہو گیا۔");

                    return;
                }

                pomodoroSeconds--;

                updatePomodoroDisplay();

            }, 1000);

    });

}


const pomodoroPauseBtn =
    document.getElementById("pomodoroPauseBtn");

if (pomodoroPauseBtn) {

    pomodoroPauseBtn.addEventListener("click", () => {

        if (pomodoroInterval !== null) {

            clearInterval(pomodoroInterval);

            pomodoroInterval = null;
        }

    });

}


const pomodoroResetBtn =
    document.getElementById("pomodoroResetBtn");

if (pomodoroResetBtn) {

    pomodoroResetBtn.addEventListener("click", () => {

        if (pomodoroInterval !== null) {

            clearInterval(pomodoroInterval);

            pomodoroInterval = null;
        }

        pomodoroSeconds = 25 * 60;

        updatePomodoroDisplay();

    });

}

updatePomodoroDisplay();


// =========================================================
// END — TOOLS 11 TO 20
// =========================================================
// =========================================================
// 21. UNIT CONVERTER
// =========================================================

const unitConverterBtn =
    document.getElementById("unitConverterBtn");

if (unitConverterBtn) {

    unitConverterBtn.addEventListener("click", () => {

        const valueInput =
            document.getElementById("unitConverterValue");

        const fromInput =
            document.getElementById("unitConverterFrom");

        const toInput =
            document.getElementById("unitConverterTo");

        const result =
            document.getElementById("unitConverterResult");

        if (
            !valueInput ||
            !fromInput ||
            !toInput ||
            !result
        ) {
            return;
        }

        const value = Number(valueInput.value);

        if (!Number.isFinite(value)) {
            result.innerHTML =
                "براہِ کرم درست Number درج کریں۔";
            return;
        }

        const units = {
            meter: 1,
            kilometer: 1000,
            centimeter: 0.01,
            millimeter: 0.001,
            mile: 1609.344,
            yard: 0.9144,
            foot: 0.3048,
            inch: 0.0254
        };

        const from = fromInput.value;
        const to = toInput.value;

        if (!units[from] || !units[to]) {
            result.innerHTML =
                "براہِ کرم درست Units منتخب کریں۔";
            return;
        }

        const meters =
            value * units[from];

        const converted =
            meters / units[to];

        result.innerHTML = `
            <div class="final-result">

                <strong>
                    Converted Result:
                </strong>

                <div style="
                    margin-top:10px;
                    font-size:24px;
                    font-weight:800;
                    direction:ltr;
                ">
                    ${converted.toLocaleString(
                        undefined,
                        {
                            maximumFractionDigits: 8
                        }
                    )}
                </div>

            </div>
        `;

    });

}


// =========================================================
// 22. LENGTH CONVERTER
// =========================================================

const lengthConvertBtn =
    document.getElementById("lengthConvertBtn");

if (lengthConvertBtn) {

    lengthConvertBtn.addEventListener("click", () => {

        const valueInput =
            document.getElementById("lengthValue");

        const fromInput =
            document.getElementById("lengthFrom");

        const toInput =
            document.getElementById("lengthTo");

        const result =
            document.getElementById("lengthResult");

        if (
            !valueInput ||
            !fromInput ||
            !toInput ||
            !result
        ) {
            return;
        }

        const value = Number(valueInput.value);

        if (!Number.isFinite(value)) {
            result.innerHTML =
                "براہِ کرم درست Length درج کریں۔";
            return;
        }

        const units = {
            meter: 1,
            kilometer: 1000,
            centimeter: 0.01,
            millimeter: 0.001,
            mile: 1609.344,
            yard: 0.9144,
            foot: 0.3048,
            inch: 0.0254
        };

        if (
            !units[fromInput.value] ||
            !units[toInput.value]
        ) {
            result.innerHTML =
                "براہِ کرم درست Units منتخب کریں۔";
            return;
        }

        const converted =
            value *
            units[fromInput.value] /
            units[toInput.value];

        result.innerHTML = `
            <div class="final-result">

                <strong>
                    Length Result:
                </strong>

                <div style="
                    margin-top:10px;
                    font-size:24px;
                    font-weight:800;
                    direction:ltr;
                ">
                    ${converted.toLocaleString(
                        undefined,
                        {
                            maximumFractionDigits: 8
                        }
                    )}
                </div>

            </div>
        `;

    });

}


// =========================================================
// 23. WEIGHT CONVERTER
// =========================================================

const weightConvertBtn =
    document.getElementById("weightConvertBtn");

if (weightConvertBtn) {

    weightConvertBtn.addEventListener("click", () => {

        const valueInput =
            document.getElementById("weightValue");

        const fromInput =
            document.getElementById("weightFrom");

        const toInput =
            document.getElementById("weightTo");

        const result =
            document.getElementById("weightResult");

        if (
            !valueInput ||
            !fromInput ||
            !toInput ||
            !result
        ) {
            return;
        }

        const value = Number(valueInput.value);

        if (!Number.isFinite(value)) {
            result.innerHTML =
                "براہِ کرم درست Weight درج کریں۔";
            return;
        }

        const units = {
            kilogram: 1,
            gram: 0.001,
            milligram: 0.000001,
            pound: 0.45359237,
            ounce: 0.028349523125,
            ton: 1000
        };

        if (
            !units[fromInput.value] ||
            !units[toInput.value]
        ) {
            result.innerHTML =
                "براہِ کرم درست Units منتخب کریں۔";
            return;
        }

        const converted =
            value *
            units[fromInput.value] /
            units[toInput.value];

        result.innerHTML = `
            <div class="final-result">

                <strong>
                    Weight Result:
                </strong>

                <div style="
                    margin-top:10px;
                    font-size:24px;
                    font-weight:800;
                    direction:ltr;
                ">
                    ${converted.toLocaleString(
                        undefined,
                        {
                            maximumFractionDigits: 8
                        }
                    )}
                </div>

            </div>
        `;

    });

}


// =========================================================
// 24. TEMPERATURE CONVERTER
// =========================================================

const temperatureConvertBtn =
    document.getElementById("temperatureConvertBtn");

if (temperatureConvertBtn) {

    temperatureConvertBtn.addEventListener("click", () => {

        const valueInput =
            document.getElementById("temperatureValue");

        const fromInput =
            document.getElementById("temperatureFrom");

        const toInput =
            document.getElementById("temperatureTo");

        const result =
            document.getElementById("temperatureResult");

        if (
            !valueInput ||
            !fromInput ||
            !toInput ||
            !result
        ) {
            return;
        }

        const value = Number(valueInput.value);

        if (!Number.isFinite(value)) {
            result.innerHTML =
                "براہِ کرم درست Temperature درج کریں۔";
            return;
        }

        let celsius;

        if (fromInput.value === "celsius") {
            celsius = value;
        }

        if (fromInput.value === "fahrenheit") {
            celsius = (value - 32) * 5 / 9;
        }

        if (fromInput.value === "kelvin") {
            celsius = value - 273.15;
        }

        let converted;

        if (toInput.value === "celsius") {
            converted = celsius;
        }

        if (toInput.value === "fahrenheit") {
            converted = (celsius * 9 / 5) + 32;
        }

        if (toInput.value === "kelvin") {
            converted = celsius + 273.15;
        }

        result.innerHTML = `
            <div class="final-result">

                <strong>
                    Temperature Result:
                </strong>

                <div style="
                    margin-top:10px;
                    font-size:24px;
                    font-weight:800;
                    direction:ltr;
                ">
                    ${converted.toFixed(4)}
                </div>

            </div>
        `;

    });

}


// =========================================================
// 25. AREA CONVERTER
// =========================================================

const areaConvertBtn =
    document.getElementById("areaConvertBtn");

if (areaConvertBtn) {

    areaConvertBtn.addEventListener("click", () => {

        const valueInput =
            document.getElementById("areaValue");

        const fromInput =
            document.getElementById("areaFrom");

        const toInput =
            document.getElementById("areaTo");

        const result =
            document.getElementById("areaResult");

        if (
            !valueInput ||
            !fromInput ||
            !toInput ||
            !result
        ) {
            return;
        }

        const value = Number(valueInput.value);

        if (!Number.isFinite(value)) {
            result.innerHTML =
                "براہِ کرم درست Area درج کریں۔";
            return;
        }

        const units = {
            squareMeter: 1,
            squareKilometer: 1000000,
            squareCentimeter: 0.0001,
            squareFoot: 0.09290304,
            squareInch: 0.00064516,
            acre: 4046.8564224,
            hectare: 10000
        };

        if (
            !units[fromInput.value] ||
            !units[toInput.value]
        ) {
            result.innerHTML =
                "براہِ کرم درست Units منتخب کریں۔";
            return;
        }

        const converted =
            value *
            units[fromInput.value] /
            units[toInput.value];

        result.innerHTML = `
            <div class="final-result">

                <strong>
                    Area Result:
                </strong>

                <div style="
                    margin-top:10px;
                    font-size:24px;
                    font-weight:800;
                    direction:ltr;
                ">
                    ${converted.toLocaleString(
                        undefined,
                        {
                            maximumFractionDigits: 8
                        }
                    )}
                </div>

            </div>
        `;

    });

}


// =========================================================
// 26. VOLUME CONVERTER
// =========================================================

const volumeConvertBtn =
    document.getElementById("volumeConvertBtn");

if (volumeConvertBtn) {

    volumeConvertBtn.addEventListener("click", () => {

        const valueInput =
            document.getElementById("volumeValue");

        const fromInput =
            document.getElementById("volumeFrom");

        const toInput =
            document.getElementById("volumeTo");

        const result =
            document.getElementById("volumeResult");

        if (
            !valueInput ||
            !fromInput ||
            !toInput ||
            !result
        ) {
            return;
        }

        const value = Number(valueInput.value);

        if (!Number.isFinite(value)) {
            result.innerHTML =
                "براہِ کرم درست Volume درج کریں۔";
            return;
        }

        const units = {
            liter: 1,
            milliliter: 0.001,
            cubicMeter: 1000,
            gallon: 3.785411784,
            quart: 0.946352946,
            pint: 0.473176473
        };

        if (
            !units[fromInput.value] ||
            !units[toInput.value]
        ) {
            result.innerHTML =
                "براہِ کرم درست Units منتخب کریں۔";
            return;
        }

        const converted =
            value *
            units[fromInput.value] /
            units[toInput.value];

        result.innerHTML = `
            <div class="final-result">

                <strong>
                    Volume Result:
                </strong>

                <div style="
                    margin-top:10px;
                    font-size:24px;
                    font-weight:800;
                    direction:ltr;
                ">
                    ${converted.toLocaleString(
                        undefined,
                        {
                            maximumFractionDigits: 8
                        }
                    )}
                </div>

            </div>
        `;

    });

}


// =========================================================
// 27. SPEED CONVERTER
// =========================================================

const speedConvertBtn =
    document.getElementById("speedConvertBtn");

if (speedConvertBtn) {

    speedConvertBtn.addEventListener("click", () => {

        const valueInput =
            document.getElementById("speedValue");

        const fromInput =
            document.getElementById("speedFrom");

        const toInput =
            document.getElementById("speedTo");

        const result =
            document.getElementById("speedResult");

        if (
            !valueInput ||
            !fromInput ||
            !toInput ||
            !result
        ) {
            return;
        }

        const value = Number(valueInput.value);

        if (!Number.isFinite(value)) {
            result.innerHTML =
                "براہِ کرم درست Speed درج کریں۔";
            return;
        }

        const units = {
            meterSecond: 1,
            kilometerHour: 0.2777777778,
            mileHour: 0.44704,
            knot: 0.5144444444
        };

        if (
            !units[fromInput.value] ||
            !units[toInput.value]
        ) {
            result.innerHTML =
                "براہِ کرم درست Units منتخب کریں۔";
            return;
        }

        const converted =
            value *
            units[fromInput.value] /
            units[toInput.value];

        result.innerHTML = `
            <div class="final-result">

                <strong>
                    Speed Result:
                </strong>

                <div style="
                    margin-top:10px;
                    font-size:24px;
                    font-weight:800;
                    direction:ltr;
                ">
                    ${converted.toLocaleString(
                        undefined,
                        {
                            maximumFractionDigits: 8
                        }
                    )}
                </div>

            </div>
        `;

    });

}


// =========================================================
// 28. DATA STORAGE CONVERTER
// =========================================================

const storageConvertBtn =
    document.getElementById("storageConvertBtn");

if (storageConvertBtn) {

    storageConvertBtn.addEventListener("click", () => {

        const valueInput =
            document.getElementById("storageValue");

        const fromInput =
            document.getElementById("storageFrom");

        const toInput =
            document.getElementById("storageTo");

        const result =
            document.getElementById("storageResult");

        if (
            !valueInput ||
            !fromInput ||
            !toInput ||
            !result
        ) {
            return;
        }

        const value = Number(valueInput.value);

        if (!Number.isFinite(value)) {
            result.innerHTML =
                "براہِ کرم درست Storage Value درج کریں۔";
            return;
        }

        const units = {
            byte: 1,
            kilobyte: 1024,
            megabyte: 1024 ** 2,
            gigabyte: 1024 ** 3,
            terabyte: 1024 ** 4
        };

        if (
            !units[fromInput.value] ||
            !units[toInput.value]
        ) {
            result.innerHTML =
                "براہِ کرم درست Storage Units منتخب کریں۔";
            return;
        }

        const converted =
            value *
            units[fromInput.value] /
            units[toInput.value];

        result.innerHTML = `
            <div class="final-result">

                <strong>
                    Storage Result:
                </strong>

                <div style="
                    margin-top:10px;
                    font-size:24px;
                    font-weight:800;
                    direction:ltr;
                ">
                    ${converted.toLocaleString(
                        undefined,
                        {
                            maximumFractionDigits: 8
                        }
                    )}
                </div>

            </div>
        `;

    });

}


// =========================================================
// 29. BINARY CONVERTER
// =========================================================

const binaryConvertBtn =
    document.getElementById("binaryConvertBtn");

if (binaryConvertBtn) {

    binaryConvertBtn.addEventListener("click", () => {

        const input =
            document.getElementById("binaryInput");

        const result =
            document.getElementById("binaryResult");

        if (!input || !result) return;

        const value =
            input.value.trim();

        if (!/^[01]+$/.test(value)) {

            result.innerHTML =
                "براہِ کرم صرف Binary digits یعنی 0 اور 1 درج کریں۔";

            return;
        }

        const decimal =
            parseInt(value, 2);

        result.innerHTML = `
            <div class="final-result">

                <strong>
                    Decimal Result:
                </strong>

                <div style="
                    margin-top:10px;
                    font-size:26px;
                    font-weight:800;
                    direction:ltr;
                ">
                    ${decimal}
                </div>

            </div>
        `;

    });

}


// =========================================================
// 30. DECIMAL TO BINARY CONVERTER
// =========================================================

const decimalBinaryBtn =
    document.getElementById("decimalBinaryBtn");

if (decimalBinaryBtn) {

    decimalBinaryBtn.addEventListener("click", () => {

        const input =
            document.getElementById("decimalBinaryInput");

        const result =
            document.getElementById("decimalBinaryResult");

        if (!input || !result) return;

        const value =
            input.value.trim();

        if (
            value === "" ||
            !/^\d+$/.test(value)
        ) {
            result.innerHTML =
                "براہِ کرم ایک درست Decimal Number درج کریں۔";
            return;
        }

        const decimal =
            Number(value);

        if (!Number.isSafeInteger(decimal)) {
            result.innerHTML =
                "Number بہت بڑا ہے۔ براہِ کرم چھوٹا Number درج کریں۔";
            return;
        }

        const binary =
            decimal.toString(2);

        result.innerHTML = `
            <div class="final-result">

                <strong>
                    Binary Result:
                </strong>

                <div style="
                    margin-top:10px;
                    font-size:26px;
                    font-weight:800;
                    direction:ltr;
                    word-break:break-all;
                ">
                    ${binary}
                </div>

            </div>
        `;

    });

}


// =========================================================
// END — TOOLS 21 TO 30
// =========================================================
// =========================================================
// 31. FRACTION CALCULATOR
// =========================================================

const fractionCalculateBtn =
    document.getElementById("fractionCalculateBtn");

if (fractionCalculateBtn) {
    fractionCalculateBtn.addEventListener("click", () => {
        const one = document.getElementById("fractionOne");
        const two = document.getElementById("fractionTwo");
        const operation = document.getElementById("fractionOperation");
        const result = document.getElementById("fractionResult");

        if (!one || !two || !operation || !result) return;

        function parseFraction(value) {
            const text = String(value || "").trim();
            if (!text) return null;
            if (text.includes("/")) {
                const parts = text.split("/");
                if (parts.length !== 2) return null;
                const n = Number(parts[0]);
                const d = Number(parts[1]);
                if (!Number.isFinite(n) || !Number.isFinite(d) || d === 0) return null;
                return { n, d };
            }
            const n = Number(text);
            return Number.isFinite(n) ? { n, d: 1 } : null;
        }

        function gcd(a, b) {
            a = Math.abs(a); b = Math.abs(b);
            while (b) [a, b] = [b, a % b];
            return a || 1;
        }

        const a = parseFraction(one.value);
        const b = parseFraction(two.value);
        if (!a || !b) {
            result.innerHTML = "براہِ کرم Fractions مثلاً 1/2 اور 3/4 درج کریں۔";
            return;
        }

        let n, d;
        const op = operation.value;
        if (op === "+" || op === "add") {
            n = a.n * b.d + b.n * a.d; d = a.d * b.d;
        } else if (op === "-" || op === "subtract") {
            n = a.n * b.d - b.n * a.d; d = a.d * b.d;
        } else if (op === "*" || op === "multiply") {
            n = a.n * b.n; d = a.d * b.d;
        } else if (op === "/" || op === "divide") {
            if (b.n === 0) { result.innerHTML = "دوسری Fraction صفر نہیں ہو سکتی۔"; return; }
            n = a.n * b.d; d = a.d * b.n;
        } else {
            result.innerHTML = "براہِ کرم Operation منتخب کریں۔";
            return;
        }

        if (d < 0) { n *= -1; d *= -1; }
        const g = gcd(n, d);
        n /= g; d /= g;
        result.innerHTML = `<div class="final-result"><strong>Result:</strong><div style="margin-top:10px;font-size:24px;font-weight:800;direction:ltr;">${n}/${d}</div></div>`;
    });
}


// =========================================================
// 32. RATIO CALCULATOR
// =========================================================

const ratioCalculateBtn =
    document.getElementById("ratioCalculateBtn");

if (ratioCalculateBtn) {

    ratioCalculateBtn.addEventListener("click", () => {

        const first =
            Number(document.getElementById("ratioFirst").value);

        const second =
            Number(document.getElementById("ratioSecond").value);

        const result =
            document.getElementById("ratioResult");

        if (!result) return;

        if (
            !Number.isFinite(first) ||
            !Number.isFinite(second)
        ) {
            result.innerHTML =
                "براہِ کرم دونوں Numbers درج کریں۔";
            return;
        }

        if (first === 0 && second === 0) {
            result.innerHTML =
                "دونوں Numbers صفر نہیں ہو سکتے۔";
            return;
        }

        function gcd(a, b) {

            a = Math.abs(a);
            b = Math.abs(b);

            while (b !== 0) {

                const temp = b;
                b = a % b;
                a = temp;

            }

            return a;
        }

        const divisor =
            gcd(first, second);

        const simpleFirst =
            first / divisor;

        const simpleSecond =
            second / divisor;

        result.innerHTML = `
            <div class="final-result">

                <strong>
                    Simplified Ratio:
                </strong>

                <div style="
                    margin-top:10px;
                    font-size:28px;
                    font-weight:800;
                    direction:ltr;
                ">
                    ${simpleFirst}:${simpleSecond}
                </div>

            </div>
        `;

    });

}


// =========================================================
// 33. AVERAGE CALCULATOR
// =========================================================

const averageCalculateBtn =
    document.getElementById("averageCalculateBtn");

if (averageCalculateBtn) {

    averageCalculateBtn.addEventListener("click", () => {

        const input =
            document.getElementById("averageInput");

        const result =
            document.getElementById("averageResult");

        if (!input || !result) return;

        const numbers =
            input.value
                .split(/[\s,]+/)
                .map(Number)
                .filter(number => Number.isFinite(number));

        if (!numbers.length) {

            result.innerHTML =
                "براہِ کرم Numbers درج کریں۔";

            return;
        }

        const total =
            numbers.reduce(
                (sum, number) => sum + number,
                0
            );

        const average =
            total / numbers.length;

        result.innerHTML = `
            <div class="final-result">

                <strong>
                    Average:
                </strong>

                <div style="
                    margin-top:10px;
                    font-size:28px;
                    font-weight:800;
                    direction:ltr;
                ">
                    ${average}
                </div>

                <div style="margin-top:8px;">
                    Total Numbers: ${numbers.length}<br>
                    Total: ${total}
                </div>

            </div>
        `;

    });

}


// =========================================================
// 34. GPA CALCULATOR
// =========================================================

const gpaCalculateBtn =
    document.getElementById("gpaCalculateBtn");

if (gpaCalculateBtn) {

    gpaCalculateBtn.addEventListener("click", () => {

        const gradesInput =
            document.getElementById("gpaInput");

        const creditsInput =
            document.getElementById("gpaCredits");

        const result =
            document.getElementById("gpaResult");

        if (
            !gradesInput ||
            !creditsInput ||
            !result
        ) {
            return;
        }

        const grades =
            gradesInput.value
                .split(/[\s,]+/)
                .map(Number)
                .filter(number => Number.isFinite(number));

        const credits =
            creditsInput.value
                .split(/[\s,]+/)
                .map(Number)
                .filter(number => Number.isFinite(number));

        if (!grades.length || !credits.length) {

            result.innerHTML =
                "براہِ کرم Grades اور Credits درج کریں۔";

            return;
        }

        if (grades.length !== credits.length) {

            result.innerHTML =
                "Grades اور Credits کی تعداد برابر ہونی چاہیے۔";

            return;
        }

        let totalPoints = 0;
        let totalCredits = 0;

        for (let i = 0; i < grades.length; i++) {

            if (credits[i] <= 0) {

                result.innerHTML =
                    "Credits صفر یا منفی نہیں ہو سکتے۔";

                return;
            }

            totalPoints +=
                grades[i] * credits[i];

            totalCredits +=
                credits[i];
        }

        const gpa =
            totalPoints / totalCredits;

        result.innerHTML = `
            <div class="final-result">

                <strong>
                    GPA:
                </strong>

                <div style="
                    margin-top:10px;
                    font-size:30px;
                    font-weight:800;
                    direction:ltr;
                ">
                    ${gpa.toFixed(2)}
                </div>

            </div>
        `;

    });

}


// =========================================================
// 35. GRADE CALCULATOR
// =========================================================

const gradeCalculateBtn =
    document.getElementById("gradeCalculateBtn");

if (gradeCalculateBtn) {

    gradeCalculateBtn.addEventListener("click", () => {

        const marksInput =
            document.getElementById("gradeObtained");

        const totalInput =
            document.getElementById("gradeTotal");

        const result =
            document.getElementById("gradeResult");

        if (
            !marksInput ||
            !totalInput ||
            !result
        ) {
            return;
        }

        const marks =
            Number(marksInput.value);

        const total =
            Number(totalInput.value);

        if (
            !Number.isFinite(marks) ||
            !Number.isFinite(total) ||
            total <= 0
        ) {
            result.innerHTML =
                "براہِ کرم درست Marks اور Total Marks درج کریں۔";
            return;
        }

        if (marks < 0 || marks > total) {

            result.innerHTML =
                "Marks، 0 اور Total Marks کے درمیان ہونے چاہئیں.";

            return;
        }

        const percentage =
            (marks / total) * 100;

        let grade;

        if (percentage >= 90) {
            grade = "A+";
        } else if (percentage >= 80) {
            grade = "A";
        } else if (percentage >= 70) {
            grade = "B";
        } else if (percentage >= 60) {
            grade = "C";
        } else if (percentage >= 50) {
            grade = "D";
        } else {
            grade = "F";
        }

        result.innerHTML = `
            <div class="final-result">

                <strong>
                    Grade Result:
                </strong>

                <div style="
                    margin-top:10px;
                    font-size:30px;
                    font-weight:800;
                ">
                    ${grade}
                </div>

                <div style="margin-top:8px;">
                    Percentage: ${percentage.toFixed(2)}%
                </div>

            </div>
        `;

    });

}


// =========================================================
// 36. PROFIT & LOSS CALCULATOR
// =========================================================

const profitLossBtn =
    document.getElementById("profitLossBtn");

if (profitLossBtn) {

    profitLossBtn.addEventListener("click", () => {

        const costInput =
            document.getElementById("costPrice");

        const sellingInput =
            document.getElementById("sellingPrice");

        const result =
            document.getElementById("profitLossResult");

        if (
            !costInput ||
            !sellingInput ||
            !result
        ) {
            return;
        }

        const cost =
            Number(costInput.value);

        const selling =
            Number(sellingInput.value);

        if (
            !Number.isFinite(cost) ||
            !Number.isFinite(selling) ||
            cost <= 0
        ) {
            result.innerHTML =
                "براہِ کرم درست Cost اور Selling Price درج کریں۔";
            return;
        }

        const difference =
            selling - cost;

        const percentage =
            Math.abs(difference / cost) * 100;

        if (difference > 0) {

            result.innerHTML = `
                <div class="final-result">

                    <strong>
                        Profit:
                    </strong>

                    <div style="
                        margin-top:10px;
                        font-size:26px;
                        font-weight:800;
                    ">
                        ${difference.toFixed(2)}
                    </div>

                    <div style="margin-top:8px;">
                        Profit Percentage:
                        ${percentage.toFixed(2)}%
                    </div>

                </div>
            `;

        } else if (difference < 0) {

            result.innerHTML = `
                <div class="final-result">

                    <strong>
                        Loss:
                    </strong>

                    <div style="
                        margin-top:10px;
                        font-size:26px;
                        font-weight:800;
                    ">
                        ${Math.abs(difference).toFixed(2)}
                    </div>

                    <div style="margin-top:8px;">
                        Loss Percentage:
                        ${percentage.toFixed(2)}%
                    </div>

                </div>
            `;

        } else {

            result.innerHTML = `
                <div class="final-result">

                    <strong>
                        No Profit, No Loss
                    </strong>

                    <div style="margin-top:8px;">
                        Selling Price اور Cost برابر ہیں۔
                    </div>

                </div>
            `;
        }

    });

}


// =========================================================
// 37. SIMPLE INTEREST CALCULATOR
// =========================================================

const simpleInterestBtn =
    document.getElementById("simpleInterestBtn");

if (simpleInterestBtn) {

    simpleInterestBtn.addEventListener("click", () => {

        const principal =
            Number(
                document.getElementById("simpleInterestPrincipal").value
            );

        const rate =
            Number(
                document.getElementById("simpleInterestRate").value
            );

        const time =
            Number(
                document.getElementById("simpleInterestTime").value
            );

        const result =
            document.getElementById("simpleInterestResult");

        if (!result) return;

        if (
            !Number.isFinite(principal) ||
            !Number.isFinite(rate) ||
            !Number.isFinite(time) ||
            principal < 0 ||
            rate < 0 ||
            time < 0
        ) {
            result.innerHTML =
                "براہِ کرم درست values درج کریں۔";
            return;
        }

        const interest =
            (principal * rate * time) / 100;

        const total =
            principal + interest;

        result.innerHTML = `
            <div class="final-result">

                <strong>
                    Simple Interest:
                </strong>

                <div style="
                    margin-top:10px;
                    font-size:25px;
                    font-weight:800;
                    direction:ltr;
                ">
                    ${interest.toFixed(2)}
                </div>

                <div style="margin-top:8px;">
                    Total Amount:
                    ${total.toFixed(2)}
                </div>

            </div>
        `;

    });

}


// =========================================================
// 38. COMPOUND INTEREST CALCULATOR
// =========================================================

const compoundInterestBtn =
    document.getElementById("compoundInterestBtn");

if (compoundInterestBtn) {

    compoundInterestBtn.addEventListener("click", () => {

        const principal =
            Number(
                document.getElementById("compoundPrincipal").value
            );

        const rate =
            Number(
                document.getElementById("compoundRate").value
            );

        const time =
            Number(
                document.getElementById("compoundTime").value
            );

        const frequency =
            Number(
                document.getElementById("compoundFrequency").value
            );

        const result =
            document.getElementById("compoundInterestResult");

        if (!result) return;

        if (
            !Number.isFinite(principal) ||
            !Number.isFinite(rate) ||
            !Number.isFinite(time) ||
            !Number.isFinite(frequency) ||
            principal < 0 ||
            rate < 0 ||
            time < 0 ||
            frequency <= 0
        ) {
            result.innerHTML =
                "براہِ کرم درست values درج کریں۔";
            return;
        }

        const amount =
            principal *
            Math.pow(
                1 + (rate / 100) / frequency,
                frequency * time
            );

        const interest =
            amount - principal;

        result.innerHTML = `
            <div class="final-result">

                <strong>
                    Compound Interest:
                </strong>

                <div style="
                    margin-top:10px;
                    font-size:25px;
                    font-weight:800;
                    direction:ltr;
                ">
                    ${interest.toFixed(2)}
                </div>

                <div style="margin-top:8px;">
                    Total Amount:
                    ${amount.toFixed(2)}
                </div>

            </div>
        `;

    });

}


// =========================================================
// 39. TIP CALCULATOR
// =========================================================

const tipCalculateBtn =
    document.getElementById("tipCalculateBtn");

if (tipCalculateBtn) {

    tipCalculateBtn.addEventListener("click", () => {

        const bill =
            Number(
                document.getElementById("tipBill").value
            );

        const percentage =
            Number(
                document.getElementById("tipPercent").value
            );

        const result =
            document.getElementById("tipResult");

        if (!result) return;

        if (
            !Number.isFinite(bill) ||
            !Number.isFinite(percentage) ||
            bill < 0 ||
            percentage < 0
        ) {
            result.innerHTML =
                "براہِ کرم درست Bill اور Tip Percentage درج کریں۔";
            return;
        }

        const tip =
            bill * percentage / 100;

        const total =
            bill + tip;

        result.innerHTML = `
            <div class="final-result">

                <strong>
                    Tip Amount:
                </strong>

                <div style="
                    margin-top:10px;
                    font-size:25px;
                    font-weight:800;
                    direction:ltr;
                ">
                    ${tip.toFixed(2)}
                </div>

                <div style="margin-top:8px;">
                    Total Bill:
                    ${total.toFixed(2)}
                </div>

            </div>
        `;

    });

}


// =========================================================
// 40. SPLIT BILL CALCULATOR
// =========================================================

const splitBillBtn =
    document.getElementById("splitBillBtn");

if (splitBillBtn) {

    splitBillBtn.addEventListener("click", () => {

        const bill =
            Number(
                document.getElementById("splitBillAmount").value
            );

        const people =
            Number(
                document.getElementById("splitBillPeople").value
            );

        const tipPercent = 0;

        const result =
            document.getElementById("splitBillResult");

        if (!result) return;

        if (
            !Number.isFinite(bill) ||
            !Number.isFinite(people) ||
            !Number.isFinite(tipPercent) ||
            bill < 0 ||
            people <= 0 ||
            tipPercent < 0
        ) {
            result.innerHTML =
                "براہِ کرم درست Bill، People اور Tip درج کریں۔";
            return;
        }

        const tip =
            bill * tipPercent / 100;

        const total =
            bill + tip;

        const perPerson =
            total / people;

        result.innerHTML = `
            <div class="final-result">

                <strong>
                    Bill Split Result:
                </strong>

                <div style="margin-top:10px;">
                    Total Bill:
                    ${total.toFixed(2)}
                </div>

                <div style="
                    margin-top:8px;
                    font-size:26px;
                    font-weight:800;
                    direction:ltr;
                ">
                    فی شخص: ${perPerson.toFixed(2)}
                </div>

            </div>
        `;

    });

}


// =========================================================
// END — TOOLS 31 TO 40
// =========================================================
// =========================================================
// 41. CURRENCY CALCULATOR
// =========================================================

const currencyCalculateBtn =
    document.getElementById("currencyCalculateBtn");

if (currencyCalculateBtn) {

    currencyCalculateBtn.addEventListener("click", () => {

        const amount =
            Number(
                document.getElementById("currencyAmount").value
            );

        const rate =
            Number(
                document.getElementById("currencyRate").value
            );

        const result =
            document.getElementById("currencyResult");

        if (!result) return;

        if (
            !Number.isFinite(amount) ||
            !Number.isFinite(rate) ||
            amount < 0 ||
            rate <= 0
        ) {
            result.innerHTML =
                "براہِ کرم درست Amount اور Exchange Rate درج کریں۔";
            return;
        }

        const converted =
            amount * rate;

        result.innerHTML = `
            <div class="final-result">

                <strong>
                    Converted Amount:
                </strong>

                <div style="
                    margin-top:10px;
                    font-size:28px;
                    font-weight:800;
                    direction:ltr;
                ">
                    ${converted.toLocaleString(
                        undefined,
                        {
                            maximumFractionDigits: 4
                        }
                    )}
                </div>

                <div style="margin-top:8px;">
                    Exchange Rate: ${rate}
                </div>

            </div>
        `;

    });

}


// =========================================================
// 42. AGE FROM YEAR CALCULATOR
// =========================================================

const ageYearBtn = document.getElementById("ageYearBtn");
if (ageYearBtn) {
    ageYearBtn.addEventListener("click", () => {
        const birth = Number(document.getElementById("birthYearInput")?.value);
        const result = document.getElementById("ageYearResult");
        const currentYear = new Date().getFullYear();
        if (!result || !Number.isInteger(birth) || birth < 1900 || birth > currentYear) {
            if (result) result.innerHTML = "براہِ کرم درست Birth Year درج کریں۔";
            return;
        }
        result.innerHTML = `<div class="final-result"><strong>عمر:</strong> ${currentYear - birth} سال</div>`;
    });
}


// =========================================================
// 43. BMI CALCULATOR
// =========================================================

const bmiCalculateBtn =
    document.getElementById("bmiCalculateBtn");

if (bmiCalculateBtn) {

    bmiCalculateBtn.addEventListener("click", () => {

        const weight =
            Number(
                document.getElementById("bmiWeight").value
            );

        const height =
            Number(
                document.getElementById("bmiHeight").value
            );

        const result =
            document.getElementById("bmiResult");

        if (!result) return;

        if (
            !Number.isFinite(weight) ||
            !Number.isFinite(height) ||
            weight <= 0 ||
            height <= 0
        ) {
            result.innerHTML =
                "براہِ کرم درست Weight اور Height درج کریں۔";
            return;
        }

        const heightMeters =
            height / 100;

        const bmi =
            weight /
            (heightMeters * heightMeters);

        let category;

        if (bmi < 18.5) {
            category = "Underweight";
        } else if (bmi < 25) {
            category = "Normal Range";
        } else if (bmi < 30) {
            category = "Overweight";
        } else {
            category = "Obesity Range";
        }

        result.innerHTML = `
            <div class="final-result">

                <strong>
                    BMI:
                </strong>

                <div style="
                    margin-top:10px;
                    font-size:30px;
                    font-weight:800;
                    direction:ltr;
                ">
                    ${bmi.toFixed(1)}
                </div>

                <div style="margin-top:8px;">
                    Category: ${category}
                </div>

            </div>
        `;

    });

}


// =========================================================
// 44. BMR CALCULATOR
// =========================================================

const bmrCalculateBtn =
    document.getElementById("bmrCalculateBtn");

if (bmrCalculateBtn) {

    bmrCalculateBtn.addEventListener("click", () => {

        const weight =
            Number(
                document.getElementById("bmrWeight").value
            );

        const height =
            Number(
                document.getElementById("bmrHeight").value
            );

        const age =
            Number(
                document.getElementById("bmrAge").value
            );

        const gender =
            document.getElementById("bmrGender");

        const result =
            document.getElementById("bmrResult");

        if (
            !gender ||
            !result
        ) {
            return;
        }

        if (
            !Number.isFinite(weight) ||
            !Number.isFinite(height) ||
            !Number.isFinite(age) ||
            weight <= 0 ||
            height <= 0 ||
            age <= 0
        ) {
            result.innerHTML =
                "براہِ کرم Weight، Height اور Age درست درج کریں۔";
            return;
        }

        let bmr;

        if (gender.value === "female") {

            bmr =
                (10 * weight) +
                (6.25 * height) -
                (5 * age) -
                161;

        } else {

            bmr =
                (10 * weight) +
                (6.25 * height) -
                (5 * age) +
                5;
        }

        result.innerHTML = `
            <div class="final-result">

                <strong>
                    Estimated BMR:
                </strong>

                <div style="
                    margin-top:10px;
                    font-size:28px;
                    font-weight:800;
                    direction:ltr;
                ">
                    ${Math.round(bmr)} calories/day
                </div>

            </div>
        `;

    });

}


// =========================================================
// 45. CALORIE CALCULATOR
// =========================================================

const calorieCalculateBtn = document.getElementById("calorieCalculateBtn");
if (calorieCalculateBtn) {
    calorieCalculateBtn.addEventListener("click", () => {
        const weight = Number(document.getElementById("calorieWeight")?.value);
        const height = Number(document.getElementById("calorieHeight")?.value);
        const age = Number(document.getElementById("calorieAge")?.value);
        const activity = document.getElementById("calorieActivity")?.value;
        const result = document.getElementById("calorieResult");
        if (!result || !Number.isFinite(weight) || !Number.isFinite(height) || !Number.isFinite(age) || weight<=0 || height<=0 || age<=0) {
            if (result) result.textContent = "براہِ کرم Weight, Height اور Age درست درج کریں۔";
            return;
        }
        const factors = { sedentary:1.2, light:1.375, moderate:1.55, active:1.725, veryActive:1.9 };
        const factor = factors[activity] || 1.2;
        const bmr = (10*weight) + (6.25*height) - (5*age) + 5;
        const calories = bmr * factor;
        result.innerHTML = `<div class="final-result"><strong>Estimated Daily Calories:</strong><div style="margin-top:10px;font-size:28px;font-weight:800;direction:ltr;">${Math.round(calories)} kcal</div></div>`;
    });
}


// =========================================================
// 46. WATER INTAKE CALCULATOR
// =========================================================

const waterCalculateBtn =
    document.getElementById("waterCalculateBtn");

if (waterCalculateBtn) {

    waterCalculateBtn.addEventListener("click", () => {

        const weight =
            Number(
                document.getElementById("waterWeight").value
            );

        const result =
            document.getElementById("waterResult");

        if (!result) return;

        if (
            !Number.isFinite(weight) ||
            weight <= 0
        ) {
            result.innerHTML =
                "براہِ کرم درست Weight درج کریں۔";
            return;
        }

        const milliliters =
            weight * 35;

        const liters =
            milliliters / 1000;

        result.innerHTML = `
            <div class="final-result">

                <strong>
                    Estimated Daily Water:
                </strong>

                <div style="
                    margin-top:10px;
                    font-size:28px;
                    font-weight:800;
                    direction:ltr;
                ">
                    ${liters.toFixed(2)} Liters
                </div>

                <div style="margin-top:8px;">
                    تقریباً ${Math.round(milliliters)} ml روزانہ
                </div>

            </div>
        `;

    });

}


// =========================================================
// 47. PREGNANCY DUE DATE CALCULATOR
// =========================================================

const pregnancyDueBtn =
    document.getElementById("pregnancyDueBtn");

if (pregnancyDueBtn) {

    pregnancyDueBtn.addEventListener("click", () => {

        const dateInput =
            document.getElementById("pregnancyLmp");

        const result =
            document.getElementById("pregnancyDueResult");

        if (!dateInput || !result) return;

        if (!dateInput.value) {
            result.innerHTML =
                "براہِ کرم تاریخ منتخب کریں۔";
            return;
        }

        const startDate =
            new Date(
                dateInput.value + "T00:00:00"
            );

        if (Number.isNaN(startDate.getTime())) {
            result.innerHTML =
                "براہِ کرم درست تاریخ منتخب کریں۔";
            return;
        }

        const dueDate =
            new Date(startDate);

        dueDate.setDate(
            dueDate.getDate() + 280
        );

        const formattedDate =
            dueDate.toLocaleDateString(
                "en-GB",
                {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric"
                }
            );

        result.innerHTML = `
            <div class="final-result">

                <strong>
                    Estimated Due Date:
                </strong>

                <div style="
                    margin-top:10px;
                    font-size:25px;
                    font-weight:800;
                    direction:ltr;
                ">
                    ${formattedDate}
                </div>

                <div style="
                    margin-top:10px;
                    color:var(--muted);
                ">
                    یہ صرف ایک اندازاً تاریخ ہے، طبی تشخیص نہیں۔
                </div>

            </div>
        `;

    });

}


// =========================================================
// 48. FUEL COST CALCULATOR
// =========================================================

const fuelCostBtn =
    document.getElementById("fuelCostBtn");

if (fuelCostBtn) {

    fuelCostBtn.addEventListener("click", () => {

        const distance =
            Number(
                document.getElementById("fuelDistance").value
            );

        const mileage =
            Number(
                document.getElementById("fuelMileage").value
            );

        const price =
            Number(
                document.getElementById("fuelPrice").value
            );

        const result =
            document.getElementById("fuelCostResult");

        if (!result) return;

        if (
            !Number.isFinite(distance) ||
            !Number.isFinite(mileage) ||
            !Number.isFinite(price) ||
            distance < 0 ||
            mileage <= 0 ||
            price < 0
        ) {
            result.innerHTML =
                "براہِ کرم Distance، Mileage اور Fuel Price درست درج کریں۔";
            return;
        }

        const liters =
            distance / mileage;

        const totalCost =
            liters * price;

        result.innerHTML = `
            <div class="final-result">

                <strong>
                    Estimated Fuel Cost:
                </strong>

                <div style="
                    margin-top:10px;
                    font-size:28px;
                    font-weight:800;
                    direction:ltr;
                ">
                    ${totalCost.toFixed(2)}
                </div>

                <div style="margin-top:8px;">
                    Estimated Fuel:
                    ${liters.toFixed(2)} Liters
                </div>

            </div>
        `;

    });

}


// =========================================================
// 49. ELECTRICITY BILL CALCULATOR
// =========================================================

const electricityBillBtn =
    document.getElementById("electricityBillBtn");

if (electricityBillBtn) {

    electricityBillBtn.addEventListener("click", () => {

        const units =
            Number(
                document.getElementById("electricityUnits").value
            );

        const rate =
            Number(
                document.getElementById("electricityRate").value
            );

        const fixedCharges = 0;

        const result =
            document.getElementById("electricityBillResult");

        if (!result) return;

        if (
            !Number.isFinite(units) ||
            !Number.isFinite(rate) ||
            !Number.isFinite(fixedCharges) ||
            units < 0 ||
            rate < 0 ||
            fixedCharges < 0
        ) {
            result.innerHTML =
                "براہِ کرم Units، Rate اور Fixed Charges درست درج کریں۔";
            return;
        }

        const energyCharges =
            units * rate;

        const total =
            energyCharges + fixedCharges;

        result.innerHTML = `
            <div class="final-result">

                <strong>
                    Estimated Electricity Bill:
                </strong>

                <div style="
                    margin-top:10px;
                    font-size:28px;
                    font-weight:800;
                    direction:ltr;
                ">
                    ${total.toFixed(2)}
                </div>

                <div style="margin-top:8px;">
                    Energy Charges:
                    ${energyCharges.toFixed(2)}
                    <br>
                    Fixed Charges:
                    ${fixedCharges.toFixed(2)}
                </div>

            </div>
        `;

    });

}


// =========================================================
// 50. PERCENTAGE CHANGE CALCULATOR
// =========================================================

const percentageChangeBtn =
    document.getElementById("percentageChangeBtn");

if (percentageChangeBtn) {

    percentageChangeBtn.addEventListener("click", () => {

        const oldValue =
            Number(
                document.getElementById("percentageChangeOld").value
            );

        const newValue =
            Number(
                document.getElementById("percentageChangeNew").value
            );

        const result =
            document.getElementById("percentageChangeResult");

        if (!result) return;

        if (
            !Number.isFinite(oldValue) ||
            !Number.isFinite(newValue) ||
            oldValue === 0
        ) {
            result.innerHTML =
                "براہِ کرم درست Old Value اور New Value درج کریں۔";
            return;
        }

        const change =
            newValue - oldValue;

        const percentage =
            (change / Math.abs(oldValue)) * 100;

        let type;

        if (change > 0) {
            type = "اضافہ";
        } else if (change < 0) {
            type = "کمی";
        } else {
            type = "کوئی تبدیلی نہیں";
        }

        result.innerHTML = `
            <div class="final-result">

                <strong>
                    Percentage Change:
                </strong>

                <div style="
                    margin-top:10px;
                    font-size:28px;
                    font-weight:800;
                    direction:ltr;
                ">
                    ${Math.abs(percentage).toFixed(2)}%
                </div>

                <div style="margin-top:8px;">
                    ${type}
                </div>

            </div>
        `;

    });

}


// =========================================================
// END — TOOLS 41 TO 50
// =========================================================
// ==================== STUDY TOOL JAVASCRIPT — 1 TO 5 ====================

// 1. Math Solver
const solveMathBtn = document.getElementById("solveMathBtn");

if (solveMathBtn) {
    solveMathBtn.addEventListener("click", () => {
        const input = document.getElementById("mathSolverInput");
        const result = document.getElementById("mathSolverResult");

        const expression = input.value.trim();

        if (!expression) {
            result.innerHTML = "❌ براہِ کرم Math Question درج کریں۔";
            return;
        }

        try {
            if (!/^[0-9+\-*/().%\s]+$/.test(expression)) {
                result.innerHTML = "❌ صرف Numbers اور بنیادی Math Operators استعمال کریں۔";
                return;
            }

            const answer = Function(
                '"use strict"; return (' + expression + ')'
            )();

            if (!Number.isFinite(answer)) {
                result.innerHTML = "❌ یہ حساب درست طور پر حل نہیں ہو سکا۔";
                return;
            }

            result.innerHTML = `
                <div>
                    <strong>جواب:</strong>
                    <div style="margin-top:10px;font-size:24px;font-weight:800;direction:ltr;">
                        ${answer}
                    </div>
                </div>
            `;
        } catch (error) {
            result.innerHTML = "❌ براہِ کرم درست Math Expression درج کریں۔";
        }
    });
}


// 2. Fraction Simplifier
const simplifyFractionBtn = document.getElementById("simplifyFractionBtn");

if (simplifyFractionBtn) {
    simplifyFractionBtn.addEventListener("click", () => {
        const numerator = Number(
            document.getElementById("fractionSimplifierNumerator").value
        );

        const denominator = Number(
            document.getElementById("fractionSimplifierDenominator").value
        );

        const result = document.getElementById("fractionSimplifierResult");

        if (!Number.isFinite(numerator) || !Number.isFinite(denominator)) {
            result.innerHTML = "❌ دونوں Numbers درج کریں۔";
            return;
        }

        if (denominator === 0) {
            result.innerHTML = "❌ Denominator صفر نہیں ہو سکتا۔";
            return;
        }

        function gcd(a, b) {
            a = Math.abs(a);
            b = Math.abs(b);

            while (b !== 0) {
                const temp = b;
                b = a % b;
                a = temp;
            }

            return a;
        }

        const divisor = gcd(numerator, denominator);

        let simpleNumerator = numerator / divisor;
        let simpleDenominator = denominator / divisor;

        if (simpleDenominator < 0) {
            simpleNumerator *= -1;
            simpleDenominator *= -1;
        }

        result.innerHTML = `
            <div>
                <strong>Simplified Fraction:</strong>
                <div style="margin-top:10px;font-size:26px;font-weight:800;direction:ltr;">
                    ${simpleNumerator} / ${simpleDenominator}
                </div>
            </div>
        `;
    });
}


// 3. Geometry Calculator
const calculateGeometryBtn = document.getElementById("calculateGeometryBtn");

if (calculateGeometryBtn) {
    calculateGeometryBtn.addEventListener("click", () => {
        const shape = document.getElementById("geometryShape").value;
        const value1 = Number(
            document.getElementById("geometryValue1").value
        );
        const value2 = Number(
            document.getElementById("geometryValue2").value
        );

        const result = document.getElementById("geometryResult");

        if (!Number.isFinite(value1) || value1 <= 0) {
            result.innerHTML = "❌ براہِ کرم درست Value درج کریں۔";
            return;
        }

        let area = 0;
        let perimeter = 0;
        let shapeName = "";

        if (shape === "square") {
            shapeName = "Square";
            area = value1 * value1;
            perimeter = 4 * value1;
        }

        if (shape === "rectangle") {
            shapeName = "Rectangle";

            if (!Number.isFinite(value2) || value2 <= 0) {
                result.innerHTML = "❌ Rectangle کے لیے دونوں Values درج کریں۔";
                return;
            }

            area = value1 * value2;
            perimeter = 2 * (value1 + value2);
        }

        if (shape === "triangle") {
            shapeName = "Triangle";

            if (!Number.isFinite(value2) || value2 <= 0) {
                result.innerHTML = "❌ Triangle کے لیے Base اور Height درج کریں۔";
                return;
            }

            area = 0.5 * value1 * value2;
        }

        if (shape === "circle") {
            shapeName = "Circle";
            area = Math.PI * value1 * value1;
            perimeter = 2 * Math.PI * value1;
        }

        result.innerHTML = `
            <div>
                <strong>${shapeName}</strong>

                <div style="margin-top:10px;">
                    Area:
                    <strong>${area.toFixed(2)}</strong>
                </div>

                ${
                    perimeter > 0
                        ? `
                            <div style="margin-top:8px;">
                                Perimeter / Circumference:
                                <strong>${perimeter.toFixed(2)}</strong>
                            </div>
                        `
                        : ""
                }
            </div>
        `;
    });
}


// 4. Pythagorean Calculator
const calculatePythagoreanBtn =
    document.getElementById("calculatePythagoreanBtn");

if (calculatePythagoreanBtn) {
    calculatePythagoreanBtn.addEventListener("click", () => {
        const sideA = Number(
            document.getElementById("pythagoreanSideA").value
        );

        const sideB = Number(
            document.getElementById("pythagoreanSideB").value
        );

        const result = document.getElementById("pythagoreanResult");

        if (!Number.isFinite(sideA) || sideA <= 0 ||
            !Number.isFinite(sideB) || sideB <= 0) {
            result.innerHTML =
                "❌ دونوں Sides کی درست Values درج کریں۔";
            return;
        }

        const hypotenuse = Math.sqrt(
            Math.pow(sideA, 2) + Math.pow(sideB, 2)
        );

        result.innerHTML = `
            <div>
                <strong>Hypotenuse:</strong>

                <div style="margin-top:10px;font-size:26px;font-weight:800;direction:ltr;">
                    ${hypotenuse.toFixed(2)}
                </div>

                <div style="margin-top:8px;color:var(--muted);">
                    Formula: c² = a² + b²
                </div>
            </div>
        `;
    });
}


// 5. Prime Number Checker
const checkPrimeBtn = document.getElementById("checkPrimeBtn");

if (checkPrimeBtn) {
    checkPrimeBtn.addEventListener("click", () => {
        const input = Number(
            document.getElementById("primeNumberInput").value
        );

        const result = document.getElementById("primeNumberResult");

        if (!Number.isInteger(input) || input < 0) {
            result.innerHTML =
                "❌ براہِ کرم ایک درست مثبت Integer درج کریں۔";
            return;
        }

        if (input < 2) {
            result.innerHTML = `
                <strong>${input}</strong> Prime Number نہیں ہے۔
            `;
            return;
        }

        let isPrime = true;

        for (let i = 2; i <= Math.sqrt(input); i++) {
            if (input % i === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            result.innerHTML = `
                <div style="font-size:20px;font-weight:800;">
                    ✅ ${input} ایک Prime Number ہے۔
                </div>
            `;
        } else {
            result.innerHTML = `
                <div style="font-size:20px;font-weight:800;">
                    ❌ ${input} Prime Number نہیں ہے۔
                </div>
            `;
        }
    });
}

// ==================== END STUDY TOOL JAVASCRIPT — 1 TO 5 ====================
// ==================== STUDY TOOL JAVASCRIPT — 6 TO 10 ====================

// 6. Factors & Multiples Finder
const findFactorsBtn = document.getElementById("findFactorsBtn");

if (findFactorsBtn) {
    findFactorsBtn.addEventListener("click", () => {
        const input = Number(
            document.getElementById("factorsNumberInput").value
        );

        const result = document.getElementById("factorsMultiplesResult");

        if (!Number.isInteger(input) || input <= 0) {
            result.innerHTML =
                "❌ براہِ کرم ایک مثبت Integer درج کریں۔";
            return;
        }

        const factors = [];

        for (let i = 1; i <= input; i++) {
            if (input % i === 0) {
                factors.push(i);
            }
        }

        const multiples = [];

        for (let i = 1; i <= 10; i++) {
            multiples.push(input * i);
        }

        result.innerHTML = `
            <div>
                <div>
                    <strong>Factors:</strong>
                    <div style="margin-top:8px;direction:ltr;">
                        ${factors.join(", ")}
                    </div>
                </div>

                <div style="margin-top:15px;">
                    <strong>First 10 Multiples:</strong>
                    <div style="margin-top:8px;direction:ltr;">
                        ${multiples.join(", ")}
                    </div>
                </div>
            </div>
        `;
    });
}


// 7. Statistics Calculator
const calculateStatisticsBtn =
    document.getElementById("calculateStatisticsBtn");

if (calculateStatisticsBtn) {
    calculateStatisticsBtn.addEventListener("click", () => {
        const input = document.getElementById("statisticsInput").value;
        const result = document.getElementById("statisticsResult");

        const numbers = input
            .split(/[\s,]+/)
            .map(Number)
            .filter(number => Number.isFinite(number));

        if (!numbers.length) {
            result.innerHTML =
                "❌ براہِ کرم Numbers درج کریں۔";
            return;
        }

        const sorted = [...numbers].sort((a, b) => a - b);

        const sum = numbers.reduce(
            (total, number) => total + number,
            0
        );

        const mean = sum / numbers.length;

        let median;

        if (sorted.length % 2 === 0) {
            const middle = sorted.length / 2;

            median =
                (sorted[middle - 1] + sorted[middle]) / 2;
        } else {
            median =
                sorted[Math.floor(sorted.length / 2)];
        }

        const frequency = {};

        numbers.forEach(number => {
            frequency[number] =
                (frequency[number] || 0) + 1;
        });

        const maxFrequency =
            Math.max(...Object.values(frequency));

        let mode = "کوئی واضح Mode نہیں";

        if (maxFrequency > 1) {
            const modes = Object.keys(frequency)
                .filter(number => frequency[number] === maxFrequency);

            mode = modes.join(", ");
        }

        result.innerHTML = `
            <div>
                <div>
                    <strong>Count:</strong>
                    ${numbers.length}
                </div>

                <div style="margin-top:8px;">
                    <strong>Mean:</strong>
                    ${mean.toFixed(2)}
                </div>

                <div style="margin-top:8px;">
                    <strong>Median:</strong>
                    ${median.toFixed(2)}
                </div>

                <div style="margin-top:8px;">
                    <strong>Mode:</strong>
                    ${mode}
                </div>

                <div style="margin-top:8px;">
                    <strong>Sum:</strong>
                    ${sum}
                </div>
            </div>
        `;
    });
}


// 8. Standard Deviation Calculator
const calculateStandardDeviationBtn =
    document.getElementById("calculateStandardDeviationBtn");

if (calculateStandardDeviationBtn) {
    calculateStandardDeviationBtn.addEventListener("click", () => {
        const input =
            document.getElementById("standardDeviationInput").value;

        const result =
            document.getElementById("standardDeviationResult");

        const numbers = input
            .split(/[\s,]+/)
            .map(Number)
            .filter(number => Number.isFinite(number));

        if (!numbers.length) {
            result.innerHTML =
                "❌ براہِ کرم Numbers درج کریں۔";
            return;
        }

        const mean =
            numbers.reduce(
                (total, number) => total + number,
                0
            ) / numbers.length;

        const variance =
            numbers.reduce(
                (total, number) =>
                    total + Math.pow(number - mean, 2),
                0
            ) / numbers.length;

        const standardDeviation =
            Math.sqrt(variance);

        result.innerHTML = `
            <div>
                <div>
                    <strong>Mean:</strong>
                    ${mean.toFixed(4)}
                </div>

                <div style="margin-top:10px;">
                    <strong>Variance:</strong>
                    ${variance.toFixed(4)}
                </div>

                <div style="margin-top:10px;font-size:22px;">
                    <strong>Standard Deviation:</strong>
                    ${standardDeviation.toFixed(4)}
                </div>
            </div>
        `;
    });
}


// 9. LCM & GCD Calculator
const calculateLcmGcdBtn =
    document.getElementById("calculateLcmGcdBtn");

if (calculateLcmGcdBtn) {
    calculateLcmGcdBtn.addEventListener("click", () => {
        const number1 =
            Number(document.getElementById("lcmGcdNumber1").value);

        const number2 =
            Number(document.getElementById("lcmGcdNumber2").value);

        const result =
            document.getElementById("lcmGcdResult");

        if (
            !Number.isInteger(number1) ||
            !Number.isInteger(number2) ||
            number1 === 0 ||
            number2 === 0
        ) {
            result.innerHTML =
                "❌ براہِ کرم دو درست Integers درج کریں۔";
            return;
        }

        function gcd(a, b) {
            a = Math.abs(a);
            b = Math.abs(b);

            while (b !== 0) {
                const temp = b;
                b = a % b;
                a = temp;
            }

            return a;
        }

        const gcdValue = gcd(number1, number2);

        const lcmValue =
            Math.abs((number1 * number2) / gcdValue);

        result.innerHTML = `
            <div>
                <div style="font-size:20px;">
                    <strong>GCD:</strong>
                    ${gcdValue}
                </div>

                <div style="margin-top:12px;font-size:20px;">
                    <strong>LCM:</strong>
                    ${lcmValue}
                </div>
            </div>
        `;
    });
}


// 10. Number System Converter
const convertNumberSystemBtn =
    document.getElementById("convertNumberSystemBtn");

if (convertNumberSystemBtn) {
    convertNumberSystemBtn.addEventListener("click", () => {
        const input =
            document.getElementById("numberSystemInput").value.trim();

        const fromBase =
            Number(document.getElementById("numberSystemFrom").value);

        const toBase =
            Number(document.getElementById("numberSystemTo").value);

        const result =
            document.getElementById("numberSystemResult");

        if (!input) {
            result.innerHTML =
                "❌ براہِ کرم Number درج کریں۔";
            return;
        }

        const validCharacters = {
            2: /^[01]+$/,
            8: /^[0-7]+$/,
            10: /^\d+$/,
            16: /^[0-9a-fA-F]+$/
        };

        if (!validCharacters[fromBase].test(input)) {
            result.innerHTML =
                "❌ دیے گئے Number کا منتخب Base درست نہیں ہے۔";
            return;
        }

        const decimalValue =
            parseInt(input, fromBase);

        if (!Number.isSafeInteger(decimalValue)) {
            result.innerHTML =
                "❌ Number بہت بڑا ہے۔";
            return;
        }

        const convertedValue =
            decimalValue.toString(toBase).toUpperCase();

        result.innerHTML = `
            <div>
                <div>
                    <strong>Original:</strong>
                    <span style="direction:ltr;display:inline-block;">
                        ${input}
                    </span>
                </div>

                <div style="margin-top:10px;font-size:24px;">
                    <strong>Result:</strong>
                    <span style="direction:ltr;display:inline-block;font-weight:800;">
                        ${convertedValue}
                    </span>
                </div>
            </div>
        `;
    });
}

// ==================== END STUDY TOOL JAVASCRIPT — 6 TO 10 ====================
// ==================== STUDY TOOL JAVASCRIPT — 11 TO 15 ====================

// 11. Study Timer
const startStudyTimerBtn =
    document.getElementById("startStudyTimerBtn");

const pauseStudyTimerBtn =
    document.getElementById("pauseStudyTimerBtn");

const resetStudyTimerBtn =
    document.getElementById("resetStudyTimerBtn");

let studyTimerInterval = null;
let studyTimerSeconds = 0;

function updateStudyTimerDisplay() {
    const display =
        document.getElementById("studyTimerDisplay");

    if (!display) return;

    const minutes =
        Math.floor(studyTimerSeconds / 60);

    const seconds =
        studyTimerSeconds % 60;

    display.textContent =
        String(minutes).padStart(2, "0") +
        ":" +
        String(seconds).padStart(2, "0");
}

if (startStudyTimerBtn) {
    startStudyTimerBtn.addEventListener("click", () => {
        const input =
            document.getElementById("studyTimerMinutes");

        const minutes = Number(input.value);

        if (
            !Number.isFinite(minutes) ||
            minutes <= 0
        ) {
            alert("براہِ کرم Study Timer کے لیے درست Minutes درج کریں۔");
            return;
        }

        if (
            studyTimerSeconds <= 0 ||
            studyTimerSeconds > minutes * 60
        ) {
            studyTimerSeconds = Math.floor(minutes * 60);
        }

        if (studyTimerInterval) return;

        updateStudyTimerDisplay();

        studyTimerInterval = setInterval(() => {
            if (studyTimerSeconds > 0) {
                studyTimerSeconds--;
                updateStudyTimerDisplay();
            } else {
                clearInterval(studyTimerInterval);
                studyTimerInterval = null;
                alert("⏰ Study Time مکمل ہو گیا!");
            }
        }, 1000);
    });
}

if (pauseStudyTimerBtn) {
    pauseStudyTimerBtn.addEventListener("click", () => {
        if (studyTimerInterval) {
            clearInterval(studyTimerInterval);
            studyTimerInterval = null;
        }
    });
}

if (resetStudyTimerBtn) {
    resetStudyTimerBtn.addEventListener("click", () => {
        if (studyTimerInterval) {
            clearInterval(studyTimerInterval);
            studyTimerInterval = null;
        }

        const input =
            document.getElementById("studyTimerMinutes");

        const minutes = Number(input.value);

        if (Number.isFinite(minutes) && minutes > 0) {
            studyTimerSeconds = Math.floor(minutes * 60);
        } else {
            studyTimerSeconds = 0;
        }

        updateStudyTimerDisplay();
    });
}


// 12. Quiz Score Calculator
const calculateQuizScoreBtn =
    document.getElementById("calculateQuizScoreBtn");

if (calculateQuizScoreBtn) {
    calculateQuizScoreBtn.addEventListener("click", () => {
        const obtained =
            Number(
                document.getElementById("quizScoreObtained").value
            );

        const total =
            Number(
                document.getElementById("quizScoreTotal").value
            );

        const result =
            document.getElementById("quizScoreResult");

        if (
            !Number.isFinite(obtained) ||
            !Number.isFinite(total) ||
            total <= 0 ||
            obtained < 0 ||
            obtained > total
        ) {
            result.innerHTML =
                "❌ براہِ کرم درست Obtained اور Total Marks درج کریں۔";
            return;
        }

        const percentage =
            (obtained / total) * 100;

        result.innerHTML = `
            <div>
                <div>
                    <strong>Obtained Marks:</strong>
                    ${obtained}
                </div>

                <div style="margin-top:10px;">
                    <strong>Total Marks:</strong>
                    ${total}
                </div>

                <div style="margin-top:12px;font-size:24px;font-weight:800;">
                    Score: ${percentage.toFixed(2)}%
                </div>
            </div>
        `;
    });
}


// 13. Marks Percentage Calculator
const calculateMarksPercentageBtn =
    document.getElementById("calculateMarksPercentageBtn");

if (calculateMarksPercentageBtn) {
    calculateMarksPercentageBtn.addEventListener("click", () => {
        const obtained =
            Number(
                document.getElementById("marksPercentageObtained").value
            );

        const total =
            Number(
                document.getElementById("marksPercentageTotal").value
            );

        const result =
            document.getElementById("marksPercentageResult");

        if (
            !Number.isFinite(obtained) ||
            !Number.isFinite(total) ||
            total <= 0 ||
            obtained < 0 ||
            obtained > total
        ) {
            result.innerHTML =
                "❌ براہِ کرم درست Obtained اور Total Marks درج کریں۔";
            return;
        }

        const percentage =
            (obtained / total) * 100;

        let grade = "";

        if (percentage >= 80) {
            grade = "A";
        } else if (percentage >= 70) {
            grade = "B";
        } else if (percentage >= 60) {
            grade = "C";
        } else if (percentage >= 50) {
            grade = "D";
        } else {
            grade = "F";
        }

        result.innerHTML = `
            <div>
                <div style="font-size:26px;font-weight:800;">
                    ${percentage.toFixed(2)}%
                </div>

                <div style="margin-top:10px;">
                    <strong>Grade:</strong> ${grade}
                </div>
            </div>
        `;
    });
}


// 14. Student Word & Character Counter
const countStudentTextBtn =
    document.getElementById("countStudentTextBtn");

if (countStudentTextBtn) {
    countStudentTextBtn.addEventListener("click", () => {
        const input =
            document.getElementById("studentCounterInput");

        const result =
            document.getElementById("studentCounterResult");

        const text =
            input.value.trim();

        if (!text) {
            result.innerHTML =
                "❌ براہِ کرم Text درج کریں۔";
            return;
        }

        const characters =
            text.length;

        const charactersWithoutSpaces =
            text.replace(/\s/g, "").length;

        const words =
            text.split(/\s+/).filter(Boolean).length;

        const lines =
            text.split(/\r?\n/).length;

        result.innerHTML = `
            <div>
                <div>
                    <strong>Words:</strong>
                    ${words}
                </div>

                <div style="margin-top:8px;">
                    <strong>Characters:</strong>
                    ${characters}
                </div>

                <div style="margin-top:8px;">
                    <strong>Characters Without Spaces:</strong>
                    ${charactersWithoutSpaces}
                </div>

                <div style="margin-top:8px;">
                    <strong>Lines:</strong>
                    ${lines}
                </div>
            </div>
        `;
    });
}


// 15. Study Schedule Planner
const addStudyScheduleBtn =
    document.getElementById("addStudyScheduleBtn");

let studyScheduleList = [];

if (addStudyScheduleBtn) {
    addStudyScheduleBtn.addEventListener("click", () => {
        const subject =
            document.getElementById("studyScheduleSubject").value.trim();

        const day =
            document.getElementById("studyScheduleDay").value;

        const time =
            document.getElementById("studyScheduleTime").value;

        const duration =
            document.getElementById("studyScheduleDuration").value;

        const result =
            document.getElementById("studyScheduleResult");

        if (!subject || !day || !time || !duration) {
            result.innerHTML =
                "❌ براہِ کرم تمام معلومات مکمل کریں۔";
            return;
        }

        studyScheduleList.push({
            subject,
            day,
            time,
            duration
        });

        result.innerHTML =
            studyScheduleList.map((item, index) => `
                <div class="study-schedule-item">
                    <strong>
                        ${index + 1}. ${item.subject}
                    </strong>

                    <span>
                        📅 ${item.day}
                    </span>

                    <span>
                        ⏰ ${item.time}
                    </span>

                    <span>
                        ⏱️ ${item.duration}
                    </span>
                </div>
            `).join("");

        document.getElementById("studyScheduleSubject").value = "";
        document.getElementById("studyScheduleTime").value = "";
        document.getElementById("studyScheduleDuration").value = "";
    });
}


// ==================== END STUDY TOOL JAVASCRIPT — 11 TO 15 ====================
