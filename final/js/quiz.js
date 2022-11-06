let current_page = 0;
let points = 0;
let number_of_questions = 4;
let questions = [
    "Apenas três países em todo mundo. Usam o voto eletrônico.<br><br>(Ano da pergunta: 2022)",
    "O presidente da república no Brasil tem maior salário que o senador e o deputado federal.<br><br>(Ano da pergunta: 2022)",
    "28 senadores e 514 deputados federais serão eleitos em 2022.<br><br>(Ano da pergunta: 2022)",
    "Votos nulos e brancos influenciam indiretamente no resultado das eleições.<br><br>(Ano da pergunta: 2022)",
];
let right_answers = [
    1,
    0,
    0,
    1
];
let review_right_answers = [
    "A sentença está correta.<br>Apenas três países em todo mundo: Brasil, Cuba e Venezuela. Usam o voto eletrônico.<br>(Ano da pergunta: 2022)<br>",
    "A sentença está incorreta.<br>O presidente da república no Brasil tem maior salário que o senador e o deputado federal.<br>(Ano da pergunta: 2022)<br>",
    "A sentença está incorreta.<br>27 senadores e 513 deputados federais serão eleitos em 2022.<br>(Ano da pergunta: 2022)<br>",
    "A sentença está correta.<br>Votos nulos e brancos influenciam indiretamente no resultado das eleições.<br>(Ano da pergunta: 2022)<br>"
];
let answered_questions = [];

document.getElementById("id__screen__quiz__title").innerHTML = questions[0];

function change_page(command) {
    if (command == 0) {
        if (current_page <= number_of_questions) {
            current_page--;
        }
    }
    else if (command == 1) {
        if (current_page < number_of_questions) {
            current_page++;
        }
    }
    // console.log("Página atual: ", current_page);
    if (current_page == number_of_questions) {
        document.getElementById("id__grid__quiz").style.display = "none";
        document.getElementById("id__title__quiz").innerHTML = `
        Parabéns, você concluiu o quiz!
        Você fez ${points} pontos.<br>
        Relatório de respostas: 
        <br><br>
        1. ${review_right_answers[0]}<br>
        2. ${review_right_answers[1]}<br>
        3. ${review_right_answers[2]}<br>
        4. ${review_right_answers[3]}<br>
        `;
    }
    else if (current_page == Number(number_of_questions - 1)) {
        // console.log("else");
        console.log("Página atual: ", current_page);
        document.getElementById("id__screen__quiz__title").innerHTML = questions[current_page];
        // document.getElementById("id__button__quiz__fake").style.display = "none";
        // document.getElementById("id__button__quiz__true").style.display = "none";
        document.getElementById("id__button__quiz__back").style.display = "none";
        document.getElementById("id__button__quiz__next").innerHTML = "Finish";
        // current_page++;
        return;
    }
    else {
        questions.forEach((item, index) => {
            if (index == current_page) {
                document.getElementById("id__screen__quiz__title").innerHTML = item;
                return;
            }

        });
    }

    // if (current_page == 0) {
    //     document.getElementById("id__screen__quiz__title").innerHTML = "Apenas três países em todo mundo: Brasil, Cuba e Venezuela. Usam o voto eletrônico.";
    // } else if (current_page == 1) {
    //     document.getElementById("id__screen__quiz__title").innerHTML = "Questão 02";
    // }
    // else if (current_page == 2) {
    //     document.getElementById("id__screen__quiz__title").innerHTML = "Questão 03";
    // }
    // else if (current_page == 3) {
    //     document.getElementById("id__screen__quiz__title").innerHTML = "Questão 04";
    //     document.getElementById("id__button__quiz__back").style.display = "none";
    //     document.getElementById("id__button__quiz__next").innerHTML = "Finish";
    //     current_page++;
    // }


    // console.log(current_page);
}


function answer(choice) {
    right_answers.forEach((item, index) => {
        console.log("index: ", index, "current_page: ", current_page);
        if (index == current_page) {
            if (!answered_questions.includes(index)) {
                if (item == choice) {
                    console.log("item: ", item, "choice: ", choice);
                    answered_questions.push(index);
                    points++;
                    console.log("Pontos: ", points);
                    return;
                }
            }
        }
    });
    change_page(1);
}