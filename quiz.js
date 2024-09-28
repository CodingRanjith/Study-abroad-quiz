
let questions = [
  {
      id: 1,
      question: "Which country has the highest number of international students globally?",
      answer: "USA",
      options: [
          "USA",
          "UK",
          "Australia",
          "Canada"
      ]   
  },
  {
      id: 2,
      question: "What is the average IELTS score required to study in most UK universities?",
      answer: "6.5",
      options: [
          "5.5",
          "6.0",
          "6.5",
          "7.0"
      ]   
  },
  {
      id: 3,
      question: "Which document is often required for securing a student visa abroad?",
      answer: "All of the above",
      options: [
          "Passport",
          "Statement of Purpose (SOP)",
          "Transcript",
          "All of the above"
      ]
  },
  {
      id: 4,
      question: "Which country is known for strong programs in Mechanical Engineering and has opportunities for co-op or work placements?",
      answer: "Germany",
      options: [
          "Germany",
          "USA",
          "New Zealand",
          "Japan"
      ]
  },
  {
      id: 5,
      question: "What is the most popular engineering discipline among Indian students studying abroad?",
      answer: "Computer Science",
      options: [
          "Civil",
          "Computer Science",
          "Electrical",
          "Aerospace"
      ]
  },
  {
      id: 6,
      question: "Which of the following countries is famous for offering research grants to engineering students?",
      answer: "Canada",
      options: [
          "Australia",
          "France",
          "Canada",
          "Singapore"
      ]
  },
  {
      id: 7,
      question: "What is a typical validity period of a TOEFL score?",
      answer: "2 years",
      options: [
          "1 year",
          "2 years",
          "3 years",
          "5 years"
      ]
  },
  {
      id: 8,
      question: "Which test is commonly required for admission into US engineering graduate programs?",
      answer: "GRE",
      options: [
          "SAT",
          "GRE",
          "TOEFL",
          "GMAT"
      ]
  },
  {
      id: 9,
      question: "What does the acronym SOP stand for in the context of overseas education?",
      answer: "Statement of Purpose",
      options: [
          "Statement of Purpose",
          "Study of Programs",
          "Start of Preparation",
          "Subject of Proficiency"
      ]
  },
  {
      id: 10,
      question: "Which country offers the Erasmus scholarship program for international students?",
      answer: "European Union",
      options: [
          "USA",
          "UK",
          "Germany",
          "European Union"
      ]
  },
  {
      id: 11,
      question: "Which type of scholarship is typically based on academic excellence?",
      answer: "Merit-based",
      options: [
          "Merit-based",
          "Need-based",
          "Sports-based",
          "Work-study"
      ]
  },
  {
      id: 12,
      question: "Which financial proof is most commonly required for visa applications to study abroad?",
      answer: "Bank statement",
      options: [
          "Bank statement",
          "Letter from university",
          "Medical certificate",
          "Reference letter"
      ]
  },
  {
      id: 13,
      question: "Which country has the Post-Graduation Work Permit (PGWP) program that allows students to work after completing their degree?",
      answer: "Canada",
      options: [
          "USA",
          "Canada",
          "Australia",
          "Germany"
      ]
  },
  {
      id: 14,
      question: "Which exam is required for international students to demonstrate English proficiency for Australian universities?",
      answer: "IELTS",
      options: [
          "TOEFL",
          "IELTS",
          "PTE",
          "GRE"
      ]
  },
  {
      id: 15,
      question: "Which country offers a Schengen student visa allowing access to multiple European countries?",
      answer: "Germany",
      options: [
          "Germany",
          "USA",
          "UK",
          "Canada"
      ]
  },
  {
      id: 16,
      question: "Which Asian country is emerging as a popular destination for engineering students due to its cutting-edge technology programs?",
      answer: "Japan",
      options: [
          "Singapore",
          "South Korea",
          "Japan",
          "Malaysia"
      ]
  },
  {
      id: 17,
      question: "What is the typical duration of a Master’s degree program in the UK?",
      answer: "1 year",
      options: [
          "6 months",
          "1 year",
          "2 years",
          "3 years"
      ]
  },
  {
      id: 18,
      question: "Which test is required for students applying for MBA programs in the USA?",
      answer: "GMAT",
      options: [
          "GRE",
          "TOEFL",
          "GMAT",
          "SAT"
      ]
  },
  {
      id: 19,
      question: "Which country typically requires students to submit a “Confirmation of Enrollment” (COE) for a student visa?",
      answer: "Australia",
      options: [
          "Australia",
          "USA",
          "UK",
          "France"
      ]
  },
  {
      id: 20,
      question: "Which country's universities are known for providing engineering students with access to state-of-the-art research facilities in AI and Robotics?",
      answer: "USA",
      options: [
          "Germany",
          "USA",
          "China",
          "Sweden"
      ]
  },
  {
      id: 21,
      question: "Which exam is commonly required for Indian students to apply for engineering undergraduate programs in the USA?",
      answer: "SAT",
      options: [
          "SAT",
          "GRE",
          "PTE",
          "ACT"
      ]
  },
  {
      id: 22,
      question: "Which country offers a pathway to permanent residency for engineering graduates after completing their studies?",
      answer: "Canada",
      options: [
          "UK",
          "USA",
          "Canada",
          "Singapore"
      ]
  },
  {
      id: 23,
      question: "Which country is known for offering free or low-cost education to international students?",
      answer: "Germany",
      options: [
          "Germany",
          "USA",
          "UK",
          "Australia"
      ]
  },
  {
      id: 24,
      question: "What is the typical validity period of an IELTS score?",
      answer: "2 years",
      options: [
          "1 year",
          "2 years",
          "3 years",
          "5 years"
      ]
  },
  {
      id: 25,
      question: "Which country has a STEM OPT program allowing international students to extend their stay for work?",
      answer: "USA",
      options: [
          "USA",
          "Canada",
          "UK",
          "Australia"
      ]
  }
];


let question_count = 0;
let points = 0;


window.onload = function(){
    show(question_count);
};

function show(count){
    let question = document.getElementById("questions");
    let[first, second, third, fourth] = questions[count].options;

    question.innerHTML = `<h2>Q${count + 1}. ${questions[count].question}</h2>
    <ul class="option_group">
    <li class="option">${first}</li>
    <li class="option">${second}</li>
    <li class="option">${third}</li>
    <li class="option">${fourth}</li>
    </ul>`;
    toggleActive();  
}

function toggleActive(){
    let option = document.querySelectorAll("li.option");
    for(let i=0; i < option.length; i++){
        option[i].onclick = function(){
            for(let i=0; i < option.length; i++){
                if(option[i].classList.contains("active")){
                    option[i].classList.remove("active");
                }
            }
            option[i].classList.add("active");
        }
    }
}

function next(){

    if(question_count == questions.length -1){
        location.href = "final.html";
    }
    console.log(question_count);


let user_answer = document.querySelector("li.option.active").innerHTML;

if(user_answer == questions[question_count].answer){
    points += 10;
    sessionStorage.setItem("points",points);
}
console.log(points);

question_count++;
show(question_count);
}