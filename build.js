const fs = require('fs')
const path = require('path')
const data = require('./yourData')

fs.writeFileSync(path.join(__dirname, 'index.html'),
`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/style/all.css">
    <link rel="stylesheet" href="/style/style.css">
    <title>Resume</title>
</head>
<body>
    <div class="paper">
        <aside>
            <div>
                <img src="${data.img}" alt="user">
                <h1>${data.name}</h1>
                <p>${data.carrer}</p>
            </div>
            <div>
                <h1>ABOUT ME</h1>
                <p>${data.about_me}</p>
            </div>
            ${data.conntact.map((value) => {
                return`<span class="contact">
                        <span>
                            <i class="${value.icon}"></i>
                        </span>
                        <p>${value.data}</p>
                    </span>`
            }).join('')}
            <div>
                <h1>Social</h1>
                ${
                    data.social.map(value => {
                        return `
                        <div class="visit">
                            <a href="${value.url_one}"><i class="${value.icon_one}"></i></a>
                            <a href="${value.url_two}"><i class="${value.icon_two}"></i></a>
                        </div>
                        `
                    }).join('')
                }
            </div>
        </aside>
        <div class="tow">
            <div class="all_exp">
                <div class="exprions">
                    <div class="title">
                        <span>
                            <i class="fa-solid fa-network-wired"></i>
                        </span>
                        <h1>WORK EXRERIENCE</h1>
                    </div>
                    ${
                        data.work_experiences.map(value => {
                            return `
                                <p class="one">${value.experiences}</p>
                                <p class="tow">${value.date}</p>
                            `
                        }).join('')
                    }
                </div>
                <div class="exprions">
                    <div class="title">
                        <span>
                            <i class="fa-solid fa-network-wired"></i>
                        </span>
                        <h1>Course experiences</h1>
                    </div>
                    ${data.course_experiences.map(value => {
                        return `
                            <p class="one">${value.experiences}</p>
                            <p class="tow">${value.date}</p>
                        `
                    }).join('')}
                </div>
            </div>
            <div class="skills">
                <div class="title">
                    <span>
                        <i class="fa-solid fa-bezier-curve"></i>
                    </span>
                    <h1>Skills</h1>
                </div>
                ${data.skills.map(value => {
                    return `
                    <div class="skill">
                        <h1>${value.percent_number}%</h1>
                        <p>${value.skill}</p>
                    <span>
                        <span></span>
                    </span>
                    </div>
                    `
                }).join('')}
            </div>
            <div class="skillTow">
                <div class="title">
                    <span>
                        <i class="fa-solid fa-asterisk"></i>
                    </span>
                    <h1>Other skills</h1>
                </div>
                <div class="allProgs">
                    ${data.other_skills.map(value => {
                        return `
                        <div class="prog">
                            <svg class="theProg">
                                <circle r="44" cx="49" cy="50"></circle>
                                <circle r="44" cx="49" cy="50" class="border"></circle>
                            </svg>
                            <div class="text">
                                <p>${value.other_skill}</p>
                                <p>${value.percent_number}%</p>
                            </div>
                        </div>
                        `
                    }).join('')}
                </div>
            </div>
            <div class="INTERESTS">
                <div class="title">
                    <span>
                        <i class="fa-solid fa-asterisk"></i>
                    </span>
                    <h1>INTERESTS</h1>
                </div>
                <div class="theI">
                    ${data.interests.map(value => {
                        return `
                        <div>
                            <i class="${value.icon}"></i>
                            <p>${value.interests}</p>
                        </div>
                        `
                    }).join('')}
                </div>
            </div>
        </div>
    </div>
    <script src="/script/script.js"></script>
</body>
</html>
`, 'utf-8')

console.log('page builde')