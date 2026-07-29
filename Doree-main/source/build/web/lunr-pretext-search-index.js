var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "sec_handshakes",
  "level": "1",
  "url": "sec_handshakes.html",
  "type": "Section",
  "number": "1.1",
  "title": "Handshakes",
  "body": " Handshakes  We start by working on our first puzzle. You will see puzzles throughout the textbook. Puzzles are inquiry-based activities designed to foreshadow, reinforce, or extend important course concepts; provide practice transferring your mathematical knowledge to new contexts; develop your critical thinking and proving skills; show you important or famous problems; and be fun. If you have seen a puzzle before, do not spoil the fun for classmates who have not seen the puzzle yet. The best way to do this is to stay quiet or ask questions, but not reveal answers.  In discrete mathematics, we frequently look for patterns. For example, there is one integer in the set , two integers in the set , three integers in the set , four integers in the set , and so on. In general, there are integers in the set . Once we find a pattern, we often conjecture , state an observation that is not (yet) known to be true or false. You can think of a conjecture as an educated guess. The puzzles, including this first puzzle, activities, and exercises in this textbook often ask you to practice conjectures.  After the puzzle, we discuss the field of discrete mathematics, introduce some features of this textbook, and share tips for success in learning discrete mathematics.   Counting Handshakes   Handshakes puzzle      Form a group with five, six, or seven students and shake hands Feel free to replace a handshake with an elbow bump or toe tap. with each student in your group exactly once. Be sure not to miss anyone or repeat handshakes! Each time you shake hands, each of you should say your names.    How many students are in your group, including you?    How many students did you personally shake hands with?    What is the total number of handshakes for your group? If you are not sure, repeat the activity in an organized way and count as you go.    Draw a picture that illustrates your group's handshake process. For example, you might draw a stick figure or write the name of each student and then draw a line between each pair of students so that there is one line for each handshake.    For the next several parts of this activity, work with one or two other students in your group. We will compare your answers with the rest of the group at the end of this activity. How can you count the answer to in your picture? How can you count the answer to in your picture? How can you count the answer to in your picture?    Suppose that there are 30 students in your class. If everyone shook hands with everyone else, how many handshakes would the class perform? Explain how you calculated your answer.    Mateo calculated the answer to by taking the number of students in the class (30) and adding the numbers to calculate 465 handshakes. What part of Mateo's reasoning is correct? What part of his reasoning is incorrect? How can you fix Mateo's answer to get the correct answer?    Kierra calculated the answer to by taking the number of students in the class (30) and multiplying by one smaller integer (29) to calculate handshakes. What part of Kierra's reasoning is correct? What part of her reasoning is incorrect? How can you fix Kierra's answer to get the correct answer?    Conjecture (make a guess) about the number of handshakes in a class of students. Your conjecture should begin In a class of students, the number of handshakes is Complete the sentence with an expression involving .    Formulate a new conjecture about the number of handshakes in a class of students. Hint: one way involves adding a list of numbers and the other way involves multiplying and dividing.    How many handshakes would a group of 1,000 students do? Which conjecture do you prefer to use for this calculation and why?    Compare your answers with the rest of your original group.      Be sure to attempt before reading on because we are about to discuss some of the answers.   Six students shake hands   What is the total number of handshakes in a group of six students if every student shakes hands with every other student once? As part of your work, draw a picture representing the situation and discuss alternative ways of counting.    We represent each of the six students with a vertex (dot or small circle) and connect each pair of students with an edge (line) corresponding to the handshake that the pair of students performed, as shown in . Notice that the number of students in the group equals the number of vertices in the picture (6), the number of handshakes each student did equals the number of edges connected to that vertex in the picture (5), and the total number of handshakes equals the total number of edges in that picture (15). By the way, we return to discuss such objects, called graphs, in Graph Theory.   A drawing representing six students shaking hands.      Counting the number of edges of the graph corresponds to simply counting the handshakes between students as they happen. That method is feasible with six students, but does not work well with 30 or 1000 students. See for the handshake graph.  For a more systematic count, notice that the first student does five handshakes, but the second student does only four new handshakes since they already shook hands with the first student. Similarly, the third student only does three new handshakes because they already shook hands with the first two students. Similarly, the fourth student does two new handshakes, the fifth student does one new handshake, and the sixth student does no new handshakes. The total number of handshakes is, therefore, .  We might rewrite this equation as .  Notice that the largest integer in the sum is one less than the number of students. In , Mateo correctly modeled the answer as a sum, but made the mistake of starting with the number of students (30) instead of one less (29).  For a more scalable method of counting, note that each of the six students does five, which appears to total handshakes. There are not actually 30 handshakes, however, because 30 counts each handshake twice once for each of the two students involved in the handshake. Since 30 is exactly twice the correct answer, the correct answer is .  In , Kierra correctly calculated the product ( ) but forgot to divide by 2.    Notice that because we correctly counted the total number of handshakes in two different ways in , these formulas must give the same answer: . We generalize this observation to get our first theorem. It will be useful in our later work to state the theorem for both students and students.    {Counting handshakes} For any positive integer we have    .     .       Each side of the equation in  counts the number of handshakes in a group of students, while each side of the equation in  counts the number of handshakes in a group of students.  A theorem is a fact that has been proved. In this textbook, we prove a theorem if the proof helps to understand the result or if it illustrates a useful proof format. Sometimes, the proof occurs much later in the textbook. For example, we prove in Exercise and Exercise in .    What is Discrete Mathematics?  What is discrete mathematics? Discrete means individually separate and distinct, or, in the context of mathematics, objects that can be counted or listed Google Dictionary discrete  .  Discrete mathematics is often defined by what it is not. For example, it is not continuous mathematics, which includes real numbers (decimals), real-valued functions, and all of the calculus. Although this textbook assumes that you have seen some algebra, any occasional exercise that uses calculus is clearly marked so that courses that do not require calculus can skip those exercises.  Discrete mathematics by itself is not a branch of mathematics, but rather a part of every branch of mathematics. Therefore, each chapter in this textbook has its own flavor. For example, introduces enumerative combinatorics, which is a fancy name for counting. We tried our hand at counting in . In and we introduce two additional branches of discrete mathematics: combinatorial graph theory, which is the study of objects like the graph in , and number theory, which is the study of integers. The number of handshakes in is an example of a type of integer studied in number theory.  The context of discrete mathematics is a convenient place to study the foundation of mathematics. These foundations include the logic we use to explain our reasoning and to write proofs, as in . They also include the study of functions, sets, and relations which we visit in and . These topics are called foundational because all theoretical mathematics is built on these topics.  Computers can only do discrete mathematics, so we often say that discrete mathematics is the mathematics of computer science. The fundamental building block of computer science is recursion, which is a definition or process that uses itself or a smaller version of itself. We introduce recursion in and apply recursions to study sums and products in . We have already seen sums in and we will take a peek at recursions in in .    Learning Discrete Mathematics  What are the secrets to learning discrete mathematics? Before we get into specific suggestions for this course, try this activity.   Getting good at something Thanks to Robert Talbert A growth-focused icebreaker Grading for Growth blogpost       Take a moment to think or write about the following two questions.   What is something you are good at?    How did you get good at it?       Share your answers with a classmate or two.    What do your answers have in common?    What could you do to get good at mathematics?      While listening to and watching an expert, such as your professor, introduce concepts and demonstrate how to solve problems is often a comfortable way to start learning, the most important way to learning mathematics is to work with concepts and solve problems yourself.  Start by completing the activities within each section. These activities introduce core concepts and techniques and challenge you to explore mathematics in more depth. If you do these activities with your classmates in class, you can get feedback on your work from them and perhaps from the professor or a teaching assistant. If not, or if you miss class, read the textbook to help you do the activities. Often there are key notes, a very similar example, or even a solution.  Next, review your class notes or read the textbook to reinforce what you have learned. After that, work on the exercises at the end of each section. You might mistakenly think that you need to learn the material in order to complete the exercises, but it is actually the other way around that you need to complete the exercises in order to learn the material.  There are four types of exercises in this textbook.    Practice exercises help you learn key vocabulary, facts, and techniques.     Understand exercises challenge you to apply key concepts and techniques in greater depth.     Recap exercises ask you to summarize what you have learned.     Explore exercises connect what you have learned to new applications, involve conjectures or proofs, or introduce related topics beyond what is presented.     I encourage you to complete all the practice exercises and recap exercises, even if some are not assigned.  As you work on activities and exercises, get in the habit of receiving feedback on your work so that you know if you are understanding the concepts and solving problems correctly. In class, you might get feedback from classmates or the professor. If someone grades your work, be sure to read the grader's comments for feedback. If your work is not graded, connect with a classmate to compare answers and follow-up by attending help sessions such as your professor or teaching assistant's office hours or tutoring sessions.  In addition, this textbook includes answers and hints for some of the exercises to help you verify your own work. Resist the temptation to peek before you have tried the problem on your own first. There are likely a few typos in these answers and hints, so please let your professor know if you find an occasional error.  We all get stuck at times, and it can be frustrating. Do not be surprised if you have difficulty completing the explore exercises or are not even sure how to start. While it can be tempting at the moment to look for videos or online help tools, often it is faster and better to work with a classmate or attend a help session connected to your course. Be sure to follow your professor's rules about what forms of help are acceptable for your course and follow all academic honesty policies. Whatever those policies are, never copy the work of another student or copy a solution you found on the Internet not only might that behavior compromise your integrity, but you would miss the chance to figure out the mathematics for yourself!  Another hint involves making mistakes, which happens to all of us. Think about your experience working on . Both Mateo and Kierra had incorrect answers that were partially correct and easily fixed. Maybe you or someone in your group made the same mistakes. Although it can be tempting to discard a mistake, I encourage you to think of mistakes as partial solutions and try to fix them.  The number one secret to success in this class is to form a study group with your classmates. You do not have to become friends, although perhaps you will, just meet regularly to help each other in the course. Getting help from others and helping others both build your understanding. Look for other students who study at similar times, and if there is a study area near your professor's office or classroom, go study there.  Near the end of each semester, we ask students to offer advice to future students. Here is some of what they say.   Go to class.   Start your homework right after class so you have time to ask for help if you get stuck.   Don't forget to turn in your homework on time.   There's a lot of homework and some of the exercises are super difficult, so do what you can. It's okay to not get everything done.   Get to know other students so you can work together, at least to check your work.   Go to the professor's office hours. They're not as scary as you think. Plus, office hours are part of their job, so you paid for their help.   Don't fall behind but, if you do, ask the professor for advice on catching up.   A study schedule is really helpful.   Actually study for the quizzes\/exams.   Be prepared to work hard, but you will learn a lot and maybe even get an A.   You got this!  Finally, know that you belong in this course. This course is designed for students studying mathematics, computer science, data science, information systems, or any science, but anyone who wants to have some fun with mathematics or meet a mathematics requirement is equally welcome. If you have always done well in your mathematics classes, then you will probably do well in this class, but if you have not done well in mathematics classes, give this course a chance. This class is quite different from high school algebra, and you may be good at it. It is okay if you have not taken calculus or precalculus or if your algebra is rusty (and whose algebra is not rusty?) as we introduce all the algebra you need in the course as we go. Get ready to do mathematics!    Exercises   Exercises for Counting Handshakes.   Practice       Calculate .    Your answer to counts the number of handshakes in a group of students. How many students are in that group?    How many handshakes did each student in that group do?    Explain how to use your answer to to count the number of handshakes (again).         36    Hint: The first student does not shake their own hand, so the answer is not eight.    Eight    Hint: Use double counting and then divide by two.       Understand       Suppose that there are 30 students in a discrete mathematics class and 20 students in history class and no students in both classes. Each discrete student shakes hands with each history student. (There are no other handshakes.) How many handshakes do they do? Explain.    Conjecture the number of handshakes if there are discrete mathematics students and history students.         600            Recap   Do you know    How to count the number of handshakes in a group of people if everyone shakes hands with everyone else once?    How to quickly evaluate the sum of the first integers:     Why we get the same answer if we count a quantity in two different ways?    Why we divide by two if we double-count?    What does the instruction conjecture mean?    What is a theorem?        Explore    On this problem, if the situation is possible, you can explain it by drawing a picture. If the situation is impossible, explain it in words.   In a group of ten students, is it possible for each student to shake hands with exactly two other students? Explain.    In a group of ten students, is it possible for each student to shake hands with exactly three other students? Explain.    In a group of seven students, is it possible for each student to shake hands with exactly two other students? Explain.    In a group of seven students, is it possible for each student to shake hands with exactly three other students? Explain.       Hint for part d: .     Explore    How long would it take all 3,000 students at a university to shake hands with all other students? Explain any assumptions you make. Convert your answer to a reasonable unit.      Exercises   Practice   Consult your course syllabus to answer these questions. If these questions are not addressed in the syllabus, ask your professor.   What is your professor's name and contact information?    What are your professor's office hours?    What other ways can you get help with this class?    Is it okay to work with your classmates? If so, are there any restrictions?        Practice   Consult your course syllabus to answer these questions. If these questions are not addressed in the syllabus, ask your professor.   What topics does your course cover?    What are you expected to know and be able to do? These are the learning objectives of this course.    Does your course has learning standards ? If so, how many are there?        Practice   Consult your course syllabus to answer these questions. If these questions are not addressed in the syllabus, ask your professor.   When you miss a class, you lose an opportunity to learn, of course, but does missing class directly affect your grade or is there a course attendance policy? If so, explain.    What should you do to learn the material if you miss a class?    If you have to miss class on a day when there is a quiz, exam, or presentation, or if you end up missing class on such a day, what should you do?        Practice   Consult your course syllabus to answer these questions. If these questions are not addressed in the syllabus, ask your professor.   How is your learning assessed? For example, are there quizzes, exams, collected homework, presentations, projects?    In addition to graded work, how else can you get feedback on your learning? For example, will you work with classmates or is there a way to check your work on exercises?        Practice   Consult your course syllabus to answer these questions. If these questions are not addressed in the syllabus, ask your professor.   Are you allowed to use the Internet or generative AI (such as ChatGPT) to help you learn the course material?    Are you allowed to use the Internet or generative AI (such as ChatGPT) to help you solve the exercises?    Are you allowed to use the Internet or generative AI (such as ChatGPT) to find solutions to exercises?    If you answered yes to any of these questions, what are the expectations for citing your sources\/prompts?        Understand   There are no correct or incorrect answers to this question.   Why are you taking this class? Is it required, or is there a particular reason you enrolled?    Is there a topic you are curious to learn more about?    What are your goals for this course? Try not to use grades as your only goal.    What is one key step you can take to achieve your goals? For example, I will submit my work on time, even if I am not finished. or I will set up a regular study schedule.         Understand   There are no correct or incorrect answers to this question.   What other classes are you taking this semester?    How many hours a week will you need to complete your course work? If the course syllabus does not suggest a time, ask your professor. It is not unusual for each course to take six hours a week at bare minimum. This course and other advanced courses often take longer.    Make a study schedule showing your classes and other commitments (such as work, practice, meetings, or family commitments) and time for priorities (such as sleep, eating, exercises, or self-care). Next, block off time to work on each course. Try to schedule at least one hour six days a week to study for this course. If you are overwhelmed with this task, reach out to your advisor or mentor for help.        Understand   There are no correct or incorrect answers to this question.   Make a list of three different things that you are good at, and for each thing, list something that you did to get good at it.    What do your answers have in common?    What are three ideas for how to get good at mathematics?         "
},
{
  "id": "sec_handshakes-3",
  "level": "2",
  "url": "sec_handshakes.html#sec_handshakes-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "conjecture "
},
{
  "id": "act_handshakes",
  "level": "2",
  "url": "sec_handshakes.html#act_handshakes",
  "type": "Activity",
  "number": "1.1.A",
  "title": "Handshakes puzzle.",
  "body": " Handshakes puzzle      Form a group with five, six, or seven students and shake hands Feel free to replace a handshake with an elbow bump or toe tap. with each student in your group exactly once. Be sure not to miss anyone or repeat handshakes! Each time you shake hands, each of you should say your names.    How many students are in your group, including you?    How many students did you personally shake hands with?    What is the total number of handshakes for your group? If you are not sure, repeat the activity in an organized way and count as you go.    Draw a picture that illustrates your group's handshake process. For example, you might draw a stick figure or write the name of each student and then draw a line between each pair of students so that there is one line for each handshake.    For the next several parts of this activity, work with one or two other students in your group. We will compare your answers with the rest of the group at the end of this activity. How can you count the answer to in your picture? How can you count the answer to in your picture? How can you count the answer to in your picture?    Suppose that there are 30 students in your class. If everyone shook hands with everyone else, how many handshakes would the class perform? Explain how you calculated your answer.    Mateo calculated the answer to by taking the number of students in the class (30) and adding the numbers to calculate 465 handshakes. What part of Mateo's reasoning is correct? What part of his reasoning is incorrect? How can you fix Mateo's answer to get the correct answer?    Kierra calculated the answer to by taking the number of students in the class (30) and multiplying by one smaller integer (29) to calculate handshakes. What part of Kierra's reasoning is correct? What part of her reasoning is incorrect? How can you fix Kierra's answer to get the correct answer?    Conjecture (make a guess) about the number of handshakes in a class of students. Your conjecture should begin In a class of students, the number of handshakes is Complete the sentence with an expression involving .    Formulate a new conjecture about the number of handshakes in a class of students. Hint: one way involves adding a list of numbers and the other way involves multiplying and dividing.    How many handshakes would a group of 1,000 students do? Which conjecture do you prefer to use for this calculation and why?    Compare your answers with the rest of your original group.     "
},
{
  "id": "exam_hs6",
  "level": "2",
  "url": "sec_handshakes.html#exam_hs6",
  "type": "Example",
  "number": "1.1.1",
  "title": "Six students shake hands.",
  "body": " Six students shake hands   What is the total number of handshakes in a group of six students if every student shakes hands with every other student once? As part of your work, draw a picture representing the situation and discuss alternative ways of counting.    We represent each of the six students with a vertex (dot or small circle) and connect each pair of students with an edge (line) corresponding to the handshake that the pair of students performed, as shown in . Notice that the number of students in the group equals the number of vertices in the picture (6), the number of handshakes each student did equals the number of edges connected to that vertex in the picture (5), and the total number of handshakes equals the total number of edges in that picture (15). By the way, we return to discuss such objects, called graphs, in Graph Theory.   A drawing representing six students shaking hands.      Counting the number of edges of the graph corresponds to simply counting the handshakes between students as they happen. That method is feasible with six students, but does not work well with 30 or 1000 students. See for the handshake graph.  For a more systematic count, notice that the first student does five handshakes, but the second student does only four new handshakes since they already shook hands with the first student. Similarly, the third student only does three new handshakes because they already shook hands with the first two students. Similarly, the fourth student does two new handshakes, the fifth student does one new handshake, and the sixth student does no new handshakes. The total number of handshakes is, therefore, .  We might rewrite this equation as .  Notice that the largest integer in the sum is one less than the number of students. In , Mateo correctly modeled the answer as a sum, but made the mistake of starting with the number of students (30) instead of one less (29).  For a more scalable method of counting, note that each of the six students does five, which appears to total handshakes. There are not actually 30 handshakes, however, because 30 counts each handshake twice once for each of the two students involved in the handshake. Since 30 is exactly twice the correct answer, the correct answer is .  In , Kierra correctly calculated the product ( ) but forgot to divide by 2.   "
},
{
  "id": "thm_hs",
  "level": "2",
  "url": "sec_handshakes.html#thm_hs",
  "type": "Theorem",
  "number": "1.1.3",
  "title": "",
  "body": "  {Counting handshakes} For any positive integer we have    .     .      "
},
{
  "id": "sec_handshakes-5-8",
  "level": "2",
  "url": "sec_handshakes.html#sec_handshakes-5-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "theorem "
},
{
  "id": "sec_handshakes-6-2",
  "level": "2",
  "url": "sec_handshakes.html#sec_handshakes-6-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Discrete "
},
{
  "id": "sec_handshakes-6-3",
  "level": "2",
  "url": "sec_handshakes.html#sec_handshakes-6-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "continuous "
},
{
  "id": "act_good_at",
  "level": "2",
  "url": "sec_handshakes.html#act_good_at",
  "type": "Activity",
  "number": "1.1.B",
  "title": "Getting good at something<details class=\"ptx-footnote\" aria-live=\"polite\" id=\"act_good_at-1-1\"><summary class=\"ptx-footnote__number\" title=\"Footnote 1.1.3\"><sup> 3 <\/sup><\/summary>\n<div class=\"ptx-footnote__contents\" id=\"act_good_at-1-1\">Thanks to Robert Talbert “A growth-focused icebreaker” Grading for Growth blogpost\n<\/div><\/details>.",
  "body": " Getting good at something Thanks to Robert Talbert A growth-focused icebreaker Grading for Growth blogpost       Take a moment to think or write about the following two questions.   What is something you are good at?    How did you get good at it?       Share your answers with a classmate or two.    What do your answers have in common?    What could you do to get good at mathematics?     "
},
{
  "id": "sec_handshakes-7-7",
  "level": "2",
  "url": "sec_handshakes.html#sec_handshakes-7-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Practice Understand Recap Explore "
},
{
  "id": "exer_handshakes_eight",
  "level": "2",
  "url": "sec_handshakes.html#exer_handshakes_eight",
  "type": "",
  "number": "1",
  "title": "Practice.",
  "body": " Practice       Calculate .    Your answer to counts the number of handshakes in a group of students. How many students are in that group?    How many handshakes did each student in that group do?    Explain how to use your answer to to count the number of handshakes (again).         36    Hint: The first student does not shake their own hand, so the answer is not eight.    Eight    Hint: Use double counting and then divide by two.     "
},
{
  "id": "exer_discrete_history_handshakes",
  "level": "2",
  "url": "sec_handshakes.html#exer_discrete_history_handshakes",
  "type": "",
  "number": "2",
  "title": "Understand.",
  "body": " Understand       Suppose that there are 30 students in a discrete mathematics class and 20 students in history class and no students in both classes. Each discrete student shakes hands with each history student. (There are no other handshakes.) How many handshakes do they do? Explain.    Conjecture the number of handshakes if there are discrete mathematics students and history students.         600          "
},
{
  "id": "exer_dyk_count_hs",
  "level": "2",
  "url": "sec_handshakes.html#exer_dyk_count_hs",
  "type": "",
  "number": "3",
  "title": "Recap.",
  "body": " Recap   Do you know    How to count the number of handshakes in a group of people if everyone shakes hands with everyone else once?    How to quickly evaluate the sum of the first integers:     Why we get the same answer if we count a quantity in two different ways?    Why we divide by two if we double-count?    What does the instruction conjecture mean?    What is a theorem?      "
},
{
  "id": "exer_limited_handshakes",
  "level": "2",
  "url": "sec_handshakes.html#exer_limited_handshakes",
  "type": "",
  "number": "4",
  "title": "Explore.",
  "body": " Explore    On this problem, if the situation is possible, you can explain it by drawing a picture. If the situation is impossible, explain it in words.   In a group of ten students, is it possible for each student to shake hands with exactly two other students? Explain.    In a group of ten students, is it possible for each student to shake hands with exactly three other students? Explain.    In a group of seven students, is it possible for each student to shake hands with exactly two other students? Explain.    In a group of seven students, is it possible for each student to shake hands with exactly three other students? Explain.       Hint for part d: .   "
},
{
  "id": "exer_university_handshakes",
  "level": "2",
  "url": "sec_handshakes.html#exer_university_handshakes",
  "type": "",
  "number": "5",
  "title": "Explore.",
  "body": " Explore    How long would it take all 3,000 students at a university to shake hands with all other students? Explain any assumptions you make. Convert your answer to a reasonable unit.   "
},
{
  "id": "exer_help",
  "level": "2",
  "url": "sec_handshakes.html#exer_help",
  "type": "",
  "number": "6",
  "title": "Practice.",
  "body": " Practice   Consult your course syllabus to answer these questions. If these questions are not addressed in the syllabus, ask your professor.   What is your professor's name and contact information?    What are your professor's office hours?    What other ways can you get help with this class?    Is it okay to work with your classmates? If so, are there any restrictions?      "
},
{
  "id": "exer_topics",
  "level": "2",
  "url": "sec_handshakes.html#exer_topics",
  "type": "",
  "number": "7",
  "title": "Practice.",
  "body": " Practice   Consult your course syllabus to answer these questions. If these questions are not addressed in the syllabus, ask your professor.   What topics does your course cover?    What are you expected to know and be able to do? These are the learning objectives of this course.    Does your course has learning standards ? If so, how many are there?      "
},
{
  "id": "exer_att",
  "level": "2",
  "url": "sec_handshakes.html#exer_att",
  "type": "",
  "number": "8",
  "title": "Practice.",
  "body": " Practice   Consult your course syllabus to answer these questions. If these questions are not addressed in the syllabus, ask your professor.   When you miss a class, you lose an opportunity to learn, of course, but does missing class directly affect your grade or is there a course attendance policy? If so, explain.    What should you do to learn the material if you miss a class?    If you have to miss class on a day when there is a quiz, exam, or presentation, or if you end up missing class on such a day, what should you do?      "
},
{
  "id": "exer_assessment",
  "level": "2",
  "url": "sec_handshakes.html#exer_assessment",
  "type": "",
  "number": "9",
  "title": "Practice.",
  "body": " Practice   Consult your course syllabus to answer these questions. If these questions are not addressed in the syllabus, ask your professor.   How is your learning assessed? For example, are there quizzes, exams, collected homework, presentations, projects?    In addition to graded work, how else can you get feedback on your learning? For example, will you work with classmates or is there a way to check your work on exercises?      "
},
{
  "id": "exer_honesty",
  "level": "2",
  "url": "sec_handshakes.html#exer_honesty",
  "type": "",
  "number": "10",
  "title": "Practice.",
  "body": " Practice   Consult your course syllabus to answer these questions. If these questions are not addressed in the syllabus, ask your professor.   Are you allowed to use the Internet or generative AI (such as ChatGPT) to help you learn the course material?    Are you allowed to use the Internet or generative AI (such as ChatGPT) to help you solve the exercises?    Are you allowed to use the Internet or generative AI (such as ChatGPT) to find solutions to exercises?    If you answered yes to any of these questions, what are the expectations for citing your sources\/prompts?      "
},
{
  "id": "exer_motivation",
  "level": "2",
  "url": "sec_handshakes.html#exer_motivation",
  "type": "",
  "number": "11",
  "title": "Understand.",
  "body": " Understand   There are no correct or incorrect answers to this question.   Why are you taking this class? Is it required, or is there a particular reason you enrolled?    Is there a topic you are curious to learn more about?    What are your goals for this course? Try not to use grades as your only goal.    What is one key step you can take to achieve your goals? For example, I will submit my work on time, even if I am not finished. or I will set up a regular study schedule.       "
},
{
  "id": "exer_time",
  "level": "2",
  "url": "sec_handshakes.html#exer_time",
  "type": "",
  "number": "12",
  "title": "Understand.",
  "body": " Understand   There are no correct or incorrect answers to this question.   What other classes are you taking this semester?    How many hours a week will you need to complete your course work? If the course syllabus does not suggest a time, ask your professor. It is not unusual for each course to take six hours a week at bare minimum. This course and other advanced courses often take longer.    Make a study schedule showing your classes and other commitments (such as work, practice, meetings, or family commitments) and time for priorities (such as sleep, eating, exercises, or self-care). Next, block off time to work on each course. Try to schedule at least one hour six days a week to study for this course. If you are overwhelmed with this task, reach out to your advisor or mentor for help.      "
},
{
  "id": "exer_growth",
  "level": "2",
  "url": "sec_handshakes.html#exer_growth",
  "type": "",
  "number": "13",
  "title": "Understand.",
  "body": " Understand   There are no correct or incorrect answers to this question.   Make a list of three different things that you are good at, and for each thing, list something that you did to get good at it.    What do your answers have in common?    What are three ideas for how to get good at mathematics?      "
},
{
  "id": "sec_listing",
  "level": "1",
  "url": "sec_listing.html",
  "type": "Section",
  "number": "2.1",
  "title": "Organized Listing",
  "body": " Organized Listing   It is often helpful to have a list. We might be trying to solve a problem by looking for a pattern among a list of examples. Or, we might want to check for every possibility using a list of all possible examples. In this section, we practice listing.  We begin this section by giving you the opportunity to list on your own, so that you can appreciate the challenges. Try not to get frustrated, just try your best. Later in the section, we describe a few strategies to help create organized lists, including considering cases and constructing possibility trees, that can make the process a little less frustrating.    Squares and Dominoes  We begin with a puzzle.   Squares and Dominoes Puzzle  You have a large supply of (striped) squares and (gray) dominoes with which to tile a board. That is, you want to cover every square on the board with either a square or a domino so that there is no overlap. For example, there are three different ways to tile a board shown in . Notice that the order of the tiles matters.   Three ways to tile the board with squares and dominoes.      We write a dot ( ) for each square and a dash ( ) for each domino to obtain the shorthand listed below each tiling.   There is one way to tile the board. What is it? Use our shorthand.    There are two ways to tile the board. List them using our shorthand.    We have already seen that there are three ways to tile the . You might expect there to be four ways to tile the board, but there are actually five ways. List them.    List the ways to tile the board. How many ways are there?    List all the ways to tile the board. Hint: first list all the ways that start with a square ( ) and then list all the ways that start with a domino ( ).    Make a table to record the number of ways to tile the board for .    Conjecture the number of ways to tile a board. Explain your reasoning and show your work. Your answer should be a specific number.    Conjecture the number of ways to tile a board.      Make sure that you have tried before reading on.   Squares and dominoes tiling of a board       As in , list all the ways to tile a board with squares and dominoes by first listing the ways that start with a square ( ) and then listing all the ways that start with a domino ( ).  First, we list the ways that start with a square. After the square, there is effectively a board to tile. Therefore, we copy all the ways to tile the board (shown with a square bracket) and put a square in front of each, as shown in .   Tiling the board starting with a square.     Next, we list the ways that start with a domino. After the domino, there is effectively a board to tile. Therefore, we copy all the ways to tile the board (shown with a square bracket) and put a domino in front of each, as shown in .   Tiling the board starting with a domino.    Since every tiling of a board either starts with a square or with a domino, we have listed all ways to tile a board.      How many ways are there to tile a board? Explain how your answer related to the number of ways to tile a board and the number of ways to tile a board.  We listed a total of 13 ways to tile a board. Because we get one tiling of a board for each of the eight ways to tile a board and we get one tiling of a board for each of the five ways to tile a board, , the number of ways to tile a board equals the sum of the number of ways to tile a board plus the number of ways to tile a board. That is, there are ways to tile a board.         In and , we saw our first example of a recursive solution where we use tilings of smaller boards to tile a larger board. Specifically, we can tile a board using the tilings for the next two smaller boards: a board and a board. We study recursions in Recursion and Induction. We can use this recursion to count the number of tilings on a board.   Counting squares and dominoes tilings of a board       Based on the recursive solution to tile a board using squares and dominoes in , how many ways can we tile a board?  We saw in that there are ways to tile a board: eight are obtained by putting a square in front of each tiling of a board and five are obtained by putting a domino in front of each tiling of a board.  Similarly, there are ways to tile a board: 13 are obtained by placing a square in front of each tiling of a board and eight are obtained by placing a domino in front of each tiling of a board.  Continuing this reasoning, there are tilings of a board.      Conjecture the number of ways to tile a board.  The one-shorter board is and the two-shorter board is . Since we got one tiling of the board for each tiling of a board and for each tiling of a board, the number of tilings of a equals the sum of the number of tilings of a board and the number of tilings of a board. That last sentence is a mouthful. Using sequence notation, which we introduce formally in , we might write where the subscript on represents the number of ways to tile a board.         The number of ways to tile a board with squares and dominoes is a Fibonacci number it is the sum of the previous two Fibonacci numbers, usually starting with . We revisit the Fibonacci numbers again in . The first few Fibonacci numbers are     Sets of Digits  Throughout this course, we use mathematical structures. One structure is a set , which is understood to be an unordered collection of elements . For example, the set has three elements: 1, 4, and 5. The set is the same as the set because has the same three elements: 1, 4, and 5. That is, the order in which we list the elements in a set does not matter. There is no need to repeat elements within a set because it does not change the set. For example, the set is the same as the set because each set has two elements: 2 and 7. Sets are very important in mathematics. In fact, we might say that   Sets are the most fundamental structure of mathematics because all of mathematics can be defined using sets.   Since discrete mathematics comes from all areas of mathematics, it should not be surprising that this textbook uses a large mathematical vocabulary. Some words in that vocabulary are not defined. For example, the words set or element are not defined in the previous paragraph, although we hope that their meaning is clear from the narrative. It turns out that any vocabulary must be built on a set of undefined words because you have to start somewhere. We try to keep the list of undefined terms as short as possible.  When we can, we give a formal mathematical definition of a new word that states what the word means in mathematics. We sometimes add a quick example or note, but those additions are not officially part of the definition. Definitions in mathematics also serve another purpose. There might be several different, but equivalent, ways to explain the meaning of a word. In such situations, a definition establishes an agreement on which of those different explanations is the official mathematical definition of the word.  Here are a few examples of definitions. First, there are a few ways to refer to types of numbers.   Integers       The numbers are integers .    The numbers are natural numbers (or non-negative integers ) You may find that other mathematics classes have the natural numbers starting with  . For example, the phrase for any natural number means for any integer .    The numbers are positive integers . For example, the phrase for any positive integer means for any integer .       The integers have a special name.   Digit       Each of the integers is a digit .    Two digits (or two integers) are distinct if they are not equal.    A digit (or an integer) is nonzero if it does not equal zero.       We also have a name for the result of adding, subtracting, or multiplying two integers.   Sum, difference, and product       The sum (or total ) of two integers and is . For example, the sum of 2 and 3 is 5 and the sum of 3 and is .    In any sum, terms are the integers that are added. For example, in the sum , the terms are 3 and .    The negative of the integer is the integer . Note that could be positive, negative, or 0. For example, the negative of 5 is , the negative of is , and the negative of 0 is 0.    The difference of the integers and , in that order, is the integer . Note that if we subtract in the opposite order, we get the negative. For example, and . That is, and are negatives of each other.    The product of the integers and is , which is normally written as . For example, the product of 2 and 3 is 6 and the product of 5 and is . Multiplication is shorthand for addition, so officially     In any product, the factors are the integers being multiplied. For example, in the product , the factors are 5 and .       Here is an example that uses these definitions.   2-digit sets       List all sets of two distinct nonzero digits where the sum of the digits is 14.  Since and , two such sets are and . Notice that , but the digits that are added are not distinct. There are no other sets because the largest digit is 9, and so the smallest digit we might use is . The final list is and .      List all sets of two distinct digits where the product of the digits is 12.  Start with the smallest digit 1. We know , but 12 is not a digit. The next digit is 2 and . Thus, one set is . Next, we have the digit 3 and . Thus, another set is . The final list is , .         Try working with sets.   Digit sums  Be sure to write sets in set notation using curly brackets.   List all sets of two distinct nonzero digits where the sum of the digits is seven.    List all sets of three distinct nonzero digits where the sum of the digits is nine.    List all sets of four distinct nonzero digits where the sum of the digits is 21.    How might you organize your lists to avoid accidentally listing the same set twice, to make it easy to compare answers with a classmate, and to determine if you included all the possibilities?      As we saw in and , there are two key challenges to making a list.   How do we know if our list includes all the possibilities?    How can we avoid accidentally listing the same object twice?     The short version of the answer is that we try to be organized, and if possible, we try to write the list in a standard order. For example, in you might have organized your list based on whether the tiling started with a square or a domino, or you might have organized your list based on the number of dominoes. In you might have organized your work by considering the smallest or largest element in your set. In general, we can create an organized list by breaking the problem into special cases.   Using cases to list digit sums   Use cases based on the largest digit to list all sets of four distinct nonzero digits where the sum of the digits is 17.    We consider cases based on the largest digit in the set.  Case 1: The largest digit is 9. The other three distinct nonzero digits must be less than 9 and have a sum of , either or . The two sets in this case are and .  Case 2: The largest digit is 8. The other three distinct nonzero digits must be less than 8 and have a sum of , either or . The two sets in this case are and .  Case 3: The largest digit is 7. The other three distinct nonzero digits must be less than 7 and have a sum of , either or . The two sets in this case are and .  Case 4: The largest digit is 6. The other three distinct nonzero digits must be less than 6 have a sum of which must be . The only set in this case is .  Note that the largest digit cannot be 5 because we cannot find three distinct nonzero digits that are less than 5 and add to . The largest sum of three distinct nonzero less than 5 is .  We have found all seven sets of four distinct nonzero digits where the sum of the digits is 17. They are , , , , , , and .      Strings  Another example of a mathematical structure is a string. Your passwords are probably all strings. We represented a tiling of a board with squares and dominoes as a string of dots ( ) and dashes ( ) in . Here is the definition of string and more vocabulary about strings.   Characters and strings       An alpha-numeric character is either a digit, a lowercase English letter, or an uppercase (capital) English letter. There are 26 letters in the English alphabet and each letter has a lower and upper case.    In this textbook (and most of mathematics and computer science), all alphanumeric characters are case-sensitive . For example, A and a are different characters. There are, alphanumeric characters    Any other single symbol, such as & or > , that is typically found on a keyboard key is a special character .    A character is either an alphanumeric character or a special character.    A string is a finite sequence of characters. For example, A0y2%0 is a string. Note that characters may be repeated within a string and the order matters. For example, 00%2Ay is a different string.    The length of a string is the total number of characters in the string. For example, A0y2%0 is a string of length six.       In our next example, we highlight two organizational strategies for creating lists: considering cases or drawing a possibility tree Possibility trees get their name from natural trees because they have branches. .   2-strings   List all strings of length two where the first character is a , b , or c and the second character is 2 or 6 .   Construct your list by considering cases based on the first character.  Let's consider cases based on the first character.  Case 1: If the first character is a , then we have a2 or a6 .  Case 2: If the first character is b , then we have b2 and b6 .  Case 3: If the first character is c , then we have c2 and c6 .  The strings are a2 , a6 , b2 , b6 , c2 , c6 .   A possibility tree for 2-strings.          Construct your list by drawing a possibility tree.  In , we begin by drawing a starting point on the left. We draw three branches to nodes a , b , c which are the possibilities for the first character in the string.  If the first character is a , then the second character is either 2 or 6 , and so we draw two branches from a to a2 and from a to a6 . Similarly we draw branches from b to b2 , from b to b6 , from c to c2 , and from c to c6 . As before, the strings are: a2 , a6 , b2 , b6 , c2 , and c6 .  There is a shorthand way to draw the tree where we only list the new character in each spot instead as shown in . In this case, it takes a little less work to draw the tree but a little more work to write out the final list.   A possibility tree for 2-strings, shorthand version.   A shorthand possibility tree for two-character strings.           Notice in that we considered the letters in alphabetical order , the order of the English alphabet: a , b , c , d , e , f , g , h , i , j , k , l , m , n , o , p , q , r , s , t , u , v , w , x , y , z    A , B , C , D , E , F , G , H , I , J , K , L , M , N , O , P , Q , R , S , T , U , V , W , X , Y , Z For strings beginning with a , we first list the string ending in 2 and then the string ending in 6 . That is, we considered the digits in numerical order , from smallest to largest.  Practice using possibility trees to create lists.   Listing strings      Use a possibility tree to list all strings of length two where each character is a , b , or c .    Let's change the rules. Use a possibility tree to list all strings of length three where each character is a , b , c if repetitions are not allowed, meaning that each letter is used exactly once.    Look back at the tree you drew in . How many strings of length are there where each character is a , b , or c ? Repetition is allowed. Conjecture without writing a list or drawing a tree.    Look back at the tree you drew in . How many strings of length ten are there where each character is a , b , c , , j and repetition is not allowed? Conjecture without writing a list or drawing a tree.      In the possibility trees that we have drawn so far, each branch is of the same length. Let's look at an example where the branches are different lengths.   Tiling a board with squares and dominoes   Draw the possibility tree to list the ways to tile a board using squares ( ) and dominoes ( ) as in .    The tree in shows all eight possibilities. Notice that we changed the root symbol to to avoid confusion with the square symbol ( ). Reading across the top row, for example, gives the all-square tiling and reading the next path from branch to leaf gives the tiling .   Tiling the board with squares and dominos.      As we build a tiling of length five, we have to be careful. If we have a tiling of length four, then the only option to finish the tiling is a square because a domino would make length six. For example, the branch that begins can only be followed by . Once we have a tiling of length five, the branch ends. For example, the branch ends after three tiles.      Integer Algebra  Often, the numbers we consider in this textbook are integers. For example, we might make a conjecture that involves an unknown integer. Historically, integers were commonly named using the letters , or because some computer programming languages, such as Fortran, used to reserve these letters for integer quantities (perhaps because the word integer begins with and then ). In this textbook, we use a variety of letters for integers, although we tend to save the letters , , and for real-valued (decimal) quantities.  When you studied algebra, you probably worked a lot with quantities named , occasionally with quantities named , , or , and rarely with quantities named , , , or other common letters for integers. The rules of algebra remain the same for whatever letters we use, but it can take some practice to be comfortable working with a variety of letters. In this section, we discuss integer arithmetic. To start with, it is useful to name various arithmetic properties of the integers.   Integer algebra and the order of operations       When several operations are involved in a single calculation, we need to know the order of operations (PEMDAS) , the priority ranking for arithmetic operations. The order is   First, calculate anything inside P arentheses.    Next, calculate E xponents , in order from left to right.    Then, M ultiply and D ivide , in order from left to right.    Last, A dd and S ubtract , in order from left to right.       The commutative properties of the integers tell us that . We often use the commutative property to rewrite sums or products in standard order. For example, products are usually written alphabetically ( is standard, not ) and in products numbers come before letters ( is standard, not ). In sums, numbers often come after letters ( is common, although is also acceptable).    The associative properties of the integers tells us that . We often use the associative property to write an expression such as without parentheses, since the location of parentheses would not change the sum.    We factor an integer by writing it as a product of two integers. For example, we can factor as which we could write as or . Although it is correct to factor as , if an activity or exercise asks you to factor, the answer should not use the factor . Notice that factor can be a noun, which means the quantity we are multiplying, or a verb, which means write as a product.    The distributive property of the integers tells us that . Reading this equation from left to right tells us how to expand (or distribute or multiply out ). For example, . Equations tell us that two things are equal, so we can equally well read this equation from right to left which tells us how to factor. For example, .       Let's practice working with the vocabulary factor and term.   Factors and terms       Describe the quantity using factors and terms.  There are two factors: 2 and . The second factor has two terms: and 1.      Describe the quantity using factors and terms.  There are two terms: and 1. The first term has two factors: 2 and .         We can use the distributive propensity to combine like terms , which means terms having a common factor.   Combining like terms   Simplify the expression .    You have seen . You might have learned that this equation is analogous to saying that if I have 2 apples plus another 3 apples, then I have a total of 5 apples. In the same way, .  Alternatively, we can use the definition of the product. Since and , together we have   Yet another way of thinking about this simplification is to use the distributive property to factor   Each of these approaches is useful. So, even if you favor one approach, learn the other methods as well.    Now it is your turn to practice some integer algebra.   Integer algebra      Simplify .    Simplify .    Expand and simplify     Factor .        Exercises   Exercises for Squares and Dominoes   Practice       Using the strategy in , conjecture the number of ways to tile a board.    Using the strategy and results in , list all 21 ways to tile a board using squares and dominoes.         233    Hint: The eight ways that start with a domino are , , , , , , , and . Each is a domino followed by a way to tile a board. There are also 13 ways to start with a square.       Understand   Suppose we have squares ( ), dominoes ( ), and new trominoes ( ).   List the ways to tile , , , and boards using squares, dominoes, and trominoes.    List the ways to tile , , , and boards using only squares and trominoes.         Hint: The , , and only involve squares and dominoes, so you should have the same list as before. For , the list is: , , , , , , and .    Now there is one way for , one way for , two ways for , and three ways for .       Recap   Do you know    What does it mean to tile a board with squares and tiles?    How to create a list of ways to tile a board with squares and dominoes using the lists from the next two smaller boards?    What the phrase \"recursive solution\" means?    How to generate a list of Fibonacci numbers?        Explore   Suppose we have squares, dominoes, and trominoes, as in Exercise .   Conjecture the number of ways to tile a board with squares, dominoes, and trominoes. Explain your reasoning and make sure you get the correct number when .    Conjecture the number of ways to tile a board with only squares and trominoes. Explain your reasoning and make sure you get the correct number when .         Exercises for Sets of Digits   Practice       List all sets of three distinct nonzero digits where the sum of the digits is 10.    List all sets of three distinct nonzero digits where the sum of the digits is 18.         Hint: , , , and there is one more that does not use 1.    Hint: , , , , and three more.       Understand   We define the term prime later in the course. For this problem, you only need to know that the first few primes are .  List all positive integers less than 50 that are the product of two distinct primes.    Hint: The list includes , , , , , , , and .     Understand       The only set of two distinct nonzero digits whose sum is 16 is . Find all other integers where there is exactly one set of two distinct nonzero digits whose sum is and list the corresponding set. Hint: the smallest possible value is and the largest possible value is .    Give an example of a number where there is exactly one set of three distinct nonzero digits where the sum of the digits is . Are there other examples? Can you list all possible examples?         3, 4, 16, and 17    One example is where the only set is . Yes, there are others. Hint: There are four such numbers .       Recap   Do you know    How to decide if two sets are equal?    What an integer is?    What is the name of the result of adding integers?    What is the name of the result of multiplying integers?    Which integers are digits?    Why we want to be organized when listing?    How to organize lists by considering cases?        Explore   A Kakuro puzzle is like a crossword puzzle but with digits instead of letters. The clues are written within the puzzle. The number in an upper triangle tells you the sum of the digits in the row to the right of the clue, and the number in a lower triangle tells you the sum of the digits in the column below the clue. Each box can be filled in with any digit from 1 to 9, except that no digit is repeated within an answer.   Play Kakuro online at \\url{https:\/\/www.kakuroconquest.com\/} and take a screenshot of your solution to the largest puzzle that you can solve. Try to figure out what each cell must be without any guessing and don't overuse the CHECK feature.    Play Kakuro online at \\url{https:\/\/www.kakuro.com\/index.php} and take a screenshot of your solution to the puzzle of the highest difficulty that you can solve. Try to figure out what each cell must be without any guessing. The Use Pencil option allows you to list the possibilities for each cell. Click on Use Pencil again to enter your guesses.        Explore   This exercise is based on the Kakuro puzzle introduced in Exercise . We use the shorthand clue n-in-k to mean a set of digits 1-9 without repeats whose sum is . For example, 20-in-3 could be . We cannot use that because would repeat. In the actual puzzle, the digits would be filled in the cells in some order, such as 479 or 947.  A kakuro is a clue having only one possible set. For example, 17-in-2 is a kakuro because the only set is while 20-in-3 is not a kakuro because there were four possible sets. Kakuros are very helpful for solving Kakuro puzzles. We found kakuros of the form -in-2 and -in-3 in Exercise .   What is the only digit that the kakuros 3-in-2 and 4-in-2 have in common?    What is the only digit that the kakuros 15-in-5 and 29-in-4 have in common?    List all kakuros of the form -in-4.     List all kakuros of the form -in-8. Hint: what is ?         Exercises for Strings   Practice       Calculate the length of the string 8fG#tt8 .    Are there special characters in the string 8fG#tt8 ? Explain.    How many times does the digit 8 appear in the string 8fG#tt8 ?    How many times does the letter g appear in the string 8fG#tt8 ? Be careful.         Seven    Yes, #    Two    Zero. Note that G is different from g .       Practice       Look back at the tree you drew in  . Conjecture the number of strings of length four where each character is a , b , c , or d and repetition is not allowed.    Use a possibility tree to list all strings of length four where each character is a , b , c , or d and repetition is not allowed. Do not forget to state the final list.    How many strings are in your list in part ? Compare your answer to your conjecture.         24    Hint: The first branches go to , , , and , but after that the list narrows. For example, from , there are branches only to , , and .    Hint: You should get 24 again.       Understand    Use a possibility tree to list all strings of length three where each character is a , b , or c if repetition is allowed, but not consecutively. For example, aba is allowed but baa is not. Do not forget to state the final list.    Hint: the list begins aba , abc , aca , acb , , cbc . There are 12 possible strings.     Understand   There are four tasks on my to-do list: laundry (L), cleaning (C), grocery shopping (G), and exercise (E). I plan to complete two of the four tasks today. Use a possibility tree to list all possible ordered list of tasks in each situation.   I do one task this morning and then a different task this afternoon.    I do laundry or clean in the morning and then have a different task in the afternoon.    I do one task this morning and then a different task this afternoon, but I refuse to do laundry and cleaning on the same day.         Hint: The possible to-do lists are: LC, LG, LE, CL, CG, CE, GL, GC, GE, EL, EC, EG, where the first letter represents the morning chore and the second letter represents the afternoon chore.    Hint: only keep the to-do lists that start with L or C.    Hint: Keep all possible to-do lists except for LC and CL.       Understand   Draw a possibility tree showing the ways to tile a board using squares and dominoes, as described in . Hint: Look at .    Hint: Your tree should look like the tree in , but only for length four (not length five).     Recap   Do you know    What is the distinction between a set and a string?    Whether y and Y are considered the same character?    How to calculate the length of a string or construct a string of a given length?    How to create an organized list using alphabetical or numerical order?    How to create an organized list by considering cases?    How to draw a possibility tree and how to use a possibility tree to create an organized list?        Explore   A permutation of the set  is a string of length four using each of the digits 1 , 2 , 3 , and 4 exactly once.   Use a possibility tree to list all permutations of the set starting with 1 .    Use a possibility tree to list all permutations of the set starting with 2 .    Based on your answer to the previous parts, make a conjecture about the total number of permutations of the set . Explain your reasoning using cases.         Hint: Your tree should produce the list , , , , , .    Hint: You should again get six permutations.    Hint: Use case 1: starts with 1 , case 2: starts with 2 , case 3: starts with 3 , and case 4: starts with 4 . There are six permutations in each case.       Explore   In each part, use a possibility tree to list the permutations of meeting the given condition.   The first first two characters are odd ( 1 or 3 ) and the second two characters are even ( 2 or 4 ). For example, we might have the string 1342 .    The 1 appears before 2 and 3 appears before 4 . For example, we might have the string 3142 .    There is only one decrease , meaning that there is only one place in the permutation of the set where a digit is followed by a smaller digit. For example, 1324 is allowed because 32 is the only decrease, but 3142 is not allowed because both 31 and 42 are decreases.         Hint: The first branches go to 1 and 3 . From 1 there is a single branch to 3 and vice versa. Next, there is a branch from each endpoint to 2 and 4 . Lastly, from each 2 there is a single branch to 4 and vice versa. In all, there are four such permutations.    Hint: The permutation must begin with 1 or 3 . There are three such permutations in each case.    Hint: Consider cases. Case 1: The decrease happens from first to second digits. There are three such strings: 2134 , 3124 , and 4123 . Case 2: The decrease happens from second to third digit. There are five such strings (list them). Case 3: The decrease happens from third to fourth digit. There are three such strings (list them).        Exercises for Integer Algebra   Practice       Expand and simplify     Factor               Hint: Factor out the two.       Understand   Explain how to simplify using each of the three methods from .    Hint: Follow the methods in . In each case, your answer should simplify to .     Recap   Do you know    Which algebraic property of the integers allows us to write sums and products in either order?    Which algebraic property helps us expand and factor integers?    How to combine like terms using the definition of multiplication?    How to combine like terms by factoring?        Explore   The square of the integer is    Use this definition to calculate .    Simplify .    Simplify . Hint: first, use the associative property to write the product as .    Expand .    Factor .    Factor .    Factor .         Nine         Hint: See the hint.    Hint: The answer begins with .    Hint: Factor out the three.    Hint: Factor out .             "
},
{
  "id": "act_squares_dominoes",
  "level": "2",
  "url": "sec_listing.html#act_squares_dominoes",
  "type": "Activity",
  "number": "2.1.A",
  "title": "Squares and Dominoes Puzzle.",
  "body": " Squares and Dominoes Puzzle  You have a large supply of (striped) squares and (gray) dominoes with which to tile a board. That is, you want to cover every square on the board with either a square or a domino so that there is no overlap. For example, there are three different ways to tile a board shown in . Notice that the order of the tiles matters.   Three ways to tile the board with squares and dominoes.      We write a dot ( ) for each square and a dash ( ) for each domino to obtain the shorthand listed below each tiling.   There is one way to tile the board. What is it? Use our shorthand.    There are two ways to tile the board. List them using our shorthand.    We have already seen that there are three ways to tile the . You might expect there to be four ways to tile the board, but there are actually five ways. List them.    List the ways to tile the board. How many ways are there?    List all the ways to tile the board. Hint: first list all the ways that start with a square ( ) and then list all the ways that start with a domino ( ).    Make a table to record the number of ways to tile the board for .    Conjecture the number of ways to tile a board. Explain your reasoning and show your work. Your answer should be a specific number.    Conjecture the number of ways to tile a board.     "
},
{
  "id": "exam_sq_dom6",
  "level": "2",
  "url": "sec_listing.html#exam_sq_dom6",
  "type": "Example",
  "number": "2.1.2",
  "title": "Squares and dominoes tiling of a <span class=\"process-math\">\\(1 \\times 6\\)<\/span> board.",
  "body": " Squares and dominoes tiling of a board       As in , list all the ways to tile a board with squares and dominoes by first listing the ways that start with a square ( ) and then listing all the ways that start with a domino ( ).  First, we list the ways that start with a square. After the square, there is effectively a board to tile. Therefore, we copy all the ways to tile the board (shown with a square bracket) and put a square in front of each, as shown in .   Tiling the board starting with a square.     Next, we list the ways that start with a domino. After the domino, there is effectively a board to tile. Therefore, we copy all the ways to tile the board (shown with a square bracket) and put a domino in front of each, as shown in .   Tiling the board starting with a domino.    Since every tiling of a board either starts with a square or with a domino, we have listed all ways to tile a board.      How many ways are there to tile a board? Explain how your answer related to the number of ways to tile a board and the number of ways to tile a board.  We listed a total of 13 ways to tile a board. Because we get one tiling of a board for each of the eight ways to tile a board and we get one tiling of a board for each of the five ways to tile a board, , the number of ways to tile a board equals the sum of the number of ways to tile a board plus the number of ways to tile a board. That is, there are ways to tile a board.        "
},
{
  "id": "sub_squares_dominoes-6",
  "level": "2",
  "url": "sec_listing.html#sub_squares_dominoes-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "recursive "
},
{
  "id": "exam_sq_dom8",
  "level": "2",
  "url": "sec_listing.html#exam_sq_dom8",
  "type": "Example",
  "number": "2.1.5",
  "title": "Counting squares and dominoes tilings of a <span class=\"process-math\">\\(1 \\times 8\\)<\/span> board.",
  "body": " Counting squares and dominoes tilings of a board       Based on the recursive solution to tile a board using squares and dominoes in , how many ways can we tile a board?  We saw in that there are ways to tile a board: eight are obtained by putting a square in front of each tiling of a board and five are obtained by putting a domino in front of each tiling of a board.  Similarly, there are ways to tile a board: 13 are obtained by placing a square in front of each tiling of a board and eight are obtained by placing a domino in front of each tiling of a board.  Continuing this reasoning, there are tilings of a board.      Conjecture the number of ways to tile a board.  The one-shorter board is and the two-shorter board is . Since we got one tiling of the board for each tiling of a board and for each tiling of a board, the number of tilings of a equals the sum of the number of tilings of a board and the number of tilings of a board. That last sentence is a mouthful. Using sequence notation, which we introduce formally in , we might write where the subscript on represents the number of ways to tile a board.        "
},
{
  "id": "sub_squares_dominoes-8",
  "level": "2",
  "url": "sec_listing.html#sub_squares_dominoes-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Fibonacci "
},
{
  "id": "sub_sets_digits-2",
  "level": "2",
  "url": "sec_listing.html#sub_sets_digits-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "set elements "
},
{
  "id": "sub_sets_digits-5",
  "level": "2",
  "url": "sec_listing.html#sub_sets_digits-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "definition "
},
{
  "id": "defn_integers",
  "level": "2",
  "url": "sec_listing.html#defn_integers",
  "type": "Definition",
  "number": "2.1.6",
  "title": "Integers.",
  "body": " Integers       The numbers are integers .    The numbers are natural numbers (or non-negative integers ) You may find that other mathematics classes have the natural numbers starting with  . For example, the phrase for any natural number means for any integer .    The numbers are positive integers . For example, the phrase for any positive integer means for any integer .      "
},
{
  "id": "defn_digit",
  "level": "2",
  "url": "sec_listing.html#defn_digit",
  "type": "Definition",
  "number": "2.1.7",
  "title": "Digit.",
  "body": " Digit       Each of the integers is a digit .    Two digits (or two integers) are distinct if they are not equal.    A digit (or an integer) is nonzero if it does not equal zero.      "
},
{
  "id": "defn_sum_product",
  "level": "2",
  "url": "sec_listing.html#defn_sum_product",
  "type": "Definition",
  "number": "2.1.8",
  "title": "Sum, difference, and product.",
  "body": " Sum, difference, and product       The sum (or total ) of two integers and is . For example, the sum of 2 and 3 is 5 and the sum of 3 and is .    In any sum, terms are the integers that are added. For example, in the sum , the terms are 3 and .    The negative of the integer is the integer . Note that could be positive, negative, or 0. For example, the negative of 5 is , the negative of is , and the negative of 0 is 0.    The difference of the integers and , in that order, is the integer . Note that if we subtract in the opposite order, we get the negative. For example, and . That is, and are negatives of each other.    The product of the integers and is , which is normally written as . For example, the product of 2 and 3 is 6 and the product of 5 and is . Multiplication is shorthand for addition, so officially     In any product, the factors are the integers being multiplied. For example, in the product , the factors are 5 and .      "
},
{
  "id": "exam_two_digit_sets",
  "level": "2",
  "url": "sec_listing.html#exam_two_digit_sets",
  "type": "Example",
  "number": "2.1.9",
  "title": "2-digit sets.",
  "body": " 2-digit sets       List all sets of two distinct nonzero digits where the sum of the digits is 14.  Since and , two such sets are and . Notice that , but the digits that are added are not distinct. There are no other sets because the largest digit is 9, and so the smallest digit we might use is . The final list is and .      List all sets of two distinct digits where the product of the digits is 12.  Start with the smallest digit 1. We know , but 12 is not a digit. The next digit is 2 and . Thus, one set is . Next, we have the digit 3 and . Thus, another set is . The final list is , .        "
},
{
  "id": "act_digit_sum",
  "level": "2",
  "url": "sec_listing.html#act_digit_sum",
  "type": "Activity",
  "number": "2.1.B",
  "title": "Digit sums.",
  "body": " Digit sums  Be sure to write sets in set notation using curly brackets.   List all sets of two distinct nonzero digits where the sum of the digits is seven.    List all sets of three distinct nonzero digits where the sum of the digits is nine.    List all sets of four distinct nonzero digits where the sum of the digits is 21.    How might you organize your lists to avoid accidentally listing the same set twice, to make it easy to compare answers with a classmate, and to determine if you included all the possibilities?     "
},
{
  "id": "exam_kakuro_12in4",
  "level": "2",
  "url": "sec_listing.html#exam_kakuro_12in4",
  "type": "Example",
  "number": "2.1.10",
  "title": "Using cases to list digit sums.",
  "body": " Using cases to list digit sums   Use cases based on the largest digit to list all sets of four distinct nonzero digits where the sum of the digits is 17.    We consider cases based on the largest digit in the set.  Case 1: The largest digit is 9. The other three distinct nonzero digits must be less than 9 and have a sum of , either or . The two sets in this case are and .  Case 2: The largest digit is 8. The other three distinct nonzero digits must be less than 8 and have a sum of , either or . The two sets in this case are and .  Case 3: The largest digit is 7. The other three distinct nonzero digits must be less than 7 and have a sum of , either or . The two sets in this case are and .  Case 4: The largest digit is 6. The other three distinct nonzero digits must be less than 6 have a sum of which must be . The only set in this case is .  Note that the largest digit cannot be 5 because we cannot find three distinct nonzero digits that are less than 5 and add to . The largest sum of three distinct nonzero less than 5 is .  We have found all seven sets of four distinct nonzero digits where the sum of the digits is 17. They are , , , , , , and .   "
},
{
  "id": "defn_characters_and_strings",
  "level": "2",
  "url": "sec_listing.html#defn_characters_and_strings",
  "type": "Definition",
  "number": "2.1.11",
  "title": "Characters and strings.",
  "body": " Characters and strings       An alpha-numeric character is either a digit, a lowercase English letter, or an uppercase (capital) English letter. There are 26 letters in the English alphabet and each letter has a lower and upper case.    In this textbook (and most of mathematics and computer science), all alphanumeric characters are case-sensitive . For example, A and a are different characters. There are, alphanumeric characters    Any other single symbol, such as & or > , that is typically found on a keyboard key is a special character .    A character is either an alphanumeric character or a special character.    A string is a finite sequence of characters. For example, A0y2%0 is a string. Note that characters may be repeated within a string and the order matters. For example, 00%2Ay is a different string.    The length of a string is the total number of characters in the string. For example, A0y2%0 is a string of length six.      "
},
{
  "id": "sub_strings-4",
  "level": "2",
  "url": "sec_listing.html#sub_strings-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "possibility tree "
},
{
  "id": "exam_2strings",
  "level": "2",
  "url": "sec_listing.html#exam_2strings",
  "type": "Example",
  "number": "2.1.12",
  "title": "2-strings.",
  "body": " 2-strings   List all strings of length two where the first character is a , b , or c and the second character is 2 or 6 .   Construct your list by considering cases based on the first character.  Let's consider cases based on the first character.  Case 1: If the first character is a , then we have a2 or a6 .  Case 2: If the first character is b , then we have b2 and b6 .  Case 3: If the first character is c , then we have c2 and c6 .  The strings are a2 , a6 , b2 , b6 , c2 , c6 .   A possibility tree for 2-strings.          Construct your list by drawing a possibility tree.  In , we begin by drawing a starting point on the left. We draw three branches to nodes a , b , c which are the possibilities for the first character in the string.  If the first character is a , then the second character is either 2 or 6 , and so we draw two branches from a to a2 and from a to a6 . Similarly we draw branches from b to b2 , from b to b6 , from c to c2 , and from c to c6 . As before, the strings are: a2 , a6 , b2 , b6 , c2 , and c6 .  There is a shorthand way to draw the tree where we only list the new character in each spot instead as shown in . In this case, it takes a little less work to draw the tree but a little more work to write out the final list.   A possibility tree for 2-strings, shorthand version.   A shorthand possibility tree for two-character strings.          "
},
{
  "id": "sub_strings-6",
  "level": "2",
  "url": "sec_listing.html#sub_strings-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "alphabetical order "
},
{
  "id": "sub_strings-7",
  "level": "2",
  "url": "sec_listing.html#sub_strings-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "numerical order "
},
{
  "id": "act_listing_strings",
  "level": "2",
  "url": "sec_listing.html#act_listing_strings",
  "type": "Activity",
  "number": "2.1.C",
  "title": "Listing strings.",
  "body": " Listing strings      Use a possibility tree to list all strings of length two where each character is a , b , or c .    Let's change the rules. Use a possibility tree to list all strings of length three where each character is a , b , c if repetitions are not allowed, meaning that each letter is used exactly once.    Look back at the tree you drew in . How many strings of length are there where each character is a , b , or c ? Repetition is allowed. Conjecture without writing a list or drawing a tree.    Look back at the tree you drew in . How many strings of length ten are there where each character is a , b , c , , j and repetition is not allowed? Conjecture without writing a list or drawing a tree.     "
},
{
  "id": "exam_sq_dom5_tree",
  "level": "2",
  "url": "sec_listing.html#exam_sq_dom5_tree",
  "type": "Example",
  "number": "2.1.15",
  "title": "Tiling a <span class=\"process-math\">\\(1 \\times 5\\)<\/span> board with squares and dominoes.",
  "body": " Tiling a board with squares and dominoes   Draw the possibility tree to list the ways to tile a board using squares ( ) and dominoes ( ) as in .    The tree in shows all eight possibilities. Notice that we changed the root symbol to to avoid confusion with the square symbol ( ). Reading across the top row, for example, gives the all-square tiling and reading the next path from branch to leaf gives the tiling .   Tiling the board with squares and dominos.      As we build a tiling of length five, we have to be careful. If we have a tiling of length four, then the only option to finish the tiling is a square because a domino would make length six. For example, the branch that begins can only be followed by . Once we have a tiling of length five, the branch ends. For example, the branch ends after three tiles.   "
},
{
  "id": "defn_integer_algebra_order_operations",
  "level": "2",
  "url": "sec_listing.html#defn_integer_algebra_order_operations",
  "type": "Definition",
  "number": "2.1.17",
  "title": "Integer algebra and the order of operations.",
  "body": " Integer algebra and the order of operations       When several operations are involved in a single calculation, we need to know the order of operations (PEMDAS) , the priority ranking for arithmetic operations. The order is   First, calculate anything inside P arentheses.    Next, calculate E xponents , in order from left to right.    Then, M ultiply and D ivide , in order from left to right.    Last, A dd and S ubtract , in order from left to right.       The commutative properties of the integers tell us that . We often use the commutative property to rewrite sums or products in standard order. For example, products are usually written alphabetically ( is standard, not ) and in products numbers come before letters ( is standard, not ). In sums, numbers often come after letters ( is common, although is also acceptable).    The associative properties of the integers tells us that . We often use the associative property to write an expression such as without parentheses, since the location of parentheses would not change the sum.    We factor an integer by writing it as a product of two integers. For example, we can factor as which we could write as or . Although it is correct to factor as , if an activity or exercise asks you to factor, the answer should not use the factor . Notice that factor can be a noun, which means the quantity we are multiplying, or a verb, which means write as a product.    The distributive property of the integers tells us that . Reading this equation from left to right tells us how to expand (or distribute or multiply out ). For example, . Equations tell us that two things are equal, so we can equally well read this equation from right to left which tells us how to factor. For example, .      "
},
{
  "id": "exam_factors_terms",
  "level": "2",
  "url": "sec_listing.html#exam_factors_terms",
  "type": "Example",
  "number": "2.1.18",
  "title": "Factors and terms.",
  "body": " Factors and terms       Describe the quantity using factors and terms.  There are two factors: 2 and . The second factor has two terms: and 1.      Describe the quantity using factors and terms.  There are two terms: and 1. The first term has two factors: 2 and .        "
},
{
  "id": "sub_integer_algebra-7",
  "level": "2",
  "url": "sec_listing.html#sub_integer_algebra-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "like terms "
},
{
  "id": "exam_combining_like_terms",
  "level": "2",
  "url": "sec_listing.html#exam_combining_like_terms",
  "type": "Example",
  "number": "2.1.19",
  "title": "Combining like terms.",
  "body": " Combining like terms   Simplify the expression .    You have seen . You might have learned that this equation is analogous to saying that if I have 2 apples plus another 3 apples, then I have a total of 5 apples. In the same way, .  Alternatively, we can use the definition of the product. Since and , together we have   Yet another way of thinking about this simplification is to use the distributive property to factor   Each of these approaches is useful. So, even if you favor one approach, learn the other methods as well.   "
},
{
  "id": "act_integer_algebra",
  "level": "2",
  "url": "sec_listing.html#act_integer_algebra",
  "type": "Activity",
  "number": "2.1.D",
  "title": "Integer algebra.",
  "body": " Integer algebra      Simplify .    Simplify .    Expand and simplify     Factor .     "
},
{
  "id": "exer_sq_dom7",
  "level": "2",
  "url": "sec_listing.html#exer_sq_dom7",
  "type": "",
  "number": "1",
  "title": "Practice.",
  "body": " Practice       Using the strategy in , conjecture the number of ways to tile a board.    Using the strategy and results in , list all 21 ways to tile a board using squares and dominoes.         233    Hint: The eight ways that start with a domino are , , , , , , , and . Each is a domino followed by a way to tile a board. There are also 13 ways to start with a square.     "
},
{
  "id": "exer_trominoes_examples",
  "level": "2",
  "url": "sec_listing.html#exer_trominoes_examples",
  "type": "",
  "number": "2",
  "title": "Understand.",
  "body": " Understand   Suppose we have squares ( ), dominoes ( ), and new trominoes ( ).   List the ways to tile , , , and boards using squares, dominoes, and trominoes.    List the ways to tile , , , and boards using only squares and trominoes.         Hint: The , , and only involve squares and dominoes, so you should have the same list as before. For , the list is: , , , , , , and .    Now there is one way for , one way for , two ways for , and three ways for .     "
},
{
  "id": "exer_dyk_sq_dom",
  "level": "2",
  "url": "sec_listing.html#exer_dyk_sq_dom",
  "type": "",
  "number": "3",
  "title": "Recap.",
  "body": " Recap   Do you know    What does it mean to tile a board with squares and tiles?    How to create a list of ways to tile a board with squares and dominoes using the lists from the next two smaller boards?    What the phrase \"recursive solution\" means?    How to generate a list of Fibonacci numbers?      "
},
{
  "id": "exer_trominoes_conjectures",
  "level": "2",
  "url": "sec_listing.html#exer_trominoes_conjectures",
  "type": "",
  "number": "4",
  "title": "Explore.",
  "body": " Explore   Suppose we have squares, dominoes, and trominoes, as in Exercise .   Conjecture the number of ways to tile a board with squares, dominoes, and trominoes. Explain your reasoning and make sure you get the correct number when .    Conjecture the number of ways to tile a board with only squares and trominoes. Explain your reasoning and make sure you get the correct number when .      "
},
{
  "id": "exer_3digit_sums",
  "level": "2",
  "url": "sec_listing.html#exer_3digit_sums",
  "type": "",
  "number": "5",
  "title": "Practice.",
  "body": " Practice       List all sets of three distinct nonzero digits where the sum of the digits is 10.    List all sets of three distinct nonzero digits where the sum of the digits is 18.         Hint: , , , and there is one more that does not use 1.    Hint: , , , , and three more.     "
},
{
  "id": "exer_prime_products",
  "level": "2",
  "url": "sec_listing.html#exer_prime_products",
  "type": "",
  "number": "6",
  "title": "Understand.",
  "body": " Understand   We define the term prime later in the course. For this problem, you only need to know that the first few primes are .  List all positive integers less than 50 that are the product of two distinct primes.    Hint: The list includes , , , , , , , and .   "
},
{
  "id": "exer_kakuro23",
  "level": "2",
  "url": "sec_listing.html#exer_kakuro23",
  "type": "",
  "number": "7",
  "title": "Understand.",
  "body": " Understand       The only set of two distinct nonzero digits whose sum is 16 is . Find all other integers where there is exactly one set of two distinct nonzero digits whose sum is and list the corresponding set. Hint: the smallest possible value is and the largest possible value is .    Give an example of a number where there is exactly one set of three distinct nonzero digits where the sum of the digits is . Are there other examples? Can you list all possible examples?         3, 4, 16, and 17    One example is where the only set is . Yes, there are others. Hint: There are four such numbers .     "
},
{
  "id": "exer_dyk_digits_sets",
  "level": "2",
  "url": "sec_listing.html#exer_dyk_digits_sets",
  "type": "",
  "number": "8",
  "title": "Recap.",
  "body": " Recap   Do you know    How to decide if two sets are equal?    What an integer is?    What is the name of the result of adding integers?    What is the name of the result of multiplying integers?    Which integers are digits?    Why we want to be organized when listing?    How to organize lists by considering cases?      "
},
{
  "id": "exer_play_Kakuro",
  "level": "2",
  "url": "sec_listing.html#exer_play_Kakuro",
  "type": "",
  "number": "9",
  "title": "Explore.",
  "body": " Explore   A Kakuro puzzle is like a crossword puzzle but with digits instead of letters. The clues are written within the puzzle. The number in an upper triangle tells you the sum of the digits in the row to the right of the clue, and the number in a lower triangle tells you the sum of the digits in the column below the clue. Each box can be filled in with any digit from 1 to 9, except that no digit is repeated within an answer.   Play Kakuro online at \\url{https:\/\/www.kakuroconquest.com\/} and take a screenshot of your solution to the largest puzzle that you can solve. Try to figure out what each cell must be without any guessing and don't overuse the CHECK feature.    Play Kakuro online at \\url{https:\/\/www.kakuro.com\/index.php} and take a screenshot of your solution to the puzzle of the highest difficulty that you can solve. Try to figure out what each cell must be without any guessing. The Use Pencil option allows you to list the possibilities for each cell. Click on Use Pencil again to enter your guesses.      "
},
{
  "id": "exer_explore_kakuro",
  "level": "2",
  "url": "sec_listing.html#exer_explore_kakuro",
  "type": "",
  "number": "10",
  "title": "Explore.",
  "body": " Explore   This exercise is based on the Kakuro puzzle introduced in Exercise . We use the shorthand clue n-in-k to mean a set of digits 1-9 without repeats whose sum is . For example, 20-in-3 could be . We cannot use that because would repeat. In the actual puzzle, the digits would be filled in the cells in some order, such as 479 or 947.  A kakuro is a clue having only one possible set. For example, 17-in-2 is a kakuro because the only set is while 20-in-3 is not a kakuro because there were four possible sets. Kakuros are very helpful for solving Kakuro puzzles. We found kakuros of the form -in-2 and -in-3 in Exercise .   What is the only digit that the kakuros 3-in-2 and 4-in-2 have in common?    What is the only digit that the kakuros 15-in-5 and 29-in-4 have in common?    List all kakuros of the form -in-4.     List all kakuros of the form -in-8. Hint: what is ?      "
},
{
  "id": "exer_string_vocab",
  "level": "2",
  "url": "sec_listing.html#exer_string_vocab",
  "type": "",
  "number": "11",
  "title": "Practice.",
  "body": " Practice       Calculate the length of the string 8fG#tt8 .    Are there special characters in the string 8fG#tt8 ? Explain.    How many times does the digit 8 appear in the string 8fG#tt8 ?    How many times does the letter g appear in the string 8fG#tt8 ? Be careful.         Seven    Yes, #    Two    Zero. Note that G is different from g .     "
},
{
  "id": "exer_4strings_norepeat",
  "level": "2",
  "url": "sec_listing.html#exer_4strings_norepeat",
  "type": "",
  "number": "12",
  "title": "Practice.",
  "body": " Practice       Look back at the tree you drew in  . Conjecture the number of strings of length four where each character is a , b , c , or d and repetition is not allowed.    Use a possibility tree to list all strings of length four where each character is a , b , c , or d and repetition is not allowed. Do not forget to state the final list.    How many strings are in your list in part ? Compare your answer to your conjecture.         24    Hint: The first branches go to , , , and , but after that the list narrows. For example, from , there are branches only to , , and .    Hint: You should get 24 again.     "
},
{
  "id": "exer_tree_3-strings",
  "level": "2",
  "url": "sec_listing.html#exer_tree_3-strings",
  "type": "",
  "number": "13",
  "title": "Understand.",
  "body": " Understand    Use a possibility tree to list all strings of length three where each character is a , b , or c if repetition is allowed, but not consecutively. For example, aba is allowed but baa is not. Do not forget to state the final list.    Hint: the list begins aba , abc , aca , acb , , cbc . There are 12 possible strings.   "
},
{
  "id": "exer_tree_mytodolist",
  "level": "2",
  "url": "sec_listing.html#exer_tree_mytodolist",
  "type": "",
  "number": "14",
  "title": "Understand.",
  "body": " Understand   There are four tasks on my to-do list: laundry (L), cleaning (C), grocery shopping (G), and exercise (E). I plan to complete two of the four tasks today. Use a possibility tree to list all possible ordered list of tasks in each situation.   I do one task this morning and then a different task this afternoon.    I do laundry or clean in the morning and then have a different task in the afternoon.    I do one task this morning and then a different task this afternoon, but I refuse to do laundry and cleaning on the same day.         Hint: The possible to-do lists are: LC, LG, LE, CL, CG, CE, GL, GC, GE, EL, EC, EG, where the first letter represents the morning chore and the second letter represents the afternoon chore.    Hint: only keep the to-do lists that start with L or C.    Hint: Keep all possible to-do lists except for LC and CL.     "
},
{
  "id": "exer_sq_dom4_tree",
  "level": "2",
  "url": "sec_listing.html#exer_sq_dom4_tree",
  "type": "",
  "number": "15",
  "title": "Understand.",
  "body": " Understand   Draw a possibility tree showing the ways to tile a board using squares and dominoes, as described in . Hint: Look at .    Hint: Your tree should look like the tree in , but only for length four (not length five).   "
},
{
  "id": "exer_dyk_strings_trees",
  "level": "2",
  "url": "sec_listing.html#exer_dyk_strings_trees",
  "type": "",
  "number": "16",
  "title": "Recap.",
  "body": " Recap   Do you know    What is the distinction between a set and a string?    Whether y and Y are considered the same character?    How to calculate the length of a string or construct a string of a given length?    How to create an organized list using alphabetical or numerical order?    How to create an organized list by considering cases?    How to draw a possibility tree and how to use a possibility tree to create an organized list?      "
},
{
  "id": "exer_perm_trees",
  "level": "2",
  "url": "sec_listing.html#exer_perm_trees",
  "type": "",
  "number": "17",
  "title": "Explore.",
  "body": " Explore   A permutation of the set  is a string of length four using each of the digits 1 , 2 , 3 , and 4 exactly once.   Use a possibility tree to list all permutations of the set starting with 1 .    Use a possibility tree to list all permutations of the set starting with 2 .    Based on your answer to the previous parts, make a conjecture about the total number of permutations of the set . Explain your reasoning using cases.         Hint: Your tree should produce the list , , , , , .    Hint: You should again get six permutations.    Hint: Use case 1: starts with 1 , case 2: starts with 2 , case 3: starts with 3 , and case 4: starts with 4 . There are six permutations in each case.     "
},
{
  "id": "exer_restricted_perms",
  "level": "2",
  "url": "sec_listing.html#exer_restricted_perms",
  "type": "",
  "number": "18",
  "title": "Explore.",
  "body": " Explore   In each part, use a possibility tree to list the permutations of meeting the given condition.   The first first two characters are odd ( 1 or 3 ) and the second two characters are even ( 2 or 4 ). For example, we might have the string 1342 .    The 1 appears before 2 and 3 appears before 4 . For example, we might have the string 3142 .    There is only one decrease , meaning that there is only one place in the permutation of the set where a digit is followed by a smaller digit. For example, 1324 is allowed because 32 is the only decrease, but 3142 is not allowed because both 31 and 42 are decreases.         Hint: The first branches go to 1 and 3 . From 1 there is a single branch to 3 and vice versa. Next, there is a branch from each endpoint to 2 and 4 . Lastly, from each 2 there is a single branch to 4 and vice versa. In all, there are four such permutations.    Hint: The permutation must begin with 1 or 3 . There are three such permutations in each case.    Hint: Consider cases. Case 1: The decrease happens from first to second digits. There are three such strings: 2134 , 3124 , and 4123 . Case 2: The decrease happens from second to third digit. There are five such strings (list them). Case 3: The decrease happens from third to fourth digit. There are three such strings (list them).     "
},
{
  "id": "exer_integer_algebra",
  "level": "2",
  "url": "sec_listing.html#exer_integer_algebra",
  "type": "",
  "number": "19",
  "title": "Practice.",
  "body": " Practice       Expand and simplify     Factor               Hint: Factor out the two.     "
},
{
  "id": "exer_3ways_combine_like_terms",
  "level": "2",
  "url": "sec_listing.html#exer_3ways_combine_like_terms",
  "type": "",
  "number": "20",
  "title": "Understand.",
  "body": " Understand   Explain how to simplify using each of the three methods from .    Hint: Follow the methods in . In each case, your answer should simplify to .   "
},
{
  "id": "exer_dyk_alg_orderops",
  "level": "2",
  "url": "sec_listing.html#exer_dyk_alg_orderops",
  "type": "",
  "number": "21",
  "title": "Recap.",
  "body": " Recap   Do you know    Which algebraic property of the integers allows us to write sums and products in either order?    Which algebraic property helps us expand and factor integers?    How to combine like terms using the definition of multiplication?    How to combine like terms by factoring?      "
},
{
  "id": "exer_square_algebra",
  "level": "2",
  "url": "sec_listing.html#exer_square_algebra",
  "type": "",
  "number": "22",
  "title": "Explore.",
  "body": " Explore   The square of the integer is    Use this definition to calculate .    Simplify .    Simplify . Hint: first, use the associative property to write the product as .    Expand .    Factor .    Factor .    Factor .         Nine         Hint: See the hint.    Hint: The answer begins with .    Hint: Factor out the three.    Hint: Factor out .          "
},
{
  "id": "sec_counting_steps_cases",
  "level": "1",
  "url": "sec_counting_steps_cases.html",
  "type": "Section",
  "number": "2.2",
  "title": "Counting with Steps and Cases",
  "body": " Counting with Steps and Cases   Sometimes we want to count how many objects are in a list. We might want to know if there will be enough different ID numbers for students (past, present, and future) or if we need new area codes for telephone numbers (as happened when people first started using cellphones). In this section, we practice counting including two rules related to steps and cases. We also discuss factorial notation that arises frequently in counting.  Mathematicians who like to count things famously ask The Three Questions .   Is there (or does there exist ) an example of ?    If so, then is it unique , which means it is the only example of ?    If it exists but is not unique, then how many examples of are there?     The third question asks us to count , which means to determine how many examples of something there are.  Try your hand at counting.   Lunch  My favorite cafe offers three types of salad, five types of pizza, and four types of cookies for lunch.   How many lunch options are there if I decide to have a salad and a pizza? Hint: What would the possibility tree look like with salads ( s1 , s2 , s3 ) and pizzas ( p1 , p2 , p3 , p4 , p5 )?    How does your answer to relate to the number of salads and the number of pizzas?    How many lunch options are there if I choose a salad or pizza (but not both) instead? Hint: Consider cases.    How does your answer to relate to the number of salads and the number of pizzas?    How many lunch options are there if I order the special Pick Two which is either a salad and a pizza, a salad and a cookie, or a pizza and a cookie? Hint: Consider cases.        Counting with Steps and Cases  Be sure to try before continuing to read because we are about to discuss two strategies steps and cases, that help us find the solution.   Salad and pizza   As in , my favorite cafe offers three types of salad, five types of pizza, and four types of cookies for lunch. How many lunch options are there if I decide to have a salad and a pizza? This question was .    The possibility tree would have three branches from , one to each of s1 , s2 , and s3 . Then each of those nodes would have five branches, one to each of p1 , p2 , p3 , p4 , p5 . Our list would have each possible lunch option. s1 & p1 , s1 & p2 , s1 & p3 , s1 & p4 , s1 & p5 ,   s2 & p1 , s2 & p2 , s2 & p3 , s2 & p4 , s2 & p5 ,   s3 & p1 , s3 & p2 , s3 & p3 , s3 & p4 , s3 & p5 . Notice that we have three rows with five options in each row. The total number of lunch options is .  Formally, we can build each lunch option through a sequence of two steps. Step 1: choose a salad and then Step 2: choose a pizza. There are three ways to do Step 1 and then, no matter which salad we choose, there are five ways to do Step 2.    In general, when there are the same number of branches at each step, we can multiply to find the total number. We state this rule formally.   Steps multiply   If we can build each example through a sequence of steps and if there are ways to do the first step, and then for each way to do the first step there are ways to do the second step, and then for each way to do the first two steps there are ways to do the third step, and so on, then there are total ways to build an example.    Notice the phrase and then , which often indicates that steps are involved.  A special situation that is counted using steps is the number of permutations of the set .   Permutation of the set    For a positive integer , a permutation of the set  is a string of length using each of the digits 1 , 2 , , and n exactly once. For example, 2413 is a permutation of the set .    We consider the case where in our next example.   Permutations of the set   How many permutations of the set are there?    Imagine building each permutation by filling in four spaces:   Step 1: Fill in the first space. There are four ways to fill the first space because the first digit can be any of 1 , 2 , 3 , or 4 . (4 ways)  Step 2: Fill in the second space. There are only three ways to fill the second space, because the second digit cannot be the same as the first digit. For example, if we filled in the first space with a 2 as then the second space can only be 1 , 3 , or 4 . (3 ways)  Step 3: Fill in the third space. There are only two ways to fill in the third space because the third digit cannot be the same as the first or second digit. For example, if we filled in the first two spaces with 2 and then 4 as then the third space can only be 1 or 3 . (2 ways)  Step 4: Fill in the fourth space. There is no choice , which means that there is only one way to fill in the fourth space. It must be the last missing digit. For example, if we filled in the first three spaces with 2 , and then 4 , and then 1 as then the fourth space can only be 3 and so our final permutation would be . (1 way)  Since steps multiply , there are permutations of the set . You can check by drawing the possibility tree, as in Exercise .    Products such as the answer to occur often enough that they have a name and notation. For example, our product is 4 factorial  .  We state the formal definition and discuss factorials in .  Let's continue our discussion of .   Salad or pizza   As in , my favorite cafe offers three types of salad, five types of pizza, and four types of cookies for lunch. How many lunch options are there if I decide to have a salad or a pizza (but not both)? This question was .    We could make a list by considering cases. On our list would be each of the three salads and each of the five pizzas: s1 , s2 , s3 , p1 , p2 , p3 , p4 , p5 , The total number of lunch options is .  Formally, we separate lunch options into two cases: in the first case, we choose a salad (in 3 ways) and in the second case, we choose a pizza (in 5 ways). Notice that we do Case 1 or Case 2, but not both.    In general, when there are separate cases, we can add to find the total number. We state this rule formally.   Cases add   If we can build each example by considering separate cases and if there are ways in the first case, ways in the second case, ways in the third case, and so on, then there are total ways to build an example.    Notice the word or which often indicates that cases are involved. When we refer to separate cases , we mean that each example is covered by exactly one case.  An application of cases is to count the opposite.   Counting 0-99   How many integers from 0 to 99 include the digit 5?    We can list the integers that include the digit 5. They are:   A direct count gives 19 such integers. This strategy would not generalize well if we wanted 0 to 999 instead.  Alternatively, we can use cases to count the opposite. Each integer from 0 to 99 can be written as 2-digit numbers. For example, write 05 instead of 5. We know that there are 100 integers from 0 to 99. We can list the integers from 0 to 99 that do not include the digit 5 in steps.  Step 1: Choose the first (non-5) digit from (9 ways)  Step 2: Choose the second (non-5) digit from (9 ways)  Since steps multiply , there are integers from 0 to 99 that do not include the digit 5.  Since cases add, the number of integers from 0 to 99 that include the digit 5 plus the number of integers from 0 to 99 that do not include the digit 5 must equal the total number of integers from 0 to 99. That is, if is the number of integers from 0 to 99 that include the digit 5, then or, equivalently .    We summarize the strategy from in a theorem.   Counting the opposite   If there are objects, of which objects have a given property, then there are objects that have the opposite property.    In more complicated examples, we can combine steps and cases.   Pick two lunch   As in , my favorite cafe offers three types of salad, five types of pizza, and four types of cookies for lunch. How many lunch options are there if I order the Pick Two special, which is either a salad and a pizza, a salad and a cookie, or a pizza and a cookie? This question was .    We consider cases.  Case 1: Order salad and pizza. As in , we can build each lunch option through a sequence of two steps. Step 1: choose the salad (3 ways) and then step 2: choose the pizza (5 ways). Since steps multiply , there are options listed in this case.  Case 2: Order salad and a cookie. We can build each lunch choice through a sequence of two steps. Step 1: choose the salad (3 ways) and then step 2: choose the cookie (4 ways). Since steps multiply, there are options listed in this case.  Case 3: Order pizza and a cookie. We can build each lunch choice through a sequence of two steps. Step 1: choose the pizza (5 ways) and then step 2: choose the cookie (4 ways). Since steps multiply, there are options listed in this case.  Since cases add , there are  Pick Two lunch options.    It would be reasonable to report the answer to , as . In fact, the unevaluated version can help us to see generalizations. For example, if there were salads, pizzas, and cookies, then the total number of Pick Two lunches would be   In some counting situations, we want an exact number as an answer. For example, we usually evaluate the answer if it is 20 or less. More often, it is acceptable not to evaluate the answer.   Not evaluating counts, version 1  Unless stated otherwise, when counting you may leave any answer greater than twenty in a format that could easily be evaluated on a calculator. In particular, your answer may involve addition, subtraction, multiplication, division, and parentheses.   Now it is your turn to practice counting using steps and uses.   Passwords  In this problem, a password is a string of eight characters. Imagine building each password by filling in the eight spaces:  Eight spaces to fill when building a password.      Use steps and\/or cases to count how many different passwords are possible in each situation. Follow to determine whether you should simplify your answer.   All characters are digits ( 0 - 9 ). Hint: Step 1: fill in the first space, Step 2: fill in the second space, , Step 8: fill in the eighth space.    The first three characters must be letters ( a - z , A - Z ) and the rest of the characters are digits or, vice versa The phrase vice versa means in reverse. , the first three characters are digits and the rest of the characters are letters. Hint: Consider two cases.    The characters are lowercase letters ( a - z ), but no letters may be repeated.    The characters are uppercase letters, and exactly one of the characters must be the letter X . Hint: Step 1: select which space is X , Step 2: fill in the first open space with an uppercase letter other than X , Step 3: fill in the next open space with an uppercase letter other than X , etc.        When Counting Goes Awry  In each of the examples so far in this section, we have been able to count using steps, cases, or a combination of steps and cases. Some situations do not fit these rules. For example, to use steps , there must be the same number of options at each step. That means that in the possibility tree, there must be the same number of branches at any given level. Here is an example where steps do not work.   Steps do not work   Explain why we cannot use steps to count the number of tilings of the board using squares ( ) and dominoes ( ), as in .    In , we drew the possibility tree shown in .  If we think of building the tiling in steps, the first step is to choose the first tile, which can be a square or a domino. In the tree, we see two branches from the root.  The second step is to choose the second tile, which can also be a square or a domino. In the tree, we see two branches from the original square or domino. So far, so good.  But in the third step, when we choose the third tile, the situation changes. In most cases, the third tile can be a square or domino, but if we started with two dominoes , then the next tile must be a square because the total length is five (and three dominoes would have length six). In the tree, we see only one branch following the option .  In the fourth step, when we choose the fourth tile, the situation becomes even more complicated. In some cases, we still have the option of a square or a domino, which corresponds to two branches of the tree. In other cases, we only have the option of a square, which corresponds to one branch in the tree. In some cases, we are done, so there are no options, which corresponds to zero branches in the tree.  To use the steps rule , we would need each step to have a constant number of branches. Since the third step could have one or two branches and the fourth (and fifth) steps could have zero, one, or two branches, we cannot use the steps rule.    Similarly, to use cases , the cases must be separate. Here is an example where cases do not work.   Cases do not work   Explain why we cannot use cases to count the number of tilings of the board using squares and dominoes that begin or end with a square.    Let's see what happens if we try to count using cases. Even though we do not normally make a list when counting, it will be illustrative here to make a list in each case.  Case 1: The tiling begins with a square. The remainder of the tiling can be any square and domino tiling of a board: , , or . Therefore, we have three strings in this case:   Case 2: The tiling ends with a square. Now, the beginning of the tiling can be any square and domino tiling of a board: , , or . Therefore, we also have three strings in this case:   Notice that the tilings and appear on both lists, so there are only four distinct tilings: . The answer is 4, but if we had added the numbers from our cases, we would have , which is not correct.    There is a workaround when we have cases that are not separate. See Exercise for an example. For now, try to keep your cases separate.   Counting incorrectly  Consider all strings of length four that use only the characters X , f , and 2 and include at least one X . When explaining why the given count does not work, your reasons might be that we missed counting some of the options, that we counted some options that we should not have counted, or that we counted some (or all) options more than once.   Explain why the following count does not work. Step 1: Fill in the first space. (3 ways). Step 2: Fill in the second space. (3 ways). Step 3: Fill in the third space. (3 ways). Step 4: Fill in the fourth space. (3 ways). Since steps multiply , there are such strings. Is the correct answer larger or smaller than 81?    Explain why the following count does not work. Step 1: Choose where an goes. (4 ways) Step 2: Fill in the first blank space with or . (2 ways) Step 3: Fill in the second blank space with or . (2 ways) Step 4: Fill in the third blank space with or . (2 ways). Since steps multiply , there are ways. Is the correct answer larger or smaller than 32?    Explain why the following count does not work. Step 1: Choose where an goes. (4 ways) Step 2: Fill in the first blank space. (3 ways) Step 3: Fill in the second blank space. (3 ways) Step 4: Fill in the third blank space. (3 ways). Since steps multiply , there are ways.     Find a way to count to get the answer of . Hint: Count the strings that do not use the character X .        Algebra: Factorials  In , we saw that the number of permutations of the set was is where . This product of consecutive integers denoted 4! is pronounced 4 factorial .  Before formally defining factorials, it is convenient to define consecutive integers.   Consecutive integers       A pair of integers is consecutive if . For example, 5 and 6 are consecutive integers because .    In general, a list of integers is consecutive if we get from each integer to the next by adding one. For example, are consecutive integers. We often refer to consecutive integers as appearing in a row on the list of integers in .       Let's practice writing consecutive integers.   Consecutive integers       List the three integers immediately after the integer .  Notice that and . The next three integers after the integer are: , , and .      List the three integers immediately before the integer .  Since we add one to get from an integer to the next consecutive integer, we must subtract one to get from an integer to the previous consecutive integer. That is, the integer before must be . Similarly, the integer before must be and the integer before that is . The three integers immediately before the integer are , , and          It can be helpful to think of the sequence around an integer as   Now we are ready to give a formal definition of a factorial.   Factorial       When is a positive integer, the factorial  is the product of the consecutive integers , usually written in reverse order. For example, .    We often write which can be misleading for small powers of . For example, by definition, . Neither of these factorials includes the integer 3 as a factor, even though the notation shows a factor of (3).    It is convenient to define .    Factorials are at the same priority in the order of operations as exponents in . For example, , while , definitely a different value.       Let's practice applying this definition.   Factorials   On this problem, we only use technology to check our answers.   Evaluate 6!.  By definition and using that from , we get       Evaluate when .  Since factorials come before products in the order of operations , we have .      Evaluate when .  Since parentheses come first in the order of operations, we calculate the product first to get , as in .         Now it is your turn to work with factorials.   Factorials  On this problem, you may only use technology to verify your answers. All letters represent positive integers.   Evaluate     Evaluate when .    Write as a single factorial:     Make a conjecture about how to simplify .    Make a conjecture about how to simplify .      Be sure to complete because we are about to reveal some of the answers.   Simplifying       Write as a single factorial:   We have       Write as a single factorial   Similarly, we have       Write as a single factorial   Similarly, we have          You may also leave factorials in your answers.   Not evaluating counts, version 2  Unless stated otherwise, when counting, you may leave any answer greater than twenty in a format that could easily be evaluated on a calculator. In particular, your answer may involve addition, subtraction, multiplication, division, factorials, and parentheses.     Exercises   Exercises for Counting with Steps and Cases  When counting, follow . In particular, if the answer is greater than 20, leave it in a format that could be easily evaluated on a calculator.     As in , a password is a string of eight characters. Use steps to count how many different passwords are possible in each situation.   All of the characters are lower-case letters ( a - z ).    The characters must be alpha-numeric ( 0 - 9 , a - z , A - Z ).    The first character must be an uppercase letter ( A - Z ), and the rest of the characters are digits (0-9).          . See for additional explanation of exponential notation.    Hint: possible characters in each of the eight spaces.    Hint: The answer is of the form .         In this problem, a Personal Identification Number (PIN) is a string of digits. Use steps to count how many different PINs are possible in each situation.   Each PIN has length four.    Each PIN has length eight.    Each PIN has length four, but the digits cannot be repeated.    Each PIN has length eight, but digits may not be repeated.              Hint: Now the length is eight.         Hint: Continue as in the previous part.             How many permutations are there of the set ? List them using a possibility tree.    Show how to use steps to count the number of permutations of . Hint: Look at .         Six    Hint: You should get .         A small technology firm has six designers, ten engineers, 20 analysts, and five business people.   If a tech team has one designer, one engineer, one analyst, and one business person, how many different tech teams are possible?    The CEO proposes that the firm pay up to $30 for a designer and analyst or for an engineer and business person to go to lunch in order to help build community. If every possible pair takes the offer, what will the total cost be to the firm?              Hint: There are designer-analyst pairs. Now count how many engineer-business pairs there are. Do not forget to multiply by $30.         As in , a password is a string of length eight. Use steps to count how many different passwords are possible in each situation.   The first character must be a special character (one of: % , & , $ , # , or ? ), and the rest of the characters are alpha-numeric.    One of the characters must be a special character (one of: % , & , $ , # , or ? ) and the rest are alpha-numeric. Hint: Step 1: select which space is the special character, Step 2: fill in the special character, Step 3: fill in the first open space, Step 4: fill in the next open space, etc.         Hints: There are five choices for the special character and then 62 choices for each of the remaining seven spaces. Your answer should look like .    Hint: Follow the hint. There are eight spaces, so there are eight ways to complete Step 1. There are five ways to complete Step 2. For each of the next steps, there are 62 ways to pick the alpha-numeric character.         Each state of the United States decides on its own format for license plates. All states use only upper case letters (A-Z) and digits and allow repeated characters, such as MOM445 . Use steps to count how many license plates are possible in each format.   Minnesota standard license plates are in the format ABC123 consisting of three uppercase letters followed by three digits.    California standard license plates are in the format 1ABC234 consisting of one digit, then three uppercase letters, and then three digits.    Arizona standard license plates are in an unusual format consisting of strings of six characters, either uppercase letters or digits, with the restriction that the fourth character is always a digit. Some examples are ABC1DE , 0001AB , and 123456 .              Hint: This part is similar to the previous part.    Hint: The first character can be any of characters. The other characters also have 36 choices, except the fourth character only has ten choices.         Telephone numbers in the United States have the format 201-345-6789 . The first three digits ( 201 ) are the area code , the next three digits ( 345 ) are the exchange , and the last four digits ( 6789 ) are the extension .   Historically, area codes were strings of length three in the format ABC where each character was a digit but the first digit A could not be 0 or 1 , the second digit B had to be 0 or 1 , and the third digit C could be any digit. There were a few more restrictions that we ignore here. How many different area codes were there?    I grew up in New Jersey. When I was a child, the entire state of New Jersey shared one area code: 201 , the smallest possible area code. How many 201 telephone numbers were there if neither the first nor the second digit of the exchange was 0 or 1 ? That is, each telephone number is of the form 201-ABC-DEFG where A and B can be any digit other than 0 or 1 and C , D , E , F , and G can be any digit.    My neighborhood in Saint Paul, Minnesota, has historically had telephone numbers in the format 651-698-DEFG or 651-699-DEFG where D , E , F , and G can be any digit. How many of those telephone numbers are there? Hint: Consider two cases.         Hint: There are eight choices for A , two choices for B , and ten choices for C .    Hint: Now there are eight choices for A and B and ten choices for the rest of the characters.    Hint: There are in each case.         Do you know    What a question beginning how many asks for?    When to add and when to multiply when counting?    How to think of a counting problem as a sequence of steps?    How to think of a counting problem as a set of separate cases?    How to combine steps and cases?          How many permutations of satisfy each restriction?   Start with an even number ( 2 , 4 , or 6 )?    Start with the three even numbers followed by the three odd numbers ( 1 , 3 , and 5 )?    Alternate between even and odd numbers. Hint: Consider cases based on whether the first number is even or odd.    Have 3 always followed by 6 ? Hint: Think of five blanks to fill in with the five objects: 1 , 2 , 36 , 4 , and 5 .       Note: You should leave your answers unsimplified as part of showing your work.   Hint: The answer is equal to 360.    Hint: The answer is equal to 36.    Hint: The answer is not equal to 36 because there are two cases.    Hint: Follow the hint to get an answer equal to 120.         Exercises for When Counting Goes Awry     In this problem, a Personal Identification Number (PIN) is a string of three characters  0 , 1 , 2 , or 3 , where the digits appear in nondecreasing order. For example, 023 and 112 are possible PINs but the string 203 is not allowed because . Hint: You can think of the digits of a PIN as being arranged from the smallest to the largest.   Draw a possibility tree showing all possible PINs.    How many different PINs are there?    Explain why we cannot use steps to count.          In , we counted 19 integers from 0 to 99 that include the digit 5.   What (incorrect) answer would we get from the following cases: Case 1: The integer starts with the digit 5. Case 2: The integer ends with the digit 5.    Why do we get the incorrect answer? Did we forget to count some of the integers, count some integers that we should not have counted, or count some (or all) of the integers more than once?         20    We double counted the integer 55.         In the Handshakes puzzle , we counted the number of handshakes between a group of students. Suppose that there are six students.   Explain why the following count does not work. Reasons might be that we missed counting some of the options, that we counted some options that we shouldn't have, or that we counted some (or all) options more than once. Step 1: pick the first student (6 ways). Step 2: pick the second student (5 ways). Since steps multiply , there are handshakes.     Explain how to find the correct answer using 30 as a starting point.         We double count each pair of students.    Hint: We got twice the correct answer.         Do you know    When steps do not work and what we might do instead?    When cases do not work, and what we might do instead?    What are three reasons we might get the incorrect answer when counting?              There are 28 students in the discrete class, 32 students in the programming class, and 15 students in both classes. In a list of students who are in at least one of the classes, how many students are on that list? Use cases to count. Hint: Be careful! Once the discrete students are listed, only add programming students who are not already on the list.    Let's generalize. If there are students in the Discrete class, students in the Programming class, and students in both classes, how many students are in at least one of the classes? State your answer as a conjecture involving , , and . This conjecture is known as the Inclusion-Exclusion Principle .         45    Hint: There are students who are in the Programming class only.        Exercises for Algebra: Factorials     Show how to calculate each quantity without using technology.   Evaluate , , and .    Evaluate when .         Note: by definition. Then and .    Hint: Evaluate .             How many integers are in the set ?    How many integers are in the set ? Your answer should depend on .              You are taking a picture of four friends. How many ways can they line up for the photo? Write your answer as a factorial.    A standard deck of playing cards as shown in (in ) has 52 distinct cards. In how many ways can a deck be ordered? Write your answer as a factorial and then use technology to calculate how large that is.              Hint: Explain why the answer has about 68 digits.             It turns out that 362,880. Use that information to evaluate .    Write as a single factorial: .         Hint: When multiplying by ten, you get another zero at the end.              Factor and simplify . Hint: See .    Hint: first factor out the . Then use the hint to further simplify your answer.       Do you know    What consecutive means?    What stands for and how to pronounce it?    How to evaluate ?    How is defined?    Where factorials rank in the order of operations?         "
},
{
  "id": "sec_counting_steps_cases-2-2",
  "level": "2",
  "url": "sec_counting_steps_cases.html#sec_counting_steps_cases-2-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "The Three Questions "
},
{
  "id": "sec_counting_steps_cases-2-3",
  "level": "2",
  "url": "sec_counting_steps_cases.html#sec_counting_steps_cases-2-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "count "
},
{
  "id": "act_lunch",
  "level": "2",
  "url": "sec_counting_steps_cases.html#act_lunch",
  "type": "Activity",
  "number": "2.2.A",
  "title": "Lunch.",
  "body": " Lunch  My favorite cafe offers three types of salad, five types of pizza, and four types of cookies for lunch.   How many lunch options are there if I decide to have a salad and a pizza? Hint: What would the possibility tree look like with salads ( s1 , s2 , s3 ) and pizzas ( p1 , p2 , p3 , p4 , p5 )?    How does your answer to relate to the number of salads and the number of pizzas?    How many lunch options are there if I choose a salad or pizza (but not both) instead? Hint: Consider cases.    How does your answer to relate to the number of salads and the number of pizzas?    How many lunch options are there if I order the special Pick Two which is either a salad and a pizza, a salad and a cookie, or a pizza and a cookie? Hint: Consider cases.     "
},
{
  "id": "exam_salad_and_pizza",
  "level": "2",
  "url": "sec_counting_steps_cases.html#exam_salad_and_pizza",
  "type": "Example",
  "number": "2.2.1",
  "title": "Salad and pizza.",
  "body": " Salad and pizza   As in , my favorite cafe offers three types of salad, five types of pizza, and four types of cookies for lunch. How many lunch options are there if I decide to have a salad and a pizza? This question was .    The possibility tree would have three branches from , one to each of s1 , s2 , and s3 . Then each of those nodes would have five branches, one to each of p1 , p2 , p3 , p4 , p5 . Our list would have each possible lunch option. s1 & p1 , s1 & p2 , s1 & p3 , s1 & p4 , s1 & p5 ,   s2 & p1 , s2 & p2 , s2 & p3 , s2 & p4 , s2 & p5 ,   s3 & p1 , s3 & p2 , s3 & p3 , s3 & p4 , s3 & p5 . Notice that we have three rows with five options in each row. The total number of lunch options is .  Formally, we can build each lunch option through a sequence of two steps. Step 1: choose a salad and then Step 2: choose a pizza. There are three ways to do Step 1 and then, no matter which salad we choose, there are five ways to do Step 2.   "
},
{
  "id": "thm_steps_multiply",
  "level": "2",
  "url": "sec_counting_steps_cases.html#thm_steps_multiply",
  "type": "Theorem",
  "number": "2.2.2",
  "title": "Steps multiply.",
  "body": " Steps multiply   If we can build each example through a sequence of steps and if there are ways to do the first step, and then for each way to do the first step there are ways to do the second step, and then for each way to do the first two steps there are ways to do the third step, and so on, then there are total ways to build an example.   "
},
{
  "id": "defn_permutation_of_set",
  "level": "2",
  "url": "sec_counting_steps_cases.html#defn_permutation_of_set",
  "type": "Definition",
  "number": "2.2.3",
  "title": "Permutation of the set <span class=\"process-math\">\\(\\{\\str{1},\\str{2},\\ldots,\\str{n}\\}\\)<\/span>.",
  "body": " Permutation of the set    For a positive integer , a permutation of the set  is a string of length using each of the digits 1 , 2 , , and n exactly once. For example, 2413 is a permutation of the set .   "
},
{
  "id": "exam_perms_1to4",
  "level": "2",
  "url": "sec_counting_steps_cases.html#exam_perms_1to4",
  "type": "Example",
  "number": "2.2.4",
  "title": "Permutations of the set <span class=\"process-math\">\\(\\{\\str{1},\\str{2},\\str{3},\\str{4}\\}\\)<\/span>.",
  "body": " Permutations of the set   How many permutations of the set are there?    Imagine building each permutation by filling in four spaces:   Step 1: Fill in the first space. There are four ways to fill the first space because the first digit can be any of 1 , 2 , 3 , or 4 . (4 ways)  Step 2: Fill in the second space. There are only three ways to fill the second space, because the second digit cannot be the same as the first digit. For example, if we filled in the first space with a 2 as then the second space can only be 1 , 3 , or 4 . (3 ways)  Step 3: Fill in the third space. There are only two ways to fill in the third space because the third digit cannot be the same as the first or second digit. For example, if we filled in the first two spaces with 2 and then 4 as then the third space can only be 1 or 3 . (2 ways)  Step 4: Fill in the fourth space. There is no choice , which means that there is only one way to fill in the fourth space. It must be the last missing digit. For example, if we filled in the first three spaces with 2 , and then 4 , and then 1 as then the fourth space can only be 3 and so our final permutation would be . (1 way)  Since steps multiply , there are permutations of the set . You can check by drawing the possibility tree, as in Exercise .   "
},
{
  "id": "sub_steps_cases-11",
  "level": "2",
  "url": "sec_counting_steps_cases.html#sub_steps_cases-11",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "factorial "
},
{
  "id": "exam_salad_or_pizza",
  "level": "2",
  "url": "sec_counting_steps_cases.html#exam_salad_or_pizza",
  "type": "Example",
  "number": "2.2.5",
  "title": "Salad or pizza.",
  "body": " Salad or pizza   As in , my favorite cafe offers three types of salad, five types of pizza, and four types of cookies for lunch. How many lunch options are there if I decide to have a salad or a pizza (but not both)? This question was .    We could make a list by considering cases. On our list would be each of the three salads and each of the five pizzas: s1 , s2 , s3 , p1 , p2 , p3 , p4 , p5 , The total number of lunch options is .  Formally, we separate lunch options into two cases: in the first case, we choose a salad (in 3 ways) and in the second case, we choose a pizza (in 5 ways). Notice that we do Case 1 or Case 2, but not both.   "
},
{
  "id": "thm_cases_add",
  "level": "2",
  "url": "sec_counting_steps_cases.html#thm_cases_add",
  "type": "Theorem",
  "number": "2.2.6",
  "title": "Cases add.",
  "body": " Cases add   If we can build each example by considering separate cases and if there are ways in the first case, ways in the second case, ways in the third case, and so on, then there are total ways to build an example.   "
},
{
  "id": "sub_steps_cases-17",
  "level": "2",
  "url": "sec_counting_steps_cases.html#sub_steps_cases-17",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "separate cases "
},
{
  "id": "exam_count100",
  "level": "2",
  "url": "sec_counting_steps_cases.html#exam_count100",
  "type": "Example",
  "number": "2.2.7",
  "title": "Counting 0-99.",
  "body": " Counting 0-99   How many integers from 0 to 99 include the digit 5?    We can list the integers that include the digit 5. They are:   A direct count gives 19 such integers. This strategy would not generalize well if we wanted 0 to 999 instead.  Alternatively, we can use cases to count the opposite. Each integer from 0 to 99 can be written as 2-digit numbers. For example, write 05 instead of 5. We know that there are 100 integers from 0 to 99. We can list the integers from 0 to 99 that do not include the digit 5 in steps.  Step 1: Choose the first (non-5) digit from (9 ways)  Step 2: Choose the second (non-5) digit from (9 ways)  Since steps multiply , there are integers from 0 to 99 that do not include the digit 5.  Since cases add, the number of integers from 0 to 99 that include the digit 5 plus the number of integers from 0 to 99 that do not include the digit 5 must equal the total number of integers from 0 to 99. That is, if is the number of integers from 0 to 99 that include the digit 5, then or, equivalently .   "
},
{
  "id": "thm_count_complement",
  "level": "2",
  "url": "sec_counting_steps_cases.html#thm_count_complement",
  "type": "Theorem",
  "number": "2.2.8",
  "title": "Counting the opposite.",
  "body": " Counting the opposite   If there are objects, of which objects have a given property, then there are objects that have the opposite property.   "
},
{
  "id": "exam_pick_two_lunch",
  "level": "2",
  "url": "sec_counting_steps_cases.html#exam_pick_two_lunch",
  "type": "Example",
  "number": "2.2.9",
  "title": "Pick two lunch.",
  "body": " Pick two lunch   As in , my favorite cafe offers three types of salad, five types of pizza, and four types of cookies for lunch. How many lunch options are there if I order the Pick Two special, which is either a salad and a pizza, a salad and a cookie, or a pizza and a cookie? This question was .    We consider cases.  Case 1: Order salad and pizza. As in , we can build each lunch option through a sequence of two steps. Step 1: choose the salad (3 ways) and then step 2: choose the pizza (5 ways). Since steps multiply , there are options listed in this case.  Case 2: Order salad and a cookie. We can build each lunch choice through a sequence of two steps. Step 1: choose the salad (3 ways) and then step 2: choose the cookie (4 ways). Since steps multiply, there are options listed in this case.  Case 3: Order pizza and a cookie. We can build each lunch choice through a sequence of two steps. Step 1: choose the pizza (5 ways) and then step 2: choose the cookie (4 ways). Since steps multiply, there are options listed in this case.  Since cases add , there are  Pick Two lunch options.   "
},
{
  "id": "rem_not_eval_counts_1",
  "level": "2",
  "url": "sec_counting_steps_cases.html#rem_not_eval_counts_1",
  "type": "Remark",
  "number": "2.2.10",
  "title": "Not evaluating counts, version 1.",
  "body": " Not evaluating counts, version 1  Unless stated otherwise, when counting you may leave any answer greater than twenty in a format that could easily be evaluated on a calculator. In particular, your answer may involve addition, subtraction, multiplication, division, and parentheses.  "
},
{
  "id": "act_passwords",
  "level": "2",
  "url": "sec_counting_steps_cases.html#act_passwords",
  "type": "Activity",
  "number": "2.2.B",
  "title": "Passwords.",
  "body": " Passwords  In this problem, a password is a string of eight characters. Imagine building each password by filling in the eight spaces:  Eight spaces to fill when building a password.      Use steps and\/or cases to count how many different passwords are possible in each situation. Follow to determine whether you should simplify your answer.   All characters are digits ( 0 - 9 ). Hint: Step 1: fill in the first space, Step 2: fill in the second space, , Step 8: fill in the eighth space.    The first three characters must be letters ( a - z , A - Z ) and the rest of the characters are digits or, vice versa The phrase vice versa means in reverse. , the first three characters are digits and the rest of the characters are letters. Hint: Consider two cases.    The characters are lowercase letters ( a - z ), but no letters may be repeated.    The characters are uppercase letters, and exactly one of the characters must be the letter X . Hint: Step 1: select which space is X , Step 2: fill in the first open space with an uppercase letter other than X , Step 3: fill in the next open space with an uppercase letter other than X , etc.     "
},
{
  "id": "exam_not_steps",
  "level": "2",
  "url": "sec_counting_steps_cases.html#exam_not_steps",
  "type": "Example",
  "number": "2.2.12",
  "title": "Steps do not work.",
  "body": " Steps do not work   Explain why we cannot use steps to count the number of tilings of the board using squares ( ) and dominoes ( ), as in .    In , we drew the possibility tree shown in .  If we think of building the tiling in steps, the first step is to choose the first tile, which can be a square or a domino. In the tree, we see two branches from the root.  The second step is to choose the second tile, which can also be a square or a domino. In the tree, we see two branches from the original square or domino. So far, so good.  But in the third step, when we choose the third tile, the situation changes. In most cases, the third tile can be a square or domino, but if we started with two dominoes , then the next tile must be a square because the total length is five (and three dominoes would have length six). In the tree, we see only one branch following the option .  In the fourth step, when we choose the fourth tile, the situation becomes even more complicated. In some cases, we still have the option of a square or a domino, which corresponds to two branches of the tree. In other cases, we only have the option of a square, which corresponds to one branch in the tree. In some cases, we are done, so there are no options, which corresponds to zero branches in the tree.  To use the steps rule , we would need each step to have a constant number of branches. Since the third step could have one or two branches and the fourth (and fifth) steps could have zero, one, or two branches, we cannot use the steps rule.   "
},
{
  "id": "exam_not_cases",
  "level": "2",
  "url": "sec_counting_steps_cases.html#exam_not_cases",
  "type": "Example",
  "number": "2.2.13",
  "title": "Cases do not work.",
  "body": " Cases do not work   Explain why we cannot use cases to count the number of tilings of the board using squares and dominoes that begin or end with a square.    Let's see what happens if we try to count using cases. Even though we do not normally make a list when counting, it will be illustrative here to make a list in each case.  Case 1: The tiling begins with a square. The remainder of the tiling can be any square and domino tiling of a board: , , or . Therefore, we have three strings in this case:   Case 2: The tiling ends with a square. Now, the beginning of the tiling can be any square and domino tiling of a board: , , or . Therefore, we also have three strings in this case:   Notice that the tilings and appear on both lists, so there are only four distinct tilings: . The answer is 4, but if we had added the numbers from our cases, we would have , which is not correct.   "
},
{
  "id": "act_counting_incorrectly",
  "level": "2",
  "url": "sec_counting_steps_cases.html#act_counting_incorrectly",
  "type": "Activity",
  "number": "2.2.C",
  "title": "Counting incorrectly.",
  "body": " Counting incorrectly  Consider all strings of length four that use only the characters X , f , and 2 and include at least one X . When explaining why the given count does not work, your reasons might be that we missed counting some of the options, that we counted some options that we should not have counted, or that we counted some (or all) options more than once.   Explain why the following count does not work. Step 1: Fill in the first space. (3 ways). Step 2: Fill in the second space. (3 ways). Step 3: Fill in the third space. (3 ways). Step 4: Fill in the fourth space. (3 ways). Since steps multiply , there are such strings. Is the correct answer larger or smaller than 81?    Explain why the following count does not work. Step 1: Choose where an goes. (4 ways) Step 2: Fill in the first blank space with or . (2 ways) Step 3: Fill in the second blank space with or . (2 ways) Step 4: Fill in the third blank space with or . (2 ways). Since steps multiply , there are ways. Is the correct answer larger or smaller than 32?    Explain why the following count does not work. Step 1: Choose where an goes. (4 ways) Step 2: Fill in the first blank space. (3 ways) Step 3: Fill in the second blank space. (3 ways) Step 4: Fill in the third blank space. (3 ways). Since steps multiply , there are ways.     Find a way to count to get the answer of . Hint: Count the strings that do not use the character X .     "
},
{
  "id": "defn_consecutive_integers",
  "level": "2",
  "url": "sec_counting_steps_cases.html#defn_consecutive_integers",
  "type": "Definition",
  "number": "2.2.14",
  "title": "Consecutive integers.",
  "body": " Consecutive integers       A pair of integers is consecutive if . For example, 5 and 6 are consecutive integers because .    In general, a list of integers is consecutive if we get from each integer to the next by adding one. For example, are consecutive integers. We often refer to consecutive integers as appearing in a row on the list of integers in .      "
},
{
  "id": "exam_consecutive_integers",
  "level": "2",
  "url": "sec_counting_steps_cases.html#exam_consecutive_integers",
  "type": "Example",
  "number": "2.2.15",
  "title": "Consecutive integers.",
  "body": " Consecutive integers       List the three integers immediately after the integer .  Notice that and . The next three integers after the integer are: , , and .      List the three integers immediately before the integer .  Since we add one to get from an integer to the next consecutive integer, we must subtract one to get from an integer to the previous consecutive integer. That is, the integer before must be . Similarly, the integer before must be and the integer before that is . The three integers immediately before the integer are , , and         "
},
{
  "id": "defn_factorial",
  "level": "2",
  "url": "sec_counting_steps_cases.html#defn_factorial",
  "type": "Definition",
  "number": "2.2.16",
  "title": "Factorial.",
  "body": " Factorial       When is a positive integer, the factorial  is the product of the consecutive integers , usually written in reverse order. For example, .    We often write which can be misleading for small powers of . For example, by definition, . Neither of these factorials includes the integer 3 as a factor, even though the notation shows a factor of (3).    It is convenient to define .    Factorials are at the same priority in the order of operations as exponents in . For example, , while , definitely a different value.      "
},
{
  "id": "exam_factorials",
  "level": "2",
  "url": "sec_counting_steps_cases.html#exam_factorials",
  "type": "Example",
  "number": "2.2.17",
  "title": "Factorials.",
  "body": " Factorials   On this problem, we only use technology to check our answers.   Evaluate 6!.  By definition and using that from , we get       Evaluate when .  Since factorials come before products in the order of operations , we have .      Evaluate when .  Since parentheses come first in the order of operations, we calculate the product first to get , as in .        "
},
{
  "id": "act_factorials",
  "level": "2",
  "url": "sec_counting_steps_cases.html#act_factorials",
  "type": "Activity",
  "number": "2.2.D",
  "title": "Factorials.",
  "body": " Factorials  On this problem, you may only use technology to verify your answers. All letters represent positive integers.   Evaluate     Evaluate when .    Write as a single factorial:     Make a conjecture about how to simplify .    Make a conjecture about how to simplify .     "
},
{
  "id": "exam_simplify_factorials",
  "level": "2",
  "url": "sec_counting_steps_cases.html#exam_simplify_factorials",
  "type": "Example",
  "number": "2.2.18",
  "title": "Simplifying <span class=\"process-math\">\\(n(n-1)!\\)<\/span>",
  "body": " Simplifying       Write as a single factorial:   We have       Write as a single factorial   Similarly, we have       Write as a single factorial   Similarly, we have         "
},
{
  "id": "rem_not_eval_counts_2",
  "level": "2",
  "url": "sec_counting_steps_cases.html#rem_not_eval_counts_2",
  "type": "Remark",
  "number": "2.2.19",
  "title": "Not evaluating counts, version 2.",
  "body": " Not evaluating counts, version 2  Unless stated otherwise, when counting, you may leave any answer greater than twenty in a format that could easily be evaluated on a calculator. In particular, your answer may involve addition, subtraction, multiplication, division, factorials, and parentheses.  "
},
{
  "id": "exer_alphanumeric_passwords",
  "level": "2",
  "url": "sec_counting_steps_cases.html#exer_alphanumeric_passwords",
  "type": "",
  "number": "1",
  "title": "<span class=\"process-math\">\\(Practice\\)<\/span>.",
  "body": "   As in , a password is a string of eight characters. Use steps to count how many different passwords are possible in each situation.   All of the characters are lower-case letters ( a - z ).    The characters must be alpha-numeric ( 0 - 9 , a - z , A - Z ).    The first character must be an uppercase letter ( A - Z ), and the rest of the characters are digits (0-9).          . See for additional explanation of exponential notation.    Hint: possible characters in each of the eight spaces.    Hint: The answer is of the form .     "
},
{
  "id": "exer_PIN",
  "level": "2",
  "url": "sec_counting_steps_cases.html#exer_PIN",
  "type": "",
  "number": "2",
  "title": "<span class=\"process-math\">\\(Practice\\)<\/span>.",
  "body": "   In this problem, a Personal Identification Number (PIN) is a string of digits. Use steps to count how many different PINs are possible in each situation.   Each PIN has length four.    Each PIN has length eight.    Each PIN has length four, but the digits cannot be repeated.    Each PIN has length eight, but digits may not be repeated.              Hint: Now the length is eight.         Hint: Continue as in the previous part.     "
},
{
  "id": "exer_perms_12345",
  "level": "2",
  "url": "sec_counting_steps_cases.html#exer_perms_12345",
  "type": "",
  "number": "3",
  "title": "<span class=\"process-math\">\\(Practice\\)<\/span>.",
  "body": "       How many permutations are there of the set ? List them using a possibility tree.    Show how to use steps to count the number of permutations of . Hint: Look at .         Six    Hint: You should get .     "
},
{
  "id": "exer_tech_teams",
  "level": "2",
  "url": "sec_counting_steps_cases.html#exer_tech_teams",
  "type": "",
  "number": "4",
  "title": "<span class=\"process-math\">\\(Practice\\)<\/span>.",
  "body": "   A small technology firm has six designers, ten engineers, 20 analysts, and five business people.   If a tech team has one designer, one engineer, one analyst, and one business person, how many different tech teams are possible?    The CEO proposes that the firm pay up to $30 for a designer and analyst or for an engineer and business person to go to lunch in order to help build community. If every possible pair takes the offer, what will the total cost be to the firm?              Hint: There are designer-analyst pairs. Now count how many engineer-business pairs there are. Do not forget to multiply by $30.     "
},
{
  "id": "exer_passwords_special_characters",
  "level": "2",
  "url": "sec_counting_steps_cases.html#exer_passwords_special_characters",
  "type": "",
  "number": "5",
  "title": "<span class=\"process-math\">\\(Understand\\)<\/span>.",
  "body": "   As in , a password is a string of length eight. Use steps to count how many different passwords are possible in each situation.   The first character must be a special character (one of: % , & , $ , # , or ? ), and the rest of the characters are alpha-numeric.    One of the characters must be a special character (one of: % , & , $ , # , or ? ) and the rest are alpha-numeric. Hint: Step 1: select which space is the special character, Step 2: fill in the special character, Step 3: fill in the first open space, Step 4: fill in the next open space, etc.         Hints: There are five choices for the special character and then 62 choices for each of the remaining seven spaces. Your answer should look like .    Hint: Follow the hint. There are eight spaces, so there are eight ways to complete Step 1. There are five ways to complete Step 2. For each of the next steps, there are 62 ways to pick the alpha-numeric character.     "
},
{
  "id": "exer_license_plates",
  "level": "2",
  "url": "sec_counting_steps_cases.html#exer_license_plates",
  "type": "",
  "number": "6",
  "title": "<span class=\"process-math\">\\(Understand\\)<\/span>.",
  "body": "   Each state of the United States decides on its own format for license plates. All states use only upper case letters (A-Z) and digits and allow repeated characters, such as MOM445 . Use steps to count how many license plates are possible in each format.   Minnesota standard license plates are in the format ABC123 consisting of three uppercase letters followed by three digits.    California standard license plates are in the format 1ABC234 consisting of one digit, then three uppercase letters, and then three digits.    Arizona standard license plates are in an unusual format consisting of strings of six characters, either uppercase letters or digits, with the restriction that the fourth character is always a digit. Some examples are ABC1DE , 0001AB , and 123456 .              Hint: This part is similar to the previous part.    Hint: The first character can be any of characters. The other characters also have 36 choices, except the fourth character only has ten choices.     "
},
{
  "id": "exer_phone_numbers",
  "level": "2",
  "url": "sec_counting_steps_cases.html#exer_phone_numbers",
  "type": "",
  "number": "7",
  "title": "<span class=\"process-math\">\\(Understand\\)<\/span>.",
  "body": "   Telephone numbers in the United States have the format 201-345-6789 . The first three digits ( 201 ) are the area code , the next three digits ( 345 ) are the exchange , and the last four digits ( 6789 ) are the extension .   Historically, area codes were strings of length three in the format ABC where each character was a digit but the first digit A could not be 0 or 1 , the second digit B had to be 0 or 1 , and the third digit C could be any digit. There were a few more restrictions that we ignore here. How many different area codes were there?    I grew up in New Jersey. When I was a child, the entire state of New Jersey shared one area code: 201 , the smallest possible area code. How many 201 telephone numbers were there if neither the first nor the second digit of the exchange was 0 or 1 ? That is, each telephone number is of the form 201-ABC-DEFG where A and B can be any digit other than 0 or 1 and C , D , E , F , and G can be any digit.    My neighborhood in Saint Paul, Minnesota, has historically had telephone numbers in the format 651-698-DEFG or 651-699-DEFG where D , E , F , and G can be any digit. How many of those telephone numbers are there? Hint: Consider two cases.         Hint: There are eight choices for A , two choices for B , and ten choices for C .    Hint: Now there are eight choices for A and B and ten choices for the rest of the characters.    Hint: There are in each case.     "
},
{
  "id": "exer_dyk_steps_cases",
  "level": "2",
  "url": "sec_counting_steps_cases.html#exer_dyk_steps_cases",
  "type": "",
  "number": "8",
  "title": "<span class=\"process-math\">\\(Recap\\)<\/span>.",
  "body": "   Do you know    What a question beginning how many asks for?    When to add and when to multiply when counting?    How to think of a counting problem as a sequence of steps?    How to think of a counting problem as a set of separate cases?    How to combine steps and cases?      "
},
{
  "id": "exer_perms_of_six",
  "level": "2",
  "url": "sec_counting_steps_cases.html#exer_perms_of_six",
  "type": "",
  "number": "9",
  "title": "<span class=\"process-math\">\\(Explore\\)<\/span>.",
  "body": "   How many permutations of satisfy each restriction?   Start with an even number ( 2 , 4 , or 6 )?    Start with the three even numbers followed by the three odd numbers ( 1 , 3 , and 5 )?    Alternate between even and odd numbers. Hint: Consider cases based on whether the first number is even or odd.    Have 3 always followed by 6 ? Hint: Think of five blanks to fill in with the five objects: 1 , 2 , 36 , 4 , and 5 .       Note: You should leave your answers unsimplified as part of showing your work.   Hint: The answer is equal to 360.    Hint: The answer is equal to 36.    Hint: The answer is not equal to 36 because there are two cases.    Hint: Follow the hint to get an answer equal to 120.      "
},
{
  "id": "exer_password_not_steps",
  "level": "2",
  "url": "sec_counting_steps_cases.html#exer_password_not_steps",
  "type": "",
  "number": "10",
  "title": "<span class=\"process-math\">\\(Practice\\)<\/span>.",
  "body": "   In this problem, a Personal Identification Number (PIN) is a string of three characters  0 , 1 , 2 , or 3 , where the digits appear in nondecreasing order. For example, 023 and 112 are possible PINs but the string 203 is not allowed because . Hint: You can think of the digits of a PIN as being arranged from the smallest to the largest.   Draw a possibility tree showing all possible PINs.    How many different PINs are there?    Explain why we cannot use steps to count.      "
},
{
  "id": "exer_count100_awry",
  "level": "2",
  "url": "sec_counting_steps_cases.html#exer_count100_awry",
  "type": "",
  "number": "11",
  "title": "<span class=\"process-math\">\\(Practice\\)<\/span>.",
  "body": "   In , we counted 19 integers from 0 to 99 that include the digit 5.   What (incorrect) answer would we get from the following cases: Case 1: The integer starts with the digit 5. Case 2: The integer ends with the digit 5.    Why do we get the incorrect answer? Did we forget to count some of the integers, count some integers that we should not have counted, or count some (or all) of the integers more than once?         20    We double counted the integer 55.     "
},
{
  "id": "exer_double_count_hs",
  "level": "2",
  "url": "sec_counting_steps_cases.html#exer_double_count_hs",
  "type": "",
  "number": "12",
  "title": "<span class=\"process-math\">\\(Understand\\)<\/span>.",
  "body": "   In the Handshakes puzzle , we counted the number of handshakes between a group of students. Suppose that there are six students.   Explain why the following count does not work. Reasons might be that we missed counting some of the options, that we counted some options that we shouldn't have, or that we counted some (or all) options more than once. Step 1: pick the first student (6 ways). Step 2: pick the second student (5 ways). Since steps multiply , there are handshakes.     Explain how to find the correct answer using 30 as a starting point.         We double count each pair of students.    Hint: We got twice the correct answer.     "
},
{
  "id": "exer_dyk_counting_awry",
  "level": "2",
  "url": "sec_counting_steps_cases.html#exer_dyk_counting_awry",
  "type": "",
  "number": "13",
  "title": "<span class=\"process-math\">\\(Recap\\)<\/span>.",
  "body": "   Do you know    When steps do not work and what we might do instead?    When cases do not work, and what we might do instead?    What are three reasons we might get the incorrect answer when counting?      "
},
{
  "id": "exer_inclusion_exclusion_2sets",
  "level": "2",
  "url": "sec_counting_steps_cases.html#exer_inclusion_exclusion_2sets",
  "type": "",
  "number": "14",
  "title": "<span class=\"process-math\">\\(Explore\\)<\/span>.",
  "body": "       There are 28 students in the discrete class, 32 students in the programming class, and 15 students in both classes. In a list of students who are in at least one of the classes, how many students are on that list? Use cases to count. Hint: Be careful! Once the discrete students are listed, only add programming students who are not already on the list.    Let's generalize. If there are students in the Discrete class, students in the Programming class, and students in both classes, how many students are in at least one of the classes? State your answer as a conjecture involving , , and . This conjecture is known as the Inclusion-Exclusion Principle .         45    Hint: There are students who are in the Programming class only.     "
},
{
  "id": "exer_evaluate_factorials",
  "level": "2",
  "url": "sec_counting_steps_cases.html#exer_evaluate_factorials",
  "type": "",
  "number": "15",
  "title": "<span class=\"process-math\">\\(Practice\\)<\/span>.",
  "body": "   Show how to calculate each quantity without using technology.   Evaluate , , and .    Evaluate when .         Note: by definition. Then and .    Hint: Evaluate .     "
},
{
  "id": "exer_set1ton",
  "level": "2",
  "url": "sec_counting_steps_cases.html#exer_set1ton",
  "type": "",
  "number": "16",
  "title": "<span class=\"process-math\">\\(Practice\\)<\/span>.",
  "body": "       How many integers are in the set ?    How many integers are in the set ? Your answer should depend on .      "
},
{
  "id": "exer_application_factorial",
  "level": "2",
  "url": "sec_counting_steps_cases.html#exer_application_factorial",
  "type": "",
  "number": "17",
  "title": "<span class=\"process-math\">\\(Practice\\)<\/span>.",
  "body": "       You are taking a picture of four friends. How many ways can they line up for the photo? Write your answer as a factorial.    A standard deck of playing cards as shown in (in ) has 52 distinct cards. In how many ways can a deck be ordered? Write your answer as a factorial and then use technology to calculate how large that is.              Hint: Explain why the answer has about 68 digits.     "
},
{
  "id": "exer_single_factorial",
  "level": "2",
  "url": "sec_counting_steps_cases.html#exer_single_factorial",
  "type": "",
  "number": "18",
  "title": "<span class=\"process-math\">\\(Understand\\)<\/span>.",
  "body": "       It turns out that 362,880. Use that information to evaluate .    Write as a single factorial: .         Hint: When multiplying by ten, you get another zero at the end.          "
},
{
  "id": "exer_factor_factorials",
  "level": "2",
  "url": "sec_counting_steps_cases.html#exer_factor_factorials",
  "type": "",
  "number": "19",
  "title": "<span class=\"process-math\">\\(Understand\\)<\/span>.",
  "body": "   Factor and simplify . Hint: See .    Hint: first factor out the . Then use the hint to further simplify your answer.   "
},
{
  "id": "exer_dyk_factorials",
  "level": "2",
  "url": "sec_counting_steps_cases.html#exer_dyk_factorials",
  "type": "",
  "number": "20",
  "title": "<span class=\"process-math\">\\(Recap\\)<\/span>.",
  "body": "   Do you know    What consecutive means?    What stands for and how to pronounce it?    How to evaluate ?    How is defined?    Where factorials rank in the order of operations?      "
},
{
  "id": "sec_counting_subsets",
  "level": "1",
  "url": "sec_counting_subsets.html",
  "type": "Section",
  "number": "2.3",
  "title": "Counting Subsets",
  "body": " Counting Subsets   In we counted strings and other ordered objects. How might we count the number of ways to choose some items from a set when we do not care about the order, like a group of students to work on a project? In this section, we discuss subsets and introduce the binomial coefficients that count subsets. We combine counting subsets with our other rules for counting: steps , cases , and counting the opposite . We also introduce our first proof format, which is for combinatorial proof.  Before we learn any new rules, try the following activity.   Adopting two cats      There are five cats ( c1 , c2 , c3 , c4 , c5 ) waiting to be adopted at the animal shelter. You want to adopt two of the cats. Make a list of possibilities. Notice that the order in which we choose the cats does not matter. For example, choosing c2 and c5 is the same as choosing c5 and c2 . For that reason, we use set notation to indicate a choice, such as .    In how many ways can you choose two cats to adopt?    Betelehem tried to answer without making a list. Here is her work.  We will count the possibilities using steps.  Step 1: Choose the first cat. (5 ways)  Step 2: Choose the second cat. Note that the second cat must be a different cat from the first cat. (4 ways)  Since steps multiply , there must be ways to adopt two cats.  Uh oh! The correct answer is ten, so Betelehem's answer is incorrect. (Hint: If you also had 20, you should go back and fix your work.) What went wrong? Explain. Hint: Betelehem's answer is exactly twice ( ) the correct answer, so she must have double counted (counted each pair twice).    If there were cats and you wanted to adopt two cats, how many possibilities are there? Hint: You can use Betelehem's approach as long as you remember that you will get twice the correct answer. Another hint: handshakes!        Subsets and the Binomial Coefficients  In many situations, we want to select some of the elements of a set. We can think of a set as corralling The word corral means to collect and contain. A common usage is in reference to fencing in animals such as horses or sheep. its elements inside a rope. For example, the set is drawn in . If we corral some, all, or none of the elements within , we get a subset of . For example, shows the subset shaded in gray.   The subset corrals some of the elements of the set .     We formally define a subset.   Subsets       A subset of the set is a set consisting of some of the elements of , where the word some is understood to be any number of elements from none to all. That is, the set is a subset of the set , denoted if every element of is also an element of . For example, and . Note that the set is a subset of itself. For example, .    The empty set  is the set with no elements. That is . Note that is a subset of any set. Imagine corralling no elements or drawing a shaded shape within that contains none of the elements of . For example, .        Notation for zero  Computer scientists often write the number zero with a slash to avoid confusion with the letter , so the zero symbol in computer science looks similar to the empty set symbol . In this textbook, we write for zero without a slash and save to mean the empty set.   In , we chose two cats from a set of five cats. It is useful to have a name for the number of ways to select exactly objects from a set of distinct objects.   Binomial coefficient   For non-negative integers and ,   The number of ways to select a subset of elements from a set of elements is the binomial coefficient  which is pronounced choose . For example, 5 choose 2 is because we saw in that there are 10 ways to select two cats from a set of five cats.    Note that if , then .       The simplest way to evaluate a binomial coefficient is to search for it on the Internet or ask a virtual assistant. For example, search for five choose two and you will get ten. You can also evaluate binomial coefficients using some calculators and spreadsheet programs. Therefore, it is perfectly acceptable to leave binomial coefficients in an answer to a counting problem.   Not evaluating counts, version 3  Unless stated otherwise, when counting you may leave any answer greater than twenty in a format that could easily be evaluated on a calculator. In particular, your answer may involve addition, subtraction, multiplication, division, factorials, binomial coefficients, and parentheses.   For small values, we can evaluate binomial coefficients by listing the possible subsets. As usual, working with small values can help us to understand the concept.   Four choose   Evaluate for each nonnegative integer by listing the -element subsets of .    When , the only 0-element subset is and so .  When , the 1-element subsets are and so .  When , the 2-element subsets are and so .  When , the 3-element subsets are and so .  When , the only 4-element subset is and so .  When we have .    It is your turn to use subsets to evaluate some small binomial coefficients.   Six choose      Evaluate , , and by listing subsets of .    Conjecture the values of , , and where is a positive integer.    Evaluate by listing subsets of . Hint: stay organized by considering which integer is not in the set.    Conjecture the value of where is a positive integer.        Combining Counting Techniques  Many counting problems require a combination of techniques we have learned, including cases, steps, opposites, and subsets.   Team and leader   There are 25 students in the coding club, ten of whom are first-year students. For the coding competition, we need a team of four students that includes exactly one first-year student. How many different teams are possible?    Since ten of the 25 students are first-year students, the other are not first-year students. To make a team of four with exactly one first-year student, we will also need three students who are not first-year.  Step 1: Choose the first-year student. We want one first-year student out of ten, so there are ways to do this step.  Step 2: Choose the other three students. We want three students who are not first year out of 15, so there are ways to do this step.  Since steps multiply , there are a total of ways to choose a team.    Try your hand at combining these techniques.   Adopting two animals  There are five cats and 12 dogs waiting to be adopted.   In how many ways can you choose two animals to adopt? Hint: How many animals are there?    In how many ways can you choose two animals to adopt if they are both cats? Write your answer as a binomial coefficient. (Yes, we made a list and counted this same number in ).    In how many ways can you choose two animals to adopt if they are both dogs?    In how many ways can you choose two animals to adopt if you choose one cat and one dog?    How are your answers to , , and related to your answer to ? Use technology to evaluate the binomial coefficients.    Why? Hint: Use cases.      Several exercises in this section refer to a 52-card deck of playing cards, shown in . The key facts to know are stated in the following definition.   52-card deck of playing cards       A hand is a set of cards, without regard to order. The name comes from the fact that in many card games you hold the cards in your hand. The number of cards in a hand varies depending on the game. Poker is a family of card games that often uses hands with five or seven cards, whereas Bridge is a card game that uses hands with thirteen cards.    Each card in the deck has one of thirteen denominations : Ace (A), 2, 3, 4, 5, 6, 7, 8, 9, 10, Jack (J), Queen (Q), or King (K).    Each card in the deck also has one of four suits clubs , diamonds , hearts , or spades . For example, a card might be the Jack of hearts, denoted J . Note that for each choice of denomination and suit, there is exactly one card with that denomination and suit. For example, there is exactly one card that is J .    The cards with clubs and spades are black cards . The cards with diamonds and hearts are red cards .        A 52-card deck of playing cards (source: Pixabay).      Here is an example of counting hands.   Three-of-a-kind   In a 52-card deck of playing cards, as shown in , how many 5-card hands have a three-of-a-kind , which is three cards of one denomination, a fourth card of a different denomination, and fifth card of another denomination. The fourth or fifth cards cannot be the same denomination as the three-of-a-kind because that is a four-of-a-kind . The fourth and fifth cards cannot be the same denomination as each other because that is a full house . How many different 5-card hands have a three-of-a-kind?    Let's build such a hand through a series of steps.  Step 1: Select the denomination of the three-of-a-kind. Since there are 13 denominations, there are ways to complete this step.  Step 2: Select the cards for the three-of-a-kind. There are four cards in the denomination we chose in Step 1 and we want three of them, so there are ways to complete this step.  Step 3: Select the denominations of the other two cards. Since there are remaining denominations and we want two of them, there are ways to complete this step.  Step 4: Select the cards in the other two denominations. Since there are four cards in each denomination chosen in Step 3, there are ways to choose each. Since there are two cards and steps multiply , there are ways to complete this step, which finishes building our hand.  Since steps multiply , there are ways. (Any of those formats of the answer is acceptable.)      Proof Format: Combinatorial Proof  Jarrett and Xueqing solve the same counting problem, but they use two different methods. They should still get the same answer, right? This observation can lead to a way to prove that two quantities are equal: Jarrett's answer = Xueqing's answer. This strategy might remind you of the saying six of one, half dozen of the other which sounds like two different quantities, but because a dozen is twelve, half a dozen is also six.  There are many different types of proof. A proof format is a structure or outline of a particular type of proof. Our first proof format is combinatorial proof , a proof that counts , in which we prove that two quantities are equal by counting the same situation using two different methods.   Proof Format: Combinatorial Proof   We can prove: using a combinatorial proof by adapting the following proof format.   Proof. We use a combinatorial proof. Consider the following situation .  How many ways are there to ?  First, (explain how to count using one method to get .)  On the other hand, (explain how to count using a different method to get .)  Since we counted the same quantity in two different ways, it follows that .    Whenever we introduce a new proof format, we present an example of such a proof and then ask you to write a very similar proof by copying the example proof mutatis mutandis (mm) , which means changing what needs to be changed.   Combinatorial proof choosing two animals      Copy the following example of a combinatorial proof. Yes, that means copy every word. Use a combinatorial proof to prove for any positive integers and that  Proof.   We use a combinatorial proof. Consider the following situation: there are cats and dogs and we want to adopt two animals. How many ways are there to choose the two animals?  First, since there are a total of animals and we want to choose two of them, the answer is .  On the other hand, we can consider three cases. Case 1: Choose two cats. In this case, we want two out of cats, and so there are ways to choose the two animals. Case 2: Choose two dogs. In this case, we want two out of dogs, and so there are ways to choose the two animals. Case 3: The only remaining case is that we choose one cat and one dog. In this case, we want one out of cats ( ways) and then one out of dogs ( ways). Since steps multiply (by ), there are ways to choose the two animals. Since cases add (by ), there is a total of ways to choose two animals.  Since we counted the same quantity in two different ways, it follows that     Edit the proof you copied in , changing what needs to be changed to prove for any positive integer that .      Here is another example of a combinatorial proof.   Combinatorial proof team and leader   Use a combinatorial proof to prove that       Proof. We use a combinatorial proof. Consider the following situation: there is a group of ten employees. How many ways are there to choose seven employees to be on a project team where one member of the team is the project leader?  First, we can choose the seven-person project team from the group of ten employees. There are ways to do this step. Then we need to choose one of those seven people on the project team to be the project leader. There are seven ways to do this step. (You could think of it as ways, but and that is simpler.) Since steps multiply , the answer is .  On the other hand, we can make the choices in reverse order. We can start by choosing the project leader, one of the ten people. There are ten ways to do this step. Then we need to choose the rest of the project team. Since we already chose the project leader, we only need six more people out of the nine remaining people. There are ways to do this step. Since steps multiply , the answer is also .  Since we counted the same quantity in two different ways, it follows that .    In we calculated and . We conjectured that for any integer we have and . In the next proof, we use a combinatorial proof to show the symmetry of the binomial coefficients, in general.   Symmetry of the binomial coefficients   For any positive integers and we have     Let's look at a combinatorial proof of this theorem.   Combinatorial proof symmetry of the binomial coefficients   Give a combinatorial proof of .     Proof We use a combinatorial proof. Consider the following situation: there are people who auditioned for a play, and we want to choose people to be in the play. How many ways are there to do this?  First, since we want to choose out of people, there are ways to select who is in the play.  On the other hand, instead of deciding who will be in the play, we can choose which people will not be in the play. There are people who auditioned but will not be in the play, so there are ways to select who will be in the play in this way.  Since we counted the same quantity in two different ways, it follows that .      Exercises   Exercises for Subsets and the Binomial Coefficients   Practice       Evaluate for by listing the subsets of .    Evaluate for by listing the subsets of .    Evaluate for by listing the subsets of .    Evaluate for by listing the subsets of .         When , the only 0-element subset is , and so . When , the 1-element subsets are , , and , and so . When , the 2-element subsets are , , and , and so . When , the only 3-element subset is , and so .    Hint: You should get , , and .    Hint: The only subsets of are and .    Hint: The only subset of is .       Practice   There are five courses that I would like to take this semester: Architectural drawing (A), bioinformatics (B), computational theory (C), differential equations (D), and ecological models (E).   If I can take three of these courses, what are my options? List them.    If I can take four of these courses, what are my options? List them.    Based on your answers, evaluate and and check your answers using technology.        Practice   The library's new arrivals section offers 24 mystery novels, 50 young adult novels, 17 biographies, and 46 fantasy novels. In each part of this problem, your answer should be a binomial coefficient.   In how many ways can I choose two young adult novels for my niece?    In how many ways can I choose three mystery novels to take on vacation?    My brother likes to read biographies, but he also likes fantasy novels. In how many ways can I choose four books to bring him?                   Hint: choose four out of books.       Understand   Explain how to evaluate each quantity involving a positive integer by explicitly discussing the subsets of .                       Hint: The only 0-element subset is .    Hint: .    Hint: The only -element subset is .       Recap   Do you know    How to pronounce ?    What counts?    How to evaluate for small values of by listing subsets?         Exercises for Combining Counting Techniques   Practice   This problem refers to the 52-card deck of playing cards in .   How many different ways are there to deal a hand of five cards?    How many different hands have all five cards of the same suit? Hint: First choose one of the four suits and then choose the cards. There are 13 cards in each suit.         Hint: Choose five out of 52.            Practice   There are usually 16 players on a Division III volleyball team. Of those, six players are starters, which means that they are on the court when the game starts. This year, 21 students tried out for the volleyball team.   How many different ways are there to choose the players from the group that tried out?    Once we have chosen the team, how many ways are there to choose the starters?    In total, how many ways are there to choose the players and then the starters?    How many ways are there to choose the players, then the starters, and then one of the starters to be captain?              Hint: Choose six out of 16.    Hint: Step 1 choose the players as in (a) and then step 2 choose the starter as in (b). Recall that by , we multiply the answers of each step.    Hint: Now there is a third step.       Understand   As in Exercise , the library's new arrivals section offers 24 mystery novels, 50 young adult novels, 17 biographies, and 46 fantasy novels.   In how many ways can I choose three books to read if I want two mystery novels and one fantasy novel?    In how many ways can I choose four books for my son if he wants two young adult novels and two biographies?    My mother would like two mystery novels, two biographies, and two fantasy novels. In how many ways can I choose books for her?          , or just .    Hint: There are two steps.    Hint: There are three steps.       Understand   Our local pizza parlor has a long list of toppings you can add to your pizza: five meats, three cheeses, and 12 vegetables. How many different build your own pizzas can you make if you want   (Exactly) three toppings?    One meat, one cheese, and one vegetable?    Two meats, one cheese, and three vegetables?    (Exactly) three toppings, including at least one meat and at least one cheese? Hint: Consider cases based on the number of meats, cheeses, and vegetables. For example, one case has one meat, two cheeses, and no vegetables.         Hint: there are a total of toppings and we want to choose three.     Note: It would also be correct to have , but since , it is simpler to write the numbers.         Hint: There are three cases. Case 1 is one meat, two cheeses, and no vegetables. Case 2 is two meats, one cheese, and no vegetables. Case 3 is one meat, one cheese, and one vegetable as in (b). In each case, the steps multiply and then, by , add the answers from the three cases.       Understand   There are 27 students in our Math Club.   We need five students to run Pi Day activities. How many ways are there to pick five students?    A team for the Problem Contest consists of three or four students. In how many different ways could we select a Problem Contest team?    The club has four officers: President, Secretary, Treasurer, and Information Officer. In how many ways can we pick officers?    We need a group of three students to write the annual report. Usually one of the officers volunteers and then two students who are not officers help. In how many ways could we form the group to write the annual report?              Hint: The word or indicates cases. Find the answer in each case and then add them together.         Hint: Choose one officer and then choose two students who are not officers. Your answer should involve the number 23.       Recap   Do you know    When to use choose versus steps or cases?    How to combine counting subsets with steps and cases?        Explore   This problem refers to the 52-card deck of playing cards in .   A hand is aces-over-eights if it has three aces and two eights. How many different aces over eights are possible?    A full house is a hand of five cards with three cards of one denomination (a triple ) and two cards of a different denomination (a pair ). Aces-over-eights is an example of a full house. How many different full houses are there? Hint: first choose the denomination for the triple, then choose a different denomination for the pair, and then choose the actual cards.        Explore   This problem refers to the 52-card deck of playing cards in . A bridge hand has thirteen cards.   How many bridge hands are there?    How many bridge hands have a 6-card spade suit, which means that exactly six of the thirteen cards are spades?    How many bridge hands have a 5-card spade suit and a 5-card heart suit, which means that the remaining three cards are diamonds or clubs.    A yarborough is a bridge hand with no ten, jack, queen, king, or ace. How many yarboroughs are there?    Which is more common a bridge hand with a 5-card space suit and a 5-card heart suit or a yarborough? Use technology to evaluate your answers to and .         Exercises for Proof Format: Combinatorial Proof   Practice       Copy the proof in .    Change what needs to be changed to prove that instead. You may edit the proof you copied instead of writing it out again.    Use technology to confirm this equation.        Practice       Copy the proof in .    Change what needs to be changed to prove that for any positive integers and instead. You may edit the proof you copied instead of writing it out again.       Hint: in (b) start with ``Consider a group of employees. How many ways are there to choose employees to be on a project team where one member of the team is the project manager?     Understand    Give a combinatorial proof that . Hint: from a group of 10 people, choose a committee of 7 people, and its (outside) chair.     Understand    Give a combinatorial proof that for any positive integers and .  Hint: This equation generalizes Exercise , so use the same hint.     Chair and Secretary   Give a combinatorial proof that for any positive integers and .  Hint: Choose a project team where one member of the team is the project manager and another member of the team is the lead analyst.     Understand   Give a combinatorial proof that for any integers , , and .  Hint: of people who show up to try-outs, we will select players for our team, of whom will be starters.    Hint: Follow the hint. The first way to count is the usual order: choose the players, and then choose the starters. The second way to count is the reverse order: choose the starters, and then choose the rest of the players from the rest of the students who tried out.     Recap   Do you know    Why a combinatorial proof works?    When we can use a combinatorial proof?    What the proof format for a combinatorial proof is?        Explore       Use a combinatorial argument to expand in terms of for any positive integer . Your answer may involve and . Hint: Suppose that there are cats, dogs, and birds. No justification required.    Use a combinatorial argument to expand in terms of and for any positive integers and . Your answer may involve , , , and . No justification required.          Hint: Consider six cases and then simplify the answer.    Hint: Suppose that there are cats and dogs and we want to choose three pets. Consider cases and simplify your final answer.        "
},
{
  "id": "act_adopting_two_cats",
  "level": "2",
  "url": "sec_counting_subsets.html#act_adopting_two_cats",
  "type": "Activity",
  "number": "2.3.A",
  "title": "Adopting two cats.",
  "body": " Adopting two cats      There are five cats ( c1 , c2 , c3 , c4 , c5 ) waiting to be adopted at the animal shelter. You want to adopt two of the cats. Make a list of possibilities. Notice that the order in which we choose the cats does not matter. For example, choosing c2 and c5 is the same as choosing c5 and c2 . For that reason, we use set notation to indicate a choice, such as .    In how many ways can you choose two cats to adopt?    Betelehem tried to answer without making a list. Here is her work.  We will count the possibilities using steps.  Step 1: Choose the first cat. (5 ways)  Step 2: Choose the second cat. Note that the second cat must be a different cat from the first cat. (4 ways)  Since steps multiply , there must be ways to adopt two cats.  Uh oh! The correct answer is ten, so Betelehem's answer is incorrect. (Hint: If you also had 20, you should go back and fix your work.) What went wrong? Explain. Hint: Betelehem's answer is exactly twice ( ) the correct answer, so she must have double counted (counted each pair twice).    If there were cats and you wanted to adopt two cats, how many possibilities are there? Hint: You can use Betelehem's approach as long as you remember that you will get twice the correct answer. Another hint: handshakes!     "
},
{
  "id": "sub_subsets_choose-2",
  "level": "2",
  "url": "sec_counting_subsets.html#sub_subsets_choose-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "corral "
},
{
  "id": "fig_subset_corral",
  "level": "2",
  "url": "sec_counting_subsets.html#fig_subset_corral",
  "type": "Figure",
  "number": "2.3.1",
  "title": "",
  "body": " The subset corrals some of the elements of the set .    "
},
{
  "id": "defn_subsets",
  "level": "2",
  "url": "sec_counting_subsets.html#defn_subsets",
  "type": "Definition",
  "number": "2.3.2",
  "title": "Subsets.",
  "body": " Subsets       A subset of the set is a set consisting of some of the elements of , where the word some is understood to be any number of elements from none to all. That is, the set is a subset of the set , denoted if every element of is also an element of . For example, and . Note that the set is a subset of itself. For example, .    The empty set  is the set with no elements. That is . Note that is a subset of any set. Imagine corralling no elements or drawing a shaded shape within that contains none of the elements of . For example, .      "
},
{
  "id": "rem_notation_zero",
  "level": "2",
  "url": "sec_counting_subsets.html#rem_notation_zero",
  "type": "Remark",
  "number": "2.3.3",
  "title": "Notation for zero.",
  "body": " Notation for zero  Computer scientists often write the number zero with a slash to avoid confusion with the letter , so the zero symbol in computer science looks similar to the empty set symbol . In this textbook, we write for zero without a slash and save to mean the empty set.  "
},
{
  "id": "defn_binomial_coeff",
  "level": "2",
  "url": "sec_counting_subsets.html#defn_binomial_coeff",
  "type": "Definition",
  "number": "2.3.4",
  "title": "Binomial coefficient.",
  "body": " Binomial coefficient   For non-negative integers and ,   The number of ways to select a subset of elements from a set of elements is the binomial coefficient  which is pronounced choose . For example, 5 choose 2 is because we saw in that there are 10 ways to select two cats from a set of five cats.    Note that if , then .      "
},
{
  "id": "rem_not_eval_counts_3",
  "level": "2",
  "url": "sec_counting_subsets.html#rem_not_eval_counts_3",
  "type": "Remark",
  "number": "2.3.5",
  "title": "Not evaluating counts, version 3.",
  "body": " Not evaluating counts, version 3  Unless stated otherwise, when counting you may leave any answer greater than twenty in a format that could easily be evaluated on a calculator. In particular, your answer may involve addition, subtraction, multiplication, division, factorials, binomial coefficients, and parentheses.  "
},
{
  "id": "exam_four_choose_k",
  "level": "2",
  "url": "sec_counting_subsets.html#exam_four_choose_k",
  "type": "Example",
  "number": "2.3.6",
  "title": "Four choose <span class=\"process-math\">\\(k\\)<\/span>.",
  "body": " Four choose   Evaluate for each nonnegative integer by listing the -element subsets of .    When , the only 0-element subset is and so .  When , the 1-element subsets are and so .  When , the 2-element subsets are and so .  When , the 3-element subsets are and so .  When , the only 4-element subset is and so .  When we have .   "
},
{
  "id": "act_eval_6choosek",
  "level": "2",
  "url": "sec_counting_subsets.html#act_eval_6choosek",
  "type": "Activity",
  "number": "2.3.B",
  "title": "Six choose <span class=\"process-math\">\\(k\\)<\/span>.",
  "body": " Six choose      Evaluate , , and by listing subsets of .    Conjecture the values of , , and where is a positive integer.    Evaluate by listing subsets of . Hint: stay organized by considering which integer is not in the set.    Conjecture the value of where is a positive integer.     "
},
{
  "id": "exam_team_leader",
  "level": "2",
  "url": "sec_counting_subsets.html#exam_team_leader",
  "type": "Example",
  "number": "2.3.7",
  "title": "Team and leader.",
  "body": " Team and leader   There are 25 students in the coding club, ten of whom are first-year students. For the coding competition, we need a team of four students that includes exactly one first-year student. How many different teams are possible?    Since ten of the 25 students are first-year students, the other are not first-year students. To make a team of four with exactly one first-year student, we will also need three students who are not first-year.  Step 1: Choose the first-year student. We want one first-year student out of ten, so there are ways to do this step.  Step 2: Choose the other three students. We want three students who are not first year out of 15, so there are ways to do this step.  Since steps multiply , there are a total of ways to choose a team.   "
},
{
  "id": "act_adopting_two_animals",
  "level": "2",
  "url": "sec_counting_subsets.html#act_adopting_two_animals",
  "type": "Activity",
  "number": "2.3.C",
  "title": "Adopting two animals.",
  "body": " Adopting two animals  There are five cats and 12 dogs waiting to be adopted.   In how many ways can you choose two animals to adopt? Hint: How many animals are there?    In how many ways can you choose two animals to adopt if they are both cats? Write your answer as a binomial coefficient. (Yes, we made a list and counted this same number in ).    In how many ways can you choose two animals to adopt if they are both dogs?    In how many ways can you choose two animals to adopt if you choose one cat and one dog?    How are your answers to , , and related to your answer to ? Use technology to evaluate the binomial coefficients.    Why? Hint: Use cases.     "
},
{
  "id": "defn_52-card_deck",
  "level": "2",
  "url": "sec_counting_subsets.html#defn_52-card_deck",
  "type": "Definition",
  "number": "2.3.8",
  "title": "52-card deck of playing cards.",
  "body": " 52-card deck of playing cards       A hand is a set of cards, without regard to order. The name comes from the fact that in many card games you hold the cards in your hand. The number of cards in a hand varies depending on the game. Poker is a family of card games that often uses hands with five or seven cards, whereas Bridge is a card game that uses hands with thirteen cards.    Each card in the deck has one of thirteen denominations : Ace (A), 2, 3, 4, 5, 6, 7, 8, 9, 10, Jack (J), Queen (Q), or King (K).    Each card in the deck also has one of four suits clubs , diamonds , hearts , or spades . For example, a card might be the Jack of hearts, denoted J . Note that for each choice of denomination and suit, there is exactly one card with that denomination and suit. For example, there is exactly one card that is J .    The cards with clubs and spades are black cards . The cards with diamonds and hearts are red cards .      "
},
{
  "id": "fig_52card_deck",
  "level": "2",
  "url": "sec_counting_subsets.html#fig_52card_deck",
  "type": "Figure",
  "number": "2.3.9",
  "title": "",
  "body": " A 52-card deck of playing cards (source: Pixabay).     "
},
{
  "id": "exam_4ofakind",
  "level": "2",
  "url": "sec_counting_subsets.html#exam_4ofakind",
  "type": "Example",
  "number": "2.3.10",
  "title": "Three-of-a-kind.",
  "body": " Three-of-a-kind   In a 52-card deck of playing cards, as shown in , how many 5-card hands have a three-of-a-kind , which is three cards of one denomination, a fourth card of a different denomination, and fifth card of another denomination. The fourth or fifth cards cannot be the same denomination as the three-of-a-kind because that is a four-of-a-kind . The fourth and fifth cards cannot be the same denomination as each other because that is a full house . How many different 5-card hands have a three-of-a-kind?    Let's build such a hand through a series of steps.  Step 1: Select the denomination of the three-of-a-kind. Since there are 13 denominations, there are ways to complete this step.  Step 2: Select the cards for the three-of-a-kind. There are four cards in the denomination we chose in Step 1 and we want three of them, so there are ways to complete this step.  Step 3: Select the denominations of the other two cards. Since there are remaining denominations and we want two of them, there are ways to complete this step.  Step 4: Select the cards in the other two denominations. Since there are four cards in each denomination chosen in Step 3, there are ways to choose each. Since there are two cards and steps multiply , there are ways to complete this step, which finishes building our hand.  Since steps multiply , there are ways. (Any of those formats of the answer is acceptable.)   "
},
{
  "id": "sub_proofs_count_nosums-3",
  "level": "2",
  "url": "sec_counting_subsets.html#sub_proofs_count_nosums-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "proof format combinatorial proof proof that counts "
},
{
  "id": "pff_comb",
  "level": "2",
  "url": "sec_counting_subsets.html#pff_comb",
  "type": "Theorem",
  "number": "2.3.11",
  "title": "Proof Format: Combinatorial Proof.",
  "body": " Proof Format: Combinatorial Proof   We can prove: using a combinatorial proof by adapting the following proof format.   Proof. We use a combinatorial proof. Consider the following situation .  How many ways are there to ?  First, (explain how to count using one method to get .)  On the other hand, (explain how to count using a different method to get .)  Since we counted the same quantity in two different ways, it follows that .   "
},
{
  "id": "act_comb_proof_two_animals",
  "level": "2",
  "url": "sec_counting_subsets.html#act_comb_proof_two_animals",
  "type": "Activity",
  "number": "2.3.D",
  "title": "Combinatorial proof — choosing two animals.",
  "body": " Combinatorial proof choosing two animals      Copy the following example of a combinatorial proof. Yes, that means copy every word. Use a combinatorial proof to prove for any positive integers and that  Proof.   We use a combinatorial proof. Consider the following situation: there are cats and dogs and we want to adopt two animals. How many ways are there to choose the two animals?  First, since there are a total of animals and we want to choose two of them, the answer is .  On the other hand, we can consider three cases. Case 1: Choose two cats. In this case, we want two out of cats, and so there are ways to choose the two animals. Case 2: Choose two dogs. In this case, we want two out of dogs, and so there are ways to choose the two animals. Case 3: The only remaining case is that we choose one cat and one dog. In this case, we want one out of cats ( ways) and then one out of dogs ( ways). Since steps multiply (by ), there are ways to choose the two animals. Since cases add (by ), there is a total of ways to choose two animals.  Since we counted the same quantity in two different ways, it follows that     Edit the proof you copied in , changing what needs to be changed to prove for any positive integer that .     "
},
{
  "id": "exam_comb_proof_teamandleader",
  "level": "2",
  "url": "sec_counting_subsets.html#exam_comb_proof_teamandleader",
  "type": "Example",
  "number": "2.3.12",
  "title": "Combinatorial proof — team and leader.",
  "body": " Combinatorial proof team and leader   Use a combinatorial proof to prove that       Proof. We use a combinatorial proof. Consider the following situation: there is a group of ten employees. How many ways are there to choose seven employees to be on a project team where one member of the team is the project leader?  First, we can choose the seven-person project team from the group of ten employees. There are ways to do this step. Then we need to choose one of those seven people on the project team to be the project leader. There are seven ways to do this step. (You could think of it as ways, but and that is simpler.) Since steps multiply , the answer is .  On the other hand, we can make the choices in reverse order. We can start by choosing the project leader, one of the ten people. There are ten ways to do this step. Then we need to choose the rest of the project team. Since we already chose the project leader, we only need six more people out of the nine remaining people. There are ways to do this step. Since steps multiply , the answer is also .  Since we counted the same quantity in two different ways, it follows that .   "
},
{
  "id": "thm_sym_binom",
  "level": "2",
  "url": "sec_counting_subsets.html#thm_sym_binom",
  "type": "Theorem",
  "number": "2.3.13",
  "title": "Symmetry of the binomial coefficients.",
  "body": " Symmetry of the binomial coefficients   For any positive integers and we have    "
},
{
  "id": "exam_comb_pf_sym_arith_tri",
  "level": "2",
  "url": "sec_counting_subsets.html#exam_comb_pf_sym_arith_tri",
  "type": "Example",
  "number": "2.3.14",
  "title": "Combinatorial proof — symmetry of the binomial coefficients.",
  "body": " Combinatorial proof symmetry of the binomial coefficients   Give a combinatorial proof of .     Proof We use a combinatorial proof. Consider the following situation: there are people who auditioned for a play, and we want to choose people to be in the play. How many ways are there to do this?  First, since we want to choose out of people, there are ways to select who is in the play.  On the other hand, instead of deciding who will be in the play, we can choose which people will not be in the play. There are people who auditioned but will not be in the play, so there are ways to select who will be in the play in this way.  Since we counted the same quantity in two different ways, it follows that .   "
},
{
  "id": "exer_eval_binomial_coeffs_list_subsets",
  "level": "2",
  "url": "sec_counting_subsets.html#exer_eval_binomial_coeffs_list_subsets",
  "type": "",
  "number": "1",
  "title": "Practice.",
  "body": " Practice       Evaluate for by listing the subsets of .    Evaluate for by listing the subsets of .    Evaluate for by listing the subsets of .    Evaluate for by listing the subsets of .         When , the only 0-element subset is , and so . When , the 1-element subsets are , , and , and so . When , the 2-element subsets are , , and , and so . When , the only 3-element subset is , and so .    Hint: You should get , , and .    Hint: The only subsets of are and .    Hint: The only subset of is .     "
},
{
  "id": "exer_course_selection",
  "level": "2",
  "url": "sec_counting_subsets.html#exer_course_selection",
  "type": "",
  "number": "2",
  "title": "Practice.",
  "body": " Practice   There are five courses that I would like to take this semester: Architectural drawing (A), bioinformatics (B), computational theory (C), differential equations (D), and ecological models (E).   If I can take three of these courses, what are my options? List them.    If I can take four of these courses, what are my options? List them.    Based on your answers, evaluate and and check your answers using technology.      "
},
{
  "id": "exer_library_books",
  "level": "2",
  "url": "sec_counting_subsets.html#exer_library_books",
  "type": "",
  "number": "3",
  "title": "Practice.",
  "body": " Practice   The library's new arrivals section offers 24 mystery novels, 50 young adult novels, 17 biographies, and 46 fantasy novels. In each part of this problem, your answer should be a binomial coefficient.   In how many ways can I choose two young adult novels for my niece?    In how many ways can I choose three mystery novels to take on vacation?    My brother likes to read biographies, but he also likes fantasy novels. In how many ways can I choose four books to bring him?                   Hint: choose four out of books.     "
},
{
  "id": "exer_eval_edge_binomial_coeffs",
  "level": "2",
  "url": "sec_counting_subsets.html#exer_eval_edge_binomial_coeffs",
  "type": "",
  "number": "4",
  "title": "Understand.",
  "body": " Understand   Explain how to evaluate each quantity involving a positive integer by explicitly discussing the subsets of .                       Hint: The only 0-element subset is .    Hint: .    Hint: The only -element subset is .     "
},
{
  "id": "exer_dyk_binomial_coeffs",
  "level": "2",
  "url": "sec_counting_subsets.html#exer_dyk_binomial_coeffs",
  "type": "",
  "number": "5",
  "title": "Recap.",
  "body": " Recap   Do you know    How to pronounce ?    What counts?    How to evaluate for small values of by listing subsets?      "
},
{
  "id": "exer_5card_hands",
  "level": "2",
  "url": "sec_counting_subsets.html#exer_5card_hands",
  "type": "",
  "number": "6",
  "title": "Practice.",
  "body": " Practice   This problem refers to the 52-card deck of playing cards in .   How many different ways are there to deal a hand of five cards?    How many different hands have all five cards of the same suit? Hint: First choose one of the four suits and then choose the cards. There are 13 cards in each suit.         Hint: Choose five out of 52.          "
},
{
  "id": "exer_volleyball",
  "level": "2",
  "url": "sec_counting_subsets.html#exer_volleyball",
  "type": "",
  "number": "7",
  "title": "Practice.",
  "body": " Practice   There are usually 16 players on a Division III volleyball team. Of those, six players are starters, which means that they are on the court when the game starts. This year, 21 students tried out for the volleyball team.   How many different ways are there to choose the players from the group that tried out?    Once we have chosen the team, how many ways are there to choose the starters?    In total, how many ways are there to choose the players and then the starters?    How many ways are there to choose the players, then the starters, and then one of the starters to be captain?              Hint: Choose six out of 16.    Hint: Step 1 choose the players as in (a) and then step 2 choose the starter as in (b). Recall that by , we multiply the answers of each step.    Hint: Now there is a third step.     "
},
{
  "id": "exer_library_books_complicated",
  "level": "2",
  "url": "sec_counting_subsets.html#exer_library_books_complicated",
  "type": "",
  "number": "8",
  "title": "Understand.",
  "body": " Understand   As in Exercise , the library's new arrivals section offers 24 mystery novels, 50 young adult novels, 17 biographies, and 46 fantasy novels.   In how many ways can I choose three books to read if I want two mystery novels and one fantasy novel?    In how many ways can I choose four books for my son if he wants two young adult novels and two biographies?    My mother would like two mystery novels, two biographies, and two fantasy novels. In how many ways can I choose books for her?          , or just .    Hint: There are two steps.    Hint: There are three steps.     "
},
{
  "id": "exer_pizza_options",
  "level": "2",
  "url": "sec_counting_subsets.html#exer_pizza_options",
  "type": "",
  "number": "9",
  "title": "Understand.",
  "body": " Understand   Our local pizza parlor has a long list of toppings you can add to your pizza: five meats, three cheeses, and 12 vegetables. How many different build your own pizzas can you make if you want   (Exactly) three toppings?    One meat, one cheese, and one vegetable?    Two meats, one cheese, and three vegetables?    (Exactly) three toppings, including at least one meat and at least one cheese? Hint: Consider cases based on the number of meats, cheeses, and vegetables. For example, one case has one meat, two cheeses, and no vegetables.         Hint: there are a total of toppings and we want to choose three.     Note: It would also be correct to have , but since , it is simpler to write the numbers.         Hint: There are three cases. Case 1 is one meat, two cheeses, and no vegetables. Case 2 is two meats, one cheese, and no vegetables. Case 3 is one meat, one cheese, and one vegetable as in (b). In each case, the steps multiply and then, by , add the answers from the three cases.     "
},
{
  "id": "exer_unbounded",
  "level": "2",
  "url": "sec_counting_subsets.html#exer_unbounded",
  "type": "",
  "number": "10",
  "title": "Understand.",
  "body": " Understand   There are 27 students in our Math Club.   We need five students to run Pi Day activities. How many ways are there to pick five students?    A team for the Problem Contest consists of three or four students. In how many different ways could we select a Problem Contest team?    The club has four officers: President, Secretary, Treasurer, and Information Officer. In how many ways can we pick officers?    We need a group of three students to write the annual report. Usually one of the officers volunteers and then two students who are not officers help. In how many ways could we form the group to write the annual report?              Hint: The word or indicates cases. Find the answer in each case and then add them together.         Hint: Choose one officer and then choose two students who are not officers. Your answer should involve the number 23.     "
},
{
  "id": "exer_dyk_combining_counting",
  "level": "2",
  "url": "sec_counting_subsets.html#exer_dyk_combining_counting",
  "type": "",
  "number": "11",
  "title": "Recap.",
  "body": " Recap   Do you know    When to use choose versus steps or cases?    How to combine counting subsets with steps and cases?      "
},
{
  "id": "exer_full_house",
  "level": "2",
  "url": "sec_counting_subsets.html#exer_full_house",
  "type": "",
  "number": "12",
  "title": "Explore.",
  "body": " Explore   This problem refers to the 52-card deck of playing cards in .   A hand is aces-over-eights if it has three aces and two eights. How many different aces over eights are possible?    A full house is a hand of five cards with three cards of one denomination (a triple ) and two cards of a different denomination (a pair ). Aces-over-eights is an example of a full house. How many different full houses are there? Hint: first choose the denomination for the triple, then choose a different denomination for the pair, and then choose the actual cards.      "
},
{
  "id": "exer_bridge_hands",
  "level": "2",
  "url": "sec_counting_subsets.html#exer_bridge_hands",
  "type": "",
  "number": "13",
  "title": "Explore.",
  "body": " Explore   This problem refers to the 52-card deck of playing cards in . A bridge hand has thirteen cards.   How many bridge hands are there?    How many bridge hands have a 6-card spade suit, which means that exactly six of the thirteen cards are spades?    How many bridge hands have a 5-card spade suit and a 5-card heart suit, which means that the remaining three cards are diamonds or clubs.    A yarborough is a bridge hand with no ten, jack, queen, king, or ace. How many yarboroughs are there?    Which is more common a bridge hand with a 5-card space suit and a 5-card heart suit or a yarborough? Use technology to evaluate your answers to and .      "
},
{
  "id": "exer_comb_proof_teamandleader_revisited",
  "level": "2",
  "url": "sec_counting_subsets.html#exer_comb_proof_teamandleader_revisited",
  "type": "",
  "number": "14",
  "title": "Practice.",
  "body": " Practice       Copy the proof in .    Change what needs to be changed to prove that instead. You may edit the proof you copied instead of writing it out again.    Use technology to confirm this equation.      "
},
{
  "id": "exer_comb_proof_teamandleader_generalized",
  "level": "2",
  "url": "sec_counting_subsets.html#exer_comb_proof_teamandleader_generalized",
  "type": "",
  "number": "15",
  "title": "Practice.",
  "body": " Practice       Copy the proof in .    Change what needs to be changed to prove that for any positive integers and instead. You may edit the proof you copied instead of writing it out again.       Hint: in (b) start with ``Consider a group of employees. How many ways are there to choose employees to be on a project team where one member of the team is the project manager?   "
},
{
  "id": "exer_outside_chair",
  "level": "2",
  "url": "sec_counting_subsets.html#exer_outside_chair",
  "type": "",
  "number": "16",
  "title": "Understand.",
  "body": " Understand    Give a combinatorial proof that . Hint: from a group of 10 people, choose a committee of 7 people, and its (outside) chair.   "
},
{
  "id": "exer_outside_chair_generalized",
  "level": "2",
  "url": "sec_counting_subsets.html#exer_outside_chair_generalized",
  "type": "",
  "number": "17",
  "title": "Understand.",
  "body": " Understand    Give a combinatorial proof that for any positive integers and .  Hint: This equation generalizes Exercise , so use the same hint.   "
},
{
  "id": "exer_chair_secretary",
  "level": "2",
  "url": "sec_counting_subsets.html#exer_chair_secretary",
  "type": "",
  "number": "18",
  "title": "Chair and Secretary.",
  "body": " Chair and Secretary   Give a combinatorial proof that for any positive integers and .  Hint: Choose a project team where one member of the team is the project manager and another member of the team is the lead analyst.   "
},
{
  "id": "exer_team_starter",
  "level": "2",
  "url": "sec_counting_subsets.html#exer_team_starter",
  "type": "",
  "number": "19",
  "title": "Understand.",
  "body": " Understand   Give a combinatorial proof that for any integers , , and .  Hint: of people who show up to try-outs, we will select players for our team, of whom will be starters.    Hint: Follow the hint. The first way to count is the usual order: choose the players, and then choose the starters. The second way to count is the reverse order: choose the starters, and then choose the rest of the players from the rest of the students who tried out.   "
},
{
  "id": "exer_dyk_pff_comb_pf",
  "level": "2",
  "url": "sec_counting_subsets.html#exer_dyk_pff_comb_pf",
  "type": "",
  "number": "20",
  "title": "Recap.",
  "body": " Recap   Do you know    Why a combinatorial proof works?    When we can use a combinatorial proof?    What the proof format for a combinatorial proof is?      "
},
{
  "id": "exer_expand_binomial_coeffs",
  "level": "2",
  "url": "sec_counting_subsets.html#exer_expand_binomial_coeffs",
  "type": "",
  "number": "21",
  "title": "Explore.",
  "body": " Explore       Use a combinatorial argument to expand in terms of for any positive integer . Your answer may involve and . Hint: Suppose that there are cats, dogs, and birds. No justification required.    Use a combinatorial argument to expand in terms of and for any positive integers and . Your answer may involve , , , and . No justification required.          Hint: Consider six cases and then simplify the answer.    Hint: Suppose that there are cats and dogs and we want to choose three pets. Consider cases and simplify your final answer.     "
},
{
  "id": "sec_bit_strings",
  "level": "1",
  "url": "sec_bit_strings.html",
  "type": "Section",
  "number": "2.4",
  "title": "Counting Bit Strings",
  "body": " Counting Bit Strings   Strings consisting only of 0 s and 1 s, or bit strings , play a central role in computer science. All numbers, data, logical commands, and computer programs are encoded in a computer as bit strings. Similarly, every text message or email message is encoded as a bit string. In fact, we might say that   Bit strings are a fundamental structure of computer science because all of computer science can be defined using bit strings.   In this section, we count bit strings, demonstrate clever ways to count by modeling using bit strings, and discuss exponential notation and logarithms.    Bit Strings  We start with a definition.   Bit string       A character that is 0 or 1 is a bit .    A bit string is a string where each character is a bit. For example, 1101 is a bit string.    The weight of a bit string is the number of 1 s in the bit string. For example, the bit string 1101 has length four and weight three.    The empty bit string  , pronounced lambda , is the unique bit string of length zero. The symbol is a place holder. If we had just a blank space, you would not know that we meant the empty bit string. In computer science, the empty bit string is used as a start to build a new bit string. If we start with and write 1 at the end of the string, the resulting bit string is 1 (and we no longer write ).       Here is an example of listing bit strings using a possibility tree.   Listing bit strings in a possibility tree       List all bit strings of length three by drawing a possibility tree.  We draw the possibility tree in . The list is 000 , 001 , 010 , 011 , 100 , 101 , 110 , 111 .   The possibility tree of all bit strings of length three.          List all bit strings of length four and weight two.  We draw the possibility tree below. Each bit string has weight two, which means that it has exactly two 1 s and two 0 s. In the tree we need to be careful any time we have two 1 s or two 0 s, we have only one branch (either to just 0 or to just 1 ) instead of the usual two branches (to 0 and to 1 ). The strings are 0011 , 0101 , 0110 , 1001 , 1010 , 1100 .   The possibility tree of all bit strings of length four and weight two.             Now it is your turn to work with bit strings.   Listing bit strings      Give an example of a bit string of length four.    Give an example of a bit string of length five and weight three.    List all bit strings of length four using a possibility tree. Be sure to include the list itself.    Make a table showing the number of bit strings of length for . Hint: You can count the answers in your possibility tree from .    Based on the values in your table, how many bit strings of length five should there be?    Explain how you can use steps to count the number of bit strings of length five. Did you get the same answer?    Conjecture the number of bit strings of length .    List the bit strings of length five and weight three by drawing a possibility tree. Your tree should include only those bit strings.        Number of Bit Strings  One special situation that is counted using steps is the number of bit strings of length . Make sure that you have completed because we are about to reveal the answers.   Conjecture number of bit strings of length   How many bit strings of length are there? State your answer as a conjecture.    There is one bit string of length 0 ( ), two bit strings of length one ( 0 , 1 ) and four bit strings of length two ( 00 , 01 , 10 , 11 ). In , we listed the eight bit strings of length three. In , we counted 16 bit strings of length four and 32 bit strings of length five. Notice that each integer is twice the previous number, suggesting that we are multiplying by two. shows these examples written as a product of twos.   The number of bit strings of length for     Number of bit strings of length .        0  1        1         2  4 =        3         4         5      Based on these examples, it is reasonable to conjecture that there are bit strings of length .    Products in the format of the answer to occur often enough that they have a name and notation. For example, our product is 2 to the power of  which is denoted   We can prove our conjecture from using steps.   Number of bit strings of length    There are bit strings of length .    Imagine building each bit string of length by filling in the spaces:   There are two ways to fill in each space: either 0 or 1 . We fill in the spaces in a sequence of steps.  Step 1: Fill in the first space (2 ways).  Step 2: Fill in the second space (2 ways).  Step 3: Fill in the third space (2 ways).  We continue to fill spaces until Step : Fill in the last space (2 ways).  Since steps multiply , the total number of bit strings of length is     Let's practice counting bit strings.   Counting bit strings      How many bit strings of length eight are there?    How many bit strings of length eight and weight one are there? Hint: How many places are there for the one 1 ?    How many bit strings of length eight and weight two are there? Hint: We can build such a bit string by putting a 0 or 1 in each of eight spaces: but we need exactly two spaces to have 1 so filling in the spaces from left to right will not work and there are too many to draw a possibility tree. Instead, consider choosing which two spaces to fill in with 1 . Since the remaining spaces are 0 s, the number of bit strings of length eight and weight two equals the number of ways to choose the two spaces for 1 s.    Conjecture the number of bit strings of length with weight or, equivalently, exactly  1 s.      Sometimes, a counting problem asks about subsets of a set, which is convenient because counts the number of -element subsets of a set of elements. As we saw in , a counting problem might have nothing to do with subsets, but we can rephrase the problem in terms of subsets. Here is another example.   Bit strings of length 100 and weight three   How many bit strings of length 100 and weight three are there?    Let's figure out a way to rephrase this problem in terms of subsets. We can build such a bit string by putting a 0 or 1 in each of 100 spaces:   Following the hint in , let's choose which spaces have 1 s.  Step 1: Fill in three spaces with 1 . We choose a subset of three spaces for 1 s from the set of 100 spaces. There are ways to do this step.  Step 2: Fill in the remaining 97 spaces with 0 . There is one way to do this step because the 97 0 s go into the remaining 97 spaces. Alternatively, you can think of choosing a subset of 97 spaces for the 0 s from the set of 97 remaining spaces. There are ways to do this step.  Since steps multiply , there are bit strings of length 100 and weight three. Our final answer is , which a quick internet search shows equals 161,700 , too many to list by hand!    We can generalize our answer and rationale from , to get a formula for the number of bit strings of length with exactly  1 s (or with exactly  0 s).   Number of bit strings of length with exactly  s (or with exactly  s)   The number of bit strings of length with exactly  1 s (or with exactly  0 s) is .    Let's see this theorem in action.   Counting bit strings with given number of s or s       Count the number of bit strings of length five and weight three.  By , there are bit strings of length five and weight three. Note that , which should agree with the tree you drew in  .      Count the number of bit strings of length eight and weight two.  By , there are bit strings of length eight and weight two, which is the answer to .      How many bit strings of length 100 are exactly half 0 s and half 1 s?  By there are such bit strings.           Detour: Rephrasing the Question  Sometimes a counting problem does not mention bit strings, but we can rephrase the problem in terms of bit strings, which is convenient because we know and . Try your hand at such an example.   From point to point  In this activity we are interested in direct paths from to in . We begin each direct path at and then walk one unit to the right or one unit down at each step until we reach . We are not allowed to walk to the left or up.   Going from point to point .        Give an example of a direct path from to . How many steps did you take?    Draw a possibility tree to list all possible direct paths. Hint: The original node is which has branches to and to .    How many direct paths from to are there?    We can represent each path by a bit string where 1 represents walking one unit to the right and 0 represents walking one unit down. What is the bit string whose path is ?    What is the path whose bit string is ?    Explain how to use to count the number of paths. You should get the same answer as in .    We can describe the grid in as being because it has 3 rows of letters and 4 columns of letters. Conjecture the number of direct paths from the upper left corner to the lower right corner in a grid.    Generalize. That means conjecturing the number of direct paths from the upper left corner to the lower right corner in a grid.       Algebra: Exponential Notation and Logarithms  In , we proved that there are bit strings of length where   This exponential notation is a shorthand for a product of the same number multiplied by itself repeatedly.   Exponential notation       When is a positive integer,  raised to the power of  (or just  to the  ) is For example, and . Note that exponentiation is not commutative. For example, but . We practice evaluating powers without using technology to understand the definition, but, of course, you can use technology to check. Many computational tools, such as calculators, spreadsheet programs, or an Internet search, use the notation to indicate a power.    In the expression , the integer is the base , the number that we are repeatedly multiplying. The integer is the exponent , the number of times we multiply the base. The quantity is the power of  , the final product. For example, in , the base is 2, the exponent is 5, and the power of 2 is 32.    For , it is convenient to define . For example, is the number of bit strings of length zero.    The expression is  squared . For example, . This name comes from the fact that the area of a square with sides of length is .    The expression is  cubed . For example, . This name comes from the fact that the volume of a cube with sides of length is .       Let's work with these definitions.   Exponential notation   In this example, we only use technology to check our answers.   Evaluate .  By definition,     =      =      =      =  .    Check that 10,000. Notice that has 4 zeros.      Evaluate and .  By definition,     =      =      =  -1,000     =  10,000.    Check that . On the other hand, according to  , exponents are higher in the order of operations in than subtraction (and negation), so . Check that .      Evaluate .  By definition, .  Check that .      Evaluate .  By definition, and check that .         It can be useful to write an integer as a power of a base . For example, we can write or . There is a name for the exponent.   Logarithm       The logarithm base 10 of an integer , denoted is the exponent of the power 10 that equals . That is, if . For example, because .    The logarithm base 2 of an integer , denoted , is the exponent of the power of 2 that equals . That is, if . For example, because .    In this textbook, we only use base 2 and base 10, but logarithms can be defined in general. In this textbook, we only calculate logarithms of exact powers. We do not calculate quantities such as or . We have defined when is a nonnegative integer, but it is beyond the scope of this textbook to define what for any real number . With that definition, we can take evaluate logarithms of any positive real number. For example, and . The logarithm base of an integer , denoted is the exponent of the power of that equals . That is, if . For example, because . In this notation, is short for and is short for . In calculus, a noninteger base is important. The corresponding logarithm is named ln .       Here are a few more examples.   Evaluating logs   In this example, we evaluate without using technology.   Evaluate .  Since , it follows that .      Evaluate and .  First, since , it follows that . Next, since , it follows that .         Practice working with exponents and logarithms.   Exponents and logarithms  On this problem, only use technology to check your answers.   Evaluate , , , .    Evaluate , , , .    Evaluate , , and .    Evaluate , , and .    Find an integer such that .    Find an integer of such that .    Simplify by writing it as a single power.    Simplify by writing it as a single power.    Simplify by writing it as a single power.      Let's look at examples of writing a combination of powers as a single power.   Simplifying exponents       Simplify by writing it as a single power.  Using , we have .  Notice that the base remains 2 and that since the powers shared a common base, the exponents added: .      Simplify by writing it as a single power.  Using , we have .  Notice that the exponents multiplied: .      Write as a power of 2.  First, write . Then, using what we learned in we get .  You can check that and .         We state these rules for exponents as a theorem, but, when in doubt, we suggest that you use the definition instead.   Simplifying exponents   For any integer and positive integers and we have the following rules.   Simplifying a product of powers (of the same base): .    Simplifying a power of a power: .       Here is an example of a common expression that we can simplify using these rules.   Simplify       Simplify using .  We can write to get       Confirm your answer to using the definition of exponents.  We can write          It is acceptable to leave exponential notation or logarithms in your answers.   Not evaluating counts, final version  Unless stated otherwise, when counting you may leave any answer greater than twenty in a format that could easily be evaluated on a calculator. In particular, your answer may involve addition, subtraction, multiplication, division, exponents, logarithms, factorials, binomial coefficients, and parentheses.     Exercises   Exercises for Bit Strings   Practice       Calculate the length and weight of the bit string 101100 .    Calculate the length and weight of the bit string 0 .    Give an example of a bit string of length ten and weight four.         Length six and weight three.    Length one and weight zero.    Hint: your bit string should have four 1 s and six 0 s.       Practice   List all bit strings of length five and weight two using a possibility tree.     Understand   In each part, list all bit strings of length five satisfying the stated property using a possibility tree. In each case, your tree should only include the bit strings that satisfy the stated property.   Bit strings with more 0 s than 1 s.    Bit strings that do not contain consecutive 0 s, which means that 00 does not appear in the bit string.    Bit strings where any 0 is immediately followed by 1 .         Hint: Start the possibility tree with two branches to 0 and 1 , as usual. Next, branch to 0 and 1 again. After that, you need to be careful. If you ever have two 1 s then the remainder of the bits are all 0 s. There are 16 such bit strings. One is all 0 s, five that have four 0 s, and ten that have three 0 s.    Hint: Start the possibility tree with two branches to 0 and 1 , as usual. After that, you need to be careful. After every 1 there are still two branches (to 0 and to 1 ), but after every 0 there is a single branch to 1 .    Hint: This part is similar to (b), except that the bit string must end in 1 because a final 0 would not be immediately followed by 1 .       Recap   Do you know    What a bit is?    How to calculate the length of a bit string or construct a bit string of a given weight?    How to calculate the weight of a bit string or construct a bit string of a given weight?    What the symbol for empty bit string is?        Explore   The Hamming distance between two bit strings is the number of places where their bits differ. For example, the Hamming distance between 10011 and 11010 is two because they have the same first bits (both 1 ), different second bits, the same third bits (both 0 ), the same fourth bits (both 1 ), and different fifth bits. Since the bit strings differ in two places (second and fifth), their Hamming distance equals two. Hamming distance is used in error-correcting codes to ensure the correct transmission of messages such as text messages.   Calculate the Hamming distance between 00011 and 11111 .    List all bit strings that are Hamming distance one from 00011 .    Give an example of a bit string that is Hamming distance two from 00011 .    If is any bit string of length five, how many bit strings are Hamming distance one from ? Explain.    If is any bit string of length five, how many bit strings are Hamming distance two from ? Explain.         Three     10011 , 01011 , , 00010 Note that these are organized by which bit is different: first, second, , fifth    Hint: check that exactly two bits are different.    Hint: See the note under (b).    Hint: We need to choose which two out of five bits to change.        Exercises for Number of Bit Strings   Practice   Use the relevant theorems.   How many bit strings of length twenty are there?    How many bit strings of length twenty contain exactly three 1 s?    How many bit strings of length twenty contain exactly three 0 s?                   Hint: There are two ways to do this problem. We can choose the three places out of 20 for the 0 s or we can choose the 17 places out of 20 for the 1 . Either answer is correct.       Understand   Use the relevant theorems.   How many bit strings of length nine are there?    How many bit strings of length nine or ten are there? Hint: Use cases.    Which number is greater: the number of bit strings of length nine or the number of bit strings of length less than nine? Calculate the actual numbers using technology. Note: do not forget the empty bit string.        Understand       How many bit strings of length 100 begin with 0 ? Explain.    How many bit strings of length 100 begin with 00 ? Explain.    How many bit strings of length 100 begin with 1 and end in 0 ?    How many bit strings of length 100 begin with or end in 0 ? Hint: To avoid double counting of bit strings that begin with 0 and end in 0 , consider Case 1: begins with 0 and Case 2: begins with 1 and ends in 0 .          . Hint: Steps multiply .    Hint: There are spaces left to fill in.    Hint: Use the hint from (b).    Hint: Case 1 is similar to (b) and case 2 is exactly (c). Cases add .       Recap   Do you know    How many bit strings of length there are?    How many bit strings of length have exactly  1 s (or exactly  0 s)?        Explore   A balanced ternary string is a string where each character is 0 , + , or - . For example, + 0+ is a balanced ternary string of length five.   Draw a possibility tree listing all balanced ternary strings of length three.    How many balanced ternary strings of length three are there?    Count the number of balanced ternary strings of length ten.    How many balanced ternary strings of length are there? State your answer as a conjecture.        Explore   Consider strings using only the characters A , B , C , and D . Recall that a string is ordered and repeats are allowed. Also, we do not need to use all the characters.   How many such strings consist of exactly two A s and three B s?    How many such strings consist of exactly two A s, three B s, and four C s?    How many such strings consist of exactly two A s, three B s, four C s, and five D s?         Hint: Step 1 is to choose two of the five spaces for the A s. Step 2 is to choose three of the three remaining spaces for the B s. Note that there is only one way to do Step 2 (so you can safely ignore it).    One way of stating the answer is .    Hint: Figure out how we got the answer to (b) and generalize.       Explore       Conjecture the number of permutations of the set .    Prove your conjecture in the style of our proof of .         Exercises for Detour: Rephrasing the Question   Practice   We are interested in going from to in . As in , we can represent each path by a bit string where 1 represents walking one unit to the right and 0 represents walking one unit down.   What is the bit string whose path is ?    What is the path whose bit string is 11010 ?          01101             Understand   You have fifteen (identical) coins. You want to put some coins in your piggy bank, some in your change jar at work, and some in your car.   How many ways are there to distribute your coins to these three locations? Note that some could mean zero in this context. Hint: Line up the fifteen coins. Put a dividing line after those you plan to put in the piggy bank, if any, and another line after those you plan to put in your change jar, if any. The remaining coins, if any, will go in your car. For example: six coins in the piggy bank, two coins in the change jar, and seven coins in the car could be represented as: whereas three coins in the piggy bank and the rest in the change jar would be: Explain how to rephrase our question about the coins as a question about bit strings. Then answer the question. Hint to the last part of the hint: squint.    Conjecture about the number of ways to distribute coins to locations.         Hint: Each coin is 0 and each dividing line is 1 . Note that the total length is .    Hint: The total length is because we only need dividing lines.       Recap   Do you know    How to rephrase a question in terms of subsets and why that can be useful?    How to rephrase a question in terms of bit strings, and why that can be useful?        Explore   In this problem we build on the ideas of Exercise .   How many nonnegative integer solutions are there to the equation Hint: how can we rephrase this question to be the same as the question in Exercise ?    How many non-negative integer solutions are there to the equation     Make a conjecture about the number of non-negative integer solutions of the equation               Hint: Let be the number of coins in the first location, be the number of coins in the second location, be the number of coins in the third location, and be the number of coins in the fourth location. Count the total number of coins and the number of dividing lines.    Hint: Count the total number of coins and the number of dividing lines.        Exercises for Algebra: Exponential Notation and Logarithms   Practice   On this exercise, do not use technology. Be sure to show some work.   Evaluate , , and .    Evaluate .    Evaluate and .         Hint: Use a calculator to check.    10,000,000,000    Hint: Use a calculator to check.       Practice   On this exercise, do not use technology. Be sure to show some work.   Evaluate , , and .    Find a value such that .    Evaluate , , , and .    Find a value of such that .         4, 1, 0     (or 1,000 )    Hint: .    Hint: The base is 2 and the logarithm tells you the exponent.       Understand   Write each quantity as a single power.                                      Hint: How many s are being multiplied?    Hint: How many twos are being multiplied?         Hint: How many 10s are being multiplied?       Understand   In this problem, all letters represent positive integers.   Factor     Factor .    Factor and simplify . Hint: See Exercise  and .         Hint: Factor out .         Hint: Factor out , using that .       Recap   Do you know    What means and how to pronounce it?    How to pronounce and ?    How to evaluate , , and ?    Where exponents rank in the order of operations?    What and mean and how to evaluate them?    How to rewrite a statement involving logs as a statement involving exponents?        Explore       Play the online game 2048 . Report here how long you played and how high a level you achieved. Try to get to at least 128.    List the powers of 2 from 1 to 2048 from memory (that is, not using any technology or computing any products).        Explore       Write the exponential equation corresponding to .    For numbers and , write and . Write the corresponding exponential equations.    Simplify using and . Your answer should be in terms of and .    Use your answer to to evaluate . Your answer should be in terms of and .    Use your answer to to write in terms of and . Your answer is one of the rules known as a law of logs .        Explore       Without calculating values, decide which is larger: or . Hint: Use the definitions of factorials and powers to write each of and as a product. Then use those products to answer the question.    Calculate and using technology. Did you correctly determine which integer is larger?    Make a table for showing the values of and the values of . Challenge yourself to reciting the powers of two and as many factorials as you can from memory, but then you are welcome to use computing technology. Hint: Use three rows labeled , , and .    Conjecture when .         Hint: Compare and . Note , , , , .    Yes    Hint: the last column of your table should have 10 in the first row, 1,024 in the second row, and 3,628,800 in the third row.             "
},
{
  "id": "sec_bit_strings-2-1",
  "level": "2",
  "url": "sec_bit_strings.html#sec_bit_strings-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "bit strings "
},
{
  "id": "defn_bit_string",
  "level": "2",
  "url": "sec_bit_strings.html#defn_bit_string",
  "type": "Definition",
  "number": "2.4.1",
  "title": "Bit string.",
  "body": " Bit string       A character that is 0 or 1 is a bit .    A bit string is a string where each character is a bit. For example, 1101 is a bit string.    The weight of a bit string is the number of 1 s in the bit string. For example, the bit string 1101 has length four and weight three.    The empty bit string  , pronounced lambda , is the unique bit string of length zero. The symbol is a place holder. If we had just a blank space, you would not know that we meant the empty bit string. In computer science, the empty bit string is used as a start to build a new bit string. If we start with and write 1 at the end of the string, the resulting bit string is 1 (and we no longer write ).      "
},
{
  "id": "exam_bit_string_length3",
  "level": "2",
  "url": "sec_bit_strings.html#exam_bit_string_length3",
  "type": "Example",
  "number": "2.4.2",
  "title": "Listing bit strings in a possibility tree.",
  "body": " Listing bit strings in a possibility tree       List all bit strings of length three by drawing a possibility tree.  We draw the possibility tree in . The list is 000 , 001 , 010 , 011 , 100 , 101 , 110 , 111 .   The possibility tree of all bit strings of length three.          List all bit strings of length four and weight two.  We draw the possibility tree below. Each bit string has weight two, which means that it has exactly two 1 s and two 0 s. In the tree we need to be careful any time we have two 1 s or two 0 s, we have only one branch (either to just 0 or to just 1 ) instead of the usual two branches (to 0 and to 1 ). The strings are 0011 , 0101 , 0110 , 1001 , 1010 , 1100 .   The possibility tree of all bit strings of length four and weight two.            "
},
{
  "id": "act_listing_bit_strings",
  "level": "2",
  "url": "sec_bit_strings.html#act_listing_bit_strings",
  "type": "Activity",
  "number": "2.4.A",
  "title": "Listing bit strings.",
  "body": " Listing bit strings      Give an example of a bit string of length four.    Give an example of a bit string of length five and weight three.    List all bit strings of length four using a possibility tree. Be sure to include the list itself.    Make a table showing the number of bit strings of length for . Hint: You can count the answers in your possibility tree from .    Based on the values in your table, how many bit strings of length five should there be?    Explain how you can use steps to count the number of bit strings of length five. Did you get the same answer?    Conjecture the number of bit strings of length .    List the bit strings of length five and weight three by drawing a possibility tree. Your tree should include only those bit strings.     "
},
{
  "id": "exam_conjecture_number_bit_strings",
  "level": "2",
  "url": "sec_bit_strings.html#exam_conjecture_number_bit_strings",
  "type": "Example",
  "number": "2.4.5",
  "title": "Conjecture number of bit strings of length <span class=\"process-math\">\\(n\\)<\/span>.",
  "body": " Conjecture number of bit strings of length   How many bit strings of length are there? State your answer as a conjecture.    There is one bit string of length 0 ( ), two bit strings of length one ( 0 , 1 ) and four bit strings of length two ( 00 , 01 , 10 , 11 ). In , we listed the eight bit strings of length three. In , we counted 16 bit strings of length four and 32 bit strings of length five. Notice that each integer is twice the previous number, suggesting that we are multiplying by two. shows these examples written as a product of twos.   The number of bit strings of length for     Number of bit strings of length .        0  1        1         2  4 =        3         4         5      Based on these examples, it is reasonable to conjecture that there are bit strings of length .   "
},
{
  "id": "sub_count_bit_strings-4",
  "level": "2",
  "url": "sec_bit_strings.html#sub_count_bit_strings-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "to the power of "
},
{
  "id": "thm_number_bit_strings",
  "level": "2",
  "url": "sec_bit_strings.html#thm_number_bit_strings",
  "type": "Theorem",
  "number": "2.4.7",
  "title": "Number of bit strings of length <span class=\"process-math\">\\(n\\)<\/span>.",
  "body": " Number of bit strings of length    There are bit strings of length .    Imagine building each bit string of length by filling in the spaces:   There are two ways to fill in each space: either 0 or 1 . We fill in the spaces in a sequence of steps.  Step 1: Fill in the first space (2 ways).  Step 2: Fill in the second space (2 ways).  Step 3: Fill in the third space (2 ways).  We continue to fill spaces until Step : Fill in the last space (2 ways).  Since steps multiply , the total number of bit strings of length is    "
},
{
  "id": "act_countingbs",
  "level": "2",
  "url": "sec_bit_strings.html#act_countingbs",
  "type": "Activity",
  "number": "2.4.B",
  "title": "Counting bit strings.",
  "body": " Counting bit strings      How many bit strings of length eight are there?    How many bit strings of length eight and weight one are there? Hint: How many places are there for the one 1 ?    How many bit strings of length eight and weight two are there? Hint: We can build such a bit string by putting a 0 or 1 in each of eight spaces: but we need exactly two spaces to have 1 so filling in the spaces from left to right will not work and there are too many to draw a possibility tree. Instead, consider choosing which two spaces to fill in with 1 . Since the remaining spaces are 0 s, the number of bit strings of length eight and weight two equals the number of ways to choose the two spaces for 1 s.    Conjecture the number of bit strings of length with weight or, equivalently, exactly  1 s.     "
},
{
  "id": "exam_bit_strings_length100_weight3",
  "level": "2",
  "url": "sec_bit_strings.html#exam_bit_strings_length100_weight3",
  "type": "Example",
  "number": "2.4.8",
  "title": "Bit strings of length 100 and weight three.",
  "body": " Bit strings of length 100 and weight three   How many bit strings of length 100 and weight three are there?    Let's figure out a way to rephrase this problem in terms of subsets. We can build such a bit string by putting a 0 or 1 in each of 100 spaces:   Following the hint in , let's choose which spaces have 1 s.  Step 1: Fill in three spaces with 1 . We choose a subset of three spaces for 1 s from the set of 100 spaces. There are ways to do this step.  Step 2: Fill in the remaining 97 spaces with 0 . There is one way to do this step because the 97 0 s go into the remaining 97 spaces. Alternatively, you can think of choosing a subset of 97 spaces for the 0 s from the set of 97 remaining spaces. There are ways to do this step.  Since steps multiply , there are bit strings of length 100 and weight three. Our final answer is , which a quick internet search shows equals 161,700 , too many to list by hand!   "
},
{
  "id": "thm_bit_string_exactly_k",
  "level": "2",
  "url": "sec_bit_strings.html#thm_bit_string_exactly_k",
  "type": "Theorem",
  "number": "2.4.9",
  "title": "Number of bit strings of length <span class=\"process-math\">\\(n\\)<\/span> with exactly <span class=\"process-math\">\\(k\\)<\/span> <span class=\"process-math\">\\(\\str{1}\\)<\/span>s (or with exactly <span class=\"process-math\">\\(k\\)<\/span> <span class=\"process-math\">\\(\\str{0}\\)<\/span>s).",
  "body": " Number of bit strings of length with exactly  s (or with exactly  s)   The number of bit strings of length with exactly  1 s (or with exactly  0 s) is .   "
},
{
  "id": "exam_count_bs_exactlyk",
  "level": "2",
  "url": "sec_bit_strings.html#exam_count_bs_exactlyk",
  "type": "Example",
  "number": "2.4.10",
  "title": "Counting bit strings with given number of <span class=\"process-math\">\\(\\bs{0}\\)<\/span>s or <span class=\"process-math\">\\(\\bs{1}\\)<\/span>s.",
  "body": " Counting bit strings with given number of s or s       Count the number of bit strings of length five and weight three.  By , there are bit strings of length five and weight three. Note that , which should agree with the tree you drew in  .      Count the number of bit strings of length eight and weight two.  By , there are bit strings of length eight and weight two, which is the answer to .      How many bit strings of length 100 are exactly half 0 s and half 1 s?  By there are such bit strings.        "
},
{
  "id": "act_froma1_toc4",
  "level": "2",
  "url": "sec_bit_strings.html#act_froma1_toc4",
  "type": "Activity",
  "number": "2.4.C",
  "title": "From point <span class=\"process-math\">\\(a_1\\)<\/span> to point <span class=\"process-math\">\\(c_4\\)<\/span>.",
  "body": " From point to point  In this activity we are interested in direct paths from to in . We begin each direct path at and then walk one unit to the right or one unit down at each step until we reach . We are not allowed to walk to the left or up.   Going from point to point .        Give an example of a direct path from to . How many steps did you take?    Draw a possibility tree to list all possible direct paths. Hint: The original node is which has branches to and to .    How many direct paths from to are there?    We can represent each path by a bit string where 1 represents walking one unit to the right and 0 represents walking one unit down. What is the bit string whose path is ?    What is the path whose bit string is ?    Explain how to use to count the number of paths. You should get the same answer as in .    We can describe the grid in as being because it has 3 rows of letters and 4 columns of letters. Conjecture the number of direct paths from the upper left corner to the lower right corner in a grid.    Generalize. That means conjecturing the number of direct paths from the upper left corner to the lower right corner in a grid.    "
},
{
  "id": "sub_exp_log-3",
  "level": "2",
  "url": "sec_bit_strings.html#sub_exp_log-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "exponential notation "
},
{
  "id": "defn_exp_notation",
  "level": "2",
  "url": "sec_bit_strings.html#defn_exp_notation",
  "type": "Definition",
  "number": "2.4.12",
  "title": "Exponential notation.",
  "body": " Exponential notation       When is a positive integer,  raised to the power of  (or just  to the  ) is For example, and . Note that exponentiation is not commutative. For example, but . We practice evaluating powers without using technology to understand the definition, but, of course, you can use technology to check. Many computational tools, such as calculators, spreadsheet programs, or an Internet search, use the notation to indicate a power.    In the expression , the integer is the base , the number that we are repeatedly multiplying. The integer is the exponent , the number of times we multiply the base. The quantity is the power of  , the final product. For example, in , the base is 2, the exponent is 5, and the power of 2 is 32.    For , it is convenient to define . For example, is the number of bit strings of length zero.    The expression is  squared . For example, . This name comes from the fact that the area of a square with sides of length is .    The expression is  cubed . For example, . This name comes from the fact that the volume of a cube with sides of length is .      "
},
{
  "id": "exam_exponential_notation",
  "level": "2",
  "url": "sec_bit_strings.html#exam_exponential_notation",
  "type": "Example",
  "number": "2.4.13",
  "title": "Exponential notation.",
  "body": " Exponential notation   In this example, we only use technology to check our answers.   Evaluate .  By definition,     =      =      =      =  .    Check that 10,000. Notice that has 4 zeros.      Evaluate and .  By definition,     =      =      =  -1,000     =  10,000.    Check that . On the other hand, according to  , exponents are higher in the order of operations in than subtraction (and negation), so . Check that .      Evaluate .  By definition, .  Check that .      Evaluate .  By definition, and check that .        "
},
{
  "id": "defn_log",
  "level": "2",
  "url": "sec_bit_strings.html#defn_log",
  "type": "Definition",
  "number": "2.4.14",
  "title": "Logarithm.",
  "body": " Logarithm       The logarithm base 10 of an integer , denoted is the exponent of the power 10 that equals . That is, if . For example, because .    The logarithm base 2 of an integer , denoted , is the exponent of the power of 2 that equals . That is, if . For example, because .    In this textbook, we only use base 2 and base 10, but logarithms can be defined in general. In this textbook, we only calculate logarithms of exact powers. We do not calculate quantities such as or . We have defined when is a nonnegative integer, but it is beyond the scope of this textbook to define what for any real number . With that definition, we can take evaluate logarithms of any positive real number. For example, and . The logarithm base of an integer , denoted is the exponent of the power of that equals . That is, if . For example, because . In this notation, is short for and is short for . In calculus, a noninteger base is important. The corresponding logarithm is named ln .      "
},
{
  "id": "exam_eval_logs",
  "level": "2",
  "url": "sec_bit_strings.html#exam_eval_logs",
  "type": "Example",
  "number": "2.4.15",
  "title": "Evaluating logs.",
  "body": " Evaluating logs   In this example, we evaluate without using technology.   Evaluate .  Since , it follows that .      Evaluate and .  First, since , it follows that . Next, since , it follows that .        "
},
{
  "id": "act_exp_logs",
  "level": "2",
  "url": "sec_bit_strings.html#act_exp_logs",
  "type": "Activity",
  "number": "2.4.D",
  "title": "Exponents and logarithms.",
  "body": " Exponents and logarithms  On this problem, only use technology to check your answers.   Evaluate , , , .    Evaluate , , , .    Evaluate , , and .    Evaluate , , and .    Find an integer such that .    Find an integer of such that .    Simplify by writing it as a single power.    Simplify by writing it as a single power.    Simplify by writing it as a single power.     "
},
{
  "id": "exam_simplify_exponents",
  "level": "2",
  "url": "sec_bit_strings.html#exam_simplify_exponents",
  "type": "Example",
  "number": "2.4.16",
  "title": "Simplifying exponents.",
  "body": " Simplifying exponents       Simplify by writing it as a single power.  Using , we have .  Notice that the base remains 2 and that since the powers shared a common base, the exponents added: .      Simplify by writing it as a single power.  Using , we have .  Notice that the exponents multiplied: .      Write as a power of 2.  First, write . Then, using what we learned in we get .  You can check that and .        "
},
{
  "id": "thm_simplify_exp",
  "level": "2",
  "url": "sec_bit_strings.html#thm_simplify_exp",
  "type": "Theorem",
  "number": "2.4.17",
  "title": "Simplifying exponents.",
  "body": " Simplifying exponents   For any integer and positive integers and we have the following rules.   Simplifying a product of powers (of the same base): .    Simplifying a power of a power: .      "
},
{
  "id": "exam_simplify_22nminus1",
  "level": "2",
  "url": "sec_bit_strings.html#exam_simplify_22nminus1",
  "type": "Example",
  "number": "2.4.18",
  "title": "Simplify <span class=\"process-math\">\\(2\\cdot2^{n-1}\\)<\/span>.",
  "body": " Simplify       Simplify using .  We can write to get       Confirm your answer to using the definition of exponents.  We can write         "
},
{
  "id": "rem_not_eval_counts_final",
  "level": "2",
  "url": "sec_bit_strings.html#rem_not_eval_counts_final",
  "type": "Remark",
  "number": "2.4.19",
  "title": "Not evaluating counts, final version.",
  "body": " Not evaluating counts, final version  Unless stated otherwise, when counting you may leave any answer greater than twenty in a format that could easily be evaluated on a calculator. In particular, your answer may involve addition, subtraction, multiplication, division, exponents, logarithms, factorials, binomial coefficients, and parentheses.  "
},
{
  "id": "exer_bit_string_length",
  "level": "2",
  "url": "sec_bit_strings.html#exer_bit_string_length",
  "type": "",
  "number": "1",
  "title": "Practice.",
  "body": " Practice       Calculate the length and weight of the bit string 101100 .    Calculate the length and weight of the bit string 0 .    Give an example of a bit string of length ten and weight four.         Length six and weight three.    Length one and weight zero.    Hint: your bit string should have four 1 s and six 0 s.     "
},
{
  "id": "exer_bit_strings_length5_weight2",
  "level": "2",
  "url": "sec_bit_strings.html#exer_bit_strings_length5_weight2",
  "type": "",
  "number": "2",
  "title": "Practice.",
  "body": " Practice   List all bit strings of length five and weight two using a possibility tree.   "
},
{
  "id": "exer_bstrees",
  "level": "2",
  "url": "sec_bit_strings.html#exer_bstrees",
  "type": "",
  "number": "3",
  "title": "Understand.",
  "body": " Understand   In each part, list all bit strings of length five satisfying the stated property using a possibility tree. In each case, your tree should only include the bit strings that satisfy the stated property.   Bit strings with more 0 s than 1 s.    Bit strings that do not contain consecutive 0 s, which means that 00 does not appear in the bit string.    Bit strings where any 0 is immediately followed by 1 .         Hint: Start the possibility tree with two branches to 0 and 1 , as usual. Next, branch to 0 and 1 again. After that, you need to be careful. If you ever have two 1 s then the remainder of the bits are all 0 s. There are 16 such bit strings. One is all 0 s, five that have four 0 s, and ten that have three 0 s.    Hint: Start the possibility tree with two branches to 0 and 1 , as usual. After that, you need to be careful. After every 1 there are still two branches (to 0 and to 1 ), but after every 0 there is a single branch to 1 .    Hint: This part is similar to (b), except that the bit string must end in 1 because a final 0 would not be immediately followed by 1 .     "
},
{
  "id": "exer_dyk_defnbs",
  "level": "2",
  "url": "sec_bit_strings.html#exer_dyk_defnbs",
  "type": "",
  "number": "4",
  "title": "Recap.",
  "body": " Recap   Do you know    What a bit is?    How to calculate the length of a bit string or construct a bit string of a given weight?    How to calculate the weight of a bit string or construct a bit string of a given weight?    What the symbol for empty bit string is?      "
},
{
  "id": "exer_hamming_distance",
  "level": "2",
  "url": "sec_bit_strings.html#exer_hamming_distance",
  "type": "",
  "number": "5",
  "title": "Explore.",
  "body": " Explore   The Hamming distance between two bit strings is the number of places where their bits differ. For example, the Hamming distance between 10011 and 11010 is two because they have the same first bits (both 1 ), different second bits, the same third bits (both 0 ), the same fourth bits (both 1 ), and different fifth bits. Since the bit strings differ in two places (second and fifth), their Hamming distance equals two. Hamming distance is used in error-correcting codes to ensure the correct transmission of messages such as text messages.   Calculate the Hamming distance between 00011 and 11111 .    List all bit strings that are Hamming distance one from 00011 .    Give an example of a bit string that is Hamming distance two from 00011 .    If is any bit string of length five, how many bit strings are Hamming distance one from ? Explain.    If is any bit string of length five, how many bit strings are Hamming distance two from ? Explain.         Three     10011 , 01011 , , 00010 Note that these are organized by which bit is different: first, second, , fifth    Hint: check that exactly two bits are different.    Hint: See the note under (b).    Hint: We need to choose which two out of five bits to change.     "
},
{
  "id": "exer_count_bs20",
  "level": "2",
  "url": "sec_bit_strings.html#exer_count_bs20",
  "type": "",
  "number": "6",
  "title": "Practice.",
  "body": " Practice   Use the relevant theorems.   How many bit strings of length twenty are there?    How many bit strings of length twenty contain exactly three 1 s?    How many bit strings of length twenty contain exactly three 0 s?                   Hint: There are two ways to do this problem. We can choose the three places out of 20 for the 0 s or we can choose the 17 places out of 20 for the 1 . Either answer is correct.     "
},
{
  "id": "exer_count_bs9",
  "level": "2",
  "url": "sec_bit_strings.html#exer_count_bs9",
  "type": "",
  "number": "7",
  "title": "Understand.",
  "body": " Understand   Use the relevant theorems.   How many bit strings of length nine are there?    How many bit strings of length nine or ten are there? Hint: Use cases.    Which number is greater: the number of bit strings of length nine or the number of bit strings of length less than nine? Calculate the actual numbers using technology. Note: do not forget the empty bit string.      "
},
{
  "id": "exer_count_bs100",
  "level": "2",
  "url": "sec_bit_strings.html#exer_count_bs100",
  "type": "",
  "number": "8",
  "title": "Understand.",
  "body": " Understand       How many bit strings of length 100 begin with 0 ? Explain.    How many bit strings of length 100 begin with 00 ? Explain.    How many bit strings of length 100 begin with 1 and end in 0 ?    How many bit strings of length 100 begin with or end in 0 ? Hint: To avoid double counting of bit strings that begin with 0 and end in 0 , consider Case 1: begins with 0 and Case 2: begins with 1 and ends in 0 .          . Hint: Steps multiply .    Hint: There are spaces left to fill in.    Hint: Use the hint from (b).    Hint: Case 1 is similar to (b) and case 2 is exactly (c). Cases add .     "
},
{
  "id": "exer_dyk_numberbs",
  "level": "2",
  "url": "sec_bit_strings.html#exer_dyk_numberbs",
  "type": "",
  "number": "9",
  "title": "Recap.",
  "body": " Recap   Do you know    How many bit strings of length there are?    How many bit strings of length have exactly  1 s (or exactly  0 s)?      "
},
{
  "id": "exer_bal_ternary_strings",
  "level": "2",
  "url": "sec_bit_strings.html#exer_bal_ternary_strings",
  "type": "",
  "number": "10",
  "title": "Explore.",
  "body": " Explore   A balanced ternary string is a string where each character is 0 , + , or - . For example, + 0+ is a balanced ternary string of length five.   Draw a possibility tree listing all balanced ternary strings of length three.    How many balanced ternary strings of length three are there?    Count the number of balanced ternary strings of length ten.    How many balanced ternary strings of length are there? State your answer as a conjecture.      "
},
{
  "id": "exer_ABCD_strings",
  "level": "2",
  "url": "sec_bit_strings.html#exer_ABCD_strings",
  "type": "",
  "number": "11",
  "title": "Explore.",
  "body": " Explore   Consider strings using only the characters A , B , C , and D . Recall that a string is ordered and repeats are allowed. Also, we do not need to use all the characters.   How many such strings consist of exactly two A s and three B s?    How many such strings consist of exactly two A s, three B s, and four C s?    How many such strings consist of exactly two A s, three B s, four C s, and five D s?         Hint: Step 1 is to choose two of the five spaces for the A s. Step 2 is to choose three of the three remaining spaces for the B s. Note that there is only one way to do Step 2 (so you can safely ignore it).    One way of stating the answer is .    Hint: Figure out how we got the answer to (b) and generalize.     "
},
{
  "id": "exer_number_perms",
  "level": "2",
  "url": "sec_bit_strings.html#exer_number_perms",
  "type": "",
  "number": "12",
  "title": "Explore.",
  "body": " Explore       Conjecture the number of permutations of the set .    Prove your conjecture in the style of our proof of .      "
},
{
  "id": "exer_froma1toc4",
  "level": "2",
  "url": "sec_bit_strings.html#exer_froma1toc4",
  "type": "",
  "number": "13",
  "title": "Practice.",
  "body": " Practice   We are interested in going from to in . As in , we can represent each path by a bit string where 1 represents walking one unit to the right and 0 represents walking one unit down.   What is the bit string whose path is ?    What is the path whose bit string is 11010 ?          01101           "
},
{
  "id": "exer_stars_and_bars",
  "level": "2",
  "url": "sec_bit_strings.html#exer_stars_and_bars",
  "type": "",
  "number": "14",
  "title": "Understand.",
  "body": " Understand   You have fifteen (identical) coins. You want to put some coins in your piggy bank, some in your change jar at work, and some in your car.   How many ways are there to distribute your coins to these three locations? Note that some could mean zero in this context. Hint: Line up the fifteen coins. Put a dividing line after those you plan to put in the piggy bank, if any, and another line after those you plan to put in your change jar, if any. The remaining coins, if any, will go in your car. For example: six coins in the piggy bank, two coins in the change jar, and seven coins in the car could be represented as: whereas three coins in the piggy bank and the rest in the change jar would be: Explain how to rephrase our question about the coins as a question about bit strings. Then answer the question. Hint to the last part of the hint: squint.    Conjecture about the number of ways to distribute coins to locations.         Hint: Each coin is 0 and each dividing line is 1 . Note that the total length is .    Hint: The total length is because we only need dividing lines.     "
},
{
  "id": "exer_dyk_rephrase_question",
  "level": "2",
  "url": "sec_bit_strings.html#exer_dyk_rephrase_question",
  "type": "",
  "number": "15",
  "title": "Recap.",
  "body": " Recap   Do you know    How to rephrase a question in terms of subsets and why that can be useful?    How to rephrase a question in terms of bit strings, and why that can be useful?      "
},
{
  "id": "exer_integer_simplex",
  "level": "2",
  "url": "sec_bit_strings.html#exer_integer_simplex",
  "type": "",
  "number": "16",
  "title": "Explore.",
  "body": " Explore   In this problem we build on the ideas of Exercise .   How many nonnegative integer solutions are there to the equation Hint: how can we rephrase this question to be the same as the question in Exercise ?    How many non-negative integer solutions are there to the equation     Make a conjecture about the number of non-negative integer solutions of the equation               Hint: Let be the number of coins in the first location, be the number of coins in the second location, be the number of coins in the third location, and be the number of coins in the fourth location. Count the total number of coins and the number of dividing lines.    Hint: Count the total number of coins and the number of dividing lines.     "
},
{
  "id": "exer_evaluate_powers",
  "level": "2",
  "url": "sec_bit_strings.html#exer_evaluate_powers",
  "type": "",
  "number": "17",
  "title": "Practice.",
  "body": " Practice   On this exercise, do not use technology. Be sure to show some work.   Evaluate , , and .    Evaluate .    Evaluate and .         Hint: Use a calculator to check.    10,000,000,000    Hint: Use a calculator to check.     "
},
{
  "id": "exer_eval_logs",
  "level": "2",
  "url": "sec_bit_strings.html#exer_eval_logs",
  "type": "",
  "number": "18",
  "title": "Practice.",
  "body": " Practice   On this exercise, do not use technology. Be sure to show some work.   Evaluate , , and .    Find a value such that .    Evaluate , , , and .    Find a value of such that .         4, 1, 0     (or 1,000 )    Hint: .    Hint: The base is 2 and the logarithm tells you the exponent.     "
},
{
  "id": "exer_single_power",
  "level": "2",
  "url": "sec_bit_strings.html#exer_single_power",
  "type": "",
  "number": "19",
  "title": "Understand.",
  "body": " Understand   Write each quantity as a single power.                                      Hint: How many s are being multiplied?    Hint: How many twos are being multiplied?         Hint: How many 10s are being multiplied?     "
},
{
  "id": "exer_factoring_powers",
  "level": "2",
  "url": "sec_bit_strings.html#exer_factoring_powers",
  "type": "",
  "number": "20",
  "title": "Understand.",
  "body": " Understand   In this problem, all letters represent positive integers.   Factor     Factor .    Factor and simplify . Hint: See Exercise  and .         Hint: Factor out .         Hint: Factor out , using that .     "
},
{
  "id": "exer_dyk_exp_log",
  "level": "2",
  "url": "sec_bit_strings.html#exer_dyk_exp_log",
  "type": "",
  "number": "21",
  "title": "Recap.",
  "body": " Recap   Do you know    What means and how to pronounce it?    How to pronounce and ?    How to evaluate , , and ?    Where exponents rank in the order of operations?    What and mean and how to evaluate them?    How to rewrite a statement involving logs as a statement involving exponents?      "
},
{
  "id": "x2048_game",
  "level": "2",
  "url": "sec_bit_strings.html#x2048_game",
  "type": "",
  "number": "22",
  "title": "Explore.",
  "body": " Explore       Play the online game 2048 . Report here how long you played and how high a level you achieved. Try to get to at least 128.    List the powers of 2 from 1 to 2048 from memory (that is, not using any technology or computing any products).      "
},
{
  "id": "exer_defn_lg",
  "level": "2",
  "url": "sec_bit_strings.html#exer_defn_lg",
  "type": "",
  "number": "23",
  "title": "Explore.",
  "body": " Explore       Write the exponential equation corresponding to .    For numbers and , write and . Write the corresponding exponential equations.    Simplify using and . Your answer should be in terms of and .    Use your answer to to evaluate . Your answer should be in terms of and .    Use your answer to to write in terms of and . Your answer is one of the rules known as a law of logs .      "
},
{
  "id": "exer_power_vs_factorial",
  "level": "2",
  "url": "sec_bit_strings.html#exer_power_vs_factorial",
  "type": "",
  "number": "24",
  "title": "Explore.",
  "body": " Explore       Without calculating values, decide which is larger: or . Hint: Use the definitions of factorials and powers to write each of and as a product. Then use those products to answer the question.    Calculate and using technology. Did you correctly determine which integer is larger?    Make a table for showing the values of and the values of . Challenge yourself to reciting the powers of two and as many factorials as you can from memory, but then you are welcome to use computing technology. Hint: Use three rows labeled , , and .    Conjecture when .         Hint: Compare and . Note , , , , .    Yes    Hint: the last column of your table should have 10 in the first row, 1,024 in the second row, and 3,628,800 in the third row.          "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
