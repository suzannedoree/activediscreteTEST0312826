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
