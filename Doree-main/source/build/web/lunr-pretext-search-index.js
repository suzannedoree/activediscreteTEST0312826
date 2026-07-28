var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "sec_even_odd_divides",
  "level": "1",
  "url": "sec_even_odd_divides.html",
  "type": "Section",
  "number": "1.1",
  "title": "Integer Division",
  "body": " Integer Division   In this section, we begin our exploration of integer division by discussing even and odd integers, divisors, and fractions.    Opening and Closing Lockers  But first, a puzzle.   Lockers Puzzle  At Perpetual High School, a never-ending line of students marches down a never-ending hallway of lockers. The first student opens each locker. The second student closes every other locker (002, 004, 006, etc.) The third student changes the state of every third locker, which means closing 003, opening 006, etc. And so on, with the student changing the state of every locker.   The first few lockers at Perpetual High School.        Calculate the final state of each of the first ten lockers. Show some work.    How many students touch locker 100? Show work.    What is the final state of locker 100? Explain briefly.    Make a conjecture about which lockers are finally left open and which are finally left closed.    There are two very reasonable answers to . One conjecture, Conjecture A, depends on the number of students who touch the locker. The other conjecture, Conjecture B, depends only on the locker number. Which conjecture did you make in : A or B? What is the other conjecture?    Use whatever conjecture you prefer to determine whether locker 1,000,000 is open or closed. Explain your reasoning.     Be sure to complete because we are about to reveal some of the answers.   Open lockers       What is the final state of locker 99? Explain.  First note that the last student to touch locker 99 is the student. So to determine the final state of locker 99 we only need to know which students from 1-99 touched it. We can factor 99 in several ways: , , and . That is, the only students from 1-99 to touch locker 99 are students one, three, nine, 11, 33, and 99. Student one opens locker 99, student three closes it, student nine opens it, student 11 closes it, student 33 opens it, and student 99 closes it. The final state of locker 99 is that it is closed.      Conjecture how the final state of a locker depends on the number of students who touch the locker.  When the number of students who touch the locker is even, as was the case for locker 99, the final state of the locker is closed. When the number of students who touch the locker is odd, as was the case for locker 100, the final state of the locker is open. This conjecture is Conjecture A.      Conjecture which lockers have an odd number of students that touch that locker.  Notice that students who touch the locker tend to come in pairs. For example, locker 99 is touched by students one and 99, students three and 33, and students nine and 11. As another example, locker 100 is touched by students one and 100, students two and 50, students four and 25, and students five and 20. But there is one additional student who touches locker 100, student 10, which makes the total number of students touching locker 100 odd. Why is student 10 not in a pair? Because or, in other words, . We conjecture that lockers touched by an odd number of students have locker numbers equal to the square of an integer, known as a perfect square . This conjecture is Conjecture B.           Even and Odd Integers  We have seen several situations in which it mattered whether an integer is even or odd. An odd number of bridges was problematic in solving the Bridges Puzzle in . The chromatic number of the cycle and the wheels depended on whether was even or odd. In each of those examples, we recognize that an even integer is the sum of twos: on-off, on-off, , on-off in the Bridges Puzzle or black-white, black-white, , black-white in coloring a cycle. That is, is even if we can write . Equivalently, we can think of even integers as those that divide exactly in half. That is, . We state the formal definition.   Even and odd       The integer is even if for some integer . For example, 18 is even because . If we wanted to be formal, we would say where .    The integer is odd if for some integer . For example, 19 is odd because . If we wanted to be formal, we would say where .       Here are some more general examples.   Even and odd, in general   You probably know many facts about even and odd integers. In this example, we use only the definitions.   Use the definition of even to show that is even for any integer .  We want to write for some integer . We can solve to find . We divide by two to get , which is an integer. Officially, we need to use that value of to write , so is even.  Notice that we could have just factored out the two to write without any mention of .      Use the definition of odd to show that is odd for any integer .  We want to write for some integer . We can solve to find . First, we subtract and factor to get . Next, we divide by two to get , which is an integer. Officially, we need to use that value of to write , so is odd.  Notice that we could have used algebra to write without any mention of .         Try working with these definitions. As before, you should not use facts that you might know about even and odd integers.   Even and odd      Use the definition of even to show that 34 is even.    Use the definition of odd to show that 37 is odd.    Is zero even, odd, both, or neither? Justify your answer.    Give examples of integers to show that can be even or odd.    Use the definition of odd to show that, for any integer , the integer is always odd. Hint: Once you find a useful value of , write in the form .      In  we asked if zero is even, odd, both, or neither. A common incorrect answer is neither, perhaps because neither is the correct answer to a different question, namely is zero positive, negative, both, or neither? Let's show that zero is even and not odd.   Zero is even       Use the definition to show that zero is even.  We can write . That is when . Since is an integer, it follows that zero is even.      Use the definition to show that zero is not odd.  Suppose that we could write . We can subtract one to get and then divide by two to get . Since is the only possible value of , and is not an integer, it follows that zero is not odd.         It turns out that every integer is even or odd and never both. We prove this result in .    Divisibility  In the Lockers Puzzle , the student touches locker , locker , locker , etc. In general, the student touches locker when we can write for some integer . We make this concept formal with another definition.   Divides       The nonzero integer  divides integer , denoted , if for some integer . For example, 3 divides 15, denoted because . Note also that because and because .    If , then is a divisor (or factor ) of . For example, the (positive) divisors of 15 are: 1, 3, 5, and 15 because and . (It is harder to know that we found all the positive divisors.) The complete list of 15 divisors is 1, 3, 5 and 15.    If , then is a multiple of . For example, 10, -35, and 65 are multiples of 5.    If does not divide , we write . For example, .       Here are some more general examples.   Divides, in general   You might know many facts about divisibility. In this example, we use only the definition.   Show that 65 is a multiple of 5.  Note that and so . Thus, 65 is a multiple of 5.      Rewrite the statement from using the word divides and divides notation.  We say that 5 divides 65, denoted .      Use the definition of divides to show that .  Factor to write , so . If we wanted to be formal, we could write where .         It is your turn to practice with divides.   Divides      List the divisors of 12. Note: do not forget the negative divisors.    Give an example of three different integers that are multiples of 12.    Which is true: or ? Justify your answer.    Use the definition of divides to show that .    Use the definition of divides to show that for all integers .    Is true for all nonzero integers ? Justify your answer.    Is true for all nonzero integers ? Again, justify your answer.      You may have heard, correctly, that we cannot divide by zero. Let's take a closer look at  and .   You cannot divide by zero       Can we divide by zero? That is, is zero a divisor of any integer? Explain.  We are asking if for any integer . In we did not allow the divisor to be zero, so the answer is no. The reason we excluded zero is because if for some integer , then the only possibility is . Therefore, it is impossible for zero to divide any nonzero integer. We also do not allow zero to divide itself either. The answer is no.      Is zero a multiple of any integer?  We are asking if for any integer . That means we are looking for an integer such that . Since and is an integer, it follows that for all nonzero integers . The answer is yes.           Algebra: Equivalent Fractions  When we divide one integer by another (nonzero) integer, sometimes we get an integer, but sometimes we get a fraction (rational number) that is not an integer. Here is the formal definition.   Fraction (rational number)       For integer and nonzero integer , the fraction (or rational number ) is the number we get by dividing by , meaning . We can think of the fraction as representing an equal share of objects among places. For example, if we have 40 cucumber slices and five pickling jars, then we can put slices in each jar. Similarly, if we have four party-sized bags of candy to share equally among ten people, then each person gets of a bag.    Note that any integer is a fraction because . For example, .    In the fraction , the integer on the top of the fraction is the numerator and the integer on the bottom of the fraction is the denominator . For example, in the fraction the numerator is four and the denominator is ten.    For integers , , , and , the fractions and are equal (or equivalent ), which we write as , if . For example, and so . We can cross-multiply to confirm that .       There is a connection between divides and fractions.   Fractions and divisibility  Let and be integers with . Then exactly when is an integer. Although we have this connection between fractions and divisibility, it is customary to avoid referencing fractions when working with divides.   Every fraction has (infinitely) many different names. We often want to write a fraction in its simplest form. Other times, it is useful to write a fraction with a denominator such that the fraction is not in its simplest form for example, to add, subtract, or compare fractions. The next theorem verifies both operations.   Equal fractions   For integer and nonzero integers and ,   If we multiply the numerator and denominator of a fraction by a nonzero integer, the resulting fraction is equal to the original fraction, namely .    This equation holds in both directions. Specifically, we can cancel a common nonzero factor (or reduce the fraction) using the equation .       Let , , and be integers. By the commutative and associative properties, and so, by  , , as in . Note that is the same equation read right-to-left instead.    Let's see this theorem in action.   Equal fractions       Write as a fraction with denominator 15.  Since , we can use to multiply top and bottom of the fraction by three to get       Which fraction is larger: or ?  We can write each fraction with common denominator  . In part , we found . Similarly, we can use to multiply top and bottom of the fraction by five to get: . We can imagine as the amount of pizza each person gets if we have six pizzas shared by 15 people. In that vein, we can imagine as the amount of pizza each person gets if we have five pizzas shared by 15 people. Each person will get more pizza if we have six pizzas to share versus five pizzas to share, and so . It follows that .      Reduce the fraction .  Notice that and . By we have . Notice that 6 and 25 do not have any common divisors (other than the integers 1) and so we cannot further reduce the fraction .         The concept of a fraction that cannot be further reduced has a formal name.   Lowest terms       The integers and are coprime (or relatively prime ) if the only common positive divisor of and is the integer 1. For example, 6 has positive divisors 1, 2, 3, and 6 whereas 25 has positive divisors 1, 5, and 25 so their only common positive divisor is 1. Therefore, 6 and 25 are coprime.    The fraction is written in lowest terms if and are coprime. For example, since 6 and 25 are coprime, it follows that the fraction is written in lowest tersm.       We revisit the concept of coprime in . Let's practice reducing fractions.   Equivalent fractions      Reduce to lowest terms.    Reduce to lowest terms. Hint: Use the definition of factorial and cancel before multiplying.    Reduce to lowest terms.    Write the product as a fraction whose numerator and denominator are each a single factorial.    Reduce to lowest terms. Hint: Use the definition of exponential notation and cancel before multiplying.    Reduce to lowest terms.    Write as a single power of 10: .    Write as a single power of 10: . Hint: .      We look at a few examples similar to .   Equivalent fractions       Reduce to lowest terms.  Let's use the definition of factorial and cancel before multiplying to get . Note that we cancel the common factor of .      How many strings of three uppercase letters are there if we cannot repeat letters?  Think of filling in three spaces with uppercase letters. The first space can be any of the 26 uppercase letters. Because repeats are not allowed, the second space can be any of the 25 remaining uppercase letters, and the third space can be any of the 24 remaining uppercase letters. Since steps multiply , the answer is .      Write your answer to as a fraction whose numerator and denominator are each a single factorial.  Notice that looks like the beginning of 26! We can multiply the numerator and denominator by to get       Reduce to lowest terms.  Let's use the definition of exponential notation and cancel before multiplying to get .  Note that we canceled 20 factors of 10 to get remaining factors of 10.      Write as a single power of 2: .  Let's use the definition of exponential notation and cancel before multiplying to get   Note that we canceled one of the factors of two to get remaining factors of two.           Exercises   Exercises for Opening and Closing Lockers   Practice   Without using any conjectures from , explain how to find the final state of Locker 24. Be detailed.    Hint: It is closed.     Understand       In the Lockers puzzle , Locker 001 is only touched once. Of all the lockers, which are only touched twice? Make a conjecture that depends on only the locker number.    Which lockers are touched exactly three times? Make a conjecture that depends on only the locker number.         Hint: Examples include lockers 2, 3, 5, 7, 11.    Hint: They are open.       Explore       Of the first 50 lockers, which are touched by the most students in the Lockers Puzzle ? Do not use technology or other resources to find the answer. Show work.    Of the first 1,000 lockers, which are touched by the most students in the Lockers puzzle ? Use technology or other resources to find the answer. Explain what you looked up and cite your source(s).         Exercises for Even and Odd Integers  When an exercise asks you to use the definition of even or odd, you should use only that definition and algebra. Do not use other facts you might know about even or odd integers.   Practice       Use the definition of even to show that 2026 is even.    Use the definition of odd to show that 2025 is odd.         Hint: Write and fill in the parentheses.    Hint: Write and fill in the parentheses.       Practice       Give an example of two integers whose sum is even and whose product is odd.    Give an example of two integers whose sum is odd and whose product is even.    Is it possible to have two integers whose sum and product are both even? If so, give an example.    Is it possible to have two integers whose sum and product are both odd? If so, give an example.         Hint: Both integers must be odd.    Hint: One integer must be odd and the other integer must be even.    Hint: Yes, both integers must be even.    No       Understand       For any integer , use the definition of even to show that is even.    For any integer , use the definition of odd to show that is odd.    Give examples of integers to show that can be even or odd.         Hint: Write and fill in the parentheses.    Hint: Write and fill in the parentheses.If you need help figuring out what goes into the parentheses, solve for .    Hint: One example should use an even value of and the other example should use an odd value of .       Recap   Do you know    How even and odd are defined?    How to use the definition to show that an integer is even or odd?        Explore       Consider an even integer . Use the definitions of even and odd to show that the next consecutive integer, , is odd.    Consider an odd integer . Use the definitions of even and odd to show that the next consecutive integer, , is even.         Hint: Write and then evaluate .    Hint: Write , simplify , and then factor out two.        Exercises for Divisibility  When an exercise asks you to use the definition of divides, you should use only that definition and algebra. Do not use other facts you might know about divisibility.   Practice    Rewrite each statement using the divides symbol or .   15 divides 105    56 is a multiple of seven    56 is not a multiple of 11    44 is a divisor of 44    one is a divisor of 44    50 is even    51 is odd              Hint: If , then the integer is smaller than (or equal to) the integer .    Hint: The answer uses .         Hint: If , then the integer is smaller than (or equal to) the integer .    Hint: The answer involves the integer two.    Hint: The answer involves the integer two.       Practice   List all the positive divisors of each integer. Do not use technology or other resources.   seven    10    80    81        Understand   A teacher has a class of 20 students, and he wants to arrange them into equally sized groups.   Use the definition of divides to show that .    Could the teacher divide the students into equally sized groups of size four? How many groups would there be? Explain.    Use the definition of divides to explain why groups of size three would not work.    What size groups could the teacher use? Explain.    How would your answer to change if two students are absent?         Hint: Write and fill in the parentheses.    Hint: Write and fill in the parentheses.       Understand       Use the definition of divides to show that four is a divisor of for any integer .    Use the definition of divides to show that is a multiple of 7, for any integer .        Understand       Use the definition of divides to show that for any integer .    Is it possible to have positive integers and with and ? Explain.        Understand   Factorials were defined in . In this problem, do not use technology or other resources.   Show that     Show that     Show that          Hint: Write and fill in the parentheses with the product of the other factors of     Hint: Write and fill in the parentheses with the product of the other factors of     Hint: Use . Write and fill in the parentheses with the product of the other factors of        Recap   Do you know    What and mean?    How to show that ?    How to write statements about divisors or multiples using ?    How to find divisors or multiples of an integer?        Explore       Consider an integer such that . Use the definition of divides to show that .    Give an example of an integer such that but .         Hint: Write , expand and simplify , and then factor out four.    Hint: The integer must be even.        Exercises for Algebra: Equivalent Fractions   Practice       Write as a fraction with denominator 30.    Which fraction is larger: or ? Use a common denominator to compare the fractions.    List the positive divisors of nine and ten to show that 9 and 10 are coprime.    Reduce the fraction to lowest terms.              Hint:     Hint: The positive divisors of nine are one, three, and nine. What are the positive divisors of 10?    Hint: Use  with .       Understand       Reduce to lowest terms. Hint: Use the definition of factorial and cancel before multiplying.    Write the product as a fraction whose numerator and denominator are each a single factorial.    Reduce to lowest terms.    Conjecture how to write in lowest terms.    Where have you seen the answer to before?                   45 (or )    Hint:     Handshakes puzzle (or )       Recap   Do you know    How a fraction is related to integer division?    What the numerator and denominator of a fraction are?    How to write a fraction over a new denominator?    How to reduce a fraction to lowest terms?    What it means to say that two integers are coprime?        Explore   For this exercise, all exponents should be nonnegative. (If you have seen negative exponents, the answers should still make sense, just use nonnegative exponents.)   Reduce to lowest terms. Hint: Use the definition of exponential notation and cancel before multiplying.    Reduce to lowest terms.    Conjecture how to write in lowest terms when and when . What happens when ?          (or          Hint: When , we have .        "
},
{
  "id": "act_lockers",
  "level": "2",
  "url": "sec_even_odd_divides.html#act_lockers",
  "type": "Activity",
  "number": "1.1.A",
  "title": "Lockers Puzzle.",
  "body": " Lockers Puzzle  At Perpetual High School, a never-ending line of students marches down a never-ending hallway of lockers. The first student opens each locker. The second student closes every other locker (002, 004, 006, etc.) The third student changes the state of every third locker, which means closing 003, opening 006, etc. And so on, with the student changing the state of every locker.   The first few lockers at Perpetual High School.        Calculate the final state of each of the first ten lockers. Show some work.    How many students touch locker 100? Show work.    What is the final state of locker 100? Explain briefly.    Make a conjecture about which lockers are finally left open and which are finally left closed.    There are two very reasonable answers to . One conjecture, Conjecture A, depends on the number of students who touch the locker. The other conjecture, Conjecture B, depends only on the locker number. Which conjecture did you make in : A or B? What is the other conjecture?    Use whatever conjecture you prefer to determine whether locker 1,000,000 is open or closed. Explain your reasoning.    "
},
{
  "id": "exam_open_lockers",
  "level": "2",
  "url": "sec_even_odd_divides.html#exam_open_lockers",
  "type": "Example",
  "number": "1.1.2",
  "title": "Open lockers.",
  "body": " Open lockers       What is the final state of locker 99? Explain.  First note that the last student to touch locker 99 is the student. So to determine the final state of locker 99 we only need to know which students from 1-99 touched it. We can factor 99 in several ways: , , and . That is, the only students from 1-99 to touch locker 99 are students one, three, nine, 11, 33, and 99. Student one opens locker 99, student three closes it, student nine opens it, student 11 closes it, student 33 opens it, and student 99 closes it. The final state of locker 99 is that it is closed.      Conjecture how the final state of a locker depends on the number of students who touch the locker.  When the number of students who touch the locker is even, as was the case for locker 99, the final state of the locker is closed. When the number of students who touch the locker is odd, as was the case for locker 100, the final state of the locker is open. This conjecture is Conjecture A.      Conjecture which lockers have an odd number of students that touch that locker.  Notice that students who touch the locker tend to come in pairs. For example, locker 99 is touched by students one and 99, students three and 33, and students nine and 11. As another example, locker 100 is touched by students one and 100, students two and 50, students four and 25, and students five and 20. But there is one additional student who touches locker 100, student 10, which makes the total number of students touching locker 100 odd. Why is student 10 not in a pair? Because or, in other words, . We conjecture that lockers touched by an odd number of students have locker numbers equal to the square of an integer, known as a perfect square . This conjecture is Conjecture B.        "
},
{
  "id": "sub_even_odd-2",
  "level": "2",
  "url": "sec_even_odd_divides.html#sub_even_odd-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "even "
},
{
  "id": "defn_even_odd",
  "level": "2",
  "url": "sec_even_odd_divides.html#defn_even_odd",
  "type": "Definition",
  "number": "1.1.3",
  "title": "Even and odd.",
  "body": " Even and odd       The integer is even if for some integer . For example, 18 is even because . If we wanted to be formal, we would say where .    The integer is odd if for some integer . For example, 19 is odd because . If we wanted to be formal, we would say where .      "
},
{
  "id": "exam_even_odd_general",
  "level": "2",
  "url": "sec_even_odd_divides.html#exam_even_odd_general",
  "type": "Example",
  "number": "1.1.4",
  "title": "Even and odd, in general.",
  "body": " Even and odd, in general   You probably know many facts about even and odd integers. In this example, we use only the definitions.   Use the definition of even to show that is even for any integer .  We want to write for some integer . We can solve to find . We divide by two to get , which is an integer. Officially, we need to use that value of to write , so is even.  Notice that we could have just factored out the two to write without any mention of .      Use the definition of odd to show that is odd for any integer .  We want to write for some integer . We can solve to find . First, we subtract and factor to get . Next, we divide by two to get , which is an integer. Officially, we need to use that value of to write , so is odd.  Notice that we could have used algebra to write without any mention of .        "
},
{
  "id": "act_even_odd",
  "level": "2",
  "url": "sec_even_odd_divides.html#act_even_odd",
  "type": "Activity",
  "number": "1.1.B",
  "title": "Even and odd.",
  "body": " Even and odd      Use the definition of even to show that 34 is even.    Use the definition of odd to show that 37 is odd.    Is zero even, odd, both, or neither? Justify your answer.    Give examples of integers to show that can be even or odd.    Use the definition of odd to show that, for any integer , the integer is always odd. Hint: Once you find a useful value of , write in the form .     "
},
{
  "id": "exam_0is_even",
  "level": "2",
  "url": "sec_even_odd_divides.html#exam_0is_even",
  "type": "Example",
  "number": "1.1.5",
  "title": "Zero is even.",
  "body": " Zero is even       Use the definition to show that zero is even.  We can write . That is when . Since is an integer, it follows that zero is even.      Use the definition to show that zero is not odd.  Suppose that we could write . We can subtract one to get and then divide by two to get . Since is the only possible value of , and is not an integer, it follows that zero is not odd.        "
},
{
  "id": "defn_divides",
  "level": "2",
  "url": "sec_even_odd_divides.html#defn_divides",
  "type": "Definition",
  "number": "1.1.6",
  "title": "Divides.",
  "body": " Divides       The nonzero integer  divides integer , denoted , if for some integer . For example, 3 divides 15, denoted because . Note also that because and because .    If , then is a divisor (or factor ) of . For example, the (positive) divisors of 15 are: 1, 3, 5, and 15 because and . (It is harder to know that we found all the positive divisors.) The complete list of 15 divisors is 1, 3, 5 and 15.    If , then is a multiple of . For example, 10, -35, and 65 are multiples of 5.    If does not divide , we write . For example, .      "
},
{
  "id": "exam_divides_general",
  "level": "2",
  "url": "sec_even_odd_divides.html#exam_divides_general",
  "type": "Example",
  "number": "1.1.7",
  "title": "Divides, in general.",
  "body": " Divides, in general   You might know many facts about divisibility. In this example, we use only the definition.   Show that 65 is a multiple of 5.  Note that and so . Thus, 65 is a multiple of 5.      Rewrite the statement from using the word divides and divides notation.  We say that 5 divides 65, denoted .      Use the definition of divides to show that .  Factor to write , so . If we wanted to be formal, we could write where .        "
},
{
  "id": "act_divides",
  "level": "2",
  "url": "sec_even_odd_divides.html#act_divides",
  "type": "Activity",
  "number": "1.1.C",
  "title": "Divides.",
  "body": " Divides      List the divisors of 12. Note: do not forget the negative divisors.    Give an example of three different integers that are multiples of 12.    Which is true: or ? Justify your answer.    Use the definition of divides to show that .    Use the definition of divides to show that for all integers .    Is true for all nonzero integers ? Justify your answer.    Is true for all nonzero integers ? Again, justify your answer.     "
},
{
  "id": "exam_cannot_divide_by0",
  "level": "2",
  "url": "sec_even_odd_divides.html#exam_cannot_divide_by0",
  "type": "Example",
  "number": "1.1.8",
  "title": "You cannot divide by zero.",
  "body": " You cannot divide by zero       Can we divide by zero? That is, is zero a divisor of any integer? Explain.  We are asking if for any integer . In we did not allow the divisor to be zero, so the answer is no. The reason we excluded zero is because if for some integer , then the only possibility is . Therefore, it is impossible for zero to divide any nonzero integer. We also do not allow zero to divide itself either. The answer is no.      Is zero a multiple of any integer?  We are asking if for any integer . That means we are looking for an integer such that . Since and is an integer, it follows that for all nonzero integers . The answer is yes.        "
},
{
  "id": "defn_fraction_rational",
  "level": "2",
  "url": "sec_even_odd_divides.html#defn_fraction_rational",
  "type": "Definition",
  "number": "1.1.9",
  "title": "Fraction (rational number).",
  "body": " Fraction (rational number)       For integer and nonzero integer , the fraction (or rational number ) is the number we get by dividing by , meaning . We can think of the fraction as representing an equal share of objects among places. For example, if we have 40 cucumber slices and five pickling jars, then we can put slices in each jar. Similarly, if we have four party-sized bags of candy to share equally among ten people, then each person gets of a bag.    Note that any integer is a fraction because . For example, .    In the fraction , the integer on the top of the fraction is the numerator and the integer on the bottom of the fraction is the denominator . For example, in the fraction the numerator is four and the denominator is ten.    For integers , , , and , the fractions and are equal (or equivalent ), which we write as , if . For example, and so . We can cross-multiply to confirm that .      "
},
{
  "id": "rem_fractions_divides",
  "level": "2",
  "url": "sec_even_odd_divides.html#rem_fractions_divides",
  "type": "Remark",
  "number": "1.1.10",
  "title": "Fractions and divisibility.",
  "body": " Fractions and divisibility  Let and be integers with . Then exactly when is an integer. Although we have this connection between fractions and divisibility, it is customary to avoid referencing fractions when working with divides.  "
},
{
  "id": "thm_equal_fractions",
  "level": "2",
  "url": "sec_even_odd_divides.html#thm_equal_fractions",
  "type": "Theorem",
  "number": "1.1.11",
  "title": "Equal fractions.",
  "body": " Equal fractions   For integer and nonzero integers and ,   If we multiply the numerator and denominator of a fraction by a nonzero integer, the resulting fraction is equal to the original fraction, namely .    This equation holds in both directions. Specifically, we can cancel a common nonzero factor (or reduce the fraction) using the equation .       Let , , and be integers. By the commutative and associative properties, and so, by  , , as in . Note that is the same equation read right-to-left instead.   "
},
{
  "id": "exam_equal_fractions",
  "level": "2",
  "url": "sec_even_odd_divides.html#exam_equal_fractions",
  "type": "Example",
  "number": "1.1.12",
  "title": "Equal fractions.",
  "body": " Equal fractions       Write as a fraction with denominator 15.  Since , we can use to multiply top and bottom of the fraction by three to get       Which fraction is larger: or ?  We can write each fraction with common denominator  . In part , we found . Similarly, we can use to multiply top and bottom of the fraction by five to get: . We can imagine as the amount of pizza each person gets if we have six pizzas shared by 15 people. In that vein, we can imagine as the amount of pizza each person gets if we have five pizzas shared by 15 people. Each person will get more pizza if we have six pizzas to share versus five pizzas to share, and so . It follows that .      Reduce the fraction .  Notice that and . By we have . Notice that 6 and 25 do not have any common divisors (other than the integers 1) and so we cannot further reduce the fraction .        "
},
{
  "id": "defn_lowest_terms",
  "level": "2",
  "url": "sec_even_odd_divides.html#defn_lowest_terms",
  "type": "Definition",
  "number": "1.1.13",
  "title": "Lowest terms.",
  "body": " Lowest terms       The integers and are coprime (or relatively prime ) if the only common positive divisor of and is the integer 1. For example, 6 has positive divisors 1, 2, 3, and 6 whereas 25 has positive divisors 1, 5, and 25 so their only common positive divisor is 1. Therefore, 6 and 25 are coprime.    The fraction is written in lowest terms if and are coprime. For example, since 6 and 25 are coprime, it follows that the fraction is written in lowest tersm.      "
},
{
  "id": "act_equiv_fractions",
  "level": "2",
  "url": "sec_even_odd_divides.html#act_equiv_fractions",
  "type": "Activity",
  "number": "1.1.D",
  "title": "Equivalent fractions.",
  "body": " Equivalent fractions      Reduce to lowest terms.    Reduce to lowest terms. Hint: Use the definition of factorial and cancel before multiplying.    Reduce to lowest terms.    Write the product as a fraction whose numerator and denominator are each a single factorial.    Reduce to lowest terms. Hint: Use the definition of exponential notation and cancel before multiplying.    Reduce to lowest terms.    Write as a single power of 10: .    Write as a single power of 10: . Hint: .     "
},
{
  "id": "exam_equiv_fractions",
  "level": "2",
  "url": "sec_even_odd_divides.html#exam_equiv_fractions",
  "type": "Example",
  "number": "1.1.14",
  "title": "Equivalent fractions.",
  "body": " Equivalent fractions       Reduce to lowest terms.  Let's use the definition of factorial and cancel before multiplying to get . Note that we cancel the common factor of .      How many strings of three uppercase letters are there if we cannot repeat letters?  Think of filling in three spaces with uppercase letters. The first space can be any of the 26 uppercase letters. Because repeats are not allowed, the second space can be any of the 25 remaining uppercase letters, and the third space can be any of the 24 remaining uppercase letters. Since steps multiply , the answer is .      Write your answer to as a fraction whose numerator and denominator are each a single factorial.  Notice that looks like the beginning of 26! We can multiply the numerator and denominator by to get       Reduce to lowest terms.  Let's use the definition of exponential notation and cancel before multiplying to get .  Note that we canceled 20 factors of 10 to get remaining factors of 10.      Write as a single power of 2: .  Let's use the definition of exponential notation and cancel before multiplying to get   Note that we canceled one of the factors of two to get remaining factors of two.        "
},
{
  "id": "exer_locker24",
  "level": "2",
  "url": "sec_even_odd_divides.html#exer_locker24",
  "type": "",
  "number": "1",
  "title": "Practice.",
  "body": " Practice   Without using any conjectures from , explain how to find the final state of Locker 24. Be detailed.    Hint: It is closed.   "
},
{
  "id": "exer_lockers_2or3",
  "level": "2",
  "url": "sec_even_odd_divides.html#exer_lockers_2or3",
  "type": "",
  "number": "2",
  "title": "Understand.",
  "body": " Understand       In the Lockers puzzle , Locker 001 is only touched once. Of all the lockers, which are only touched twice? Make a conjecture that depends on only the locker number.    Which lockers are touched exactly three times? Make a conjecture that depends on only the locker number.         Hint: Examples include lockers 2, 3, 5, 7, 11.    Hint: They are open.     "
},
{
  "id": "exer_lockers_touchedmost",
  "level": "2",
  "url": "sec_even_odd_divides.html#exer_lockers_touchedmost",
  "type": "",
  "number": "3",
  "title": "Explore.",
  "body": " Explore       Of the first 50 lockers, which are touched by the most students in the Lockers Puzzle ? Do not use technology or other resources to find the answer. Show work.    Of the first 1,000 lockers, which are touched by the most students in the Lockers puzzle ? Use technology or other resources to find the answer. Explain what you looked up and cite your source(s).      "
},
{
  "id": "exer_2026even_2025odd",
  "level": "2",
  "url": "sec_even_odd_divides.html#exer_2026even_2025odd",
  "type": "",
  "number": "4",
  "title": "Practice.",
  "body": " Practice       Use the definition of even to show that 2026 is even.    Use the definition of odd to show that 2025 is odd.         Hint: Write and fill in the parentheses.    Hint: Write and fill in the parentheses.     "
},
{
  "id": "exer_examples_even_odd_sum_product",
  "level": "2",
  "url": "sec_even_odd_divides.html#exer_examples_even_odd_sum_product",
  "type": "",
  "number": "5",
  "title": "Practice.",
  "body": " Practice       Give an example of two integers whose sum is even and whose product is odd.    Give an example of two integers whose sum is odd and whose product is even.    Is it possible to have two integers whose sum and product are both even? If so, give an example.    Is it possible to have two integers whose sum and product are both odd? If so, give an example.         Hint: Both integers must be odd.    Hint: One integer must be odd and the other integer must be even.    Hint: Yes, both integers must be even.    No     "
},
{
  "id": "exer_linears_even_odd",
  "level": "2",
  "url": "sec_even_odd_divides.html#exer_linears_even_odd",
  "type": "",
  "number": "6",
  "title": "Understand.",
  "body": " Understand       For any integer , use the definition of even to show that is even.    For any integer , use the definition of odd to show that is odd.    Give examples of integers to show that can be even or odd.         Hint: Write and fill in the parentheses.    Hint: Write and fill in the parentheses.If you need help figuring out what goes into the parentheses, solve for .    Hint: One example should use an even value of and the other example should use an odd value of .     "
},
{
  "id": "exer_dyk_even_odd",
  "level": "2",
  "url": "sec_even_odd_divides.html#exer_dyk_even_odd",
  "type": "",
  "number": "7",
  "title": "Recap.",
  "body": " Recap   Do you know    How even and odd are defined?    How to use the definition to show that an integer is even or odd?      "
},
{
  "id": "exer_prove_consecutive_even_odd",
  "level": "2",
  "url": "sec_even_odd_divides.html#exer_prove_consecutive_even_odd",
  "type": "",
  "number": "8",
  "title": "Explore.",
  "body": " Explore       Consider an even integer . Use the definitions of even and odd to show that the next consecutive integer, , is odd.    Consider an odd integer . Use the definitions of even and odd to show that the next consecutive integer, , is even.         Hint: Write and then evaluate .    Hint: Write , simplify , and then factor out two.     "
},
{
  "id": "exer_divides_notation",
  "level": "2",
  "url": "sec_even_odd_divides.html#exer_divides_notation",
  "type": "",
  "number": "9",
  "title": "Practice.",
  "body": " Practice    Rewrite each statement using the divides symbol or .   15 divides 105    56 is a multiple of seven    56 is not a multiple of 11    44 is a divisor of 44    one is a divisor of 44    50 is even    51 is odd              Hint: If , then the integer is smaller than (or equal to) the integer .    Hint: The answer uses .         Hint: If , then the integer is smaller than (or equal to) the integer .    Hint: The answer involves the integer two.    Hint: The answer involves the integer two.     "
},
{
  "id": "exer_list_divisors",
  "level": "2",
  "url": "sec_even_odd_divides.html#exer_list_divisors",
  "type": "",
  "number": "10",
  "title": "Practice.",
  "body": " Practice   List all the positive divisors of each integer. Do not use technology or other resources.   seven    10    80    81      "
},
{
  "id": "exer_prove_divides",
  "level": "2",
  "url": "sec_even_odd_divides.html#exer_prove_divides",
  "type": "",
  "number": "11",
  "title": "Understand.",
  "body": " Understand   A teacher has a class of 20 students, and he wants to arrange them into equally sized groups.   Use the definition of divides to show that .    Could the teacher divide the students into equally sized groups of size four? How many groups would there be? Explain.    Use the definition of divides to explain why groups of size three would not work.    What size groups could the teacher use? Explain.    How would your answer to change if two students are absent?         Hint: Write and fill in the parentheses.    Hint: Write and fill in the parentheses.     "
},
{
  "id": "exer_prove_divides_general",
  "level": "2",
  "url": "sec_even_odd_divides.html#exer_prove_divides_general",
  "type": "",
  "number": "12",
  "title": "Understand.",
  "body": " Understand       Use the definition of divides to show that four is a divisor of for any integer .    Use the definition of divides to show that is a multiple of 7, for any integer .      "
},
{
  "id": "exer_dividesn",
  "level": "2",
  "url": "sec_even_odd_divides.html#exer_dividesn",
  "type": "",
  "number": "13",
  "title": "Understand.",
  "body": " Understand       Use the definition of divides to show that for any integer .    Is it possible to have positive integers and with and ? Explain.      "
},
{
  "id": "exer_divisors_of_factorials",
  "level": "2",
  "url": "sec_even_odd_divides.html#exer_divisors_of_factorials",
  "type": "",
  "number": "14",
  "title": "Understand.",
  "body": " Understand   Factorials were defined in . In this problem, do not use technology or other resources.   Show that     Show that     Show that          Hint: Write and fill in the parentheses with the product of the other factors of     Hint: Write and fill in the parentheses with the product of the other factors of     Hint: Use . Write and fill in the parentheses with the product of the other factors of      "
},
{
  "id": "exer_dyk_divides",
  "level": "2",
  "url": "sec_even_odd_divides.html#exer_dyk_divides",
  "type": "",
  "number": "15",
  "title": "Recap.",
  "body": " Recap   Do you know    What and mean?    How to show that ?    How to write statements about divisors or multiples using ?    How to find divisors or multiples of an integer?      "
},
{
  "id": "exer_divides_square",
  "level": "2",
  "url": "sec_even_odd_divides.html#exer_divides_square",
  "type": "",
  "number": "16",
  "title": "Explore.",
  "body": " Explore       Consider an integer such that . Use the definition of divides to show that .    Give an example of an integer such that but .         Hint: Write , expand and simplify , and then factor out four.    Hint: The integer must be even.     "
},
{
  "id": "exer_equal_fractions",
  "level": "2",
  "url": "sec_even_odd_divides.html#exer_equal_fractions",
  "type": "",
  "number": "17",
  "title": "Practice.",
  "body": " Practice       Write as a fraction with denominator 30.    Which fraction is larger: or ? Use a common denominator to compare the fractions.    List the positive divisors of nine and ten to show that 9 and 10 are coprime.    Reduce the fraction to lowest terms.              Hint:     Hint: The positive divisors of nine are one, three, and nine. What are the positive divisors of 10?    Hint: Use  with .     "
},
{
  "id": "exer_reduce_fraction_factorials",
  "level": "2",
  "url": "sec_even_odd_divides.html#exer_reduce_fraction_factorials",
  "type": "",
  "number": "18",
  "title": "Understand.",
  "body": " Understand       Reduce to lowest terms. Hint: Use the definition of factorial and cancel before multiplying.    Write the product as a fraction whose numerator and denominator are each a single factorial.    Reduce to lowest terms.    Conjecture how to write in lowest terms.    Where have you seen the answer to before?                   45 (or )    Hint:     Handshakes puzzle (or )     "
},
{
  "id": "exer_dyk_fractions",
  "level": "2",
  "url": "sec_even_odd_divides.html#exer_dyk_fractions",
  "type": "",
  "number": "19",
  "title": "Recap.",
  "body": " Recap   Do you know    How a fraction is related to integer division?    What the numerator and denominator of a fraction are?    How to write a fraction over a new denominator?    How to reduce a fraction to lowest terms?    What it means to say that two integers are coprime?      "
},
{
  "id": "exer_reduce_fractions_powers",
  "level": "2",
  "url": "sec_even_odd_divides.html#exer_reduce_fractions_powers",
  "type": "",
  "number": "20",
  "title": "Explore.",
  "body": " Explore   For this exercise, all exponents should be nonnegative. (If you have seen negative exponents, the answers should still make sense, just use nonnegative exponents.)   Reduce to lowest terms. Hint: Use the definition of exponential notation and cancel before multiplying.    Reduce to lowest terms.    Conjecture how to write in lowest terms when and when . What happens when ?          (or          Hint: When , we have .     "
},
{
  "id": "sec_div_alg",
  "level": "1",
  "url": "sec_div_alg.html",
  "type": "Section",
  "number": "1.2",
  "title": "The Division Algorithm",
  "body": " The Division Algorithm   In this section, we continue our discussion of integer division. We introduce vocabulary to describe the result of dividing one integer by another when the answer is not an integer. Next, we revisit polynomials and use polynomials to prove facts about even, odd, and divisors using cases.    The Division Algorithm, , and  As we saw in , sometimes when we divide one integer by another integer we get an integer answer, such as .  We said that 5 divides 40 and wrote . Other times, we get a fraction that is not an integer, such as .  We said that 4 does not divide 23 and wrote . How can we think of in terms of integers?   Cookies and Children   Use the idea of giving 23 cookies to four children to describe in terms of (only) integers.    Imagine that I have 23 cookies and four children. I want to give each child as many cookies as I can, but, to be fair, each child should have the same number of cookies as the other children. What should I do? I can give each child five cookies. That accounts for of the cookies, but I cannot evenly distribute the remaining cookies without breaking them, which I do not want to do. I guess those 3 cookies are for me to eat. We might say is 5 cookies\/child with 3 cookies remaining for me. We can write the equation .    We formalize the idea from with the following theorem.   The Division Algorithm   Given integers and with , when we divide by we get for some integers and such that . Moreover, and are unique.    Let and be integers with . We prove existence in the case where .  Since is nonnegative and , we can imagine giving cookies to children. First, I check to see if I have enough cookies for each child to get at least one, and if so, then I hand one cookie to each child. Next, I repeat that step with the remaining cookies as many times as possible. In the end, let's say that each child gets cookies. In total, I gave cookies to the children, so there are cookies leftover for me. Adding to each side of the equation we get . Because I checked there were enough cookies for each child to get one, I never run out of cookies, and so . On the other hand, any time I still have enough cookies to give each child another cookie, I would do that. Therefore, the final number of remaining cookies must be strictly less than the number of children and so .    The integers and in the Division Algorithm have special names.   Quotient, Remainder, , and   Let and be integers with and let and be integers such that and .   The integer is the quotient of . When , it is the number of cookies per child in the story. For example, the quotient when is five.    We write . For example,   .    The integer is the remainder of . When , it is the number of cookies for me. For example, the remainder when is three.    We write . For example, . In many computer programming languages, is denoted using the percent symbol (%). For example, we would write .    We say is  with remainder  . For example, is five with remainder three.    In long division the quotient is typically written at the top of the bar and the remainder is the final number at the bottom, as in .  Long division calculation for . \\intlongdivision{23}{4}        Let's see these definitions in action.   Quotient, Remainder, , and   On this problem we do not use computational technology (except to check).   Find the quotient and the remainder when . Use your answer to calculate   and   .  Starting with 100 cookies, we recognize that and so we can hand each child 11 cookies, leaving us with cookie.  If we were using computational technology, we could calculate .. and again see that 11 is the largest number of cookies we can give each child, as there are not enough cookies to give each child 12 cookies.  If we did a long division instead, we would get the same answer, as shown in .   Long division calculation for . \\intlongdivision{100}{9}  Notice that in the long division we calculate the remainder in two steps. First, we give each child 10 cookies for a total of cookies (although 0 is not written), so the remainder is . Next, we give each child 1 cookie for a total of cookies, so the final remainder is .  Using any way of thinking of this division, we get , so the quotient is 11 and the remainder is 1. Thus,   and   .      Find the quotient and the remainder when . Use your answer to calculate   and   .  Write so the quotient is seven. To find the remainder, think of the equation as , so the remainder is zero. Thus,   and         Use the notation (or %) to describe whether an integer is even or odd.  An integer is even if for some integer . When we divide, we get and the remainder is zero. Thus, is even exactly when   or, equivalently, when .  An integer is odd if for some integer . When we divide, we get , and the remainder is one. Thus, is even exactly when   or, equivalently, when .         It is your turn to practice.   Practice with Div and Mod  In this activity, do all calculations by hand.   Find the quotient and the remainder when . State your answer using and .    Find the quotient and the remainder when . State your answer using and .    Find the quotient and the remainder when . State your answer using and .    Calculate  10, 115 10, and 123,456,789 10. Hint: Subtract multiples of 10.    What do you notice in ? State your answer as a conjecture.    For a nonnegative integer , what are the possible values of   ? State your answer as a conjecture.    For a nonnegative integer and an integer , what are the possible values of   ? State your answer as a conjecture.        Algebra: Polynomials  The Division Algorithm gives us expressions such as for an odd integer or for an integer where that integer . We might square an even integer to get an expression of the form . These expressions are polynomials. In this section, we take a look at polynomials, including how to simplify products and powers. We start with the definition.   Polynomials       For an integer , a polynomial in is a sum of constant multiples of powers of . For example, is a polynomial in . To see why, we can rewrite this polynomial to show the powers of . .    In a polynomial, the integer in front of a power of is the coefficient of that power of . For example, in the polynomial , the coefficient of is 2, the coefficient of is 5, the coefficient of is , and the coefficient of is 0.    In a polynomial, the coefficient of is the constant term . For example, the constant term of is 7.    We add polynomials by collecting like terms . For example     To multiply or expand a product of polynomials, we use the distributive rule. See, for example, .       We use the distributive rule to expand polynomials.   Multiplying polynomials       Expand .  By the distributive rule, .      Expand .  By the distributive rule (repeatedly),     =      =      =      =     The words under each product indicate the original location of the two integers that are multiplied. This method is First, Outside, Inside, Last or FOIL .         There is a nice set of visualizations of multiplying polynomials in as areas. This lesson is from the College Algebra Foundations course by Lumen Learning . Try your hand at multiplying polynomials with discrete variables.   Multiplying polynomials  Expand and simplify each expression.                             for any integer         Proof Format: Proof by Cases  We can use the Division Algorithm to prove that every integer is even or odd, but never both.   Every integer is even or odd   Use the Division Algorithm to prove that every integer is even or odd.     Proof Let be an integer. By the Division Algorithm with , there exist unique integers and such that and . Note that or . Since is unique, we are in exactly one of these two cases. Case 1: Assume . Then is even, by the definition of even. Case 2: Assume . Then is odd, by the definition of odd. In either case is even or is odd.    As in , the Division Algorithm can be used to break a proof into cases, similar to how we break counting arguments into cases in . Here is the proof format.    We can prove P using Proof by Cases by adapting the following proof format.   (Explain why there are cases.) We consider cases.  Case 1: Assume (Explain why is true in this case.)  Case 2: Assume (Explain why is true in this case.)     Case : Assume (Explain why is true in this case.)  In (either case\/all cases) we have .     In a proof by cases, it is important that the cases cover all of the possibilities. Sometimes we need to explain that up front. The phrase We consider cases that alerts the reader that we are using a proof by cases. The assumption for each case Assume that . is stated as a complete sentence (with a period at the end) before any additional argument is presented. After we finish the cases, we summarize using the phrase in either case . If there are more than two cases, we use in all cases .   Proof by Cases: is even      Copy the following example of a proof by cases. Prove that is even for any integer .  Let be an integer. By , is even or is odd. We consider two cases.  Case 1: Assume is even. By the definition of even, for some integer . Thus , so is even.  Case 2: Assume is odd. By the definition of odd, for some integer . Thus , so is even.  In either case, is even.      Edit the proof in to prove that is even for any integer .      We give another example of proof by cases.   Using proof by cases to prove multiple of three   Use a proof by cases to prove for any integer .    Let be an integer. By the Division Algorithm , we can write for some integers and with . The only possible values of are , , and . We consider three cases.  Case 1: Assume . In this case, and so where . Thus, .  Case 2: Assume . In this case, and so where . Thus, .  Case 3: Assume . In this case, and so where . Thus, .  In all cases, .      Exercises   Exercises for The Division Algorithm, , and   Practice   Do not use technology or other resources.   Find the quotient and the remainder when . State your answer using and .    Calculate 20 7 and 20 7.    Explain your answers to (b) using the context of children and cookies as in .          and     2, 6    Hint: Imagine 7 children.       Practice       Evaluate each of the following integers: 3 2, 4 2, 5 2, 6 2, 28 2, 125 2.    Which integers have   ?    Which integers have   ?        Understand   On this problem, no justification is required.   Give an example of an integer with and  2 = 1.    Give an example of an integer with and  3 = 1.    Give an example of an integer with and  7 = 1.    Give an example of an integer with and  10 = 1.         Hint: Check that your answer is between 100 and 200 and odd.    Hint: Check that your answer is one more than a multiple of three.    Hint: for example, , and so 141 is a possible example.    Hint: Any example is of the form where is a digit.       Understand       Evaluate each of the following: 21 10, 37 10, 43 10, 59 10, and 60 10.    Give an example of positive integers and where but .    Give an example of integers and where and , but .         Hint: The answers in some order are .    Hint: One way to build an example is to pick and use .    Hint: Neither nor should be a multiple of 10. Try picking an even integer for and an odd multiple of five for .       Understand   Consider an integer .   What are the values of   and   ? Explain.    What are the values of   and   ? Explain.    If is an integer with , what can you say about   and   ? Explain.         Hint: The answers in some order are 0 and .    Hint: The answers in some order are 0 and 1.    Hint: The answers in some order are 0 and .       Understand       Use the Division Algorithm to explain how any integer can be written in the form , , or . Hint: We used this fact in .    Use the Division Algorithm to explain how any integer can be written in the form where is a digit, namely the last digit of .         Hint: By the Division Algorithm, where . What are the possible values of the integer ?    Hint: Explain why and so is the last digit of .       Recap   Do you know    What the Division Algorithm says?    What restrictions are on the remainder when we calculate ?    How to calculate and using long division?         Hint:     Hint: Expand and simplify and factor out 10.    Hint: Copy and complete .  The last digit of squares     0  1  2  3  4  5  6  7  8  9                      16                     Last digit of      6            Hint: Use the hint.       Explore       Calculate 247 18 and 247 18.    Note that . Explain how we could calculate 247 18 using this equation.    In general, if we know the decimal number , how can we find   ? You may describe your answer in words.    Again, note that . Explain how we could calculate 247 18 using this equation.    In general, if we know the decimal number and we know   , how can we find   . You may describe your answer in words.        Explore   The International Standard Book Number (ISBN) is a 13-digit integer used to identify a book. The last digit is calculated from the first 12 digits and is used to check whether a 13-digit number is a legitimate ISBN. This check digit is useful to avoid copying errors. Here is how. For the 13th check digit is chosen so that    Confirm that 9780691151649 is a valid ISBN. Note that , , , .    Calculate the check digit for the ISBN beginning 123450123450.         Hint: Calculate . You should get zero.             Exercises for Algebra: Polynomials   Practice       What is the coefficient of in the polynomial ?    What is the constant term of the polynomial ?    What is the coefficient of in the polynomial ?    What is the constant term of the polynomial ?        Practice   Expand and simplify.                            Hint: The coefficient of in the answer is 4.    Hint: The constant term of the answer is .       Understand   Expand and simplify.    .     .              Hint: The coefficient of in the answer is 2.    Hint: In the answer and have the same coefficient.            Recap   Do you know    What a polynomial is?    How to multiply polynomials or square a polynomial?    What the abbreviation FOIL stands for?        Explore   By Exercise , we can write a positive integer as for some integers and where is the last digit of . Note that .   Expand and simplify in terms of and .    Show that is a multiple of 10. It follows that  10  10 and therefore the last digit of is equal to the last digit of .    What are the possible last digits of ? Hint: Recall that is a digit, so you can check each value of .    What are the possible last digits of any integer ? Hint: Use the results of and .         Exercises for Proof Format: Proof by Cases   Practice   For any integer , copy and edit the proof in to prove that is odd for any integer .    Hint: In the case where , expand and simplify . Then, fill in the parentheses. If you need to, set it equal to and solve for .     Understand   Copy and edit the proof in to prove for any integer .    Hint: As in the proof in , keep the product in factored form and find a way to factor out a three from one of the factors.     Recap   Do you know    How to write a proof by cases?    What needs to be true about the list of cases in a proof-by-cases?    How we can use the Division Algorithm to create cases for a proof by cases?        Explore    Use proof by cases to prove for any integer . Hint: Use Exercise  to create three cases. Notice that we are proving something is not a multiple of three.     Explore   Use cases to prove that   or   for any integer . Hint: Use cases based on whether is even or is odd. Note that in one case we get   and in the other case we get   . Officially, we are using a modified version of proof by cases that we revisit in .    Hint: Copy and edit the proof in  and follow the hint.     Explore   Use cases to prove that   or   for any integer . Hint: Use Exercise  and consider three cases. Note that in one case we get   and in the other two cases we get   . Officially, we are using a modified version of proof by cases that we revisit in .    Hint: Copy and edit the proof in and follow the hint.      "
},
{
  "id": "exam_cookies_children",
  "level": "2",
  "url": "sec_div_alg.html#exam_cookies_children",
  "type": "Example",
  "number": "1.2.1",
  "title": "Cookies and Children.",
  "body": " Cookies and Children   Use the idea of giving 23 cookies to four children to describe in terms of (only) integers.    Imagine that I have 23 cookies and four children. I want to give each child as many cookies as I can, but, to be fair, each child should have the same number of cookies as the other children. What should I do? I can give each child five cookies. That accounts for of the cookies, but I cannot evenly distribute the remaining cookies without breaking them, which I do not want to do. I guess those 3 cookies are for me to eat. We might say is 5 cookies\/child with 3 cookies remaining for me. We can write the equation .   "
},
{
  "id": "thm_div_alg",
  "level": "2",
  "url": "sec_div_alg.html#thm_div_alg",
  "type": "Theorem",
  "number": "1.2.2",
  "title": "The Division Algorithm.",
  "body": " The Division Algorithm   Given integers and with , when we divide by we get for some integers and such that . Moreover, and are unique.    Let and be integers with . We prove existence in the case where .  Since is nonnegative and , we can imagine giving cookies to children. First, I check to see if I have enough cookies for each child to get at least one, and if so, then I hand one cookie to each child. Next, I repeat that step with the remaining cookies as many times as possible. In the end, let's say that each child gets cookies. In total, I gave cookies to the children, so there are cookies leftover for me. Adding to each side of the equation we get . Because I checked there were enough cookies for each child to get one, I never run out of cookies, and so . On the other hand, any time I still have enough cookies to give each child another cookie, I would do that. Therefore, the final number of remaining cookies must be strictly less than the number of children and so .   "
},
{
  "id": "defn_quo_rem_div_mod",
  "level": "2",
  "url": "sec_div_alg.html#defn_quo_rem_div_mod",
  "type": "Definition",
  "number": "1.2.3",
  "title": "Quotient, Remainder, <span class=\"process-math\">\\(\\fn,{div},\\text{,}\\)<\/span> and <span class=\"process-math\">\\(\\fn{mod}\\)<\/span>.",
  "body": " Quotient, Remainder, , and   Let and be integers with and let and be integers such that and .   The integer is the quotient of . When , it is the number of cookies per child in the story. For example, the quotient when is five.    We write . For example,   .    The integer is the remainder of . When , it is the number of cookies for me. For example, the remainder when is three.    We write . For example, . In many computer programming languages, is denoted using the percent symbol (%). For example, we would write .    We say is  with remainder  . For example, is five with remainder three.    In long division the quotient is typically written at the top of the bar and the remainder is the final number at the bottom, as in .  Long division calculation for . \\intlongdivision{23}{4}       "
},
{
  "id": "exam_quo_rem_div_mod",
  "level": "2",
  "url": "sec_div_alg.html#exam_quo_rem_div_mod",
  "type": "Example",
  "number": "1.2.5",
  "title": "Quotient, Remainder, <span class=\"process-math\">\\(\\fn{div}\\text{,}\\)<\/span> and <span class=\"process-math\">\\(\\fn{mod}\\)<\/span>.",
  "body": " Quotient, Remainder, , and   On this problem we do not use computational technology (except to check).   Find the quotient and the remainder when . Use your answer to calculate   and   .  Starting with 100 cookies, we recognize that and so we can hand each child 11 cookies, leaving us with cookie.  If we were using computational technology, we could calculate .. and again see that 11 is the largest number of cookies we can give each child, as there are not enough cookies to give each child 12 cookies.  If we did a long division instead, we would get the same answer, as shown in .   Long division calculation for . \\intlongdivision{100}{9}  Notice that in the long division we calculate the remainder in two steps. First, we give each child 10 cookies for a total of cookies (although 0 is not written), so the remainder is . Next, we give each child 1 cookie for a total of cookies, so the final remainder is .  Using any way of thinking of this division, we get , so the quotient is 11 and the remainder is 1. Thus,   and   .      Find the quotient and the remainder when . Use your answer to calculate   and   .  Write so the quotient is seven. To find the remainder, think of the equation as , so the remainder is zero. Thus,   and         Use the notation (or %) to describe whether an integer is even or odd.  An integer is even if for some integer . When we divide, we get and the remainder is zero. Thus, is even exactly when   or, equivalently, when .  An integer is odd if for some integer . When we divide, we get , and the remainder is one. Thus, is even exactly when   or, equivalently, when .        "
},
{
  "id": "act_practice_div_mod",
  "level": "2",
  "url": "sec_div_alg.html#act_practice_div_mod",
  "type": "Activity",
  "number": "1.2.A",
  "title": "Practice with Div and Mod.",
  "body": " Practice with Div and Mod  In this activity, do all calculations by hand.   Find the quotient and the remainder when . State your answer using and .    Find the quotient and the remainder when . State your answer using and .    Find the quotient and the remainder when . State your answer using and .    Calculate  10, 115 10, and 123,456,789 10. Hint: Subtract multiples of 10.    What do you notice in ? State your answer as a conjecture.    For a nonnegative integer , what are the possible values of   ? State your answer as a conjecture.    For a nonnegative integer and an integer , what are the possible values of   ? State your answer as a conjecture.     "
},
{
  "id": "defn_polynomials",
  "level": "2",
  "url": "sec_div_alg.html#defn_polynomials",
  "type": "Definition",
  "number": "1.2.7",
  "title": "Polynomials.",
  "body": " Polynomials       For an integer , a polynomial in is a sum of constant multiples of powers of . For example, is a polynomial in . To see why, we can rewrite this polynomial to show the powers of . .    In a polynomial, the integer in front of a power of is the coefficient of that power of . For example, in the polynomial , the coefficient of is 2, the coefficient of is 5, the coefficient of is , and the coefficient of is 0.    In a polynomial, the coefficient of is the constant term . For example, the constant term of is 7.    We add polynomials by collecting like terms . For example     To multiply or expand a product of polynomials, we use the distributive rule. See, for example, .      "
},
{
  "id": "exam_mult_polys",
  "level": "2",
  "url": "sec_div_alg.html#exam_mult_polys",
  "type": "Example",
  "number": "1.2.8",
  "title": "Multiplying polynomials.",
  "body": " Multiplying polynomials       Expand .  By the distributive rule, .      Expand .  By the distributive rule (repeatedly),     =      =      =      =     The words under each product indicate the original location of the two integers that are multiplied. This method is First, Outside, Inside, Last or FOIL .        "
},
{
  "id": "act_mult_polys",
  "level": "2",
  "url": "sec_div_alg.html#act_mult_polys",
  "type": "Activity",
  "number": "1.2.B",
  "title": "Multiplying polynomials.",
  "body": " Multiplying polynomials  Expand and simplify each expression.                             for any integer      "
},
{
  "id": "exam_every_integer_even_or_odd",
  "level": "2",
  "url": "sec_div_alg.html#exam_every_integer_even_or_odd",
  "type": "Example",
  "number": "1.2.9",
  "title": "Every integer is even or odd.",
  "body": " Every integer is even or odd   Use the Division Algorithm to prove that every integer is even or odd.     Proof Let be an integer. By the Division Algorithm with , there exist unique integers and such that and . Note that or . Since is unique, we are in exactly one of these two cases. Case 1: Assume . Then is even, by the definition of even. Case 2: Assume . Then is odd, by the definition of odd. In either case is even or is odd.   "
},
{
  "id": "sub_pff_cases-5",
  "level": "2",
  "url": "sec_div_alg.html#sub_pff_cases-5",
  "type": "Theorem",
  "number": "1.2.10",
  "title": "",
  "body": "  We can prove P using Proof by Cases by adapting the following proof format.   (Explain why there are cases.) We consider cases.  Case 1: Assume (Explain why is true in this case.)  Case 2: Assume (Explain why is true in this case.)     Case : Assume (Explain why is true in this case.)  In (either case\/all cases) we have .    "
},
{
  "id": "act_proof_cases_nsqplusn_even",
  "level": "2",
  "url": "sec_div_alg.html#act_proof_cases_nsqplusn_even",
  "type": "Activity",
  "number": "1.2.C",
  "title": "Proof by Cases: <span class=\"process-math\">\\(n^2 + n\\)<\/span> is even.",
  "body": " Proof by Cases: is even      Copy the following example of a proof by cases. Prove that is even for any integer .  Let be an integer. By , is even or is odd. We consider two cases.  Case 1: Assume is even. By the definition of even, for some integer . Thus , so is even.  Case 2: Assume is odd. By the definition of odd, for some integer . Thus , so is even.  In either case, is even.      Edit the proof in to prove that is even for any integer .     "
},
{
  "id": "exam_product_3consec_mult3",
  "level": "2",
  "url": "sec_div_alg.html#exam_product_3consec_mult3",
  "type": "Example",
  "number": "1.2.11",
  "title": "Using proof by cases to prove multiple of three.",
  "body": " Using proof by cases to prove multiple of three   Use a proof by cases to prove for any integer .    Let be an integer. By the Division Algorithm , we can write for some integers and with . The only possible values of are , , and . We consider three cases.  Case 1: Assume . In this case, and so where . Thus, .  Case 2: Assume . In this case, and so where . Thus, .  Case 3: Assume . In this case, and so where . Thus, .  In all cases, .   "
},
{
  "id": "exer_find_quotient_remainder",
  "level": "2",
  "url": "sec_div_alg.html#exer_find_quotient_remainder",
  "type": "",
  "number": "1",
  "title": "Practice.",
  "body": " Practice   Do not use technology or other resources.   Find the quotient and the remainder when . State your answer using and .    Calculate 20 7 and 20 7.    Explain your answers to (b) using the context of children and cookies as in .          and     2, 6    Hint: Imagine 7 children.     "
},
{
  "id": "exer_mod2_even_odd",
  "level": "2",
  "url": "sec_div_alg.html#exer_mod2_even_odd",
  "type": "",
  "number": "2",
  "title": "Practice.",
  "body": " Practice       Evaluate each of the following integers: 3 2, 4 2, 5 2, 6 2, 28 2, 125 2.    Which integers have   ?    Which integers have   ?      "
},
{
  "id": "exer_examples_mod",
  "level": "2",
  "url": "sec_div_alg.html#exer_examples_mod",
  "type": "",
  "number": "3",
  "title": "Understand.",
  "body": " Understand   On this problem, no justification is required.   Give an example of an integer with and  2 = 1.    Give an example of an integer with and  3 = 1.    Give an example of an integer with and  7 = 1.    Give an example of an integer with and  10 = 1.         Hint: Check that your answer is between 100 and 200 and odd.    Hint: Check that your answer is one more than a multiple of three.    Hint: for example, , and so 141 is a possible example.    Hint: Any example is of the form where is a digit.     "
},
{
  "id": "exer_mod10_practice",
  "level": "2",
  "url": "sec_div_alg.html#exer_mod10_practice",
  "type": "",
  "number": "4",
  "title": "Understand.",
  "body": " Understand       Evaluate each of the following: 21 10, 37 10, 43 10, 59 10, and 60 10.    Give an example of positive integers and where but .    Give an example of integers and where and , but .         Hint: The answers in some order are .    Hint: One way to build an example is to pick and use .    Hint: Neither nor should be a multiple of 10. Try picking an even integer for and an odd multiple of five for .     "
},
{
  "id": "exer_modn",
  "level": "2",
  "url": "sec_div_alg.html#exer_modn",
  "type": "",
  "number": "5",
  "title": "Understand.",
  "body": " Understand   Consider an integer .   What are the values of   and   ? Explain.    What are the values of   and   ? Explain.    If is an integer with , what can you say about   and   ? Explain.         Hint: The answers in some order are 0 and .    Hint: The answers in some order are 0 and 1.    Hint: The answers in some order are 0 and .     "
},
{
  "id": "exer_cases_mod3_mod10",
  "level": "2",
  "url": "sec_div_alg.html#exer_cases_mod3_mod10",
  "type": "",
  "number": "6",
  "title": "Understand.",
  "body": " Understand       Use the Division Algorithm to explain how any integer can be written in the form , , or . Hint: We used this fact in .    Use the Division Algorithm to explain how any integer can be written in the form where is a digit, namely the last digit of .         Hint: By the Division Algorithm, where . What are the possible values of the integer ?    Hint: Explain why and so is the last digit of .     "
},
{
  "id": "exer_dyk_div_alg",
  "level": "2",
  "url": "sec_div_alg.html#exer_dyk_div_alg",
  "type": "",
  "number": "7",
  "title": "Recap.",
  "body": " Recap   Do you know    What the Division Algorithm says?    What restrictions are on the remainder when we calculate ?    How to calculate and using long division?         Hint:     Hint: Expand and simplify and factor out 10.    Hint: Copy and complete .  The last digit of squares     0  1  2  3  4  5  6  7  8  9                      16                     Last digit of      6            Hint: Use the hint.     "
},
{
  "id": "exer_calculate_div_mod_division",
  "level": "2",
  "url": "sec_div_alg.html#exer_calculate_div_mod_division",
  "type": "",
  "number": "8",
  "title": "Explore.",
  "body": " Explore       Calculate 247 18 and 247 18.    Note that . Explain how we could calculate 247 18 using this equation.    In general, if we know the decimal number , how can we find   ? You may describe your answer in words.    Again, note that . Explain how we could calculate 247 18 using this equation.    In general, if we know the decimal number and we know   , how can we find   . You may describe your answer in words.      "
},
{
  "id": "exer_isbn",
  "level": "2",
  "url": "sec_div_alg.html#exer_isbn",
  "type": "",
  "number": "9",
  "title": "Explore.",
  "body": " Explore   The International Standard Book Number (ISBN) is a 13-digit integer used to identify a book. The last digit is calculated from the first 12 digits and is used to check whether a 13-digit number is a legitimate ISBN. This check digit is useful to avoid copying errors. Here is how. For the 13th check digit is chosen so that    Confirm that 9780691151649 is a valid ISBN. Note that , , , .    Calculate the check digit for the ISBN beginning 123450123450.         Hint: Calculate . You should get zero.          "
},
{
  "id": "sec_div_alg-6-3-2",
  "level": "2",
  "url": "sec_div_alg.html#sec_div_alg-6-3-2",
  "type": "",
  "number": "10",
  "title": "Practice.",
  "body": " Practice       What is the coefficient of in the polynomial ?    What is the constant term of the polynomial ?    What is the coefficient of in the polynomial ?    What is the constant term of the polynomial ?      "
},
{
  "id": "exer_expanding_polys",
  "level": "2",
  "url": "sec_div_alg.html#exer_expanding_polys",
  "type": "",
  "number": "11",
  "title": "Practice.",
  "body": " Practice   Expand and simplify.                            Hint: The coefficient of in the answer is 4.    Hint: The constant term of the answer is .     "
},
{
  "id": "exer_square_polys",
  "level": "2",
  "url": "sec_div_alg.html#exer_square_polys",
  "type": "",
  "number": "12",
  "title": "Understand.",
  "body": " Understand   Expand and simplify.    .     .              Hint: The coefficient of in the answer is 2.    Hint: In the answer and have the same coefficient.          "
},
{
  "id": "exer_dyk_polys",
  "level": "2",
  "url": "sec_div_alg.html#exer_dyk_polys",
  "type": "",
  "number": "13",
  "title": "Recap.",
  "body": " Recap   Do you know    What a polynomial is?    How to multiply polynomials or square a polynomial?    What the abbreviation FOIL stands for?      "
},
{
  "id": "exer_last_digit_square",
  "level": "2",
  "url": "sec_div_alg.html#exer_last_digit_square",
  "type": "",
  "number": "14",
  "title": "Explore.",
  "body": " Explore   By Exercise , we can write a positive integer as for some integers and where is the last digit of . Note that .   Expand and simplify in terms of and .    Show that is a multiple of 10. It follows that  10  10 and therefore the last digit of is equal to the last digit of .    What are the possible last digits of ? Hint: Recall that is a digit, so you can check each value of .    What are the possible last digits of any integer ? Hint: Use the results of and .      "
},
{
  "id": "exer_quadratic_even",
  "level": "2",
  "url": "sec_div_alg.html#exer_quadratic_even",
  "type": "",
  "number": "15",
  "title": "Practice.",
  "body": " Practice   For any integer , copy and edit the proof in to prove that is odd for any integer .    Hint: In the case where , expand and simplify . Then, fill in the parentheses. If you need to, set it equal to and solve for .   "
},
{
  "id": "exer_proof_cases_3divides",
  "level": "2",
  "url": "sec_div_alg.html#exer_proof_cases_3divides",
  "type": "",
  "number": "16",
  "title": "Understand.",
  "body": " Understand   Copy and edit the proof in to prove for any integer .    Hint: As in the proof in , keep the product in factored form and find a way to factor out a three from one of the factors.   "
},
{
  "id": "exer_dyk_pff_cases",
  "level": "2",
  "url": "sec_div_alg.html#exer_dyk_pff_cases",
  "type": "",
  "number": "17",
  "title": "Recap.",
  "body": " Recap   Do you know    How to write a proof by cases?    What needs to be true about the list of cases in a proof-by-cases?    How we can use the Division Algorithm to create cases for a proof by cases?      "
},
{
  "id": "exer_proof_cases_not_mult_three",
  "level": "2",
  "url": "sec_div_alg.html#exer_proof_cases_not_mult_three",
  "type": "",
  "number": "18",
  "title": "Explore.",
  "body": " Explore    Use proof by cases to prove for any integer . Hint: Use Exercise  to create three cases. Notice that we are proving something is not a multiple of three.   "
},
{
  "id": "exer_proof_cases_square_mod4",
  "level": "2",
  "url": "sec_div_alg.html#exer_proof_cases_square_mod4",
  "type": "",
  "number": "19",
  "title": "Explore.",
  "body": " Explore   Use cases to prove that   or   for any integer . Hint: Use cases based on whether is even or is odd. Note that in one case we get   and in the other case we get   . Officially, we are using a modified version of proof by cases that we revisit in .    Hint: Copy and edit the proof in  and follow the hint.   "
},
{
  "id": "exer_proof_cases_square_mod3",
  "level": "2",
  "url": "sec_div_alg.html#exer_proof_cases_square_mod3",
  "type": "",
  "number": "20",
  "title": "Explore.",
  "body": " Explore   Use cases to prove that   or   for any integer . Hint: Use Exercise  and consider three cases. Note that in one case we get   and in the other two cases we get   . Officially, we are using a modified version of proof by cases that we revisit in .    Hint: Copy and edit the proof in and follow the hint.   "
},
{
  "id": "sec_mod_arith",
  "level": "1",
  "url": "sec_mod_arith.html",
  "type": "Section",
  "number": "1.3",
  "title": "Excursion: Modular Arithmetic",
  "body": " Excursion: Modular Arithmetic   Many applications of number theory use a new number system based on remainders ( mod ), which we introduce in this section.    Not Last Game  In this puzzle, we introduce a game. To play the game, you will need an opponent (another person) and a pile of small objects such as coins, poker chips, candies, dried beans, etc.   Not Last Puzzle  The Not Last game starts with a pile of coins and two players, A and B. Player A removes one or two coins, their choice. Then player B removes one or two coins, their choice. Then A goes again and then B. They continue alternating until all the coins have been removed. At each turn each player must remove one or two coins. Whoever takes the last coin loses ( misère ) and, thus, each player's goal is to be not last .  For example, suppose the game begins with a pile of seven coins. I, as the first player (A), remove two coins leaving a pile of five coins. My opponent (B) decides to remove only one coin, thus leaving a pile of four. I remove one more coin, leaving a pile of three. My opponent chuckles as she removes two coins, leaving me to remove the last coin. I lose.  We can summarize this series of moves in the diagram:   I wonder if there is a different strategy where I could win with seven coins. In general, for a pile of coins, is there a strategy by which the first player (A) can definitely win? We assume, as is the custom, that both players are fully knowledgeable about the game, equally clever, and driven to win.   Play four rounds of Not Last with seven coins to get a sense of the game and list the diagram for each.    As we often do, let's begin by looking at the smallest special cases. When who wins: A or B? Explain and draw the diagram.    When is there a strategy for A to win? Explain and draw the diagram.    Repeat for .    When , there is no strategy A can use to win. Draw diagrams for each option (A takes one coin or A takes two coins) showing that B wins in either case.    Before we try larger values of , it is helpful to shift our perspective slightly. As we play the game with coins, suppose there are eventually coins left. For the purpose of this puzzle, is a losing position if the player who goes next eventually loses and is a winning position if the player who goes next eventually wins. Explain why is a losing position, but and are winning positions.    Let's revisit the 4-coin game with this new perspective. If A takes one coin, then which is a winning position and B goes next, so B wins. If A takes two coins instead, then which is also a position number and B goes next, so B wins. We can draw the simpler diagram, using the arrow to indicate a set of moves with known outcome. . We have just learned that is a losing position. Find a strategy by which A wins when . Explain and draw the diagram. Hint: How can A leave B in a losing position?    When , is there a strategy by which A wins? Explain and draw the diagram. Remember, A is trying to leave B in a losing position, and vice versa.    When , is there a strategy by which A wins? Explain and draw the diagram.    Make a table showing in the top row and the winner (A or B) for each starting number of coins in the bottom row. Be sure you check that the answer is correct for yourself, but you are not expected to explain your reasoning here.    Who do you think wins if the game starts with coins? Is a winning position or a losing position?        The Mod Clock  There is a way to visualize the remainder of  mod  .   Mod Clock  To find  mod  when , imagine an hour clock with hours marked hours. To find the value of  mod  when is positive, we count hours clockwise from . The end mark is  mod  . When is negative, we instead count counterclockwise.    Evaluating using the Mod Clock       Use the 12-hour clock (marked instead of the usual ) shown in to calculate 20 mod 12.  We start at 0 and count clockwise 20 hours: .  Thus 20 mod 12 = 8.   The 12-hour clock          Use the 5-hour clock shown in to calculate 67 mod 5.  Instead of counting off 67 hours, note that 50 hours will take us around the clock 10 times, ending at 0. That leaves us hours to count from there. Note that , so 15 hours will take us around the clock 3 times, ending at 0. That leaves us hours to count from there, which ends at 2. Thus, 67 mod 5 = 2.   The 5-hour clock          Use the 5-hour clock shown in to calculate -12 mod 5.  Since -12 is negative, we start at 0 count counterclockwise 12 hours: .  Thus,  mod 5 = 3.         Practice working with the mod clock.   The Mod Clock      Draw the 12-hour clock and use it to evaluate 17 mod 12, 127 mod 12, 4 mod 12, and -2 mod 12.    Draw the 5-hour clock and use it to evaluate 17 mod 5, 127 mod 5, 4 mod 5, and -2 mod 5.        The Integers mod  We can now define the integers mod .   The integers mod       For a positive integer , the integers mod  , denoted and pronounced Z mod , is the set . For example, and .    We can define addition and multiplication on as follows:  For example, in , we have , , and .    As in the usual order of operations (PEMDAS, , multiplication ( ) is higher priority than addition ( ).    Addition and multiplication satisfy the commutative property  , the associative property  , and the distributive property  .       We can write arithmetic tables for .   Addition and multiplication tables for       Write the addition and multiplication tables for .   shows the tables. For example, and .   The arithmetic tables for , the integers mod 4       0  1  2  3           0  0  1  2  3    1  1  2  3  0    2  2  3  0  1    3  3  0  1  2    \\hspace{.5in}     0  1  2  3           0  0  0  0  0    1  0  1  2  3    2  0  2  0  2    3  0  3  2  1           True or false? If in , then or .  The question is asking if there are any 0s in the multiplication table other than in the row and column headed by 0. It turns out there are and so this statement is false. As a counterexample, , but in .      For which values of , does have a solution?  The question is asking which rows in the multiplication table have a one in them? The rows headed by 1 and 3 each have a 1 because and also . The answer is . (It is coincidence that the corresponding solutions are .)         It is your turn to work with arithmetic in the integers mod .   Arithmetic mod      In confirm that and .    In confirm that and .    Write the addition and multiplication tables for and . Hint: If you are working with a partner, then one of you should do while the other does , just check each other's work. We need these tables for later parts of this activity.    True or false? If in , then or . What about in ?    For which values of , does have a solution? What about in ?        Exercises for Not Last Game    Practice   This exercise refers to the Not Last game introduced in . We know that one and four are losing positions, whereas two and three are winning positions.   Explain why five is a winning position.    Explain why six is a winning position.    Explain why seven is a losing position.         Take one to leave your opponent with four, which is a losing position.    Hint: You want to leave your opponent in four again.    Hint: Consider the two cases where one or two is taken.       Understand   This exercise refers to the Not Last game introduced in .   Which integers are a losing position? State your answer as a conjecture. Hint: Use mod in your answer.    Suppose that you are in a winning position while playing the Not Last game introduced in . What is your strategy for deciding whether to take one or two coins? Be specific. Hint: Your answer should involve and use mod .         Hint: Your answer depends on mod 3.    Hint: Look at and break down your answer into cases.       Explore   In this exercise we define a new game, Half , which starts with a pile of coins and two players, A and B. Player A goes first and then A and B take turns removing coins from the pile. The rule is that at each turn, a player must remove at least one coin and at most half of the coins, with the exception that if there is one coin left, then they must take it. For example, if there are six or seven coins, the next player can take one, two, or three coins. As in the Not Last game, whoever takes the last coin loses the Half game.   Who wins the Half game when , the first player (A) or the second player (B)? Explain.    Who wins the Half game when ? Explain.        Explore   This exercise refers to the Half game introduced in Exercise . Complete Exercise before trying this exercise.   Which integers are a losing position in the Half game? State your answer as a conjecture.    Suppose that you are in a winning position while playing Half. What is your strategy for deciding how many coins to take? Hint: your answer should involve .         Exercises for The Mod Clock   Practice   In each part of this exercise, draw the relevant mod clock and show how to use it to evaluate the quantity. Recall that we rotate clockwise for positive integers.   23 mod 5. Hint: Copy the mod 5 clock from .    23 mod 12. Hint: Copy the mod 12 clock from .    23 mod 10. Hint: The mod 10 clock has labels .    23 mod 6. Hint: The mod 6 clock has labels .       The answers in some order are zero, one, three, and five.     Understand   In each part of this exercise, draw the relevant mod clock and show how to use it to evaluate the quantity. Recall that we rotate counterclockwise for negative integers.     mod 5      mod 6      mod 12      mod 3       The answers to each part are zero or two.     Recap   Do you know    How to calculate using a mod clock ? Make sure your answer includes both positive and negative numbers .    What values of have ? That is, which values of end at 0 on the mod  clock?        Explore       Use the idea of a mod clock to explain why  mod  whenever is a multiple of .    Use the idea of a mod clock to explain why  mod  and  mod  . Hint: The mod clock has labels .         Exercises for The Integers mod   Practice       Write out the addition and multiplication tables for . Hint: Each entry in your tables should be 0, 1, or 2.    Write out the addition and multiplication tables for . Hint: Each entry in your tables should be 0 or 1.         Hint: Check that and .    Hint: The only unusual entry is .       Practice   This exercise repeats  .   Write out the arithmetic tables for .    Write out the arithmetic tables for .         Hint: The rows for two are and .    Hint: The rows for two are and .       Understand   For each equation, find every solution , if any, by checking each element of to see if it is a solution.   Solve in .    Solve in .    Solve in .    Solve in .    Solve in . Note that the usual order of operations applies, so this equation means               Hint: There is one solution.         Hint: Look at the row for two in the multiplication table. Explain why there is no solution.       Understand   In , we write .   In , what are the solutions, if any, of ?    In , what are the solutions, if any, of ?    In , what are the solutions, if any, of ?    In , what are the solutions, if any, of ?         Hint: Two of are solutions. Check each one.    Hint: There is no solution.    Hint: One solution is . There is a second solution.    Hint: There is one solution.       Understand       Give an example of elements and in where , but and .    Can you find elements and in where , but and ? Explain.        Understand       For which values of , does have a solution?    For which values of , does have a solution?    For which values of , does have a solution? You should be able to answer without writing the multiplication table.    For which values of , does have a solution? You should be able to answer without writing the multiplication table.              Hint: and one more value. Look for ones in the multiplication table.    Hint: There are four values of , all odd.            Recap   Do you know    What is?    How to add and multiply in the integers mod ?    How to construct the addition and multiplication tables mod .    How to solve equations in ?        Explore   In , we write . On this exercise, you are welcome to use computational technology.   In , calculate , , , , , , , and .    Based on the pattern in , conjecture the value of . Explain your reasoning.    In , calculate , , , , , , , and .    Based on the pattern in , conjecture the value of .Explain your reasoning.         Hint: The list begins .    Hint: The list begins .       Explore    An element of is a zero divisor if but there is an element of with also, and yet . That is, if there is more than one 0 in the row for in the multiplication table for . ENDExercise asked for an example of a zero divisor in and asked whether there were zero divisors in . Conjecture which integers have the property that has zero divisors and which integers have the property that does not have zero divisors.      "
},
{
  "id": "act_not_last",
  "level": "2",
  "url": "sec_mod_arith.html#act_not_last",
  "type": "Activity",
  "number": "1.3.A",
  "title": "Not Last Puzzle.",
  "body": " Not Last Puzzle  The Not Last game starts with a pile of coins and two players, A and B. Player A removes one or two coins, their choice. Then player B removes one or two coins, their choice. Then A goes again and then B. They continue alternating until all the coins have been removed. At each turn each player must remove one or two coins. Whoever takes the last coin loses ( misère ) and, thus, each player's goal is to be not last .  For example, suppose the game begins with a pile of seven coins. I, as the first player (A), remove two coins leaving a pile of five coins. My opponent (B) decides to remove only one coin, thus leaving a pile of four. I remove one more coin, leaving a pile of three. My opponent chuckles as she removes two coins, leaving me to remove the last coin. I lose.  We can summarize this series of moves in the diagram:   I wonder if there is a different strategy where I could win with seven coins. In general, for a pile of coins, is there a strategy by which the first player (A) can definitely win? We assume, as is the custom, that both players are fully knowledgeable about the game, equally clever, and driven to win.   Play four rounds of Not Last with seven coins to get a sense of the game and list the diagram for each.    As we often do, let's begin by looking at the smallest special cases. When who wins: A or B? Explain and draw the diagram.    When is there a strategy for A to win? Explain and draw the diagram.    Repeat for .    When , there is no strategy A can use to win. Draw diagrams for each option (A takes one coin or A takes two coins) showing that B wins in either case.    Before we try larger values of , it is helpful to shift our perspective slightly. As we play the game with coins, suppose there are eventually coins left. For the purpose of this puzzle, is a losing position if the player who goes next eventually loses and is a winning position if the player who goes next eventually wins. Explain why is a losing position, but and are winning positions.    Let's revisit the 4-coin game with this new perspective. If A takes one coin, then which is a winning position and B goes next, so B wins. If A takes two coins instead, then which is also a position number and B goes next, so B wins. We can draw the simpler diagram, using the arrow to indicate a set of moves with known outcome. . We have just learned that is a losing position. Find a strategy by which A wins when . Explain and draw the diagram. Hint: How can A leave B in a losing position?    When , is there a strategy by which A wins? Explain and draw the diagram. Remember, A is trying to leave B in a losing position, and vice versa.    When , is there a strategy by which A wins? Explain and draw the diagram.    Make a table showing in the top row and the winner (A or B) for each starting number of coins in the bottom row. Be sure you check that the answer is correct for yourself, but you are not expected to explain your reasoning here.    Who do you think wins if the game starts with coins? Is a winning position or a losing position?     "
},
{
  "id": "sub_mod_clock-3",
  "level": "2",
  "url": "sec_mod_arith.html#sub_mod_clock-3",
  "type": "Remark",
  "number": "1.3.1",
  "title": "Mod Clock.",
  "body": " Mod Clock  To find  mod  when , imagine an hour clock with hours marked hours. To find the value of  mod  when is positive, we count hours clockwise from . The end mark is  mod  . When is negative, we instead count counterclockwise.  "
},
{
  "id": "exam_eval_mod_clock",
  "level": "2",
  "url": "sec_mod_arith.html#exam_eval_mod_clock",
  "type": "Example",
  "number": "1.3.2",
  "title": "Evaluating <span class=\"process-math\">\\(\\fn{mod}\\)<\/span> using the Mod Clock.",
  "body": " Evaluating using the Mod Clock       Use the 12-hour clock (marked instead of the usual ) shown in to calculate 20 mod 12.  We start at 0 and count clockwise 20 hours: .  Thus 20 mod 12 = 8.   The 12-hour clock          Use the 5-hour clock shown in to calculate 67 mod 5.  Instead of counting off 67 hours, note that 50 hours will take us around the clock 10 times, ending at 0. That leaves us hours to count from there. Note that , so 15 hours will take us around the clock 3 times, ending at 0. That leaves us hours to count from there, which ends at 2. Thus, 67 mod 5 = 2.   The 5-hour clock          Use the 5-hour clock shown in to calculate -12 mod 5.  Since -12 is negative, we start at 0 count counterclockwise 12 hours: .  Thus,  mod 5 = 3.        "
},
{
  "id": "act_mod_clock",
  "level": "2",
  "url": "sec_mod_arith.html#act_mod_clock",
  "type": "Activity",
  "number": "1.3.B",
  "title": "The Mod Clock.",
  "body": " The Mod Clock      Draw the 12-hour clock and use it to evaluate 17 mod 12, 127 mod 12, 4 mod 12, and -2 mod 12.    Draw the 5-hour clock and use it to evaluate 17 mod 5, 127 mod 5, 4 mod 5, and -2 mod 5.     "
},
{
  "id": "defn_integers_modn",
  "level": "2",
  "url": "sec_mod_arith.html#defn_integers_modn",
  "type": "Definition",
  "number": "1.3.5",
  "title": "The integers mod <span class=\"process-math\">\\(n\\)<\/span>.",
  "body": " The integers mod       For a positive integer , the integers mod  , denoted and pronounced Z mod , is the set . For example, and .    We can define addition and multiplication on as follows:  For example, in , we have , , and .    As in the usual order of operations (PEMDAS, , multiplication ( ) is higher priority than addition ( ).    Addition and multiplication satisfy the commutative property  , the associative property  , and the distributive property  .      "
},
{
  "id": "sub_integers_mod_n-5",
  "level": "2",
  "url": "sec_mod_arith.html#sub_integers_mod_n-5",
  "type": "Example",
  "number": "1.3.6",
  "title": "Addition and multiplication tables for <span class=\"process-math\">\\(\\mathbb{Z}_4\\)<\/span>.",
  "body": " Addition and multiplication tables for       Write the addition and multiplication tables for .   shows the tables. For example, and .   The arithmetic tables for , the integers mod 4       0  1  2  3           0  0  1  2  3    1  1  2  3  0    2  2  3  0  1    3  3  0  1  2    \\hspace{.5in}     0  1  2  3           0  0  0  0  0    1  0  1  2  3    2  0  2  0  2    3  0  3  2  1           True or false? If in , then or .  The question is asking if there are any 0s in the multiplication table other than in the row and column headed by 0. It turns out there are and so this statement is false. As a counterexample, , but in .      For which values of , does have a solution?  The question is asking which rows in the multiplication table have a one in them? The rows headed by 1 and 3 each have a 1 because and also . The answer is . (It is coincidence that the corresponding solutions are .)        "
},
{
  "id": "act_arith_modn",
  "level": "2",
  "url": "sec_mod_arith.html#act_arith_modn",
  "type": "Activity",
  "number": "1.3.C",
  "title": "Arithmetic mod <span class=\"process-math\">\\(n\\)<\/span>.",
  "body": " Arithmetic mod      In confirm that and .    In confirm that and .    Write the addition and multiplication tables for and . Hint: If you are working with a partner, then one of you should do while the other does , just check each other's work. We need these tables for later parts of this activity.    True or false? If in , then or . What about in ?    For which values of , does have a solution? What about in ?     "
},
{
  "id": "exer_not_last_winning_position",
  "level": "2",
  "url": "sec_mod_arith.html#exer_not_last_winning_position",
  "type": "",
  "number": "1",
  "title": "Practice.",
  "body": " Practice   This exercise refers to the Not Last game introduced in . We know that one and four are losing positions, whereas two and three are winning positions.   Explain why five is a winning position.    Explain why six is a winning position.    Explain why seven is a losing position.         Take one to leave your opponent with four, which is a losing position.    Hint: You want to leave your opponent in four again.    Hint: Consider the two cases where one or two is taken.     "
},
{
  "id": "exer_not_last_conj",
  "level": "2",
  "url": "sec_mod_arith.html#exer_not_last_conj",
  "type": "",
  "number": "2",
  "title": "Understand.",
  "body": " Understand   This exercise refers to the Not Last game introduced in .   Which integers are a losing position? State your answer as a conjecture. Hint: Use mod in your answer.    Suppose that you are in a winning position while playing the Not Last game introduced in . What is your strategy for deciding whether to take one or two coins? Be specific. Hint: Your answer should involve and use mod .         Hint: Your answer depends on mod 3.    Hint: Look at and break down your answer into cases.     "
},
{
  "id": "exer_half_game123",
  "level": "2",
  "url": "sec_mod_arith.html#exer_half_game123",
  "type": "",
  "number": "3",
  "title": "Explore.",
  "body": " Explore   In this exercise we define a new game, Half , which starts with a pile of coins and two players, A and B. Player A goes first and then A and B take turns removing coins from the pile. The rule is that at each turn, a player must remove at least one coin and at most half of the coins, with the exception that if there is one coin left, then they must take it. For example, if there are six or seven coins, the next player can take one, two, or three coins. As in the Not Last game, whoever takes the last coin loses the Half game.   Who wins the Half game when , the first player (A) or the second player (B)? Explain.    Who wins the Half game when ? Explain.      "
},
{
  "id": "exer_half_conj",
  "level": "2",
  "url": "sec_mod_arith.html#exer_half_conj",
  "type": "",
  "number": "4",
  "title": "Explore.",
  "body": " Explore   This exercise refers to the Half game introduced in Exercise . Complete Exercise before trying this exercise.   Which integers are a losing position in the Half game? State your answer as a conjecture.    Suppose that you are in a winning position while playing Half. What is your strategy for deciding how many coins to take? Hint: your answer should involve .      "
},
{
  "id": "exer_eval_mod_clock",
  "level": "2",
  "url": "sec_mod_arith.html#exer_eval_mod_clock",
  "type": "",
  "number": "5",
  "title": "Practice.",
  "body": " Practice   In each part of this exercise, draw the relevant mod clock and show how to use it to evaluate the quantity. Recall that we rotate clockwise for positive integers.   23 mod 5. Hint: Copy the mod 5 clock from .    23 mod 12. Hint: Copy the mod 12 clock from .    23 mod 10. Hint: The mod 10 clock has labels .    23 mod 6. Hint: The mod 6 clock has labels .       The answers in some order are zero, one, three, and five.   "
},
{
  "id": "exer_neg_mod_clock",
  "level": "2",
  "url": "sec_mod_arith.html#exer_neg_mod_clock",
  "type": "",
  "number": "6",
  "title": "Understand.",
  "body": " Understand   In each part of this exercise, draw the relevant mod clock and show how to use it to evaluate the quantity. Recall that we rotate counterclockwise for negative integers.     mod 5      mod 6      mod 12      mod 3       The answers to each part are zero or two.   "
},
{
  "id": "exer_dyk_mod_clock",
  "level": "2",
  "url": "sec_mod_arith.html#exer_dyk_mod_clock",
  "type": "",
  "number": "7",
  "title": "Recap.",
  "body": " Recap   Do you know    How to calculate using a mod clock ? Make sure your answer includes both positive and negative numbers .    What values of have ? That is, which values of end at 0 on the mod  clock?      "
},
{
  "id": "sec_mod_arith-6-3-5",
  "level": "2",
  "url": "sec_mod_arith.html#sec_mod_arith-6-3-5",
  "type": "",
  "number": "8",
  "title": "Explore.",
  "body": " Explore       Use the idea of a mod clock to explain why  mod  whenever is a multiple of .    Use the idea of a mod clock to explain why  mod  and  mod  . Hint: The mod clock has labels .      "
},
{
  "id": "exer_arith_tables_mod2_mod3",
  "level": "2",
  "url": "sec_mod_arith.html#exer_arith_tables_mod2_mod3",
  "type": "",
  "number": "9",
  "title": "Practice.",
  "body": " Practice       Write out the addition and multiplication tables for . Hint: Each entry in your tables should be 0, 1, or 2.    Write out the addition and multiplication tables for . Hint: Each entry in your tables should be 0 or 1.         Hint: Check that and .    Hint: The only unusual entry is .     "
},
{
  "id": "exer_arith_table_mod5_mod6_again",
  "level": "2",
  "url": "sec_mod_arith.html#exer_arith_table_mod5_mod6_again",
  "type": "",
  "number": "10",
  "title": "Practice.",
  "body": " Practice   This exercise repeats  .   Write out the arithmetic tables for .    Write out the arithmetic tables for .         Hint: The rows for two are and .    Hint: The rows for two are and .     "
},
{
  "id": "exer_solve_linear_modn",
  "level": "2",
  "url": "sec_mod_arith.html#exer_solve_linear_modn",
  "type": "",
  "number": "11",
  "title": "Understand.",
  "body": " Understand   For each equation, find every solution , if any, by checking each element of to see if it is a solution.   Solve in .    Solve in .    Solve in .    Solve in .    Solve in . Note that the usual order of operations applies, so this equation means               Hint: There is one solution.         Hint: Look at the row for two in the multiplication table. Explain why there is no solution.     "
},
{
  "id": "exer_modn_sqrtminus1_examples",
  "level": "2",
  "url": "sec_mod_arith.html#exer_modn_sqrtminus1_examples",
  "type": "",
  "number": "12",
  "title": "Understand.",
  "body": " Understand   In , we write .   In , what are the solutions, if any, of ?    In , what are the solutions, if any, of ?    In , what are the solutions, if any, of ?    In , what are the solutions, if any, of ?         Hint: Two of are solutions. Check each one.    Hint: There is no solution.    Hint: One solution is . There is a second solution.    Hint: There is one solution.     "
},
{
  "id": "exer_zero_divisors_examples",
  "level": "2",
  "url": "sec_mod_arith.html#exer_zero_divisors_examples",
  "type": "",
  "number": "13",
  "title": "Understand.",
  "body": " Understand       Give an example of elements and in where , but and .    Can you find elements and in where , but and ? Explain.      "
},
{
  "id": "exer_modn_units_examples",
  "level": "2",
  "url": "sec_mod_arith.html#exer_modn_units_examples",
  "type": "",
  "number": "14",
  "title": "Understand.",
  "body": " Understand       For which values of , does have a solution?    For which values of , does have a solution?    For which values of , does have a solution? You should be able to answer without writing the multiplication table.    For which values of , does have a solution? You should be able to answer without writing the multiplication table.              Hint: and one more value. Look for ones in the multiplication table.    Hint: There are four values of , all odd.          "
},
{
  "id": "exer_dyk_integers_modn",
  "level": "2",
  "url": "sec_mod_arith.html#exer_dyk_integers_modn",
  "type": "",
  "number": "15",
  "title": "Recap.",
  "body": " Recap   Do you know    What is?    How to add and multiply in the integers mod ?    How to construct the addition and multiplication tables mod .    How to solve equations in ?      "
},
{
  "id": "exer_powers_modn_examples",
  "level": "2",
  "url": "sec_mod_arith.html#exer_powers_modn_examples",
  "type": "",
  "number": "16",
  "title": "Explore.",
  "body": " Explore   In , we write . On this exercise, you are welcome to use computational technology.   In , calculate , , , , , , , and .    Based on the pattern in , conjecture the value of . Explain your reasoning.    In , calculate , , , , , , , and .    Based on the pattern in , conjecture the value of .Explain your reasoning.         Hint: The list begins .    Hint: The list begins .     "
},
{
  "id": "exer_zero_div_modn_conj",
  "level": "2",
  "url": "sec_mod_arith.html#exer_zero_div_modn_conj",
  "type": "",
  "number": "17",
  "title": "Explore.",
  "body": " Explore    An element of is a zero divisor if but there is an element of with also, and yet . That is, if there is more than one 0 in the row for in the multiplication table for . ENDExercise asked for an example of a zero divisor in and asked whether there were zero divisors in . Conjecture which integers have the property that has zero divisors and which integers have the property that does not have zero divisors.   "
},
{
  "id": "sec_primes",
  "level": "1",
  "url": "sec_primes.html",
  "type": "Section",
  "number": "1.4",
  "title": "Primes",
  "body": " Primes    Primes are integers whose only divisors are one and itself. Many modern encryption systems that keep your data safe are based on the difficulty of factoring an integer that is the product of two very large primes. Any integer can be written as the product of primes, with repeats allowed. This prime factorization allows us to list and count the divisors of an integer more easily.    Primes and Composites   Visualizing divisors  We begin our discussion of primes with a visualization of divisors.   Watch the animation at \\url{tinyurl.com\/vizdivisors}.    Draw the circle pictures from the animation for integers 1-12. You are welcome to draw dots instead of circles.    Draw the circle pictures from the animation for the integers 81 and 100.    What can you say about an integer whose representation is a circle?    In words, explain how the visualization is determined from the number.      As we saw in the opening activity, some integers can be drawn as equal-sized groups of circles corresponding to the divisors of the integers. Some integers can only be drawn as one circle of circles because the only divisors of that integer are one and itself. Such integers are primes. Here is the formal definition.   Prime       A positive integer is prime if its only positive divisors are one and . For example, two, three, and five are prime. Note that one is not considered prime.    A positive integer is composite if it is not prime. For example, four is composite because its positive divisors are one, two, and four, not just one and four. Note that one is also not composite.    The terms prime and composite are adjectives (used to describe an integer) and nouns (a type of integer).    The integer is a nontrivial positive divisor of if and . For example, 2 is a nontrivial positive divisor of 4. In general, an integer is composite if it has a nontrivial divisor, and an integer is prime if it does not have any nontrivial positive divisors.       Let's practice working with these definitions.   Show an integer is prime or composite       Show that the integer seven is prime.  We can check that (for example, by calculating which is not an integer), , , , and . Therefore, the only positive divisors of seven are one and seven. Thus, seven is prime.      Show that the integer 99 is composite.  We could list all the divisors of 99, but that is not necessary. We just need one nontrivial positive divisor of 99. For example, and so . That is, 9 is a nontrivial positive divisor of 99. Thus, 99 is composite.         The strategy we used in  does not generalize well to larger numbers. For example, if we wanted to show that 97 is prime, then that method would require us to check that 2, 3, 4, , 96 are not divisors of 97. It is useful to note two facts that allow us to check a much shorter list of divisors.   Show an integer is prime   Let be an integer.   Let be a prime. If is not a divisor of , then no multiple of is a divisor of .    If has no nontrivial positive divisors less than or equal to , then is prime.       We can use this theorem to show that 97 is prime.   Sieve of Eratosthenes   Use the Sieve of Eratosthenes to show that 97 is prime.    We start with a grid showing the integers 1-100 in rows of 10 in . We plan to cross out one and all composite integers and to circle all prime integers.  To begin we cross out one, circle two, and then cross out every other number thereafter, which are the even integers. Because an even integer has positive divisor two, the only prime even integer is two itself. Next, circle three and then cross out every third number thereafter, which are the multiples of three. Repeat the process for the next two integers that have not yet been crossed out, five and then seven. Since each integer in the top row is crossed out or circled, circle all the remaining integers that have not been crossed out to get the grid shown in .(You can watch this algorithm in action at \\url{https:\/\/www.youtube.com\/watch?v=V08g_lkKj6Q}.)   Sieve of Eratosthenes    \\xcancel{ 1}  \\circled{2}  \\circled{3}  \\xcancel{ 4}  \\circled{5}  \\xcancel{ 6}  \\circled{7}  \\xcancel{ 8}  \\xcancel{ 9}  \\xcancel{10}    \\circled{11}  \\xcancel{12}  \\circled{13}  \\xcancel{14}  \\xcancel{15}  \\xcancel{16}  \\circled{17}  \\xcancel{18}  \\circled{19}  \\xcancel{20}    \\xcancel{21}  \\xcancel{22}  \\circled{23}  \\xcancel{24}  \\xcancel{25}  \\xcancel{26}  \\xcancel{27}  \\xcancel{28}  \\circled{29}  \\xcancel{30}    \\circled{31}  \\xcancel{32}  \\xcancel{33}  \\xcancel{34}  \\xcancel{35}  \\xcancel{36}  \\circled{37}  \\xcancel{38}  \\xcancel{39}  \\xcancel{40}    \\circled{41}  \\xcancel{42}  \\circled{43}  \\xcancel{44}  \\xcancel{45}  \\xcancel{46}  \\circled{47}  \\xcancel{48}  \\xcancel{49}  \\xcancel{50}    \\xcancel{51}  \\xcancel{52}  \\circled{53}  \\xcancel{54}  \\xcancel{55}  \\xcancel{56}  \\xcancel{57}  \\xcancel{58}  \\circled{59}  \\xcancel{60}    \\circled{61}  \\xcancel{62}  \\xcancel{63}  \\xcancel{64}  \\xcancel{65}  \\xcancel{66}  \\circled{67}  \\xcancel{68}  \\xcancel{69}  \\xcancel{70}    \\circled{71}  \\xcancel{72}  \\circled{73}  \\xcancel{74}  \\xcancel{75}  \\xcancel{76}  \\xcancel{77}  \\xcancel{78}  \\circled{79}  \\xcancel{80}    \\xcancel{81}  \\xcancel{82}  \\circled{83}  \\xcancel{84}  \\xcancel{85}  \\xcancel{86}  \\xcancel{87}  \\xcancel{88}  \\circled{89}  \\xcancel{90}    \\xcancel{91}  \\xcancel{92}  \\xcancel{93}  \\xcancel{94}  \\xcancel{95}  \\xcancel{96}  \\circled{97}  \\xcancel{98}  \\xcancel{99}  \\xcancel{100}     Notice that nowhere in this process do we divide, we only skip-count.  Skip-counting is the process of counting by a number greater than 1. How do we know that the circled integers are prime? Each of these integers is not divisible by two, three, five, or seven since we crossed out all the multiples of two, three, five, or seven. By  , each of these integers is not divisible by four, six, eight, or 10 because two was not a divisor and is not divisible by nine because three was not a divisor. That is, each of these integers are not divisible by , or . By  and since , each of these remaining integers must be prime.  In particular, 97 is prime.    Now, it is your turn to work with prime and composite integers.   Primes and composites      Without using any computational technology, show that each of the following integers is composite: .    Using computational technology, check that and . What can you conclude about the integers 323 and 329?    Using computational technology, check that is not divisible by , and that . What can you conclude about the integer 331?    In the mid-17th century Marin Mersenne conjectured that If is prime, then is prime. Prove that he was mistaken by finding a prime where is a composite.        Prime Factorization  Another reason why primes are important is that they are the multiplicative building blocks of all integers in the sense that every natural number can be written as the product of prime numbers. To see why, let's see what happens if we factor an integer as much as possible.   Factoring 120   Factor 120 as much as possible.   An easy factorization is . Since both 12 and 10 are composite, they can be factored nontrivially. For example, and . Now, two and five are prime so they cannot be further factored, but six is composite and . Since two and three are prime, no further factorization is possible. This factorization is shown in the factor tree in , and we have circled the prime factors. Putting our work together, we can write .   A factor tree for the integer .         In , we wrote .  Note that this product is a product of primes.   Prime factorization       A prime factorization of a positive integer is a product of primes equal to . For example, a prime factorization of 120 is . Note that a prime is its own prime factorization. For example, a prime factorization of is .    We often group repeat primes together and write primes in increasing order to write a prime factorization of in standard order as where are distinct primes with and are positive integer exponents. For example, a prime factorization of 120 in standard order is .    The integer 1 does not have a prime factorization, but occasionally we refer to 1 as the prime factorization of 1 because it fits the format with all exponents ( ) set equal to 0.       Any integer has a prime factorization. To see why, repeat the process from . If is prime, then we are done. Otherwise, is composite and we can nontrivially factor . Any time we have a composite factor, we nontrivially factor it. When we run out of composites, all the remaining numbers must be prime. Then we arrange the primes in standard order, from smallest prime to largest, using exponential notation to record any multiple occurrences of primes.  It might be surprising to learn that the prime factorization of an integer in standard form is unique. For example, in if we had started with or or or any other factorization, we would get different factor trees but the same final prime factorization of 120 in standard form which is . We state this existence and uniqueness as a theorem.   Fundamental Theorem of Arithmetic   Each integer can be expressed as the product of primes, and when written in standard order, this prime factorization is unique.    For example, a consequence of is that if the prime factorization of an integer does not include the prime , then .  Try working with prime factorizations.   Prime factorization   Do not use computational technology or other resources on this problem.   Use a factor tree to find the prime factorization of 120 starting with .    Use a factor tree to find the prime factorization of 72.    Find the prime factorization of . Hint: is already partially factored. Continue to factor it further.    Find the prime factorization of .    Find the prime factorization of 10! Hint: 10! is already partially factored. Continue to factor it further.    Find the power of 7 in the prime factorization of 15!    Find the highest power of 10 dividing 15! and explain how that information tells us how many zeros are at the end of 15! when 15! is multiplied exactly.      Let's look at examples similar to .   Prime factorization    Do not use computational technology or other resources on this problem.   Find the prime factorization of .  Note that is already partially factored. We can continue to factor it further using . We get . Note that we used to simplify .      Find the prime factorization of 12!  Note that is already partially factored. We can continue to factor it further using . We get .      Find the highest power of 10 dividing 12! and explain how that information tells us how many zeros are at the end of 12! when 12! is multiplied exactly.  The highest power of 5 that divides 12! is . To get a divisor of 10, we must have a . Therefore, the highest power of 10 that divides 12! is . Each power of 10 contributes one zero at the end of the number. Since there are two 10s, it follows that there are two zeros at the end of 12! when 12! is multiplied exactly. (By the way, we can use computational technology to check that 12! = 479,001,600 , which indeed ends with two zeros.)           Detour: Listing and Counting Divisors  In the Lockers Puzzle , as solved in , we saw that whether a locker was open or closed depended on the number of divisors of the locker number, but it is not easy to list or count the divisors of an integer. In this section, we explore how prime factorization can help.  We start with an example, looking at how the prime factorization of an integer tells us information about the prime factorization of its divisors.   Prime factorization of divisors       List the positive divisors of the integer 16. Compare the prime factorization of 16 with the prime factorization of its positive divisors.  The positive divisors of are and . The prime factorizations of these divisors are , and . We can display this list in a table. lists the divisors in prime factored form and then the divisors themselves.    The positive divisors of 16     1  2               1  1  2      \\hspace{1in}    1  2               1  1  2  4  8  16        List the positive divisors of the integer 50. Compare the prime factorization of 50 with the prime factorization of its positive divisors.  The positive divisors of are and . The prime factorizations of these divisors are and . lists the divisors in prime factored form and then the divisors themselves. Notice that going across a row of this table, we multiply by two and going down a column of this table, we multiply by five.    The positive divisors of 50     1  2         1  1  2         5  5              \\hspace{1in}    1  2         1  1  2         5  5  10         25  25  50        List the positive divisors of the integer 72. Compare the prime factorization of 72 with the prime factorization of its positive divisors.  The positive divisors of are and . The prime factorizations of these divisors are , and . lists the divisors in prime factored form and then the divisors themselves. Notice that going across a row of this table, we multiply by two and going down a column of this table, we multiply by three.   The positive divisors of 72     1  2             1  1  2             3  3                    \\hspace{1in}    1  2             1               3                              Try listing and counting divisors using prime factorization.   Listing and counting divisors using prime factorization      What are the possible prime factorizations of a divisor of ? List the positive divisors of the integer 64 in a table as in  . How many positive divisors does the integer 64 have?    What are the possible prime factorizations of a divisor of ? List the positive divisors of the integer 2,000 in a table as in  . You may leave the divisors in prime-factored form. How many positive divisors does the integer 2,000 have?    List the positive divisors of where is a prime. How many positive divisors does the integer have?    List the positive divisors of where is a prime. How many positive divisors does the integer have?    For a prime and positive integer , how many positive divisors does have? Check that your conjecture gives the same number of positive divisors of the integer 64 as found in .    Give an example of an integer with exactly 21 positive divisors. Hint: Use a power of a prime.    For distinct primes and , list the positive divisors of an integer in a table as in . How many positive divisors does have?    For distinct primes and , conjecture the number of positive divisors of .    Give an example of an integer with exactly 21 positive divisors, where that integer is not a power of a prime. Hint: What could the prime factorization be?      Our examples have involved integers whose prime factorization has one or two distinct primes. Here is an example of an integer whose prime factorization has three distinct primes.   Prime factorization of divisors of the integer 600    List the positive divisors of the integer 600 using its prime factorization.    The prime factorization of the integer 600 is .  Since there are three prime divisors, we would need a 3-dimensional table which we can represent using three 2-dimensional tables based on the power of 5 in the divisor, as shown in . The list of divisors of 600 is, therefore .   The prime factorization of the positive divisors of 600    1  1  2             1  1  2             3  3      \\vspace{.25in}   5  1  2             1  5              3       \\vspace{.25in}    1  2             1               3           Notice that we can count the number of positive divisors of an integer from its prime factorization.   Counting divisors from the prime factorization   In each part of this exercise, show how to count the number of divisors from the prime factorization.   How many positive divisors does the integer 16 have? Explain.  In  , we see that the positive divisors of have a prime factorization of the form where . There are five choices for . Thus, the integer 16 has five positive divisors.      How many positive divisors does the integer 50 have? Explain.  In  , we see that the positive divisors have a prime factorization of the form where and . There are two choices for and three choices for . Since steps multiply , the integer 50 has positive divisors.      How many positive divisors does the integer 72 have? Explain.  In  , we see that the positive divisors of have a prime factorization of the form where and . There are four choices for and three choices for . Since steps multiply , the integer 72 has positive divisors.      How many positive divisors does the integer 600 have? Explain.  In , we see that the positive divisors of have a prime factorization of the form where , , and . There are four choices for , two choices for , and three choices for . Since steps multiply , the integer 600 has positive divisors.         We state our findings in a theorem.   Listing and counting divisors using prime factorization   Let be an integer with prime factorization where are distinct primes with and are positive integer exponents.   The positive divisors of are integers of the form where each exponent .    The integer has exactly positive divisors.       We can use to find examples of integers with a certain number of divisors.   Integers with exactly 10 positive divisors       Describe the possible prime factorizations of an integer that has exactly 10 positive divisors.  By , we are looking for an integer with prime factorization such that .  One possibility is that there is only one prime with and so . In that case, the prime factorization is . The corresponding table would be . The other possibility is that there are two primes, and where and and so and . In that case, the prime factorization is . The corresponding table would be .      What is the smallest integer having exactly 10 positive divisors?  The smallest integer of the form is . The smallest integer of the form is . Thus, the smallest integer having exactly 10 divisors is 48.           Exercises   Exercises for Primes and Composites   Practice    If is prime and is also prime, then and are twin primes . Watch the animation at \\url{tinyurl.com\/vizdivisors} again and record ten pairs of twin primes. For example, 3 and 5 form one pair of twin primes.    Hint: The list begins with .     Practice    Consider the integers .  Answer the following questions without using computational technology. Briefly justify your answers.   Which of these integers are a multiple of two (even)?    Which of these integers are a multiple of three? Hint: Some multiples of three are , and .    Which of these integers are a multiple of five?    Which of these integers are a multiple of seven? Hint: Some multiples of seven are , and .    Which of these integers are prime? Note that , so each of these integers has a square root less than 11.         Hint: Evens.    Hint: is a multiple of three. Then count by three.    Hint: Ends in zero or five.    Hint: is a multiple of seven. The next multiple of seven is .    Hint: There are four integers remaining.       Practice       Make a grid showing the integers 1-49 in rows of seven. Use this process explained in to cross out one and all composite integers and to circle all prime integers.    Use your answer to to list all primes less than 50.         Hint: In the first row, one, four, and six should be crossed out.    Hint: Compare your answers to the list from .       Understand    In , we found all primes less than 100. The only prime divisors we used to cross out numbers were two, three, five, and seven.   Why did we stop there (versus checking 11, 13, etc.)? Hint: Cite a relevant theorem.    Notice that the primes we checked were in the top row (1-10). We used 1-10 for a specific reason. What is that reason?    If we wanted to use a Sieve of Eratosthenes to find all primes up to 225, how many integers should we have in the top row?    Which prime divisors would we use to cross out numbers if we were building a Sieve up to 225?         Hint: .    Hint: .    15    Hint: Less than 15.       Understand    As we saw in , Mersenne conjectured that integers of the form are prime whenever is prime. Primes of this form are Mersenne primes.   Without using computational technology, check that , and are prime. Note that . (If you do not know this power yet, work on learning the powers of two.)    Note that is composite. Explain why this example does not contradict Mersenne's conjecture.    Prove that Mersenne was mistaken by finding a prime where is a composite. Yes, this question repeats  .    Use the Internet to find the largest known Mersenne prime today. Cite your source (webpage).         Hint: three, seven, and 21 are prime (see ). For 127 check if it is a multiple of two, three, five, seven, and 11.    6 is not prime.    Hint: Evaluate , , , and stop when you find a composite.    Hint: As of September 2025, the most recently found example was from October 2024.       Understand       Explain why if , then . Hint: Write in more detail than usual as .    Explain why it follows that the integer is composite for .    Explain how it follows that for any integer , there are at least consecutive composite integers.        Recap   Do you know    What the definition of prime is?    How to show that an integer is composite?    Whether the integer one is prime, composite, both, or neither?    How to identify prime integers using the Sieve of Eratosthenes?        Explore   Go to \\url{https:\/\/tinyurl.com\/monsters100}. Explain how the monsters for 6, 8, and 9 are built from the prime monsters. Be specific. These illustrations are from the children's book You Can Count on Monsters: The First 100 Numbers and Their Characters by Richard Schwartz who is a mathematics professor at Brown University. Dr. Schwartz is also the author of the visualizing divisors animation from .      Explore   Go to \\url{http:\/\/www.divisorplot.com\/} and look at the divisor plot. To get it to restart, click on Introductory . You can control the scroll speed at the bottom of the page, including stopping the scroll, by deselecting the scroll option.   What is the animation showing?    How can you see if a number is prime?    How can you see if a number is a perfect square?        Explore   Consider the graph whose vertices are where there is an edge between distinct vertices and if or .   Evaluate the degree of vertices one, five, and 12. Justify your answers.    Evaluate the degree of vertices 41 and 53. Note that 41 and 53 are prime.Justify your answers.    Recall that a leaf is a vertex of degree one. How many leaves does have? You may want to look at . Again, justify your answer.       Note that edges connect two distinct integers. For example, even though , there is no edge between one and itself.   Hint: . For 5 and 12, count divisors and multiples.    Hint: 41 and 53 have different degrees.    Hint: If , then .        Explore    Explain why for any composite , we can find integers and such that and , but . Note that such integers and are zero divisors in , as defined in Exercise in .     Explore   In this exercise, we explore . You are welcome to use computational technology to evaluate powers and mod , such as the website \\url{https:\/\/planetcalc.com\/8977\/}.   Calculate , , and .    Calculate , , ,and .    Calculate , , , , and .    Calculate , , , , , and .    What can you say about when is prime? Does the same hold when is not prime?         Exercises for Prime Factorization   Practice   Use a factor tree to find the prime factorization of each integer. You may use the list of primes from as needed.   32    200    105    656       Do not forget to draw the tree.        Hint: The prime factorization includes only two primes: two and five.    Hint: The prime factorization includes exactly three primes.        Understand       Without using computational technology, find the prime factorization of . Hint: Use .    Without using computational technology, find the prime factorization of . Hint: Use .        Understand   On this exercise, do not use computational technology.   Find the prime factorization of Show some work. You may use the list of primes from .    Conjecture the number of zeros at the end of and explain your reasoning.         Hint: The answer is of the form . Find the correct values of , , , and .    Hint: Count the fives.       Recap   Do you know    How to use a factor tree to find the prime factorization of an integer?    What the standard form of the prime factorization is?    What the Fundamental Theorem of Arithmetic says?        Explore       The natural number is a (perfect) square if for some integer . Find the prime factorization of each square , , and     What can you say about the prime factorization of a square? Hint: If you do not recognize a pattern, try simplifying .    The natural number is a (perfect) cube if for some integer . Find the prime factorization of each cube , , and .    What can you say about the prime factorization of a cube? Hint: If you do not recognize a pattern, try simplifying .         Hint: .    Hint: Look at the exponents of the prime factorization.    Hint: .    Hint: Look at the exponents of the prime factorization.       Explore    An integer is square-free if every prime in its prime factorization is raised to the first power. For example, is square-free, but is not square-free.   Use prime factorization to show that 105 and 106 are square-free.    Use prime factorization to show that 80 and 90 are not square-free.    Explain why if an integer is not square-free, then it is divisible by for some prime .        Explore    By the uniqueness of the prime factorization , any integer can be expressed in the form where is an integer and is an odd integer. The 2-part of is . For example, the 2-part of 60 is 4 because where 15 is odd and . Show how to use the prime factorization of each integer to calculate its 2-part.   1,000    1,024    1,025         Exercises for Detour: Listing and Counting Divisors   Practice    Make a table as in to list the positive divisors of each integer. You may leave the divisors in prime-factored form                       Hint: The divisors are , and .    Hint: Use columns labeled and rows labeled .    Hint: There are nine divisors.       Practice   In this exercise, use the prime factorization to count the number of positive divisors. You do not need to list the divisors or make a table of divisors, but you might want to think about the dimensions of the table.   How many positive divisors does have?    How many positive divisors does have?    How many positive divisors does have?    How many positive divisors does have?         Five    Hint: The table will have four columns and two rows.    Hint: The table will have three columns and four rows.    Hint: Count columns and rows.       Understand   Primes have exactly two positive divisors. We saw in , that an integer where is a prime has exactly three positive divisors and an integer where is a prime has exactly four positive divisors.   If is an integer with exactly three positive divisors, what can we say about the prime factorization of ?    Give an example of an integer that has exactly four positive divisors, but for any prime .         Hint: Four and nine are examples.    Hint: Try small values of .       Understand       If an integer has exactly seven positive divisors, what is the form of its prime factorization? Hint: The table of divisors must be .    If an integer has exactly eight positive divisors, what are the two possible forms of its prime factorization? Hint: The table of divisors could be or .         Hint: There can only be one prime divisor.    Hint: Integers with an table have one prime divisor and integers with a table have two prime divisors.       Understand   On this exercise, do not use computational technology.   Make a table as in to list the positive divisors of . You may leave the divisors in prime-factored form.    How many positive divisors does have? Note that you do not need to list them or make a table.        Recap   Do you know    How to organize the positive divisors of an integer into tables based on the prime factorization of the integer?    How to count the number of positive divisors of an integer from its prime factorization?    How to construct examples of integers having a certain number of positive divisors?        Explore       If an integer has exactly 12 positive divisors, what are the four possible forms of its prime factorization? Hint: The table could be , , , or .    There are five integers between one and 100 that have exactly 12 divisors. Find them. That means without using any resources! Be sure to show some work.         "
},
{
  "id": "sec_primes-2-1",
  "level": "2",
  "url": "sec_primes.html#sec_primes-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Primes prime factorization "
},
{
  "id": "act_viz_divisors",
  "level": "2",
  "url": "sec_primes.html#act_viz_divisors",
  "type": "Activity",
  "number": "1.4.A",
  "title": "Visualizing divisors.",
  "body": " Visualizing divisors  We begin our discussion of primes with a visualization of divisors.   Watch the animation at \\url{tinyurl.com\/vizdivisors}.    Draw the circle pictures from the animation for integers 1-12. You are welcome to draw dots instead of circles.    Draw the circle pictures from the animation for the integers 81 and 100.    What can you say about an integer whose representation is a circle?    In words, explain how the visualization is determined from the number.     "
},
{
  "id": "defn_prime",
  "level": "2",
  "url": "sec_primes.html#defn_prime",
  "type": "Definition",
  "number": "1.4.1",
  "title": "Prime.",
  "body": " Prime       A positive integer is prime if its only positive divisors are one and . For example, two, three, and five are prime. Note that one is not considered prime.    A positive integer is composite if it is not prime. For example, four is composite because its positive divisors are one, two, and four, not just one and four. Note that one is also not composite.    The terms prime and composite are adjectives (used to describe an integer) and nouns (a type of integer).    The integer is a nontrivial positive divisor of if and . For example, 2 is a nontrivial positive divisor of 4. In general, an integer is composite if it has a nontrivial divisor, and an integer is prime if it does not have any nontrivial positive divisors.      "
},
{
  "id": "exam_show_prime",
  "level": "2",
  "url": "sec_primes.html#exam_show_prime",
  "type": "Example",
  "number": "1.4.2",
  "title": "Show an integer is prime or composite.",
  "body": " Show an integer is prime or composite       Show that the integer seven is prime.  We can check that (for example, by calculating which is not an integer), , , , and . Therefore, the only positive divisors of seven are one and seven. Thus, seven is prime.      Show that the integer 99 is composite.  We could list all the divisors of 99, but that is not necessary. We just need one nontrivial positive divisor of 99. For example, and so . That is, 9 is a nontrivial positive divisor of 99. Thus, 99 is composite.        "
},
{
  "id": "thm_show_is_prime",
  "level": "2",
  "url": "sec_primes.html#thm_show_is_prime",
  "type": "Theorem",
  "number": "1.4.3",
  "title": "Show an integer is prime.",
  "body": " Show an integer is prime   Let be an integer.   Let be a prime. If is not a divisor of , then no multiple of is a divisor of .    If has no nontrivial positive divisors less than or equal to , then is prime.      "
},
{
  "id": "exam_sieve",
  "level": "2",
  "url": "sec_primes.html#exam_sieve",
  "type": "Example",
  "number": "1.4.4",
  "title": "Sieve of Eratosthenes.",
  "body": " Sieve of Eratosthenes   Use the Sieve of Eratosthenes to show that 97 is prime.    We start with a grid showing the integers 1-100 in rows of 10 in . We plan to cross out one and all composite integers and to circle all prime integers.  To begin we cross out one, circle two, and then cross out every other number thereafter, which are the even integers. Because an even integer has positive divisor two, the only prime even integer is two itself. Next, circle three and then cross out every third number thereafter, which are the multiples of three. Repeat the process for the next two integers that have not yet been crossed out, five and then seven. Since each integer in the top row is crossed out or circled, circle all the remaining integers that have not been crossed out to get the grid shown in .(You can watch this algorithm in action at \\url{https:\/\/www.youtube.com\/watch?v=V08g_lkKj6Q}.)   Sieve of Eratosthenes    \\xcancel{ 1}  \\circled{2}  \\circled{3}  \\xcancel{ 4}  \\circled{5}  \\xcancel{ 6}  \\circled{7}  \\xcancel{ 8}  \\xcancel{ 9}  \\xcancel{10}    \\circled{11}  \\xcancel{12}  \\circled{13}  \\xcancel{14}  \\xcancel{15}  \\xcancel{16}  \\circled{17}  \\xcancel{18}  \\circled{19}  \\xcancel{20}    \\xcancel{21}  \\xcancel{22}  \\circled{23}  \\xcancel{24}  \\xcancel{25}  \\xcancel{26}  \\xcancel{27}  \\xcancel{28}  \\circled{29}  \\xcancel{30}    \\circled{31}  \\xcancel{32}  \\xcancel{33}  \\xcancel{34}  \\xcancel{35}  \\xcancel{36}  \\circled{37}  \\xcancel{38}  \\xcancel{39}  \\xcancel{40}    \\circled{41}  \\xcancel{42}  \\circled{43}  \\xcancel{44}  \\xcancel{45}  \\xcancel{46}  \\circled{47}  \\xcancel{48}  \\xcancel{49}  \\xcancel{50}    \\xcancel{51}  \\xcancel{52}  \\circled{53}  \\xcancel{54}  \\xcancel{55}  \\xcancel{56}  \\xcancel{57}  \\xcancel{58}  \\circled{59}  \\xcancel{60}    \\circled{61}  \\xcancel{62}  \\xcancel{63}  \\xcancel{64}  \\xcancel{65}  \\xcancel{66}  \\circled{67}  \\xcancel{68}  \\xcancel{69}  \\xcancel{70}    \\circled{71}  \\xcancel{72}  \\circled{73}  \\xcancel{74}  \\xcancel{75}  \\xcancel{76}  \\xcancel{77}  \\xcancel{78}  \\circled{79}  \\xcancel{80}    \\xcancel{81}  \\xcancel{82}  \\circled{83}  \\xcancel{84}  \\xcancel{85}  \\xcancel{86}  \\xcancel{87}  \\xcancel{88}  \\circled{89}  \\xcancel{90}    \\xcancel{91}  \\xcancel{92}  \\xcancel{93}  \\xcancel{94}  \\xcancel{95}  \\xcancel{96}  \\circled{97}  \\xcancel{98}  \\xcancel{99}  \\xcancel{100}     Notice that nowhere in this process do we divide, we only skip-count.  Skip-counting is the process of counting by a number greater than 1. How do we know that the circled integers are prime? Each of these integers is not divisible by two, three, five, or seven since we crossed out all the multiples of two, three, five, or seven. By  , each of these integers is not divisible by four, six, eight, or 10 because two was not a divisor and is not divisible by nine because three was not a divisor. That is, each of these integers are not divisible by , or . By  and since , each of these remaining integers must be prime.  In particular, 97 is prime.   "
},
{
  "id": "act_prime_composite",
  "level": "2",
  "url": "sec_primes.html#act_prime_composite",
  "type": "Activity",
  "number": "1.4.B",
  "title": "Primes and composites.",
  "body": " Primes and composites      Without using any computational technology, show that each of the following integers is composite: .    Using computational technology, check that and . What can you conclude about the integers 323 and 329?    Using computational technology, check that is not divisible by , and that . What can you conclude about the integer 331?    In the mid-17th century Marin Mersenne conjectured that If is prime, then is prime. Prove that he was mistaken by finding a prime where is a composite.     "
},
{
  "id": "exam_factor120",
  "level": "2",
  "url": "sec_primes.html#exam_factor120",
  "type": "Example",
  "number": "1.4.6",
  "title": "Factoring 120.",
  "body": " Factoring 120   Factor 120 as much as possible.   An easy factorization is . Since both 12 and 10 are composite, they can be factored nontrivially. For example, and . Now, two and five are prime so they cannot be further factored, but six is composite and . Since two and three are prime, no further factorization is possible. This factorization is shown in the factor tree in , and we have circled the prime factors. Putting our work together, we can write .   A factor tree for the integer .        "
},
{
  "id": "defn_prime_fact",
  "level": "2",
  "url": "sec_primes.html#defn_prime_fact",
  "type": "Definition",
  "number": "1.4.8",
  "title": "Prime factorization.",
  "body": " Prime factorization       A prime factorization of a positive integer is a product of primes equal to . For example, a prime factorization of 120 is . Note that a prime is its own prime factorization. For example, a prime factorization of is .    We often group repeat primes together and write primes in increasing order to write a prime factorization of in standard order as where are distinct primes with and are positive integer exponents. For example, a prime factorization of 120 in standard order is .    The integer 1 does not have a prime factorization, but occasionally we refer to 1 as the prime factorization of 1 because it fits the format with all exponents ( ) set equal to 0.      "
},
{
  "id": "thm_FTOArith",
  "level": "2",
  "url": "sec_primes.html#thm_FTOArith",
  "type": "Theorem",
  "number": "1.4.9",
  "title": "Fundamental Theorem of Arithmetic.",
  "body": " Fundamental Theorem of Arithmetic   Each integer can be expressed as the product of primes, and when written in standard order, this prime factorization is unique.   "
},
{
  "id": "act_prime_fact",
  "level": "2",
  "url": "sec_primes.html#act_prime_fact",
  "type": "Activity",
  "number": "1.4.C",
  "title": "Prime factorization.",
  "body": " Prime factorization   Do not use computational technology or other resources on this problem.   Use a factor tree to find the prime factorization of 120 starting with .    Use a factor tree to find the prime factorization of 72.    Find the prime factorization of . Hint: is already partially factored. Continue to factor it further.    Find the prime factorization of .    Find the prime factorization of 10! Hint: 10! is already partially factored. Continue to factor it further.    Find the power of 7 in the prime factorization of 15!    Find the highest power of 10 dividing 15! and explain how that information tells us how many zeros are at the end of 15! when 15! is multiplied exactly.     "
},
{
  "id": "exam_prime_fact",
  "level": "2",
  "url": "sec_primes.html#exam_prime_fact",
  "type": "Example",
  "number": "1.4.10",
  "title": "Prime factorization.",
  "body": " Prime factorization    Do not use computational technology or other resources on this problem.   Find the prime factorization of .  Note that is already partially factored. We can continue to factor it further using . We get . Note that we used to simplify .      Find the prime factorization of 12!  Note that is already partially factored. We can continue to factor it further using . We get .      Find the highest power of 10 dividing 12! and explain how that information tells us how many zeros are at the end of 12! when 12! is multiplied exactly.  The highest power of 5 that divides 12! is . To get a divisor of 10, we must have a . Therefore, the highest power of 10 that divides 12! is . Each power of 10 contributes one zero at the end of the number. Since there are two 10s, it follows that there are two zeros at the end of 12! when 12! is multiplied exactly. (By the way, we can use computational technology to check that 12! = 479,001,600 , which indeed ends with two zeros.)        "
},
{
  "id": "exam_list_divisors_from_prime_fact",
  "level": "2",
  "url": "sec_primes.html#exam_list_divisors_from_prime_fact",
  "type": "Example",
  "number": "1.4.11",
  "title": "Prime factorization of divisors.",
  "body": " Prime factorization of divisors       List the positive divisors of the integer 16. Compare the prime factorization of 16 with the prime factorization of its positive divisors.  The positive divisors of are and . The prime factorizations of these divisors are , and . We can display this list in a table. lists the divisors in prime factored form and then the divisors themselves.    The positive divisors of 16     1  2               1  1  2      \\hspace{1in}    1  2               1  1  2  4  8  16        List the positive divisors of the integer 50. Compare the prime factorization of 50 with the prime factorization of its positive divisors.  The positive divisors of are and . The prime factorizations of these divisors are and . lists the divisors in prime factored form and then the divisors themselves. Notice that going across a row of this table, we multiply by two and going down a column of this table, we multiply by five.    The positive divisors of 50     1  2         1  1  2         5  5              \\hspace{1in}    1  2         1  1  2         5  5  10         25  25  50        List the positive divisors of the integer 72. Compare the prime factorization of 72 with the prime factorization of its positive divisors.  The positive divisors of are and . The prime factorizations of these divisors are , and . lists the divisors in prime factored form and then the divisors themselves. Notice that going across a row of this table, we multiply by two and going down a column of this table, we multiply by three.   The positive divisors of 72     1  2             1  1  2             3  3                    \\hspace{1in}    1  2             1               3                             "
},
{
  "id": "act_list_count_divisors_using_prime_fact",
  "level": "2",
  "url": "sec_primes.html#act_list_count_divisors_using_prime_fact",
  "type": "Activity",
  "number": "1.4.D",
  "title": "Listing and counting divisors using prime factorization.",
  "body": " Listing and counting divisors using prime factorization      What are the possible prime factorizations of a divisor of ? List the positive divisors of the integer 64 in a table as in  . How many positive divisors does the integer 64 have?    What are the possible prime factorizations of a divisor of ? List the positive divisors of the integer 2,000 in a table as in  . You may leave the divisors in prime-factored form. How many positive divisors does the integer 2,000 have?    List the positive divisors of where is a prime. How many positive divisors does the integer have?    List the positive divisors of where is a prime. How many positive divisors does the integer have?    For a prime and positive integer , how many positive divisors does have? Check that your conjecture gives the same number of positive divisors of the integer 64 as found in .    Give an example of an integer with exactly 21 positive divisors. Hint: Use a power of a prime.    For distinct primes and , list the positive divisors of an integer in a table as in . How many positive divisors does have?    For distinct primes and , conjecture the number of positive divisors of .    Give an example of an integer with exactly 21 positive divisors, where that integer is not a power of a prime. Hint: What could the prime factorization be?     "
},
{
  "id": "exam_list_divisors_from_prime_fact_600",
  "level": "2",
  "url": "sec_primes.html#exam_list_divisors_from_prime_fact_600",
  "type": "Example",
  "number": "1.4.15",
  "title": "Prime factorization of divisors of the integer 600.",
  "body": " Prime factorization of divisors of the integer 600    List the positive divisors of the integer 600 using its prime factorization.    The prime factorization of the integer 600 is .  Since there are three prime divisors, we would need a 3-dimensional table which we can represent using three 2-dimensional tables based on the power of 5 in the divisor, as shown in . The list of divisors of 600 is, therefore .   The prime factorization of the positive divisors of 600    1  1  2             1  1  2             3  3      \\vspace{.25in}   5  1  2             1  5              3       \\vspace{.25in}    1  2             1               3          "
},
{
  "id": "exam_count_div_from_prime_fact",
  "level": "2",
  "url": "sec_primes.html#exam_count_div_from_prime_fact",
  "type": "Example",
  "number": "1.4.17",
  "title": "Counting divisors from the prime factorization.",
  "body": " Counting divisors from the prime factorization   In each part of this exercise, show how to count the number of divisors from the prime factorization.   How many positive divisors does the integer 16 have? Explain.  In  , we see that the positive divisors of have a prime factorization of the form where . There are five choices for . Thus, the integer 16 has five positive divisors.      How many positive divisors does the integer 50 have? Explain.  In  , we see that the positive divisors have a prime factorization of the form where and . There are two choices for and three choices for . Since steps multiply , the integer 50 has positive divisors.      How many positive divisors does the integer 72 have? Explain.  In  , we see that the positive divisors of have a prime factorization of the form where and . There are four choices for and three choices for . Since steps multiply , the integer 72 has positive divisors.      How many positive divisors does the integer 600 have? Explain.  In , we see that the positive divisors of have a prime factorization of the form where , , and . There are four choices for , two choices for , and three choices for . Since steps multiply , the integer 600 has positive divisors.        "
},
{
  "id": "thm_list_count_div_from_prime_fact",
  "level": "2",
  "url": "sec_primes.html#thm_list_count_div_from_prime_fact",
  "type": "Theorem",
  "number": "1.4.18",
  "title": "Listing and counting divisors using prime factorization.",
  "body": " Listing and counting divisors using prime factorization   Let be an integer with prime factorization where are distinct primes with and are positive integer exponents.   The positive divisors of are integers of the form where each exponent .    The integer has exactly positive divisors.      "
},
{
  "id": "exam_int_10div",
  "level": "2",
  "url": "sec_primes.html#exam_int_10div",
  "type": "Example",
  "number": "1.4.19",
  "title": "Integers with exactly 10 positive divisors.",
  "body": " Integers with exactly 10 positive divisors       Describe the possible prime factorizations of an integer that has exactly 10 positive divisors.  By , we are looking for an integer with prime factorization such that .  One possibility is that there is only one prime with and so . In that case, the prime factorization is . The corresponding table would be . The other possibility is that there are two primes, and where and and so and . In that case, the prime factorization is . The corresponding table would be .      What is the smallest integer having exactly 10 positive divisors?  The smallest integer of the form is . The smallest integer of the form is . Thus, the smallest integer having exactly 10 divisors is 48.        "
},
{
  "id": "exer_twin_primes",
  "level": "2",
  "url": "sec_primes.html#exer_twin_primes",
  "type": "",
  "number": "1",
  "title": "Practice.",
  "body": " Practice    If is prime and is also prime, then and are twin primes . Watch the animation at \\url{tinyurl.com\/vizdivisors} again and record ten pairs of twin primes. For example, 3 and 5 form one pair of twin primes.    Hint: The list begins with .   "
},
{
  "id": "exer_101_110_prime",
  "level": "2",
  "url": "sec_primes.html#exer_101_110_prime",
  "type": "",
  "number": "2",
  "title": "Practice.",
  "body": " Practice    Consider the integers .  Answer the following questions without using computational technology. Briefly justify your answers.   Which of these integers are a multiple of two (even)?    Which of these integers are a multiple of three? Hint: Some multiples of three are , and .    Which of these integers are a multiple of five?    Which of these integers are a multiple of seven? Hint: Some multiples of seven are , and .    Which of these integers are prime? Note that , so each of these integers has a square root less than 11.         Hint: Evens.    Hint: is a multiple of three. Then count by three.    Hint: Ends in zero or five.    Hint: is a multiple of seven. The next multiple of seven is .    Hint: There are four integers remaining.     "
},
{
  "id": "exer_sieve",
  "level": "2",
  "url": "sec_primes.html#exer_sieve",
  "type": "",
  "number": "3",
  "title": "Practice.",
  "body": " Practice       Make a grid showing the integers 1-49 in rows of seven. Use this process explained in to cross out one and all composite integers and to circle all prime integers.    Use your answer to to list all primes less than 50.         Hint: In the first row, one, four, and six should be crossed out.    Hint: Compare your answers to the list from .     "
},
{
  "id": "exer_extending_sieve",
  "level": "2",
  "url": "sec_primes.html#exer_extending_sieve",
  "type": "",
  "number": "4",
  "title": "Understand.",
  "body": " Understand    In , we found all primes less than 100. The only prime divisors we used to cross out numbers were two, three, five, and seven.   Why did we stop there (versus checking 11, 13, etc.)? Hint: Cite a relevant theorem.    Notice that the primes we checked were in the top row (1-10). We used 1-10 for a specific reason. What is that reason?    If we wanted to use a Sieve of Eratosthenes to find all primes up to 225, how many integers should we have in the top row?    Which prime divisors would we use to cross out numbers if we were building a Sieve up to 225?         Hint: .    Hint: .    15    Hint: Less than 15.     "
},
{
  "id": "exer_mersenne_primes",
  "level": "2",
  "url": "sec_primes.html#exer_mersenne_primes",
  "type": "",
  "number": "5",
  "title": "Understand.",
  "body": " Understand    As we saw in , Mersenne conjectured that integers of the form are prime whenever is prime. Primes of this form are Mersenne primes.   Without using computational technology, check that , and are prime. Note that . (If you do not know this power yet, work on learning the powers of two.)    Note that is composite. Explain why this example does not contradict Mersenne's conjecture.    Prove that Mersenne was mistaken by finding a prime where is a composite. Yes, this question repeats  .    Use the Internet to find the largest known Mersenne prime today. Cite your source (webpage).         Hint: three, seven, and 21 are prime (see ). For 127 check if it is a multiple of two, three, five, seven, and 11.    6 is not prime.    Hint: Evaluate , , , and stop when you find a composite.    Hint: As of September 2025, the most recently found example was from October 2024.     "
},
{
  "id": "exer_consecutive_composites",
  "level": "2",
  "url": "sec_primes.html#exer_consecutive_composites",
  "type": "",
  "number": "6",
  "title": "Understand.",
  "body": " Understand       Explain why if , then . Hint: Write in more detail than usual as .    Explain why it follows that the integer is composite for .    Explain how it follows that for any integer , there are at least consecutive composite integers.      "
},
{
  "id": "exer_dyk_primes",
  "level": "2",
  "url": "sec_primes.html#exer_dyk_primes",
  "type": "",
  "number": "7",
  "title": "Recap.",
  "body": " Recap   Do you know    What the definition of prime is?    How to show that an integer is composite?    Whether the integer one is prime, composite, both, or neither?    How to identify prime integers using the Sieve of Eratosthenes?      "
},
{
  "id": "sec_primes-6-2-9",
  "level": "2",
  "url": "sec_primes.html#sec_primes-6-2-9",
  "type": "",
  "number": "8",
  "title": "Explore.",
  "body": " Explore   Go to \\url{https:\/\/tinyurl.com\/monsters100}. Explain how the monsters for 6, 8, and 9 are built from the prime monsters. Be specific. These illustrations are from the children's book You Can Count on Monsters: The First 100 Numbers and Their Characters by Richard Schwartz who is a mathematics professor at Brown University. Dr. Schwartz is also the author of the visualizing divisors animation from .    "
},
{
  "id": "exer_divisor_plot",
  "level": "2",
  "url": "sec_primes.html#exer_divisor_plot",
  "type": "",
  "number": "9",
  "title": "Explore.",
  "body": " Explore   Go to \\url{http:\/\/www.divisorplot.com\/} and look at the divisor plot. To get it to restart, click on Introductory . You can control the scroll speed at the bottom of the page, including stopping the scroll, by deselecting the scroll option.   What is the animation showing?    How can you see if a number is prime?    How can you see if a number is a perfect square?      "
},
{
  "id": "exer_divides_graph_1to100",
  "level": "2",
  "url": "sec_primes.html#exer_divides_graph_1to100",
  "type": "",
  "number": "10",
  "title": "Explore.",
  "body": " Explore   Consider the graph whose vertices are where there is an edge between distinct vertices and if or .   Evaluate the degree of vertices one, five, and 12. Justify your answers.    Evaluate the degree of vertices 41 and 53. Note that 41 and 53 are prime.Justify your answers.    Recall that a leaf is a vertex of degree one. How many leaves does have? You may want to look at . Again, justify your answer.       Note that edges connect two distinct integers. For example, even though , there is no edge between one and itself.   Hint: . For 5 and 12, count divisors and multiples.    Hint: 41 and 53 have different degrees.    Hint: If , then .      "
},
{
  "id": "exer_zero_div_mod_composite",
  "level": "2",
  "url": "sec_primes.html#exer_zero_div_mod_composite",
  "type": "",
  "number": "11",
  "title": "Explore.",
  "body": " Explore    Explain why for any composite , we can find integers and such that and , but . Note that such integers and are zero divisors in , as defined in Exercise in .   "
},
{
  "id": "exer_fermat_little",
  "level": "2",
  "url": "sec_primes.html#exer_fermat_little",
  "type": "",
  "number": "12",
  "title": "Explore.",
  "body": " Explore   In this exercise, we explore . You are welcome to use computational technology to evaluate powers and mod , such as the website \\url{https:\/\/planetcalc.com\/8977\/}.   Calculate , , and .    Calculate , , ,and .    Calculate , , , , and .    Calculate , , , , , and .    What can you say about when is prime? Does the same hold when is not prime?      "
},
{
  "id": "exer_factor_trees",
  "level": "2",
  "url": "sec_primes.html#exer_factor_trees",
  "type": "",
  "number": "13",
  "title": "Practice.",
  "body": " Practice   Use a factor tree to find the prime factorization of each integer. You may use the list of primes from as needed.   32    200    105    656       Do not forget to draw the tree.        Hint: The prime factorization includes only two primes: two and five.    Hint: The prime factorization includes exactly three primes.      "
},
{
  "id": "exer_prime_fact__powers",
  "level": "2",
  "url": "sec_primes.html#exer_prime_fact__powers",
  "type": "",
  "number": "14",
  "title": "Understand.",
  "body": " Understand       Without using computational technology, find the prime factorization of . Hint: Use .    Without using computational technology, find the prime factorization of . Hint: Use .      "
},
{
  "id": "exer_prime_fact_25_",
  "level": "2",
  "url": "sec_primes.html#exer_prime_fact_25_",
  "type": "",
  "number": "15",
  "title": "Understand.",
  "body": " Understand   On this exercise, do not use computational technology.   Find the prime factorization of Show some work. You may use the list of primes from .    Conjecture the number of zeros at the end of and explain your reasoning.         Hint: The answer is of the form . Find the correct values of , , , and .    Hint: Count the fives.     "
},
{
  "id": "exer_dyk_prime_fact",
  "level": "2",
  "url": "sec_primes.html#exer_dyk_prime_fact",
  "type": "",
  "number": "16",
  "title": "Recap.",
  "body": " Recap   Do you know    How to use a factor tree to find the prime factorization of an integer?    What the standard form of the prime factorization is?    What the Fundamental Theorem of Arithmetic says?      "
},
{
  "id": "exer_prime_fact_sq_cube",
  "level": "2",
  "url": "sec_primes.html#exer_prime_fact_sq_cube",
  "type": "",
  "number": "17",
  "title": "Explore.",
  "body": " Explore       The natural number is a (perfect) square if for some integer . Find the prime factorization of each square , , and     What can you say about the prime factorization of a square? Hint: If you do not recognize a pattern, try simplifying .    The natural number is a (perfect) cube if for some integer . Find the prime factorization of each cube , , and .    What can you say about the prime factorization of a cube? Hint: If you do not recognize a pattern, try simplifying .         Hint: .    Hint: Look at the exponents of the prime factorization.    Hint: .    Hint: Look at the exponents of the prime factorization.     "
},
{
  "id": "exer_squarefree",
  "level": "2",
  "url": "sec_primes.html#exer_squarefree",
  "type": "",
  "number": "18",
  "title": "Explore.",
  "body": " Explore    An integer is square-free if every prime in its prime factorization is raised to the first power. For example, is square-free, but is not square-free.   Use prime factorization to show that 105 and 106 are square-free.    Use prime factorization to show that 80 and 90 are not square-free.    Explain why if an integer is not square-free, then it is divisible by for some prime .      "
},
{
  "id": "exer_2part",
  "level": "2",
  "url": "sec_primes.html#exer_2part",
  "type": "",
  "number": "19",
  "title": "Explore.",
  "body": " Explore    By the uniqueness of the prime factorization , any integer can be expressed in the form where is an integer and is an odd integer. The 2-part of is . For example, the 2-part of 60 is 4 because where 15 is odd and . Show how to use the prime factorization of each integer to calculate its 2-part.   1,000    1,024    1,025      "
},
{
  "id": "exer_list_divisors_1or2_primes",
  "level": "2",
  "url": "sec_primes.html#exer_list_divisors_1or2_primes",
  "type": "",
  "number": "20",
  "title": "Practice.",
  "body": " Practice    Make a table as in to list the positive divisors of each integer. You may leave the divisors in prime-factored form                       Hint: The divisors are , and .    Hint: Use columns labeled and rows labeled .    Hint: There are nine divisors.     "
},
{
  "id": "exer_countdiv_no_list",
  "level": "2",
  "url": "sec_primes.html#exer_countdiv_no_list",
  "type": "",
  "number": "21",
  "title": "Practice.",
  "body": " Practice   In this exercise, use the prime factorization to count the number of positive divisors. You do not need to list the divisors or make a table of divisors, but you might want to think about the dimensions of the table.   How many positive divisors does have?    How many positive divisors does have?    How many positive divisors does have?    How many positive divisors does have?         Five    Hint: The table will have four columns and two rows.    Hint: The table will have three columns and four rows.    Hint: Count columns and rows.     "
},
{
  "id": "exer_int_3or4_div",
  "level": "2",
  "url": "sec_primes.html#exer_int_3or4_div",
  "type": "",
  "number": "22",
  "title": "Understand.",
  "body": " Understand   Primes have exactly two positive divisors. We saw in , that an integer where is a prime has exactly three positive divisors and an integer where is a prime has exactly four positive divisors.   If is an integer with exactly three positive divisors, what can we say about the prime factorization of ?    Give an example of an integer that has exactly four positive divisors, but for any prime .         Hint: Four and nine are examples.    Hint: Try small values of .     "
},
{
  "id": "exer_integers_7or8_divisors",
  "level": "2",
  "url": "sec_primes.html#exer_integers_7or8_divisors",
  "type": "",
  "number": "23",
  "title": "Understand.",
  "body": " Understand       If an integer has exactly seven positive divisors, what is the form of its prime factorization? Hint: The table of divisors must be .    If an integer has exactly eight positive divisors, what are the two possible forms of its prime factorization? Hint: The table of divisors could be or .         Hint: There can only be one prime divisor.    Hint: Integers with an table have one prime divisor and integers with a table have two prime divisors.     "
},
{
  "id": "exer_table_divisors_3primes",
  "level": "2",
  "url": "sec_primes.html#exer_table_divisors_3primes",
  "type": "",
  "number": "24",
  "title": "Understand.",
  "body": " Understand   On this exercise, do not use computational technology.   Make a table as in to list the positive divisors of . You may leave the divisors in prime-factored form.    How many positive divisors does have? Note that you do not need to list them or make a table.      "
},
{
  "id": "exer_dyk_list_count_div",
  "level": "2",
  "url": "sec_primes.html#exer_dyk_list_count_div",
  "type": "",
  "number": "25",
  "title": "Recap.",
  "body": " Recap   Do you know    How to organize the positive divisors of an integer into tables based on the prime factorization of the integer?    How to count the number of positive divisors of an integer from its prime factorization?    How to construct examples of integers having a certain number of positive divisors?      "
},
{
  "id": "exer_integers_12divisors",
  "level": "2",
  "url": "sec_primes.html#exer_integers_12divisors",
  "type": "",
  "number": "26",
  "title": "Explore.",
  "body": " Explore       If an integer has exactly 12 positive divisors, what are the four possible forms of its prime factorization? Hint: The table could be , , , or .    There are five integers between one and 100 that have exactly 12 divisors. Find them. That means without using any resources! Be sure to show some work.      "
},
{
  "id": "sec_gcd",
  "level": "1",
  "url": "sec_gcd.html",
  "type": "Section",
  "number": "1.5",
  "title": "Greatest Common Divisor",
  "body": " Greatest Common Divisor   The greatest common divisor has many applications. For example, in public key encryption the encoding and decoding keys need to be coprime and the algorithm requires finding solutions to in (introduced in ), which also uses the greatest common divisor. The greatest common divisor also has applications Google. Response to \"What are some applications of the greatest common divisor?\" Gemini 1.0, September 14, 2025. to scheduling, synchronization, and resource allocation.    Greatest Common Divisor  We begin with the definition.   Greatest common divisor       For integers and , a common divisor of and is an integer such that and . For example, the integer three is a common divisor of 12 and 18.    For integers and , not both 0, the greatest common divisor of and , denoted gcd , is the largest integer dividing both and . For example, in we show that gcd and gcd .    Note that the integer one is always a common divisor of any integers and , and so . It is possible for if are the only common divisors of and . If , then and are coprime (or relatively prime ). For example, in we show that 4 and 15 are coprime. Recall that a fraction is in lowest terms if its numerator and denominator are coprime, as in .       Let's use the definition to find the greatest common divisor.   Calculating by listing divisors   Find each greatest common divisor by listing the divisors and common divisors.    gcd    lists the divisors of 4 and 6. Their common divisors are and . The greatest of their common divisors is gcd .    Divisors of 4, 6, and 15    divisors of 4:  1, 2, 4    divisors of 6:  1, 2, 3, 6    divisors of 15:  1, 3, 5, 15         gcd   Similarly, lists the divisors of 6 and 15. Their common divisors are and . The greatest of their common divisors is gcd .       gcd    lists the divisors of 4 and 15. Their common divisors are . The greatest of their common divisors is gcd .         Try calculating greatest common divisors.   Greatest common divisor  Do not use computational technology except to check.   Calculate gcd by listing the divisors and common divisors.    Show that 15 and 22 are coprime by listing the divisors and common divisors.    Find an example of two odd integers that are coprime.    Find an example of two odd integers that are not coprime.    Can two even integers be coprime? Explain.      Note that listing all divisors of an integer is computationally nontrivial for large integers, and so this method for finding the greatest common divisor is not efficient. As we saw in , we can list the divisors of an integer from its prime factorization. Therefore, it is possible to compute the greatest common divisor of two integers from their prime factorizations. Note that finding the prime factorization of an integer is computationally nontrivial for large integers, and so this method for finding the greatest common divisor is also not efficient. Let's look at an example anyway.   Using prime factorization to calculate   Use the prime factorization of and to calculate .    The positive divisors of 252 are integers of the form where , , and . The positive divisors of 3,000 are integers of the form where , , and . Observe that . Therefore, no divisor of 252 is divisible by five. Similarly, . Therefore, no divisor of 3,000 is divisible by seven. The only other prime divisors are two and three, so the common divisors of 252 and 3,000 are integers of the form . The highest power of two that divides 252 is and the highest power of three that divides 3,000 is . Therefore, and . The largest such integer is . Thus, .      The Euclidean Algorithm  The greatest common divisor is useful but difficult to compute directly, either by listing the divisors or by finding and using the prime factorizations. Fortunately, there is an efficient algorithm for computing the greatest common divisor, the Euclidean Algorithm. The Euclidean Algorithm is certainly on any top ten list of mathematical algorithms of all time Others on my list include Newton's Method (for approximating roots of differentiable functions), Gauss-Jordan Elimination (for solving systems of linear equations), the Simplex Method (for linear optimization), Metropolis Algorithm (and Monte Carlo Markov Chain methods) for optimization in general, QR Algorithm (for finding eigenvalues), Fast Fourier Transforms (for writing functions as sums of periodic functions), Dijkstra's Algorithm (for finding minimum spanning trees in a graph), RSA Encription Algorithm (for public key cryptosystems), Data Compression Algorithms (for example using Singular Value Decomposition), not to mention a host of computer science algorithms such as quicksort and other sorting algorithms. and is one of the oldest, dating back to Euclid (circa 300 BCE).  What drives the Euclidean Algorithm are the following key observations.   Key observations for Euclidean Algorithm       Given positive integers and with , we have .    Since and , the second gcd involves smaller positive integers.    For any positive integer , we have gcd .       We leave the proofs of these observations for Exercise and Exercise . The algorithm repeatedly applies  , which by gives smaller positive remainders at each step. After a finite number of steps, we are left with zero, which allows us to stop by .  Here is an example using the Euclidean Algorithm.   Using the Euclidean Algorithm   Use the Euclidean Algorithm to calculate .    First, divide 240 by 100 to get .  By  , it follows that .  Next, divide 100 by 40 to get .  By  , it follows that .  Last, divide 40 by 20 to get .  By  and , it follows that .  Therefore, .    Practice using the Euclidean Algorithm.   Euclidean Algorithm  Do not use computational technology except to check.   When we use the Euclidean Algorithm to calculate gcd we get   Write the corresponding statement about gcd for each step and state the final answer.    Use the Euclidean Algorithm to calculate gcd . Hint:         Coprime Integers  Many of the applications of the greatest common divisor use coprimality. The Euclidean Algorithm provides an efficient way to check if two integers are coprime, but we start with an example exploring how the prime factors can be used to determine if two integers are coprime to illustrate some of the theory.   Showing two integers are coprime using their prime factors       Explain why distinct primes and are coprime.  The positive divisors of are 1 and , while the positive divisors of are 1 and . Since , their only common positive divisor is 1 and so .      Explain why the integers and are coprime when and are distinct primes.  The positive divisors of are 1, , ,  while the positive divisors of are 1, , , , . Since are primes, it follows from the uniqueness of prime factorization that the only common positive divisor of and is 1 and so .      Explain why if is odd, then 16 and are coprime.  The divisors of 16 are , , , , and . Since is odd, we know . By  , it follows that no even integer divides . All divisors of 16 are even, except for . Therefore, the only common divisors of 16 and are and so .      Explain why if and , then 15 and are coprime.  The only positive divisors of 15 are 1, 3, 5, and 15. Since and , it follows that also and so the only common positive divisor of 15 and is 1.         It is interesting (and useful) to count the number of integers less than that are coprime to . We begin with a definition.   Euler's totient   The number of integers from 1 to that are coprime to is denoted . In this context, is Euler's toitent (or Euler's function ).  is the Greek letter phi, sometimes written as .     We compute as an example.   Calculating       Copy the list of integers . Cross off all multiples of three on that list. Cross off all multiples of five on that list. Circle the remaining integers.  The multiples of three are 3, 6, 9, 12, and 15. The multiples of five are 5, 10, and 15 again.       Calculate   By  these circled integers from are coprime to 15. Thus, the integers from one to 15 that are coprime to 15 are .  Since there are eight numbers on this list, it follows that .         Your turn to practice working with Euler's toitent.   Euler's phi function      Explain why if , then .    Copy the list of integers . Cross off all multiples of two on that list. Circle the remaining integers, which are not divisible by two and, therefore, are coprime to 8. Count to evaluate .    Explain why if and , then .    Copy the list of integers . Cross off all multiples of two and all multiples of five on that list. Circle the remaining integers, which are not divisible by two or five and, therefore, are coprime to 10. Count to evaluate .    Copy the list of integers . Use the method from and to find the list of integers coprime to 12 and evaluate .    Copy the list of integers . Use the method from and to find the list of integers coprime to seven and evaluate .     shows the values of for . Check your answers for , , , and .  The values of for     1  2  3  4  5  6  7  8  9  10  11  12  13  14  15  16                        1  1  2  2  4  2  6  4  6  4  10  4  12  6  8  8        Conjecture a formula for . Check your conjecture for by listing the integers from 1 to 32, crossing off the integers that are not coprime to 32, circling the remaining integers that are coprime to 32, and counting to evaluate .    Conjecture a formula for . Test your conjecture for by listing the integers from 1 to 27, crossing off the integers that are not coprime to 27, circling the remaining integers that are coprime to 27, and counting to evaluate .        Exercises   Exercises for Greatest Common Divisor   Practice   Calculate each greatest common divisor by listing the divisors and common divisors. Do not use computational technology.   Calculate gcd by listing the divisors and common divisors.    Calculate gcd by listing the divisors and common divisors.    Calculate gcd by listing the divisors and common divisors.         Hint: gcd .    Hint: The only divisors of 7 are .    Hint: They are coprime.       Practice   Show each pair of integers is coprime by listing the divisors and common divisors. Do not use computational technology.   8 and 35    13 and 17    1 and 15        Understand       Give an example of two even integers whose greatest common divisor equals two. Do not use the same example as .    Give an example of two even integers whose greatest common divisor does not equal two.    What can you say about the greatest common divisor of two even integers? Be specific.         Hint: List divisors to check your answer. One strategy for finding an example is to use integers of the form and where and are distinct primes.    Hint: Choose two integers that are multiples of four.       Understand   Evaluate each greatest common divisor in terms of the positive integer and explain your reasoning.              Hint: For any nonzero integer we have and so it follows that . What does that tell you about the divisors of 0? This part proves  .       Hint: The answer to each part is one or .     Understand       Use and to list the common divisors of 72 and 600. You may leave the divisors in prime-factored form.    Use your list from to calculate .         Hint: Do not forget .    24       Understand       Explain why this statement is true: If and are distinct primes, then and are coprime.    Cicadas are insects that emerge from the ground in cycles of various lengths. Two common varieties in the central United States have cycles of 13 and 17 years. If cicadas do not want to emerge in the same years and compete for resources, why is it an advantage to have cycles that have coprime length?        Understand       Given a prime and an integer , what are the possible values of ? Hint: List the divisors of .    Describe your findings by copying and completing the conjecture. Given a prime and integer , either which happens when or which happens when .          Hint: The divisors of are and the greatest common divisor is always positive.    Hint: One case is .       Understand    Calculate each greatest common divisor using the prime factorization.                                Recap   Do you know    What means?    What the greatest common divisor is?    What coprime means?    How to evaluate gcd by listing divisors?    How to evaluate gcd from the prime factorization?        Explore   Explain how to find the greatest common divisor of two integers from their prime factorization. You may want to refer to Exercise for examples. Hint: One option is to explain in words. Another option is to write and where, as usual, are distinct primes and the exponents and then find a formula for the prime factorization of .     Explore       In the plane, graph the line segment from to . You are welcome to use DESMOS (\\url{https:\/\/www.desmos.com\/} to graph the line by writing the equation and setting an appropriate range such as and .    How many points on that line segment other than have integers in both coordinates? List them.    What does your answer to have to do with the greatest common divisor? State your answer as a conjecture.    Test your conjecture from by repeating parts and for the line segment from to .         Hint: The line is . Use the fractions in DESMOS. You can show the grid lines counting by and to help count the points.    Hint: Five points.    Hint: What is ?    Hint: It should work.       Explore   Consider the statement : For any positive integers , and : if and , then .   Give an example to show that is false. Hint: That is, find positive integers , , and such that and , but .    Is true when and ? Is true when and ? No justification required.    Conjecture when is true. Hint: Some relationship between and guarantees that is true.        Explore    An element of is a unit if there is a solution of in . Note that zero cannot be a unit because and one is always a unit because . In Exercise , we calculated the examples in .   The units in the integers mod for and 10     units in        5         6         8         10        Find the units in .    Conjecture which elements are units in when is prime.    Check that are units mod . Hint: Find a solution to for each of .    Check that is not a unit by checking for . Yes, that means writing the row for 9 in the multiplication table of . You may use computational technology to calculate mod 12.    Conjecture which integers have the property that is a unit in . Hint: your answer should involve and .        Exercises for The Euclidean Algorithm   Practice   Use the Euclidean Algorithm to calculate each greatest common divisor. Start with equal to the largest of the two integers.                        , , and so .    Five    Hint: They are coprime.       Understand   We saw the Fibonacci numbers in the Squares and Dominoes puzzle . Something strange happens when we use the Euclidean Algorithm to calculate the greatest common divisor of consecutive Fibonacci numbers.   Use the Euclidean Algorithm to calculate .    Use the Euclidean algorithm to calculate .    What do you notice about the answer in each case?    What do you notice about the process in each case?          , , , and , and so .    1    Hint: We got the same answer.    Hint: It takes a long time. (It might not surprise you to learn that Fibonacci numbers are a worst case scenario for the Euclidean Algorithm.)       Understand   Use the Euclidean Algorithm to calculate gcd , where is a fixed but unknown positive integer.     Understand   Use the Euclidean Algorithm to show that any two consecutive positive integers are coprime. Start by restating what we are trying to show in terms of a positive integer .     Recap   Do you know    What the Euclidean Algorithm calculates?    How to use the Euclidean Algorithm?         Exercises for Coprime Integers   Practice       Explain why if and , then and 28 are coprime.    Evaluate using the method from          Hint: List the divisors of .    Hint: Write . Cross out the multiples of two and the multiples of seven.       Practice    Evaluate each quantity using the method from .                          Hint: The answers in some order are six, eight, 16, and 18.     Understand       For any value of , what is the smallest value of , and which integers give that smallest value? No justification required.    For any specific integer , what is the largest value of in terms of , and which integers give that largest value? No justification required.         Hint: for exactly two values of .    Hint: The largest possible value is . Look at your findings in .       Recap   Do you know    Why we only need to check for common prime divisors to determine if two integers are coprime?    How to calculate Euler's totient function of an integer?        Explore       Look at  and . Generalize your conjecture to evaluate when is prime.    Test your conjecture by evaluating using the method from .        Explore    Justify your conjecture from Exercise by counting. Hint: Count the number of multiples of that are less than . What fraction of the integers from 1 to are not coprime to ? What (remaining) fraction of the integers from 1 to are coprime to ? Count the number of integers from 1 to that are coprime to , that is, calculate . Simplify your final answer.      "
},
{
  "id": "defn_gcd",
  "level": "2",
  "url": "sec_gcd.html#defn_gcd",
  "type": "Definition",
  "number": "1.5.1",
  "title": "Greatest common divisor.",
  "body": " Greatest common divisor       For integers and , a common divisor of and is an integer such that and . For example, the integer three is a common divisor of 12 and 18.    For integers and , not both 0, the greatest common divisor of and , denoted gcd , is the largest integer dividing both and . For example, in we show that gcd and gcd .    Note that the integer one is always a common divisor of any integers and , and so . It is possible for if are the only common divisors of and . If , then and are coprime (or relatively prime ). For example, in we show that 4 and 15 are coprime. Recall that a fraction is in lowest terms if its numerator and denominator are coprime, as in .      "
},
{
  "id": "exam_gcd_list_div",
  "level": "2",
  "url": "sec_gcd.html#exam_gcd_list_div",
  "type": "Example",
  "number": "1.5.2",
  "title": "Calculating <span class=\"process-math\">\\(\\fn{gcd}\\)<\/span> by listing divisors.",
  "body": " Calculating by listing divisors   Find each greatest common divisor by listing the divisors and common divisors.    gcd    lists the divisors of 4 and 6. Their common divisors are and . The greatest of their common divisors is gcd .    Divisors of 4, 6, and 15    divisors of 4:  1, 2, 4    divisors of 6:  1, 2, 3, 6    divisors of 15:  1, 3, 5, 15         gcd   Similarly, lists the divisors of 6 and 15. Their common divisors are and . The greatest of their common divisors is gcd .       gcd    lists the divisors of 4 and 15. Their common divisors are . The greatest of their common divisors is gcd .        "
},
{
  "id": "act_gcd",
  "level": "2",
  "url": "sec_gcd.html#act_gcd",
  "type": "Activity",
  "number": "1.5.A",
  "title": "Greatest common divisor.",
  "body": " Greatest common divisor  Do not use computational technology except to check.   Calculate gcd by listing the divisors and common divisors.    Show that 15 and 22 are coprime by listing the divisors and common divisors.    Find an example of two odd integers that are coprime.    Find an example of two odd integers that are not coprime.    Can two even integers be coprime? Explain.     "
},
{
  "id": "sub_gcd-9",
  "level": "2",
  "url": "sec_gcd.html#sub_gcd-9",
  "type": "Example",
  "number": "1.5.4",
  "title": "Using prime factorization to calculate <span class=\"process-math\">\\(\\fn{gcd}\\)<\/span>.",
  "body": " Using prime factorization to calculate   Use the prime factorization of and to calculate .    The positive divisors of 252 are integers of the form where , , and . The positive divisors of 3,000 are integers of the form where , , and . Observe that . Therefore, no divisor of 252 is divisible by five. Similarly, . Therefore, no divisor of 3,000 is divisible by seven. The only other prime divisors are two and three, so the common divisors of 252 and 3,000 are integers of the form . The highest power of two that divides 252 is and the highest power of three that divides 3,000 is . Therefore, and . The largest such integer is . Thus, .   "
},
{
  "id": "thm_Euclidean_algorithm",
  "level": "2",
  "url": "sec_gcd.html#thm_Euclidean_algorithm",
  "type": "Theorem",
  "number": "1.5.5",
  "title": "Key observations for Euclidean Algorithm.",
  "body": " Key observations for Euclidean Algorithm       Given positive integers and with , we have .    Since and , the second gcd involves smaller positive integers.    For any positive integer , we have gcd .      "
},
{
  "id": "exam_Euclidean_alg",
  "level": "2",
  "url": "sec_gcd.html#exam_Euclidean_alg",
  "type": "Example",
  "number": "1.5.6",
  "title": "Using the Euclidean Algorithm.",
  "body": " Using the Euclidean Algorithm   Use the Euclidean Algorithm to calculate .    First, divide 240 by 100 to get .  By  , it follows that .  Next, divide 100 by 40 to get .  By  , it follows that .  Last, divide 40 by 20 to get .  By  and , it follows that .  Therefore, .   "
},
{
  "id": "act_ea",
  "level": "2",
  "url": "sec_gcd.html#act_ea",
  "type": "Activity",
  "number": "1.5.B",
  "title": "Euclidean Algorithm.",
  "body": " Euclidean Algorithm  Do not use computational technology except to check.   When we use the Euclidean Algorithm to calculate gcd we get   Write the corresponding statement about gcd for each step and state the final answer.    Use the Euclidean Algorithm to calculate gcd . Hint:      "
},
{
  "id": "exam_coprime",
  "level": "2",
  "url": "sec_gcd.html#exam_coprime",
  "type": "Example",
  "number": "1.5.7",
  "title": "Showing two integers are coprime using their prime factors.",
  "body": " Showing two integers are coprime using their prime factors       Explain why distinct primes and are coprime.  The positive divisors of are 1 and , while the positive divisors of are 1 and . Since , their only common positive divisor is 1 and so .      Explain why the integers and are coprime when and are distinct primes.  The positive divisors of are 1, , ,  while the positive divisors of are 1, , , , . Since are primes, it follows from the uniqueness of prime factorization that the only common positive divisor of and is 1 and so .      Explain why if is odd, then 16 and are coprime.  The divisors of 16 are , , , , and . Since is odd, we know . By  , it follows that no even integer divides . All divisors of 16 are even, except for . Therefore, the only common divisors of 16 and are and so .      Explain why if and , then 15 and are coprime.  The only positive divisors of 15 are 1, 3, 5, and 15. Since and , it follows that also and so the only common positive divisor of 15 and is 1.        "
},
{
  "id": "defn_euler_phi_fn",
  "level": "2",
  "url": "sec_gcd.html#defn_euler_phi_fn",
  "type": "Definition",
  "number": "1.5.8",
  "title": "Euler’s totient.",
  "body": " Euler's totient   The number of integers from 1 to that are coprime to is denoted . In this context, is Euler's toitent (or Euler's function ).  is the Greek letter phi, sometimes written as .    "
},
{
  "id": "exam_eulers_phi15",
  "level": "2",
  "url": "sec_gcd.html#exam_eulers_phi15",
  "type": "Example",
  "number": "1.5.9",
  "title": "Calculating <span class=\"process-math\">\\(\\varphi(15)\\)<\/span>.",
  "body": " Calculating       Copy the list of integers . Cross off all multiples of three on that list. Cross off all multiples of five on that list. Circle the remaining integers.  The multiples of three are 3, 6, 9, 12, and 15. The multiples of five are 5, 10, and 15 again.       Calculate   By  these circled integers from are coprime to 15. Thus, the integers from one to 15 that are coprime to 15 are .  Since there are eight numbers on this list, it follows that .        "
},
{
  "id": "act_eulers_phi_function",
  "level": "2",
  "url": "sec_gcd.html#act_eulers_phi_function",
  "type": "Activity",
  "number": "1.5.C",
  "title": "Euler’s phi function.",
  "body": " Euler's phi function      Explain why if , then .    Copy the list of integers . Cross off all multiples of two on that list. Circle the remaining integers, which are not divisible by two and, therefore, are coprime to 8. Count to evaluate .    Explain why if and , then .    Copy the list of integers . Cross off all multiples of two and all multiples of five on that list. Circle the remaining integers, which are not divisible by two or five and, therefore, are coprime to 10. Count to evaluate .    Copy the list of integers . Use the method from and to find the list of integers coprime to 12 and evaluate .    Copy the list of integers . Use the method from and to find the list of integers coprime to seven and evaluate .     shows the values of for . Check your answers for , , , and .  The values of for     1  2  3  4  5  6  7  8  9  10  11  12  13  14  15  16                        1  1  2  2  4  2  6  4  6  4  10  4  12  6  8  8        Conjecture a formula for . Check your conjecture for by listing the integers from 1 to 32, crossing off the integers that are not coprime to 32, circling the remaining integers that are coprime to 32, and counting to evaluate .    Conjecture a formula for . Test your conjecture for by listing the integers from 1 to 27, crossing off the integers that are not coprime to 27, circling the remaining integers that are coprime to 27, and counting to evaluate .     "
},
{
  "id": "exer_gcd_listing_divisors",
  "level": "2",
  "url": "sec_gcd.html#exer_gcd_listing_divisors",
  "type": "",
  "number": "1",
  "title": "Practice.",
  "body": " Practice   Calculate each greatest common divisor by listing the divisors and common divisors. Do not use computational technology.   Calculate gcd by listing the divisors and common divisors.    Calculate gcd by listing the divisors and common divisors.    Calculate gcd by listing the divisors and common divisors.         Hint: gcd .    Hint: The only divisors of 7 are .    Hint: They are coprime.     "
},
{
  "id": "exer_coprime_listing_divisors",
  "level": "2",
  "url": "sec_gcd.html#exer_coprime_listing_divisors",
  "type": "",
  "number": "2",
  "title": "Practice.",
  "body": " Practice   Show each pair of integers is coprime by listing the divisors and common divisors. Do not use computational technology.   8 and 35    13 and 17    1 and 15      "
},
{
  "id": "exer_gcd_evens",
  "level": "2",
  "url": "sec_gcd.html#exer_gcd_evens",
  "type": "",
  "number": "3",
  "title": "Understand.",
  "body": " Understand       Give an example of two even integers whose greatest common divisor equals two. Do not use the same example as .    Give an example of two even integers whose greatest common divisor does not equal two.    What can you say about the greatest common divisor of two even integers? Be specific.         Hint: List divisors to check your answer. One strategy for finding an example is to use integers of the form and where and are distinct primes.    Hint: Choose two integers that are multiples of four.     "
},
{
  "id": "exer_gcd_extreme",
  "level": "2",
  "url": "sec_gcd.html#exer_gcd_extreme",
  "type": "",
  "number": "4",
  "title": "Understand.",
  "body": " Understand   Evaluate each greatest common divisor in terms of the positive integer and explain your reasoning.              Hint: For any nonzero integer we have and so it follows that . What does that tell you about the divisors of 0? This part proves  .       Hint: The answer to each part is one or .   "
},
{
  "id": "exer_gcd72600",
  "level": "2",
  "url": "sec_gcd.html#exer_gcd72600",
  "type": "",
  "number": "5",
  "title": "Understand.",
  "body": " Understand       Use and to list the common divisors of 72 and 600. You may leave the divisors in prime-factored form.    Use your list from to calculate .         Hint: Do not forget .    24     "
},
{
  "id": "gcd_of_primes__cicadas",
  "level": "2",
  "url": "sec_gcd.html#gcd_of_primes__cicadas",
  "type": "",
  "number": "6",
  "title": "Understand.",
  "body": " Understand       Explain why this statement is true: If and are distinct primes, then and are coprime.    Cicadas are insects that emerge from the ground in cycles of various lengths. Two common varieties in the central United States have cycles of 13 and 17 years. If cicadas do not want to emerge in the same years and compete for resources, why is it an advantage to have cycles that have coprime length?      "
},
{
  "id": "exer_gcd_with_prime",
  "level": "2",
  "url": "sec_gcd.html#exer_gcd_with_prime",
  "type": "",
  "number": "7",
  "title": "Understand.",
  "body": " Understand       Given a prime and an integer , what are the possible values of ? Hint: List the divisors of .    Describe your findings by copying and completing the conjecture. Given a prime and integer , either which happens when or which happens when .          Hint: The divisors of are and the greatest common divisor is always positive.    Hint: One case is .     "
},
{
  "id": "exer_gcd_from_prime_fact_examples",
  "level": "2",
  "url": "sec_gcd.html#exer_gcd_from_prime_fact_examples",
  "type": "",
  "number": "8",
  "title": "Understand.",
  "body": " Understand    Calculate each greatest common divisor using the prime factorization.                              "
},
{
  "id": "exer_dyk_gcd",
  "level": "2",
  "url": "sec_gcd.html#exer_dyk_gcd",
  "type": "",
  "number": "9",
  "title": "Recap.",
  "body": " Recap   Do you know    What means?    What the greatest common divisor is?    What coprime means?    How to evaluate gcd by listing divisors?    How to evaluate gcd from the prime factorization?      "
},
{
  "id": "exer_gcd_from_prime_fact_conjecture",
  "level": "2",
  "url": "sec_gcd.html#exer_gcd_from_prime_fact_conjecture",
  "type": "",
  "number": "10",
  "title": "Explore.",
  "body": " Explore   Explain how to find the greatest common divisor of two integers from their prime factorization. You may want to refer to Exercise for examples. Hint: One option is to explain in words. Another option is to write and where, as usual, are distinct primes and the exponents and then find a formula for the prime factorization of .   "
},
{
  "id": "exer_gcd_integer_points_on_line",
  "level": "2",
  "url": "sec_gcd.html#exer_gcd_integer_points_on_line",
  "type": "",
  "number": "11",
  "title": "Explore.",
  "body": " Explore       In the plane, graph the line segment from to . You are welcome to use DESMOS (\\url{https:\/\/www.desmos.com\/} to graph the line by writing the equation and setting an appropriate range such as and .    How many points on that line segment other than have integers in both coordinates? List them.    What does your answer to have to do with the greatest common divisor? State your answer as a conjecture.    Test your conjecture from by repeating parts and for the line segment from to .         Hint: The line is . Use the fractions in DESMOS. You can show the grid lines counting by and to help count the points.    Hint: Five points.    Hint: What is ?    Hint: It should work.     "
},
{
  "id": "exer_product_divides",
  "level": "2",
  "url": "sec_gcd.html#exer_product_divides",
  "type": "",
  "number": "12",
  "title": "Explore.",
  "body": " Explore   Consider the statement : For any positive integers , and : if and , then .   Give an example to show that is false. Hint: That is, find positive integers , , and such that and , but .    Is true when and ? Is true when and ? No justification required.    Conjecture when is true. Hint: Some relationship between and guarantees that is true.      "
},
{
  "id": "exer_modn_units_conj",
  "level": "2",
  "url": "sec_gcd.html#exer_modn_units_conj",
  "type": "",
  "number": "13",
  "title": "Explore.",
  "body": " Explore    An element of is a unit if there is a solution of in . Note that zero cannot be a unit because and one is always a unit because . In Exercise , we calculated the examples in .   The units in the integers mod for and 10     units in        5         6         8         10        Find the units in .    Conjecture which elements are units in when is prime.    Check that are units mod . Hint: Find a solution to for each of .    Check that is not a unit by checking for . Yes, that means writing the row for 9 in the multiplication table of . You may use computational technology to calculate mod 12.    Conjecture which integers have the property that is a unit in . Hint: your answer should involve and .     "
},
{
  "id": "exer_ea_examples",
  "level": "2",
  "url": "sec_gcd.html#exer_ea_examples",
  "type": "",
  "number": "14",
  "title": "Practice.",
  "body": " Practice   Use the Euclidean Algorithm to calculate each greatest common divisor. Start with equal to the largest of the two integers.                        , , and so .    Five    Hint: They are coprime.     "
},
{
  "id": "exer_ea_fib",
  "level": "2",
  "url": "sec_gcd.html#exer_ea_fib",
  "type": "",
  "number": "15",
  "title": "Understand.",
  "body": " Understand   We saw the Fibonacci numbers in the Squares and Dominoes puzzle . Something strange happens when we use the Euclidean Algorithm to calculate the greatest common divisor of consecutive Fibonacci numbers.   Use the Euclidean Algorithm to calculate .    Use the Euclidean algorithm to calculate .    What do you notice about the answer in each case?    What do you notice about the process in each case?          , , , and , and so .    1    Hint: We got the same answer.    Hint: It takes a long time. (It might not surprise you to learn that Fibonacci numbers are a worst case scenario for the Euclidean Algorithm.)     "
},
{
  "id": "exer_gcd_linears",
  "level": "2",
  "url": "sec_gcd.html#exer_gcd_linears",
  "type": "",
  "number": "16",
  "title": "Understand.",
  "body": " Understand   Use the Euclidean Algorithm to calculate gcd , where is a fixed but unknown positive integer.   "
},
{
  "id": "exer_consec_coprime",
  "level": "2",
  "url": "sec_gcd.html#exer_consec_coprime",
  "type": "",
  "number": "17",
  "title": "Understand.",
  "body": " Understand   Use the Euclidean Algorithm to show that any two consecutive positive integers are coprime. Start by restating what we are trying to show in terms of a positive integer .   "
},
{
  "id": "exer_dyk_euclidean_alg",
  "level": "2",
  "url": "sec_gcd.html#exer_dyk_euclidean_alg",
  "type": "",
  "number": "18",
  "title": "Recap.",
  "body": " Recap   Do you know    What the Euclidean Algorithm calculates?    How to use the Euclidean Algorithm?      "
},
{
  "id": "exer_euler_phi28",
  "level": "2",
  "url": "sec_gcd.html#exer_euler_phi28",
  "type": "",
  "number": "19",
  "title": "Practice.",
  "body": " Practice       Explain why if and , then and 28 are coprime.    Evaluate using the method from          Hint: List the divisors of .    Hint: Write . Cross out the multiples of two and the multiples of seven.     "
},
{
  "id": "exer_euler_phi17181920",
  "level": "2",
  "url": "sec_gcd.html#exer_euler_phi17181920",
  "type": "",
  "number": "20",
  "title": "Practice.",
  "body": " Practice    Evaluate each quantity using the method from .                          Hint: The answers in some order are six, eight, 16, and 18.   "
},
{
  "id": "exer_extreme_phi",
  "level": "2",
  "url": "sec_gcd.html#exer_extreme_phi",
  "type": "",
  "number": "21",
  "title": "Understand.",
  "body": " Understand       For any value of , what is the smallest value of , and which integers give that smallest value? No justification required.    For any specific integer , what is the largest value of in terms of , and which integers give that largest value? No justification required.         Hint: for exactly two values of .    Hint: The largest possible value is . Look at your findings in .     "
},
{
  "id": "exer_dyk_coprime",
  "level": "2",
  "url": "sec_gcd.html#exer_dyk_coprime",
  "type": "",
  "number": "22",
  "title": "Recap.",
  "body": " Recap   Do you know    Why we only need to check for common prime divisors to determine if two integers are coprime?    How to calculate Euler's totient function of an integer?      "
},
{
  "id": "exer_conj_phi_powerp",
  "level": "2",
  "url": "sec_gcd.html#exer_conj_phi_powerp",
  "type": "",
  "number": "23",
  "title": "Explore.",
  "body": " Explore       Look at  and . Generalize your conjecture to evaluate when is prime.    Test your conjecture by evaluating using the method from .      "
},
{
  "id": "exer_prove_conj_phi_powerp",
  "level": "2",
  "url": "sec_gcd.html#exer_prove_conj_phi_powerp",
  "type": "",
  "number": "24",
  "title": "Explore.",
  "body": " Explore    Justify your conjecture from Exercise by counting. Hint: Count the number of multiples of that are less than . What fraction of the integers from 1 to are not coprime to ? What (remaining) fraction of the integers from 1 to are coprime to ? Count the number of integers from 1 to that are coprime to , that is, calculate . Simplify your final answer.   "
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
