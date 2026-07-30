var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "sec_logic_connectives",
  "level": "1",
  "url": "sec_logic_connectives.html",
  "type": "Section",
  "number": "1.1",
  "title": "Logical Connectives",
  "body": " Logical Connectives   In this section, we introduce the logical connectives for and and or along with their proof formats. We discuss logical equivalence and negation and use truth tables to define connectives and verify equivalences.  Let's warm up our logical thinking by considering some true\/false questions.   True or false?  Decide if each statement is true or false and discuss how to justify your answer.   There are three distinct digits whose sum is 23.    There are three distinct digits whose sum is 25.    Every integer is positive or negative.    Some integers are divisible by three and five.    Some integers are divisible by six but not by three.    A graph with five vertices is the cycle or the complete graph .    Every graph is a tree, which means that it is connected and acyclic.    Every bit string of length five begins or ends with 0 .    Every bit string of length five has at least three 0 s or at least three 1 s.        And and Or  In , there are many words that indicate the logical structure of a statement. Two important such words are and and or , each of which has a specific technical meaning in mathematics and computer science.   And, or, and xor       A statement is a sentence that is either true or false. For example, the integer six has exactly four positive divisors. is a statement that happens to be true because the positive divisors of six are 1, 2, 3, and 6. The statement the cycle has a vertex of degree three. is false because all the vertices of have degree two.    For statements and , the statement  and  , denoted , is true if both and are true and false otherwise. For example, the statement The integer seven is positive and odd. is true because seven is positive and seven is odd. The statement The integer six is positive and odd. is false, even though six is positive because six is not odd.    For statements and , the statement  or  , denoted , is true if at least one of and are true and false otherwise. For example, the statement The integer six is positive or odd. is true, because six is positive. The statement A graph with five vertices is either the cycle or the complete graph . from  is false because, for example, the graph has five vertices but it is not a cycle and it is not complete.    Note that is true if both and are true. For example, the statement The integer seven is positive or odd. is true. This use of or is the inclusive or because it includes the possibility of both statements being true.    When we want to exclude the possibility of both statements being true, we use the exclusive or instead. For statements and , the statement  xor  , denoted , is true if one of and is true and the other is false and false otherwise. For example, when I told my kids you can have ice cream or brownies for dessert they suggested brownies with ice cream (the inclusive or), but I probably meant one or the other but not both (the exclusive or). As another example, in we showed that Every integer is either even or odd, but never both. which we could write more concisely as Every integer is even xor odd.    One way to summarize when a compound statement is true or false is to use a truth table which includes a column for each component of the compound statement (such as , ) and for the full compound statement (such as ) and a row for each possible combination of true or false for the component statements. For example, if our components are and , then the truth table will have four rows corresponding to the four possibilities:    is true and is true;     is true and is false;     is false and is true; and     is false and is false.    In this textbook we abbreviate true as T and false as F . Some computer science textbooks use 1 for true and 0 for false instead.      We show the truth tables for the compound statements , , and in our next example.   Truth tables for and, or, and xor       Use a truth table to illustrate the meaning of the logical connective (and).   shows the truth table for . Since the only time is true is when both and are true, the only T in the column is in the first row. The other entries in the column are all F .   Truth table for the logical connective and                                       Use a truth table to illustrate the meaning of the logical connective (or).   shows the truth table for . Since is true is whenever is true, the first two entries in the column are T . Since is true whenever is true, the third entry in the column is also T . The final entry in the column is F because neither nor are true.   Truth table for the logical connective or                                       Use a truth table to illustrate the meaning of the logical connective (xor).   shows the truth table for . Since is true exactly when one of or is true, the column has T in the second and third rows only.   Truth table for the logical connective xor                                          It is your turn to create a truth table.   Truth tables with and and or   shows the beginning of the truth table for the compound statement .   Part of the truth table for                                                                             According to the truth table in , when is true, is false, and is true, which row are we in (do not count the header row with , , etc.) and is the statement true or false?    We are missing the last couple of rows of . What are the remaining true\/false options? Fill in the , , and columns for the missing rows.    In we included an intermediate column for . Convince yourself that we correctly started that column and complete it. Notice that we ignore the column.    Convince yourself that we correctly started the final column for in and complete it. Notice that we need to look at only the column for and the intermediate column for .    Construct a new truth table for the compound statement . Include intermediate columns for and for . What do you notice? Hint: Compare to .    If we wanted to construct a truth table for a compound statement involving four components ( , , , and ), how many rows would it need. Explain how you counted. Hint: Steps.     Make sure that you have completed because we are going to reveal some of the answers.   Distributive rule   Use a truth table to verify the logical equivalence     The truth table is in . Notice that the columns for and for have the same sequence of T s and F s.   A truth table verifying the distributive equivalence                                                                                                             Proof Formats: and by Cases  How can we prove statements involving and and or? To prove , we need to prove two things: and then . We can summarize this idea in a proof format.   Prove:    First, (explain why is true.) Therefore, .  Next, (explain why is true.) Therefore, .    The format for a proof of is less direct. An option is to use a modified version of a proof by cases. Later in this textbook, we introduce two other options: proof by contradiction in and proof using the equivalent conditional in .  In we introduced proof by cases. In each case of the format in , we proved the same statement. We can modify that proof format to prove by proving in one case and in the other case.   Prove:    (Explain why there are two cases.) We consider two cases.  Case 1: Assume . (Explain why is true in this case.) Therefore, .  Case 2: Assume . (Explain why is true in this case.) Therefore, .  In either case, we have .    We present this format with two cases, since that is often all we need. This format can be modified to have more than two cases where in some cases is true and in other cases is true. Officially, this is a new proof format.   Prove:    (Explain why there are cases.) We consider cases.  Case 1: Assume (Explain why one of is true in this case.)  Case 2: Assume (Explain why one of is true in this case.)     Case : Assume (Explain why one of is true in this case.)  In (either case\/all cases) we have .    Try working with these formats.   Proving and by using cases      Copy the following example of a proof of an and statement. Prove that 30 is even and .  First, when and so 30 is even.  Next, when and so .      Edit the proof in to prove that 33 is odd and .    Copy the following example of a proof of an or statement using cases. Prove that or for any integer . Yes, this proof was Exercise in .  Let be an integer. Then is either even or odd, by . We consider two cases.  Case 1: Assume that is even. By the definition of even, we can write for some integer . Then where is an integer. Therefore, .  Case 2: Assume that is odd. By the definition of odd, we can write for some integer . Then where is an integer. Therefore, .  In either case, we have or .      Edit the proof in to prove that or for any integer .        Logical Equivalence and Negations  In , we saw that the statements and have the same final column in their truth table. That is, in each case (row of the truth table), they are both true or both false. We have a name for the situation where two logical statements have the same truth values.   Logical equivalence       Statements and are logically equivalent , denoted , if and always have the same truth value, either both statements are true or both statements are false. For example, we saw in that .    Statements and are not logically equivalent , denoted if sometimes one of the statements is true but the other is false. For example, as we check in Exercise because, for example, when is true and both and are false, the left-hand side is false but the right-hand side is true.       Logically equivalent statements always have the same truth values. There is also a name for when two statements always have the opposite truth value as well as names for logical statements that are always true or always false.   Negation, tautology, and contradiction       The statements and are negations if and always have the opposite truth value. That is, is true and is false or is false and is true. The statement is the negation of , denoted . For example, if is an integer and if is the statement , then is the statement .    A statement is a tautology if it is always true. For example, the statement Either I will work on my homework Tuesday night or I will not work on my homework Tuesday night. is a tautology.    A statement is a contradiction if it is always false. For example, the statement There is an integer with and . is a contradiction because for an integer with we know that .       Here are examples of truth tables involving negations.   Truth tables involving negations       Use a truth table to illustrate the meaning of the logical operation (not).   shows the truth table for .    Truth table for the logical operation not                        Construct a truth table for the compound statement .   shows the truth table for , using an intermediate column for . Notice that the only time is true is when is true and is false, which happens in the second row.    Truth table for the compound statement                                            Use a truth table to show that is a contradiction.   shows the truth table for . Since the final column is all F , it follows that is a contradiction.    Truth table for the contradiction                               By the way, when the statement following the logical connective and is negative, we use the connective but instead.   But not  It is common in English to pronounce as but not . The word but has the same meaning logically as and but in English it indicates that what follows is negative in some way. For example, while we can say I like chocolate ice cream and I don't want any now. it is more common to say I like chocolate ice cream but I don't want any now.   Try your hand at working with negations.   Negating and      In , we noted that the statement The integer seven is positive and odd. is true. Consider the general statement The integer is positive and odd. Give examples of integers where the statement is false, including some negative values of .    For the statement The integer is positive and odd. to be false, what needs to be true for ?    Construct a truth table for and .    Look at your truth table from . Is ? Explain.    Is the negation of ? Explain.    Make a conjecture about the negation of . Your answer should agree with your answer to .    Verify your conjecture from using a truth table.      In , we saw that the negation of is not . For to be false, we need either is false or is false or both are false. That is, we need to be true. Similarly, for to be false, we need both is false and is false. That is, we need to be true. We summarize these negations in a theorem.   De Morgan's Law   For statements and , the negation of is and the negation of is . That is, we have the following logical equivalences known as De Morgan's Laws :       Proof Format: Contradiction  One method of proving that the statement is true is to show that the assumption that is false leads to a contradiction, such as a statement of the form . That is, in a proof by contradiction of a statement , we assume that is false and deduce that both and are true for some statement , which is impossible. That impossibility tells us that cannot be false, and so must be true.  As we start writing a proof by contradiction, we usually do not know what the statement will be. Sometimes it helps to do a little scratch work listing the consequences of being false to see if we find contradictory statements and .  A proof by contradiction follows the following proof format.   Prove: P   Suppose not. Then (state ).  First, (explain why is true.) Therefore, .  On the other hand, (explain why is true.) Therefore, .  This is a contradiction. Therefore, .    Notice that we are proving two things ( and ), but instead of saying First, . Next, ldots. as we did in , we use the expression First, . On the other hand, ldots. The phrase ``on the other hand`` alerts the reader that we are changing direction towards the negation of what we just proved. It is also acceptable to write ``On the one hand, . On the other hand, .\"  Try writing a proof using contradiction.   Proof by contradiction: consecutive integers are coprime      Copy the following example of a proof by contradiction. Prove for any integer . We proved this result in Exercise using the Euclidean Algorithm.   Suppose not. Then there exists an integer such that .  First, by the definition of the greatest common divisor , and . By the definition of divides we can write and for some integers and . Observe that where and so . But, of course, so really . Since the only positive divisor of 1 is 1, it follows that .  On the other hand, we assumed that . This is a contradiction. Thus, .      Edit the proof in to prove that for any integer . (Yes, we are again proving that consecutive integers are coprime.)      There is a bit of controversy over the use of proof by contradiction. Some mathematicians dislike contradiction proofs because they do not actually show why a statement is true, only why it cannot be false. Other mathematicians like contradiction proofs because they settle an argument: if your reader thinks the statement is false, your proof shows them that something terrible goes wrong (a contradiction). We will let you decide which type of mathematician you are.  Because of this controversy, we often rewrite a proof by contradiction using some other format, if possible.   Rewriting without contradiction   Copy the proof by contradiction from  and edit to to give a proof without contradiction.  Prove that for any integer .    We have crossed out the statements that should be deleted, and boldfaced the statements that should be added.   Proof. \\st{Suppose not. Then there exists an integer such that }   Let be an integer. Write . Since 1 is a common divisor of any integer, is certainly positive.   First, by the definition of greatest common divisor , and . By the definition of divides we can write and for some integers and . Observe that and so . But, of course, so really . Since the only positive divisor of 1 is 1, it follows that .  \\st{On the other hand, we assumed that . This is a contradiction. Thus .}      Exercises   Exercises for And and Or   Practice   Copy the standard truth tables for each expression.                      Practice   For this exercise, is a specific (but unknown) integer,  is a multiple of 6, and  is a multiple of 4. In each part of this exercise write the statement using , , and logic symbols and find an example of an integer for which the statement is true.   The integer is a multiple 6 and a multiple of 4.    The integer is a multiple of exactly one of 6 or 4.          which is true when . There are other correct examples.    Hint:        Understand   Recall that a graph is a tree if it is connected and acyclic.   Give an example of a tree and explain what you have checked.    Could a graph be connected but not a tree? Give an example and explain in words.    Could a graph be acyclic but not a tree? Give an example and explain in words.        Understand       Construct a truth table for the compound statement . Include an intermediate column for .    Compare your answer from with the completed truth table from  . Is ? Explain.        Understand       Construct a truth table for . Include an intermediate column for .    Construct a truth table for . Include intermediate columns for and for .    What do you notice?         See .  Truth table for the compound statement                                                                              Hint: You should get the same final column as in .    They are logically equivalent.       Recap   Do you know    What the symbols , , and stand for?    What the logical connectives and , or , and xor mean?    When statements of the form and are true and when they're false?    Why we might create a truth table?    How to create a truth table for a compound logical statement?         Exercises for Proof Formats: and by Cases   Practice   Use to prove that 12 is even and . Hint: Copy the proof in  and edit as needed.    Hint: and .     Practice   Use to to prove that or for any integer . Hint: Copy the proof in  and edit as needed. Yes, this exercise repeats  .    Hint: and .     Understand   Use to prove that is even and for any integer . Hint: Copy the proof in  and edit as needed.    Hint: Make sure to copy all the words in the proof. During the proof, you will need to write and .     Understand   Use Proof Format to prove that for any integer we have , , or . Hint: By the Division Algorithm with . Break into five cases corresponding to , or .    Hint: The five cases are Case 1: Assume ; Case 2: Assume ; Case 3: Assume ; Case 4: Assume ; and Case 5: Assume . In Case 4, for example, we have and so . Notice how we cleverly rewrite . That made it possible to factor 5 out of the 5 to show the remainder of 4.     Recap   Do you know    How we prove a statement of the form ?    How we prove a statement of the form using cases?         Exercises for Logical Equivalence and Negations   Practice   Negate each statement about an integer .              is odd                   Hint: Make sure your answer includes the possibility that .     is even.    Hint: Use .       Practice   Negate each statement about the integers and . Hint: Use DeMorgan's Laws and .    is even and is even     is even or is even     is even but is odd          is odd or is odd    Hint: Your answer should include and .    Hint: Your answer should include or .       Understand   For this exercise, is a specific (but unknown) integer,  is a multiple of 6, and  is a multiple of 4. In each part of this exercise write the statement using , , and logic symbols and find an example of an integer for which the statement is true.   The integer is not a multiple of 6.    The integer is a multiple of 6, but not a multiple of 4.    The integer is a multiple of 4, but not a multiple of 6.    The integer is not a multiple of 4 or 6.          An example is . There are other correct examples.    Hint: See and use . Include an example.    Hint: . Include an example.    Hint: You may use parentheses in your answer, but there is also a way to write it without parentheses. Include an example.       Practice       Use a truth table to show that is a tautology.    Draw a truth table for . Include an intermediate column for .    Draw a truth table for . Include an intermediate column for .         Hint: The truth table only needs two rows and is similar to the table in .    Hint: The truth table needs four rows and is similar to the table in . The last column should have three T and one F .    Hint: The last column should have one T and three F .       Understand   In we verified the first of De Morgan's Laws . Construct truth tables to verify the second equivalence . Include some intermediate columns.    Hint: One way to set up the truth table is shown in . Feel free to copy the table, check the third row, and then fill in the remaining entries.   Truth table for the compound statement                                                                                         Recap   Do you know    What it means for statements to be logically equivalent and how we might use a truth table to verify an equivalence?    What a tautology or contradiction is and how to verify that a statement is a tautology or contradiction using a truth table.    What the negation of a statement is?    What the symbols and mean?    How the construction is translated into words.    How to find the negation of and and what those equivalences are called?        Explore       Find a statement that is logically equivalent to but does not use . You may use , , , and parentheses.    Use a truth table to verify that the statements are equivalent.    What is the negation of the statement ? Describe the negation using , , and .         Exercises for Proof Format: Contradiction   Practice   Use a proof by contradiction to prove that there do not exist three distinct digits whose sum is equal to 25. This statement was one of the true\/false questions in  . Hint: The negation would be that there exist three distinct digits whose sum is 25. What is the largest possible set of three distinct digits and what is their sum?    Hint: Copy this proof filling in the missing parts.   Suppose not. Then there exist three distinct digits whose sum is equal to 25.  On the other hand, the largest possible set of three distinct digits is and their sum is .  This is a contradiction. Therefore, there do not exist three distinct digits whose sum is equal to 25.      Practice   We have nine coins and four cups. We place each coin in a cup. Use to prove that some cup has three or more coins. Hint: The negation would be that each cup has two or fewer coins.     Practice   Use a proof by contradiction to prove that there cannot exist a 3-regular graph of order 7. Hint: By , the number of edges in a graph is equal to half of the sum of the degrees of the vertices. On the other hand, the number of edges must be an integer.    Hint: If there were such a graph, the sum of the degrees of the vertices would be .  Then, use the hint.     Understand       Use a proof by contradiction to prove that every bit string of length five has at least three 0 s or at least three 1 s. Hint: The negation would be that there exists a bit string of length five with fewer than three s and fewer than three s. What is the longest such possible bit string?    Why does the negation use and ?         Hint: In the hint fewer than three 0 s means the number of 0 s is less than or equal to two.    Hint: DeMorgan's Law.       Understand   Suppose and are coprime integers and is a positive prime. Use a proof by contradiction to prove that or . Hint: Be careful negating the or statement.    Hint: If and , then is a positive common divisor of and that is greater than one. What does that tell you about ?     Recap   Do you know    Why is a contradiction?    How to write a proof by contradiction?    How we can begin a proof by contradiction so the reader knows that we are doing a proof by contradiction?    Why the phrase On the other hand is used in a proof by contradiction?        Explore   Use a proof by contradiction to prove that an integer cannot be even and odd. Hint: If is even, use the definition of even to write for some integer . If is odd, use the definition of odd to write for some integer . Do not use again. Put these equations together to get . Next, solve for 1 to show that . On the other hand, the only divisors of 1 are .     Explore   Copy the following proof and fill in the blanks. Thanks to Oscar Levin for the idea for this exercise.   Prove that is irrational.    Suppose not. Then is . By the definition of rational numbers , we can write for some integers and with . Using the definition of lg  , we can write . Raising both sides of this equation to the power we get   On the other hand, any power of two is even and so is even and any power of three is odd and so is odd. By Exercise , an integer cannot be even and odd. Thus,   This is a contradiction. Thus, is irrational.     Explore    Copy the following proof and fill in the blanks.  Prove that there are infinitely many primes.    Suppose not. Then there would be a number of primes, so we could list all of them. Suppose that the list of all primes were . Consider the positive integer   First, so by the definition of it follows that . Since is prime, we know that . By Exercise , we know that . Since and , it follows that . For each value of , the same argument shows that and and so . Therefore, none of the primes divides .  On the other hand, are the only primes. It follows that has no prime divisors. Since is positive, we know . This is a contraction of which says .      "
},
{
  "id": "act_TorF",
  "level": "2",
  "url": "sec_logic_connectives.html#act_TorF",
  "type": "Activity",
  "number": "1.1.A",
  "title": "True or false?",
  "body": " True or false?  Decide if each statement is true or false and discuss how to justify your answer.   There are three distinct digits whose sum is 23.    There are three distinct digits whose sum is 25.    Every integer is positive or negative.    Some integers are divisible by three and five.    Some integers are divisible by six but not by three.    A graph with five vertices is the cycle or the complete graph .    Every graph is a tree, which means that it is connected and acyclic.    Every bit string of length five begins or ends with 0 .    Every bit string of length five has at least three 0 s or at least three 1 s.     "
},
{
  "id": "defn_and_or_xor",
  "level": "2",
  "url": "sec_logic_connectives.html#defn_and_or_xor",
  "type": "Definition",
  "number": "1.1.1",
  "title": "And, or, and xor.",
  "body": " And, or, and xor       A statement is a sentence that is either true or false. For example, the integer six has exactly four positive divisors. is a statement that happens to be true because the positive divisors of six are 1, 2, 3, and 6. The statement the cycle has a vertex of degree three. is false because all the vertices of have degree two.    For statements and , the statement  and  , denoted , is true if both and are true and false otherwise. For example, the statement The integer seven is positive and odd. is true because seven is positive and seven is odd. The statement The integer six is positive and odd. is false, even though six is positive because six is not odd.    For statements and , the statement  or  , denoted , is true if at least one of and are true and false otherwise. For example, the statement The integer six is positive or odd. is true, because six is positive. The statement A graph with five vertices is either the cycle or the complete graph . from  is false because, for example, the graph has five vertices but it is not a cycle and it is not complete.    Note that is true if both and are true. For example, the statement The integer seven is positive or odd. is true. This use of or is the inclusive or because it includes the possibility of both statements being true.    When we want to exclude the possibility of both statements being true, we use the exclusive or instead. For statements and , the statement  xor  , denoted , is true if one of and is true and the other is false and false otherwise. For example, when I told my kids you can have ice cream or brownies for dessert they suggested brownies with ice cream (the inclusive or), but I probably meant one or the other but not both (the exclusive or). As another example, in we showed that Every integer is either even or odd, but never both. which we could write more concisely as Every integer is even xor odd.    One way to summarize when a compound statement is true or false is to use a truth table which includes a column for each component of the compound statement (such as , ) and for the full compound statement (such as ) and a row for each possible combination of true or false for the component statements. For example, if our components are and , then the truth table will have four rows corresponding to the four possibilities:    is true and is true;     is true and is false;     is false and is true; and     is false and is false.    In this textbook we abbreviate true as T and false as F . Some computer science textbooks use 1 for true and 0 for false instead.     "
},
{
  "id": "exam_truthtable_and_or_xor",
  "level": "2",
  "url": "sec_logic_connectives.html#exam_truthtable_and_or_xor",
  "type": "Example",
  "number": "1.1.2",
  "title": "Truth tables for and, or, and xor.",
  "body": " Truth tables for and, or, and xor       Use a truth table to illustrate the meaning of the logical connective (and).   shows the truth table for . Since the only time is true is when both and are true, the only T in the column is in the first row. The other entries in the column are all F .   Truth table for the logical connective and                                       Use a truth table to illustrate the meaning of the logical connective (or).   shows the truth table for . Since is true is whenever is true, the first two entries in the column are T . Since is true whenever is true, the third entry in the column is also T . The final entry in the column is F because neither nor are true.   Truth table for the logical connective or                                       Use a truth table to illustrate the meaning of the logical connective (xor).   shows the truth table for . Since is true exactly when one of or is true, the column has T in the second and third rows only.   Truth table for the logical connective xor                                         "
},
{
  "id": "act_truthtable_and_or",
  "level": "2",
  "url": "sec_logic_connectives.html#act_truthtable_and_or",
  "type": "Activity",
  "number": "1.1.B",
  "title": "Truth tables with and and or.",
  "body": " Truth tables with and and or   shows the beginning of the truth table for the compound statement .   Part of the truth table for                                                                             According to the truth table in , when is true, is false, and is true, which row are we in (do not count the header row with , , etc.) and is the statement true or false?    We are missing the last couple of rows of . What are the remaining true\/false options? Fill in the , , and columns for the missing rows.    In we included an intermediate column for . Convince yourself that we correctly started that column and complete it. Notice that we ignore the column.    Convince yourself that we correctly started the final column for in and complete it. Notice that we need to look at only the column for and the intermediate column for .    Construct a new truth table for the compound statement . Include intermediate columns for and for . What do you notice? Hint: Compare to .    If we wanted to construct a truth table for a compound statement involving four components ( , , , and ), how many rows would it need. Explain how you counted. Hint: Steps.    "
},
{
  "id": "exam_distributive_equiv",
  "level": "2",
  "url": "sec_logic_connectives.html#exam_distributive_equiv",
  "type": "Example",
  "number": "1.1.7",
  "title": "Distributive rule.",
  "body": " Distributive rule   Use a truth table to verify the logical equivalence     The truth table is in . Notice that the columns for and for have the same sequence of T s and F s.   A truth table verifying the distributive equivalence                                                                                                          "
},
{
  "id": "pff_and",
  "level": "2",
  "url": "sec_logic_connectives.html#pff_and",
  "type": "Proof",
  "number": "1.1.B.1",
  "title": "",
  "body": " Prove:    First, (explain why is true.) Therefore, .  Next, (explain why is true.) Therefore, .   "
},
{
  "id": "pff_or_by_cases",
  "level": "2",
  "url": "sec_logic_connectives.html#pff_or_by_cases",
  "type": "Proof",
  "number": "1.1.B.2",
  "title": "",
  "body": " Prove:    (Explain why there are two cases.) We consider two cases.  Case 1: Assume . (Explain why is true in this case.) Therefore, .  Case 2: Assume . (Explain why is true in this case.) Therefore, .  In either case, we have .   "
},
{
  "id": "pff_or_by_cases_generalized",
  "level": "2",
  "url": "sec_logic_connectives.html#pff_or_by_cases_generalized",
  "type": "Proof",
  "number": "1.1.B.3",
  "title": "",
  "body": " Prove:    (Explain why there are cases.) We consider cases.  Case 1: Assume (Explain why one of is true in this case.)  Case 2: Assume (Explain why one of is true in this case.)     Case : Assume (Explain why one of is true in this case.)  In (either case\/all cases) we have .   "
},
{
  "id": "act_prove_and_orusingcases",
  "level": "2",
  "url": "sec_logic_connectives.html#act_prove_and_orusingcases",
  "type": "Activity",
  "number": "1.1.C",
  "title": "Proving <span class=\"process-math\">\\(\\land\\)<\/span> and <span class=\"process-math\">\\(\\lor\\)<\/span> by using cases.",
  "body": " Proving and by using cases      Copy the following example of a proof of an and statement. Prove that 30 is even and .  First, when and so 30 is even.  Next, when and so .      Edit the proof in to prove that 33 is odd and .    Copy the following example of a proof of an or statement using cases. Prove that or for any integer . Yes, this proof was Exercise in .  Let be an integer. Then is either even or odd, by . We consider two cases.  Case 1: Assume that is even. By the definition of even, we can write for some integer . Then where is an integer. Therefore, .  Case 2: Assume that is odd. By the definition of odd, we can write for some integer . Then where is an integer. Therefore, .  In either case, we have or .      Edit the proof in to prove that or for any integer .     "
},
{
  "id": "defn_logical_equiv",
  "level": "2",
  "url": "sec_logic_connectives.html#defn_logical_equiv",
  "type": "Definition",
  "number": "1.1.9",
  "title": "Logical equivalence.",
  "body": " Logical equivalence       Statements and are logically equivalent , denoted , if and always have the same truth value, either both statements are true or both statements are false. For example, we saw in that .    Statements and are not logically equivalent , denoted if sometimes one of the statements is true but the other is false. For example, as we check in Exercise because, for example, when is true and both and are false, the left-hand side is false but the right-hand side is true.      "
},
{
  "id": "defn_negation_tautology_contradiction",
  "level": "2",
  "url": "sec_logic_connectives.html#defn_negation_tautology_contradiction",
  "type": "Definition",
  "number": "1.1.10",
  "title": "Negation, tautology, and contradiction.",
  "body": " Negation, tautology, and contradiction       The statements and are negations if and always have the opposite truth value. That is, is true and is false or is false and is true. The statement is the negation of , denoted . For example, if is an integer and if is the statement , then is the statement .    A statement is a tautology if it is always true. For example, the statement Either I will work on my homework Tuesday night or I will not work on my homework Tuesday night. is a tautology.    A statement is a contradiction if it is always false. For example, the statement There is an integer with and . is a contradiction because for an integer with we know that .      "
},
{
  "id": "exam_truthtable_negations",
  "level": "2",
  "url": "sec_logic_connectives.html#exam_truthtable_negations",
  "type": "Example",
  "number": "1.1.11",
  "title": "Truth tables involving negations.",
  "body": " Truth tables involving negations       Use a truth table to illustrate the meaning of the logical operation (not).   shows the truth table for .    Truth table for the logical operation not                        Construct a truth table for the compound statement .   shows the truth table for , using an intermediate column for . Notice that the only time is true is when is true and is false, which happens in the second row.    Truth table for the compound statement                                            Use a truth table to show that is a contradiction.   shows the truth table for . Since the final column is all F , it follows that is a contradiction.    Truth table for the contradiction                              "
},
{
  "id": "rem_but_not",
  "level": "2",
  "url": "sec_logic_connectives.html#rem_but_not",
  "type": "Remark",
  "number": "1.1.15",
  "title": "But not.",
  "body": " But not  It is common in English to pronounce as but not . The word but has the same meaning logically as and but in English it indicates that what follows is negative in some way. For example, while we can say I like chocolate ice cream and I don't want any now. it is more common to say I like chocolate ice cream but I don't want any now.  "
},
{
  "id": "act_not_and",
  "level": "2",
  "url": "sec_logic_connectives.html#act_not_and",
  "type": "Activity",
  "number": "1.1.D",
  "title": "Negating and.",
  "body": " Negating and      In , we noted that the statement The integer seven is positive and odd. is true. Consider the general statement The integer is positive and odd. Give examples of integers where the statement is false, including some negative values of .    For the statement The integer is positive and odd. to be false, what needs to be true for ?    Construct a truth table for and .    Look at your truth table from . Is ? Explain.    Is the negation of ? Explain.    Make a conjecture about the negation of . Your answer should agree with your answer to .    Verify your conjecture from using a truth table.     "
},
{
  "id": "thm_demorgans",
  "level": "2",
  "url": "sec_logic_connectives.html#thm_demorgans",
  "type": "Theorem",
  "number": "1.1.16",
  "title": "De Morgan’s Law.",
  "body": " De Morgan's Law   For statements and , the negation of is and the negation of is . That is, we have the following logical equivalences known as De Morgan's Laws :    "
},
{
  "id": "sub_pff_contra-4",
  "level": "2",
  "url": "sec_logic_connectives.html#sub_pff_contra-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "proof by contradiction "
},
{
  "id": "sub_pff_contra-5",
  "level": "2",
  "url": "sec_logic_connectives.html#sub_pff_contra-5",
  "type": "Proof",
  "number": "1.1.D.1",
  "title": "",
  "body": " Prove: P   Suppose not. Then (state ).  First, (explain why is true.) Therefore, .  On the other hand, (explain why is true.) Therefore, .  This is a contradiction. Therefore, .   "
},
{
  "id": "act_proof_contradiction",
  "level": "2",
  "url": "sec_logic_connectives.html#act_proof_contradiction",
  "type": "Activity",
  "number": "1.1.E",
  "title": "Proof by contradiction: consecutive integers are coprime.",
  "body": " Proof by contradiction: consecutive integers are coprime      Copy the following example of a proof by contradiction. Prove for any integer . We proved this result in Exercise using the Euclidean Algorithm.   Suppose not. Then there exists an integer such that .  First, by the definition of the greatest common divisor , and . By the definition of divides we can write and for some integers and . Observe that where and so . But, of course, so really . Since the only positive divisor of 1 is 1, it follows that .  On the other hand, we assumed that . This is a contradiction. Thus, .      Edit the proof in to prove that for any integer . (Yes, we are again proving that consecutive integers are coprime.)     "
},
{
  "id": "exam_avoid_contradiction_consec_coprime",
  "level": "2",
  "url": "sec_logic_connectives.html#exam_avoid_contradiction_consec_coprime",
  "type": "Example",
  "number": "1.1.17",
  "title": "Rewriting without contradiction.",
  "body": " Rewriting without contradiction   Copy the proof by contradiction from  and edit to to give a proof without contradiction.  Prove that for any integer .    We have crossed out the statements that should be deleted, and boldfaced the statements that should be added.   Proof. \\st{Suppose not. Then there exists an integer such that }   Let be an integer. Write . Since 1 is a common divisor of any integer, is certainly positive.   First, by the definition of greatest common divisor , and . By the definition of divides we can write and for some integers and . Observe that and so . But, of course, so really . Since the only positive divisor of 1 is 1, it follows that .  \\st{On the other hand, we assumed that . This is a contradiction. Thus .}   "
},
{
  "id": "exer_standard_truthtables",
  "level": "2",
  "url": "sec_logic_connectives.html#exer_standard_truthtables",
  "type": "",
  "number": "1",
  "title": "Practice.",
  "body": " Practice   Copy the standard truth tables for each expression.                    "
},
{
  "id": "exer_translate_into_and_or",
  "level": "2",
  "url": "sec_logic_connectives.html#exer_translate_into_and_or",
  "type": "",
  "number": "2",
  "title": "Practice.",
  "body": " Practice   For this exercise, is a specific (but unknown) integer,  is a multiple of 6, and  is a multiple of 4. In each part of this exercise write the statement using , , and logic symbols and find an example of an integer for which the statement is true.   The integer is a multiple 6 and a multiple of 4.    The integer is a multiple of exactly one of 6 or 4.          which is true when . There are other correct examples.    Hint:      "
},
{
  "id": "sec_logic_connectives-7-2-4",
  "level": "2",
  "url": "sec_logic_connectives.html#sec_logic_connectives-7-2-4",
  "type": "",
  "number": "3",
  "title": "Understand.",
  "body": " Understand   Recall that a graph is a tree if it is connected and acyclic.   Give an example of a tree and explain what you have checked.    Could a graph be connected but not a tree? Give an example and explain in words.    Could a graph be acyclic but not a tree? Give an example and explain in words.      "
},
{
  "id": "exer_not_assoc",
  "level": "2",
  "url": "sec_logic_connectives.html#exer_not_assoc",
  "type": "",
  "number": "4",
  "title": "Understand.",
  "body": " Understand       Construct a truth table for the compound statement . Include an intermediate column for .    Compare your answer from with the completed truth table from  . Is ? Explain.      "
},
{
  "id": "exer_truthtable_distributive",
  "level": "2",
  "url": "sec_logic_connectives.html#exer_truthtable_distributive",
  "type": "",
  "number": "5",
  "title": "Understand.",
  "body": " Understand       Construct a truth table for . Include an intermediate column for .    Construct a truth table for . Include intermediate columns for and for .    What do you notice?         See .  Truth table for the compound statement                                                                              Hint: You should get the same final column as in .    They are logically equivalent.     "
},
{
  "id": "exer_dyk_and_or",
  "level": "2",
  "url": "sec_logic_connectives.html#exer_dyk_and_or",
  "type": "",
  "number": "6",
  "title": "Recap.",
  "body": " Recap   Do you know    What the symbols , , and stand for?    What the logical connectives and , or , and xor mean?    When statements of the form and are true and when they're false?    Why we might create a truth table?    How to create a truth table for a compound logical statement?      "
},
{
  "id": "exer_prove_odd_and_mult3",
  "level": "2",
  "url": "sec_logic_connectives.html#exer_prove_odd_and_mult3",
  "type": "",
  "number": "7",
  "title": "Practice.",
  "body": " Practice   Use to prove that 12 is even and . Hint: Copy the proof in  and edit as needed.    Hint: and .   "
},
{
  "id": "exer_prove_nsqplusn_mod4",
  "level": "2",
  "url": "sec_logic_connectives.html#exer_prove_nsqplusn_mod4",
  "type": "",
  "number": "8",
  "title": "Practice.",
  "body": " Practice   Use to to prove that or for any integer . Hint: Copy the proof in  and edit as needed. Yes, this exercise repeats  .    Hint: and .   "
},
{
  "id": "exer_prove_odd_and_mult3_general",
  "level": "2",
  "url": "sec_logic_connectives.html#exer_prove_odd_and_mult3_general",
  "type": "",
  "number": "9",
  "title": "Understand.",
  "body": " Understand   Use to prove that is even and for any integer . Hint: Copy the proof in  and edit as needed.    Hint: Make sure to copy all the words in the proof. During the proof, you will need to write and .   "
},
{
  "id": "exer_sq_mod5",
  "level": "2",
  "url": "sec_logic_connectives.html#exer_sq_mod5",
  "type": "",
  "number": "10",
  "title": "Understand.",
  "body": " Understand   Use Proof Format to prove that for any integer we have , , or . Hint: By the Division Algorithm with . Break into five cases corresponding to , or .    Hint: The five cases are Case 1: Assume ; Case 2: Assume ; Case 3: Assume ; Case 4: Assume ; and Case 5: Assume . In Case 4, for example, we have and so . Notice how we cleverly rewrite . That made it possible to factor 5 out of the 5 to show the remainder of 4.   "
},
{
  "id": "exer_dyk_pff_and_or_by_cases",
  "level": "2",
  "url": "sec_logic_connectives.html#exer_dyk_pff_and_or_by_cases",
  "type": "",
  "number": "11",
  "title": "Recap.",
  "body": " Recap   Do you know    How we prove a statement of the form ?    How we prove a statement of the form using cases?      "
},
{
  "id": "exer_my_first_negate",
  "level": "2",
  "url": "sec_logic_connectives.html#exer_my_first_negate",
  "type": "",
  "number": "12",
  "title": "Practice.",
  "body": " Practice   Negate each statement about an integer .              is odd                   Hint: Make sure your answer includes the possibility that .     is even.    Hint: Use .     "
},
{
  "id": "exer_my_first_demorgans",
  "level": "2",
  "url": "sec_logic_connectives.html#exer_my_first_demorgans",
  "type": "",
  "number": "13",
  "title": "Practice.",
  "body": " Practice   Negate each statement about the integers and . Hint: Use DeMorgan's Laws and .    is even and is even     is even or is even     is even but is odd          is odd or is odd    Hint: Your answer should include and .    Hint: Your answer should include or .     "
},
{
  "id": "exer_translate_into_and_or_with_not",
  "level": "2",
  "url": "sec_logic_connectives.html#exer_translate_into_and_or_with_not",
  "type": "",
  "number": "14",
  "title": "Understand.",
  "body": " Understand   For this exercise, is a specific (but unknown) integer,  is a multiple of 6, and  is a multiple of 4. In each part of this exercise write the statement using , , and logic symbols and find an example of an integer for which the statement is true.   The integer is not a multiple of 6.    The integer is a multiple of 6, but not a multiple of 4.    The integer is a multiple of 4, but not a multiple of 6.    The integer is not a multiple of 4 or 6.          An example is . There are other correct examples.    Hint: See and use . Include an example.    Hint: . Include an example.    Hint: You may use parentheses in your answer, but there is also a way to write it without parentheses. Include an example.     "
},
{
  "id": "exer_truthtable_andornot",
  "level": "2",
  "url": "sec_logic_connectives.html#exer_truthtable_andornot",
  "type": "",
  "number": "15",
  "title": "Practice.",
  "body": " Practice       Use a truth table to show that is a tautology.    Draw a truth table for . Include an intermediate column for .    Draw a truth table for . Include an intermediate column for .         Hint: The truth table only needs two rows and is similar to the table in .    Hint: The truth table needs four rows and is similar to the table in . The last column should have three T and one F .    Hint: The last column should have one T and three F .     "
},
{
  "id": "exer_truthtable_demorgan",
  "level": "2",
  "url": "sec_logic_connectives.html#exer_truthtable_demorgan",
  "type": "",
  "number": "16",
  "title": "Understand.",
  "body": " Understand   In we verified the first of De Morgan's Laws . Construct truth tables to verify the second equivalence . Include some intermediate columns.    Hint: One way to set up the truth table is shown in . Feel free to copy the table, check the third row, and then fill in the remaining entries.   Truth table for the compound statement                                                                                       "
},
{
  "id": "exer_dyk_equiv_negation",
  "level": "2",
  "url": "sec_logic_connectives.html#exer_dyk_equiv_negation",
  "type": "",
  "number": "17",
  "title": "Recap.",
  "body": " Recap   Do you know    What it means for statements to be logically equivalent and how we might use a truth table to verify an equivalence?    What a tautology or contradiction is and how to verify that a statement is a tautology or contradiction using a truth table.    What the negation of a statement is?    What the symbols and mean?    How the construction is translated into words.    How to find the negation of and and what those equivalences are called?      "
},
{
  "id": "exer_writing_xor_without_xor",
  "level": "2",
  "url": "sec_logic_connectives.html#exer_writing_xor_without_xor",
  "type": "",
  "number": "18",
  "title": "Explore.",
  "body": " Explore       Find a statement that is logically equivalent to but does not use . You may use , , , and parentheses.    Use a truth table to verify that the statements are equivalent.    What is the negation of the statement ? Describe the negation using , , and .      "
},
{
  "id": "exer_prove_not_sum_3digits_equals25",
  "level": "2",
  "url": "sec_logic_connectives.html#exer_prove_not_sum_3digits_equals25",
  "type": "",
  "number": "19",
  "title": "Practice.",
  "body": " Practice   Use a proof by contradiction to prove that there do not exist three distinct digits whose sum is equal to 25. This statement was one of the true\/false questions in  . Hint: The negation would be that there exist three distinct digits whose sum is 25. What is the largest possible set of three distinct digits and what is their sum?    Hint: Copy this proof filling in the missing parts.   Suppose not. Then there exist three distinct digits whose sum is equal to 25.  On the other hand, the largest possible set of three distinct digits is and their sum is .  This is a contradiction. Therefore, there do not exist three distinct digits whose sum is equal to 25.    "
},
{
  "id": "exer_contradiction_coins_in_cups",
  "level": "2",
  "url": "sec_logic_connectives.html#exer_contradiction_coins_in_cups",
  "type": "",
  "number": "20",
  "title": "Practice.",
  "body": " Practice   We have nine coins and four cups. We place each coin in a cup. Use to prove that some cup has three or more coins. Hint: The negation would be that each cup has two or fewer coins.   "
},
{
  "id": "exer_contradiction_3reg_graph_order7",
  "level": "2",
  "url": "sec_logic_connectives.html#exer_contradiction_3reg_graph_order7",
  "type": "",
  "number": "21",
  "title": "Practice.",
  "body": " Practice   Use a proof by contradiction to prove that there cannot exist a 3-regular graph of order 7. Hint: By , the number of edges in a graph is equal to half of the sum of the degrees of the vertices. On the other hand, the number of edges must be an integer.    Hint: If there were such a graph, the sum of the degrees of the vertices would be .  Then, use the hint.   "
},
{
  "id": "exer_prove_bs_length5_three0s_or_three1s",
  "level": "2",
  "url": "sec_logic_connectives.html#exer_prove_bs_length5_three0s_or_three1s",
  "type": "",
  "number": "22",
  "title": "Understand.",
  "body": " Understand       Use a proof by contradiction to prove that every bit string of length five has at least three 0 s or at least three 1 s. Hint: The negation would be that there exists a bit string of length five with fewer than three s and fewer than three s. What is the longest such possible bit string?    Why does the negation use and ?         Hint: In the hint fewer than three 0 s means the number of 0 s is less than or equal to two.    Hint: DeMorgan's Law.     "
},
{
  "id": "exer_contradiction_coprime",
  "level": "2",
  "url": "sec_logic_connectives.html#exer_contradiction_coprime",
  "type": "",
  "number": "23",
  "title": "Understand.",
  "body": " Understand   Suppose and are coprime integers and is a positive prime. Use a proof by contradiction to prove that or . Hint: Be careful negating the or statement.    Hint: If and , then is a positive common divisor of and that is greater than one. What does that tell you about ?   "
},
{
  "id": "exer_dyk_pff_contradiction",
  "level": "2",
  "url": "sec_logic_connectives.html#exer_dyk_pff_contradiction",
  "type": "",
  "number": "24",
  "title": "Recap.",
  "body": " Recap   Do you know    Why is a contradiction?    How to write a proof by contradiction?    How we can begin a proof by contradiction so the reader knows that we are doing a proof by contradiction?    Why the phrase On the other hand is used in a proof by contradiction?      "
},
{
  "id": "exer_not_both_even_odd",
  "level": "2",
  "url": "sec_logic_connectives.html#exer_not_both_even_odd",
  "type": "",
  "number": "25",
  "title": "Explore.",
  "body": " Explore   Use a proof by contradiction to prove that an integer cannot be even and odd. Hint: If is even, use the definition of even to write for some integer . If is odd, use the definition of odd to write for some integer . Do not use again. Put these equations together to get . Next, solve for 1 to show that . On the other hand, the only divisors of 1 are .   "
},
{
  "id": "exer_lg3_irrat",
  "level": "2",
  "url": "sec_logic_connectives.html#exer_lg3_irrat",
  "type": "",
  "number": "26",
  "title": "Explore.",
  "body": " Explore   Copy the following proof and fill in the blanks. Thanks to Oscar Levin for the idea for this exercise.   Prove that is irrational.    Suppose not. Then is . By the definition of rational numbers , we can write for some integers and with . Using the definition of lg  , we can write . Raising both sides of this equation to the power we get   On the other hand, any power of two is even and so is even and any power of three is odd and so is odd. By Exercise , an integer cannot be even and odd. Thus,   This is a contradiction. Thus, is irrational.   "
},
{
  "id": "exer_proof_inf_many_primes",
  "level": "2",
  "url": "sec_logic_connectives.html#exer_proof_inf_many_primes",
  "type": "",
  "number": "27",
  "title": "Explore.",
  "body": " Explore    Copy the following proof and fill in the blanks.  Prove that there are infinitely many primes.    Suppose not. Then there would be a number of primes, so we could list all of them. Suppose that the list of all primes were . Consider the positive integer   First, so by the definition of it follows that . Since is prime, we know that . By Exercise , we know that . Since and , it follows that . For each value of , the same argument shows that and and so . Therefore, none of the primes divides .  On the other hand, are the only primes. It follows that has no prime divisors. Since is positive, we know . This is a contraction of which says .   "
},
{
  "id": "sec_quant_cex",
  "level": "1",
  "url": "sec_quant_cex.html",
  "type": "Section",
  "number": "1.2",
  "title": "Quantifiers",
  "body": " Quantifiers   In there were statements involving variables in which the truth of the statement depended on whether the statement was about all values, some values, or no values of the variables. Each of the words all , some , and no has a specific meaning in mathematics and computer science. In this section, we consider such quantifiers and their negations and formally introduce the idea of a counterexample . We also look at how to prove quantified statements.    The Game SET  Let's start with a puzzle.  The game SET\\texttrademark is produced by SET Enterprises, part of Monster Play. You can learn to play the game at \\url{https:\/\/tinyurl.com\/learntoplaySET}. There is a lot of information about this game on the Internet. Resist the temptation to use any resources to find answers to this (or any) activity. The fun part is figuring it out for yourself!   The game SET\\texttrademark  In the game SET\\texttrademark, there is a deck of special cards. Each card has the image of some number of a colored shape with some level of shading. If there is more than one shape on a card, the others shapes on the card are repeats of that shape with the same color and level of shading. For example, there is a card that has two striped, purple ovals, as shown in .   The SET\\texttrademark card with two striped, purple ovals. ( 2SPO)      There are four characteristic of the image on each card: number, shading, color, and shape. Each characteristic has three options as summarized in .   The options for each characteristic for the image on each card in the game SET\\texttrademark    characteristic  options (with their abbreviations)        number  1 , 2 , or 3    shading  none ( N ), striped ( S ), or full ( F )    color  red ( R ), purple ( P ), or green ( G )    symbol  oval ( O ), diamond ( D ), or squiggle ( Q )       Write the abbreviation for each card shown in . The card on the left is green and the card on the right is red.  Two cards from the game SET\\texttrademark.             For each combination of options there is exactly one card in the deck with that combination. How many cards are there in the game SET\\texttrademark? Explain.    A set of three cards is a SET if for each of the characteristics either the images on the three cards all agree or are all different. That is, all four of the following conditions must be met.   All three cards have the same number or there is one with 1, one with 2, and one with 3.    All three cards have the same shading or there is one with none, one striped, and one full.    All three cards have the same color or there is one red, one purple, and one green.    All three cards have the same symbol or there is one oval, one diamond, and one squiggle.    Check that the set of three cards shown in is a SET.  An example of a SET.    \\{ 2NRO , 2SRO , 2FRO \\}    Is the set of three cards shown in a SET? Justify your answer.  Is this set of three cards a SET?    \\{ 1SGQ , 2SPO , 3SRD \\}     Explain why the set of three cards shown in is not a SET.  An example of three cards that are not a SET.    \\{ 1FGD , 1NPD , 1NRD \\}     Is the set of three cards shown in a SET? Justify your answer.  Is this different set of three cards a SET?    \\{ 1SPO , 2FGD , 3NRQ \\}     What third card makes a SET with the pair of cards from ?    Given a pair of cards, explain how we can find a third card that makes a SET with the given pair. Be sure to explain in general (tell someone step-by-step how to find the missing third card.)       Quantifiers  In the game SET\\texttrademark, a set of three cards forms a SET if for each characteristic, all the cards agree or none of the cards agree. A set of three cards is not a SET if, for some characteristic, the cards have two of one kind and one of a different kind. Part of the challenge of learning the game is grappling with words like each , all , none , and some which are examples of quantifiers.   Quantifiers   Quantifiers can be defined on any set. Throughout this definition, our examples use the set of integers.   We indicate that a statement depends on a variable by writing instead of . The notation is predicate notation . For example, if means that the integer is odd, then means that the integer is odd, which is true, but means that the integer is odd, which is false.    The universal quantifier , denoted , means for all .   The statement means that is true for all values of . For example, if means that the integer is even, then means that every integer of the form is even, which is true. On the other hand, if means that , then means that every integer is divisible by three, which is false because, for example, 17 is not divisible by three.    The statement means is false for all values of . For example, if means that the integer is even, then means that no integer of the form is even, which is true.       The existential quantifier , denoted means there exists.    The statement means that is true for some value(s) of . For example, if means that , then means that some integer is divisible by three, which is true because, for example, 12 is divisible by three.    The statement means that is false for some value(s) of . For example, if means , then means that some integer is not divisible by three, which is true because, for example, 17 is not divisible by three.          There are many different English words and phrases that indicate quantifiers.   English words indicating quantifiers      Words and phrases that indicate a universal quantifier include: a, all, always, any, each, every, everyone, etc.    Words and phrases that indicate a universal quantifier followed by a negation include: impossible, never, no, no one, none, nothing, etc.    Words and phrases that indicate an existential quantifier include: at least one, can, contains, has, possible, some, someone, sometimes, there exist, there exists there is, there are, etc.    Note that some words and phrases that indicate the existential quantifier are plural, but it takes only one value of where is true to make the statement true. For example, in mathematics, some means at least one.      Universally quantified statements are sometimes written without an explicit quantifier. For example, we might say is even when we really mean is even for all integers .   Default universal  If a statement about variables does not explicitly state a quantifier, the default assumption is that the quantifier is universal.   Practice working with quantified statements.   More true or false?  Identify a word or phrase that indicates a quantifier, decide if each statement is true or false, and discuss how to justify your answer.   There is a graph that has five vertices and five edges.    Any graph with five vertices has five edges.    No graph has more edges than vertices.    Some square integers have exactly three positive divisors.    Any square integer has exactly three positive divisors.    Some graphs are regular. Recall that in a regular graph, every vertex has the same degree.    Some graphs are not regular.      Let's look at a few more examples identifying words or phrases that indicate a quantifier.   Identifying quantifiers   In each statement, find a word or phrase that indicates a quantifier and say which: or . In some parts, both quantifiers are involved. (We saw these statements in and .)   There are three distinct digits whose sum is 23.  The phrase there are indicates an existential quantifier .      Some integers are divisible by three and five.  The word some indicates an existential quantifier .      A graph with five vertices is the cycle or the complete graph .  The word a indicates a universal quantifier .      No graph has more edges than vertices.  The word no indicates a universal quantifier .      Every bit string of length five contains at least one 1 .  The word every indicates a universal quantifier and the word contains indicates an existential quantifier .           Proof Formats: and  How do we prove that a quantified statement is true?  To prove an existentially quantified statement, all we need to do is provide an example. Here is the proof format.   Prove: .   Consider (example).  (Explain why is true.)  Therefore, is true for some (describe type of object) , namely (example).    In the first sentence of we present an example without any explanation of how we found that example. Mathematicians sometimes explain where the example came from, but that explanation is not a required part of the proof. Let's look at a quick example.   There is a graph with five vertices and five edges   Prove  that there is a graph that has five vertices and five edges.    The phrase there is indicates an existentially quantified statement, so we follow .   Proof. Consider the cycle . Recall that has five vertices and five edges. Therefore, there is a graph that has five vertices and five edges, namely .    The proof of a universally quantified statement is more complicated because we have to prove that the statement holds for all possible examples. In some cases, we can simply check every example.   Checking every example   In , we introduced the integers mod 5, . In , multiplication is defined by . Prove that there is no solution to in . Note that .    We can check each element of to see if it is a solution. Our work is displayed in . Since none of the elements of is a solution, we can conclude that there is no solution to in .   Checking that has no solution in     evaluate in  does ?         0   no         1   no         2   no         3   no         4   no       In the previous example, we were able to check all five possible examples. But if the list of possible examples is very long or infinite, it is not reasonable or possible to check every example, and it is not enough to just check some examples. Here is the proof format.   Prove: .   Let be an (describe the type of object).  (Explain why is true.)  Therefore, is true for all (describe the type of object) .    The proof begins by naming an arbitrary object, , of the type described. This first sentence invites the reader to select any value of . Next, we show that the statement is true for that particular but unknown . Our proof must work for whatever value the reader selected.  Let's look at a quick example.   is even   Use the definition of even to prove that for every integer , the integer is even. (This proof was Exercise  .)    The phrase for every indicates a universally quantified statement, so we follow .   Proof. Let be an integer. Then where is an integer. By the definition of even, it follows that is even. Therefore, for every integer , the integer is even.    As usual, after we introduce new proof formats, we give you the opportunity to practice.   Proofs of quantified statements      Copy the following proof. Note that the phrase there is indicates an existentially quantified statement, so we use . Prove that there is an integer that has exactly four positive divisors.  Consider the integer six. The positive divisors of six are 1, 2, 3, and 6. Thus, six has exactly four positive divisors. Therefore, there is an integer that has exactly four positive divisors.      Edit the proof in to prove that there is an integer with exactly three positive divisors.    Copy the following proof. Note that the phrase for any indicates a universally quantified statement, so we use . Prove for any integer .  Let be an integer. Note that where By the definition of divides, it follows that Therefore, for every integer .      Edit the proof in to prove for any integer .      Many interesting mathematical statements involve both existential and universal quantifiers. Fortunately, we do not need new proof formats. Instead, we can nest proof formats one inside the other, as if they were Matryoshka dolls See wikipedia Matryoshka doll. or nested loops in computer programming. Try writing proofs that nest the proof formats for existentially and universally quantified statements.   Proofs of nested quantified statements      Copy the following proof. Note that we use and, within that format, we use . We have indented the lines to highlight the nesting. Prove that for any integer there is an integer such that .  Let be an integer.  Consider the integer .  Then .  Thus, there is an integer with , namely .  Therefore, for any integer there is an integer such that .      Edit the proof in to prove that for any integer there is an integer such that . Hint: Solve for before starting to write the proof.    Copy the following proof. Note that we use and, within that format, we use . Notice that we are nesting the quantifiers in the opposite order from . We have indented the lines to highlight the nesting. Prove that there exists an integer such that for any integer .  Consider the integer .  Let be an integer.  Then .  Thus, for any integer .  Therefore, there exists an integer such that for any integer , namely .      Edit the proof in to prove that there exists an integer such that for any integer . Hint: Solve for before starting to write to write the proof.      The last sentences of the proofs in may seem repetitive. They are logically necessary and a good idea for you to write as you are first learning proofs, but in practice mathematicians often omit those final sentences.   Omitting the concluding sentence of proofs of quantified statements  It is common to omit the concluding sentence(s) of a proof of a quantified statement.   Here is an example using .   Omitting the concluding lines of a proof of a quantified statement   Write a shorter version of the proof from  .    Prove that there exists an integer such that for any integer .   Proof. Consider the integer and let be any integer. Then .      Negating Quantified Statements and Counterexamples  How do we prove that a quantified statement is false? To answer this question, we need to recognize the negations of quantified statements. You may want to revisit and to see if you can state these negations for yourself before reading on.   Negating quantified statements   For any statement , we have the following negations of quantified statements.   Negating a universally quantified statement: .    Negating an existentially quantified statement: .       Let's unpack this theorem a bit.   Negating a universally quantified statement       Explain why  is correct.  The statement says is always true. The negation would say is not always true which is equivalent to saying is sometimes false.  The statement says is sometimes true which is equivalent to saying is sometimes false.  Thus .      Explain why  is correct.  The statement says is sometimes true. The negation would say is never true which is equivalent to saying is always false.  The statement says is always true which is equivalent to saying is always false.  Thus .         By , to prove that a universally quantified statement is false, all it takes is one example where it is false. There is a special name for an example that shows that a universally quantified statement is false.   Counterexample   A counterexample is an example where a universally-quantified statement is false. For example, a counterexample to the false statement Every square integer has exactly three positive divisors. from  is the integer 16 because is a square, but 16 has five positive divisors: 1, 2, 4, 8, and 16.    Practice finding counterexamples.   Counterexamples  Each of the following universally quantified statements is false. Find a specific counterexample to each statement. Hints: It might help to write the negation. Make sure to use DeMorgan's Laws if the statement involves and or or .   Every integer is divisible by three.    No integer is divisible by three and five.    Any integer is divisible by three or five.    Every prime is odd.    Any composite is even.    Each integer has at least two positive divisors.    No integer has more than five positive divisors.      While a counterexample is enough to prove that a universally quantified statement is false, to prove that an existentially quantified statement is false, we have to prove that a universally quantified statement is true using .    Exercises for The Game SET    Practice   Play the SET\\texttrademark game online here: \\url{https:\/\/buddyboardgames.com\/set}. Invite friends to join you or play on your own. Note that once someone finds a SET, those three cards are removed and replaced by three new cards, which is how the in-person game works. Play for at least 15 minutes and tell me how that went for you.     Understand   Try to solve the Daily SET Puzzle at \\url{https:\/\/www.setgame.com\/set\/puzzle}. Note that each time you find a SET, it is recorded in a table on the side. There will be exactly six different SETs you can find. Cards may be repeated in different SETs. You have to wait until the next day to try it again. Try to solve this Daily Puzzle for at least 15 minutes (or until you solve it) and tell me how that went for you.     Explore   A plane is a collection of four cards that they can be grouped in two pairs where each pair is missing the same third card to create a SET. Give an example of a plane whose missing card is 2SPO shown in .     Explore       Create a deal of eight purple cards that does not contain any SET. Briefly justify why there is no SET.    Create a deal of 12 cards that does not contain any SET. Briefly justify why there is no SET. Hint: Use at least two different colors.        Explore       Given one card, how many different SETs could it be in? Justify your answer. Caution: It is easy to count each SET twice by mistake. If so, just divide by two to get the correct count.    How many different SETs could be made from cards in the deck (not all at the same time). Explain your reasoning. Caution: It is easy to over count by mistake. If so, figure out what to divide by to get the correct count.         Exercises for Quantifiers   Practice   Consider the graph drawn in . Recall that a leaf is a vertex with degree one. For each statement about , identify a word or phrase that indicates a quantifier and decide if each statement is true or false. Briefly justify your answer.   The graph for Exercise .        There is a vertex of degree four in .    No vertex in has degree two.    Every degree leaf in is adjacent to a degree four vertex.    Some degree three vertices in are adjacent to a leaf.         There is indicates an existential quantifier. The statement is true. For example, the vertex has degree four.    Hint: No indicates a universal quantifier.    Hint: The leaves are and .       Practice   For each statement, identify a word or phrase that indicates a quantifier and decide if each statement is true or false. Briefly justify your answer.   The integers and are always coprime.    Sometimes, the integers and are coprime.    The integers and are never coprime.          Always indicates a universal quantifier. The statement is true. We proved it in .    Hint: It is true.    Hint: It is false.       Practice   For any integer , the statement means that . Decide if each statement is true or false. Briefly justify your answers.                           Practice   For any integer , the statement means that . Decide if each statement is true or false. Briefly justify your answers.                       Hint: You can find an example of an integer with .    True. For example .    Hint: True.       Understand   For any integer , the statement means that is greater than six and means that is less than 11. For what value(s) of , if any, is each statement true? Report your answer as a list, using to indicate an infinite set. No explanation required.                        (think!)        Recap   Do you know    What the symbols and stand for?    Which common words indicate an existential or universal quantifier?    Whether a statement with no or none is universally quantified or existentially quantified?    When a statement of the form is true and when it is false?    When a statement of the form is true and when it is false?        Explore   Give an example of predicates and such that is true, but is false.     Explore   The predicate means that person follows person on social media.   Write as a sentence:     Write as a sentence:     Explain the difference between and .         Everybody follows Selena Gomez on social media.    Hint: Your answer should be different from (a).    Hint: Try using words everybody and somebody .        Exercises for Proof Formats: and   Practice   Use to prove each of the following statements.   There is a prime greater than 20.    There is a prime that divides 20.    Some bit strings have length 20.    There exists a graph with 20 vertices.          Proof. Consider . Note that and 23 is prime because , , and . (It is okay if you just wrote 23 is prime .) Therefore, there is a prime greater than 20, namely 23.    Hint: .    Hint: Find a bit string of length 20.    Hint: Use a standard graph with 20 vertices.       Practice   In the graph drawn in , prove that every vertex in has odd degree by checking every example, as in .   The graph in Exercise .        Hint: Copy and complete .   Checking that every vertex of the graph from has odd degree    vertex  degree  odd?                                                  3  yes                  Practice   Use to prove each of the following statements.   For every integer , the integer is odd.     for any integer          Hint: Edit the proof in .    Hint: Edit the proof in  .       Understand   Use and to prove that there is an integer such that for any integer .    Hint: Edit the proof in .     Understand   Use and to prove that the equation has a rational solution for any integer .     Recap   Do you know    How to prove that a universally quantified statement is true?    How to prove that an existentially quantified statement is true?    How to nest proof formats?         Exercises for Negating Quantified Statements and Counterexamples   Practice   Each of the following statements is false. Provide a counterexample.   Any graph with five vertices has five edges.    No graph has more edges than vertices.    A graph with five vertices is the cycle or the complete graph .    Every graph is regular. Recall that a graph is regular if every vertex has the same degree.    No graph has chromatic number greater than four.         Hint: Your graph should have five vertices but not five edges.    Hint: Your graph should have more edges than vertices.    Hint: Your graph should have five vertices and not be or .    Hint: Your graph should have at least two different numbers in its degree sequence.    Hint: Look at  . That is not a counterexample, but you can generalize to find a counterexample.       Practice   Each of the following statements is false. Provide a counterexample.   Every prime is odd.    Any composite is even.    No two composites are coprime.    Every integer has a prime divisor.         Hint: There is only one even prime.    Hint: One counterexample is . Find a different counterexample.    Hint: Find two composites that are not coprime.    Hint: The number 1 is not prime.       Understand   Each of the following statements is false. Provide a counterexample.   All bit strings of length six have an even number of 0 s.    No bit string of length seven can both begin and end with 00 .    Every bit string of length five begins or ends with 0 .        Understand   Each of the following statements is false. Write the negation. Hint: The negation should be true. Another hint: Use DeMorgan's Laws .   Every integer is divisible by three and five.    Any integer is divisible by three or five.    No integer is divisible by three and five.    Some integer is divisible by three but not divisible by six.         Some integers are divisible by three or five.    Hint: Use .    Hint: No indicates the universal quantifier.    Hint: Try starting the negation with No .       Understand       Give an example to prove that the following statement is true: There is a 3-letter word where there are 3! ways to arrange the letters (not all of which have to be real words).    Give a counterexample to prove that the following statement is false: For any 3-letter word, there are 3! ways to arrange the letters (not all of which have to be real words.)        Recap   Do you know    Why the negation of a universally quantified statement is an existentially quantified statement, and vice versa?    How to prove that a universally quantified statement is false?    How to prove that an existentially quantified statement is false?    What a counterexample is?    Which theorem can help us negate a statement involving and or or ?        Explore   Let be a graph with vertices.   What is the largest possible degree of a vertex in ? Hint: Your answer should involve .    Could have a vertex of degree zero and a vertex of degree ? Explain.    State the negation of the statement: There are at least two vertices in that have equal degree.    Use contradiction to prove that there are at least two vertices in that have equal degree. Hint: Consider what would happen if the vertices each had different degrees.        Explore   Each of the following statements is false. Provide a counterexample.   Consider the statement . Give an example of integers and where the statement is true and give a counterexample to show the statement is not true in general.    Consider the statement . Give an example of integers and where the statement is true and give a counterexample to show the statement is not true in general.    When is and when is ? Your answers should involve and . Hint: Prime factorization.         "
},
{
  "id": "sec_quant_cex-2-1",
  "level": "2",
  "url": "sec_quant_cex.html#sec_quant_cex-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "quantifiers counterexample "
},
{
  "id": "act_set_game",
  "level": "2",
  "url": "sec_quant_cex.html#act_set_game",
  "type": "Activity",
  "number": "1.2.A",
  "title": "The game SET\\texttrademark.",
  "body": " The game SET\\texttrademark  In the game SET\\texttrademark, there is a deck of special cards. Each card has the image of some number of a colored shape with some level of shading. If there is more than one shape on a card, the others shapes on the card are repeats of that shape with the same color and level of shading. For example, there is a card that has two striped, purple ovals, as shown in .   The SET\\texttrademark card with two striped, purple ovals. ( 2SPO)      There are four characteristic of the image on each card: number, shading, color, and shape. Each characteristic has three options as summarized in .   The options for each characteristic for the image on each card in the game SET\\texttrademark    characteristic  options (with their abbreviations)        number  1 , 2 , or 3    shading  none ( N ), striped ( S ), or full ( F )    color  red ( R ), purple ( P ), or green ( G )    symbol  oval ( O ), diamond ( D ), or squiggle ( Q )       Write the abbreviation for each card shown in . The card on the left is green and the card on the right is red.  Two cards from the game SET\\texttrademark.             For each combination of options there is exactly one card in the deck with that combination. How many cards are there in the game SET\\texttrademark? Explain.    A set of three cards is a SET if for each of the characteristics either the images on the three cards all agree or are all different. That is, all four of the following conditions must be met.   All three cards have the same number or there is one with 1, one with 2, and one with 3.    All three cards have the same shading or there is one with none, one striped, and one full.    All three cards have the same color or there is one red, one purple, and one green.    All three cards have the same symbol or there is one oval, one diamond, and one squiggle.    Check that the set of three cards shown in is a SET.  An example of a SET.    \\{ 2NRO , 2SRO , 2FRO \\}    Is the set of three cards shown in a SET? Justify your answer.  Is this set of three cards a SET?    \\{ 1SGQ , 2SPO , 3SRD \\}     Explain why the set of three cards shown in is not a SET.  An example of three cards that are not a SET.    \\{ 1FGD , 1NPD , 1NRD \\}     Is the set of three cards shown in a SET? Justify your answer.  Is this different set of three cards a SET?    \\{ 1SPO , 2FGD , 3NRQ \\}     What third card makes a SET with the pair of cards from ?    Given a pair of cards, explain how we can find a third card that makes a SET with the given pair. Be sure to explain in general (tell someone step-by-step how to find the missing third card.)    "
},
{
  "id": "defn_quantifiers",
  "level": "2",
  "url": "sec_quant_cex.html#defn_quantifiers",
  "type": "Definition",
  "number": "1.2.8",
  "title": "Quantifiers.",
  "body": " Quantifiers   Quantifiers can be defined on any set. Throughout this definition, our examples use the set of integers.   We indicate that a statement depends on a variable by writing instead of . The notation is predicate notation . For example, if means that the integer is odd, then means that the integer is odd, which is true, but means that the integer is odd, which is false.    The universal quantifier , denoted , means for all .   The statement means that is true for all values of . For example, if means that the integer is even, then means that every integer of the form is even, which is true. On the other hand, if means that , then means that every integer is divisible by three, which is false because, for example, 17 is not divisible by three.    The statement means is false for all values of . For example, if means that the integer is even, then means that no integer of the form is even, which is true.       The existential quantifier , denoted means there exists.    The statement means that is true for some value(s) of . For example, if means that , then means that some integer is divisible by three, which is true because, for example, 12 is divisible by three.    The statement means that is false for some value(s) of . For example, if means , then means that some integer is not divisible by three, which is true because, for example, 17 is not divisible by three.         "
},
{
  "id": "sub_quantifiers-5",
  "level": "2",
  "url": "sec_quant_cex.html#sub_quantifiers-5",
  "type": "Remark",
  "number": "1.2.9",
  "title": "English words indicating quantifiers.",
  "body": " English words indicating quantifiers      Words and phrases that indicate a universal quantifier include: a, all, always, any, each, every, everyone, etc.    Words and phrases that indicate a universal quantifier followed by a negation include: impossible, never, no, no one, none, nothing, etc.    Words and phrases that indicate an existential quantifier include: at least one, can, contains, has, possible, some, someone, sometimes, there exist, there exists there is, there are, etc.    Note that some words and phrases that indicate the existential quantifier are plural, but it takes only one value of where is true to make the statement true. For example, in mathematics, some means at least one.     "
},
{
  "id": "rem_default_universal",
  "level": "2",
  "url": "sec_quant_cex.html#rem_default_universal",
  "type": "Remark",
  "number": "1.2.10",
  "title": "Default universal.",
  "body": " Default universal  If a statement about variables does not explicitly state a quantifier, the default assumption is that the quantifier is universal.  "
},
{
  "id": "act_TorF_again",
  "level": "2",
  "url": "sec_quant_cex.html#act_TorF_again",
  "type": "Activity",
  "number": "1.2.B",
  "title": "More true or false?",
  "body": " More true or false?  Identify a word or phrase that indicates a quantifier, decide if each statement is true or false, and discuss how to justify your answer.   There is a graph that has five vertices and five edges.    Any graph with five vertices has five edges.    No graph has more edges than vertices.    Some square integers have exactly three positive divisors.    Any square integer has exactly three positive divisors.    Some graphs are regular. Recall that in a regular graph, every vertex has the same degree.    Some graphs are not regular.     "
},
{
  "id": "exam_words_quants",
  "level": "2",
  "url": "sec_quant_cex.html#exam_words_quants",
  "type": "Example",
  "number": "1.2.11",
  "title": "Identifying quantifiers.",
  "body": " Identifying quantifiers   In each statement, find a word or phrase that indicates a quantifier and say which: or . In some parts, both quantifiers are involved. (We saw these statements in and .)   There are three distinct digits whose sum is 23.  The phrase there are indicates an existential quantifier .      Some integers are divisible by three and five.  The word some indicates an existential quantifier .      A graph with five vertices is the cycle or the complete graph .  The word a indicates a universal quantifier .      No graph has more edges than vertices.  The word no indicates a universal quantifier .      Every bit string of length five contains at least one 1 .  The word every indicates a universal quantifier and the word contains indicates an existential quantifier .        "
},
{
  "id": "pff_exists",
  "level": "2",
  "url": "sec_quant_cex.html#pff_exists",
  "type": "Proof",
  "number": "1.2.C.1",
  "title": "",
  "body": " Prove: .   Consider (example).  (Explain why is true.)  Therefore, is true for some (describe type of object) , namely (example).   "
},
{
  "id": "exam_exists_graph_5vert_5edge",
  "level": "2",
  "url": "sec_quant_cex.html#exam_exists_graph_5vert_5edge",
  "type": "Example",
  "number": "1.2.12",
  "title": "There is a graph with five vertices and five edges.",
  "body": " There is a graph with five vertices and five edges   Prove  that there is a graph that has five vertices and five edges.    The phrase there is indicates an existentially quantified statement, so we follow .   Proof. Consider the cycle . Recall that has five vertices and five edges. Therefore, there is a graph that has five vertices and five edges, namely .   "
},
{
  "id": "exam_check_every_example",
  "level": "2",
  "url": "sec_quant_cex.html#exam_check_every_example",
  "type": "Example",
  "number": "1.2.13",
  "title": "Checking every example.",
  "body": " Checking every example   In , we introduced the integers mod 5, . In , multiplication is defined by . Prove that there is no solution to in . Note that .    We can check each element of to see if it is a solution. Our work is displayed in . Since none of the elements of is a solution, we can conclude that there is no solution to in .   Checking that has no solution in     evaluate in  does ?         0   no         1   no         2   no         3   no         4   no      "
},
{
  "id": "pff_forall",
  "level": "2",
  "url": "sec_quant_cex.html#pff_forall",
  "type": "Proof",
  "number": "1.2.C.2",
  "title": "",
  "body": " Prove: .   Let be an (describe the type of object).  (Explain why is true.)  Therefore, is true for all (describe the type of object) .   "
},
{
  "id": "exam_6qminus10_is_even",
  "level": "2",
  "url": "sec_quant_cex.html#exam_6qminus10_is_even",
  "type": "Example",
  "number": "1.2.15",
  "title": "<span class=\"process-math\">\\(6q-10\\)<\/span> is even.",
  "body": " is even   Use the definition of even to prove that for every integer , the integer is even. (This proof was Exercise  .)    The phrase for every indicates a universally quantified statement, so we follow .   Proof. Let be an integer. Then where is an integer. By the definition of even, it follows that is even. Therefore, for every integer , the integer is even.   "
},
{
  "id": "act_proof_quants",
  "level": "2",
  "url": "sec_quant_cex.html#act_proof_quants",
  "type": "Activity",
  "number": "1.2.C",
  "title": "Proofs of quantified statements.",
  "body": " Proofs of quantified statements      Copy the following proof. Note that the phrase there is indicates an existentially quantified statement, so we use . Prove that there is an integer that has exactly four positive divisors.  Consider the integer six. The positive divisors of six are 1, 2, 3, and 6. Thus, six has exactly four positive divisors. Therefore, there is an integer that has exactly four positive divisors.      Edit the proof in to prove that there is an integer with exactly three positive divisors.    Copy the following proof. Note that the phrase for any indicates a universally quantified statement, so we use . Prove for any integer .  Let be an integer. Note that where By the definition of divides, it follows that Therefore, for every integer .      Edit the proof in to prove for any integer .     "
},
{
  "id": "act_proof_quants_nested",
  "level": "2",
  "url": "sec_quant_cex.html#act_proof_quants_nested",
  "type": "Activity",
  "number": "1.2.D",
  "title": "Proofs of nested quantified statements.",
  "body": " Proofs of nested quantified statements      Copy the following proof. Note that we use and, within that format, we use . We have indented the lines to highlight the nesting. Prove that for any integer there is an integer such that .  Let be an integer.  Consider the integer .  Then .  Thus, there is an integer with , namely .  Therefore, for any integer there is an integer such that .      Edit the proof in to prove that for any integer there is an integer such that . Hint: Solve for before starting to write the proof.    Copy the following proof. Note that we use and, within that format, we use . Notice that we are nesting the quantifiers in the opposite order from . We have indented the lines to highlight the nesting. Prove that there exists an integer such that for any integer .  Consider the integer .  Let be an integer.  Then .  Thus, for any integer .  Therefore, there exists an integer such that for any integer , namely .      Edit the proof in to prove that there exists an integer such that for any integer . Hint: Solve for before starting to write to write the proof.     "
},
{
  "id": "rem_omit_last_sentence_proof_quants",
  "level": "2",
  "url": "sec_quant_cex.html#rem_omit_last_sentence_proof_quants",
  "type": "Remark",
  "number": "1.2.16",
  "title": "Omitting the concluding sentence of proofs of quantified statements.",
  "body": " Omitting the concluding sentence of proofs of quantified statements  It is common to omit the concluding sentence(s) of a proof of a quantified statement.  "
},
{
  "id": "exam_omit_last_sentence_proof_quants",
  "level": "2",
  "url": "sec_quant_cex.html#exam_omit_last_sentence_proof_quants",
  "type": "Example",
  "number": "1.2.17",
  "title": "Omitting the concluding lines of a proof of a quantified statement.",
  "body": " Omitting the concluding lines of a proof of a quantified statement   Write a shorter version of the proof from  .    Prove that there exists an integer such that for any integer .   Proof. Consider the integer and let be any integer. Then .   "
},
{
  "id": "thm_neg_quants",
  "level": "2",
  "url": "sec_quant_cex.html#thm_neg_quants",
  "type": "Theorem",
  "number": "1.2.18",
  "title": "Negating quantified statements.",
  "body": " Negating quantified statements   For any statement , we have the following negations of quantified statements.   Negating a universally quantified statement: .    Negating an existentially quantified statement: .      "
},
{
  "id": "exam_neg_forall",
  "level": "2",
  "url": "sec_quant_cex.html#exam_neg_forall",
  "type": "Example",
  "number": "1.2.19",
  "title": "Negating a universally quantified statement.",
  "body": " Negating a universally quantified statement       Explain why  is correct.  The statement says is always true. The negation would say is not always true which is equivalent to saying is sometimes false.  The statement says is sometimes true which is equivalent to saying is sometimes false.  Thus .      Explain why  is correct.  The statement says is sometimes true. The negation would say is never true which is equivalent to saying is always false.  The statement says is always true which is equivalent to saying is always false.  Thus .        "
},
{
  "id": "defn_cex",
  "level": "2",
  "url": "sec_quant_cex.html#defn_cex",
  "type": "Definition",
  "number": "1.2.20",
  "title": "Counterexample.",
  "body": " Counterexample   A counterexample is an example where a universally-quantified statement is false. For example, a counterexample to the false statement Every square integer has exactly three positive divisors. from  is the integer 16 because is a square, but 16 has five positive divisors: 1, 2, 4, 8, and 16.   "
},
{
  "id": "act_cex_my_first",
  "level": "2",
  "url": "sec_quant_cex.html#act_cex_my_first",
  "type": "Activity",
  "number": "1.2.E",
  "title": "Counterexamples.",
  "body": " Counterexamples  Each of the following universally quantified statements is false. Find a specific counterexample to each statement. Hints: It might help to write the negation. Make sure to use DeMorgan's Laws if the statement involves and or or .   Every integer is divisible by three.    No integer is divisible by three and five.    Any integer is divisible by three or five.    Every prime is odd.    Any composite is even.    Each integer has at least two positive divisors.    No integer has more than five positive divisors.     "
},
{
  "id": "exer_set_game_online",
  "level": "2",
  "url": "sec_quant_cex.html#exer_set_game_online",
  "type": "",
  "number": "1",
  "title": "Practice.",
  "body": " Practice   Play the SET\\texttrademark game online here: \\url{https:\/\/buddyboardgames.com\/set}. Invite friends to join you or play on your own. Note that once someone finds a SET, those three cards are removed and replaced by three new cards, which is how the in-person game works. Play for at least 15 minutes and tell me how that went for you.   "
},
{
  "id": "exer_set_game_daily_puzzle",
  "level": "2",
  "url": "sec_quant_cex.html#exer_set_game_daily_puzzle",
  "type": "",
  "number": "2",
  "title": "Understand.",
  "body": " Understand   Try to solve the Daily SET Puzzle at \\url{https:\/\/www.setgame.com\/set\/puzzle}. Note that each time you find a SET, it is recorded in a table on the side. There will be exactly six different SETs you can find. Cards may be repeated in different SETs. You have to wait until the next day to try it again. Try to solve this Daily Puzzle for at least 15 minutes (or until you solve it) and tell me how that went for you.   "
},
{
  "id": "exer_set_game_plane",
  "level": "2",
  "url": "sec_quant_cex.html#exer_set_game_plane",
  "type": "",
  "number": "3",
  "title": "Explore.",
  "body": " Explore   A plane is a collection of four cards that they can be grouped in two pairs where each pair is missing the same third card to create a SET. Give an example of a plane whose missing card is 2SPO shown in .   "
},
{
  "id": "exer_set_game_cards_noset",
  "level": "2",
  "url": "sec_quant_cex.html#exer_set_game_cards_noset",
  "type": "",
  "number": "4",
  "title": "Explore.",
  "body": " Explore       Create a deal of eight purple cards that does not contain any SET. Briefly justify why there is no SET.    Create a deal of 12 cards that does not contain any SET. Briefly justify why there is no SET. Hint: Use at least two different colors.      "
},
{
  "id": "exer_set_game_count_sets_total",
  "level": "2",
  "url": "sec_quant_cex.html#exer_set_game_count_sets_total",
  "type": "",
  "number": "5",
  "title": "Explore.",
  "body": " Explore       Given one card, how many different SETs could it be in? Justify your answer. Caution: It is easy to count each SET twice by mistake. If so, just divide by two to get the correct count.    How many different SETs could be made from cards in the deck (not all at the same time). Explain your reasoning. Caution: It is easy to over count by mistake. If so, figure out what to divide by to get the correct count.      "
},
{
  "id": "exer_quant_word_graphs",
  "level": "2",
  "url": "sec_quant_cex.html#exer_quant_word_graphs",
  "type": "",
  "number": "6",
  "title": "Practice.",
  "body": " Practice   Consider the graph drawn in . Recall that a leaf is a vertex with degree one. For each statement about , identify a word or phrase that indicates a quantifier and decide if each statement is true or false. Briefly justify your answer.   The graph for Exercise .        There is a vertex of degree four in .    No vertex in has degree two.    Every degree leaf in is adjacent to a degree four vertex.    Some degree three vertices in are adjacent to a leaf.         There is indicates an existential quantifier. The statement is true. For example, the vertex has degree four.    Hint: No indicates a universal quantifier.    Hint: The leaves are and .     "
},
{
  "id": "exer_quant_coprime",
  "level": "2",
  "url": "sec_quant_cex.html#exer_quant_coprime",
  "type": "",
  "number": "7",
  "title": "Practice.",
  "body": " Practice   For each statement, identify a word or phrase that indicates a quantifier and decide if each statement is true or false. Briefly justify your answer.   The integers and are always coprime.    Sometimes, the integers and are coprime.    The integers and are never coprime.          Always indicates a universal quantifier. The statement is true. We proved it in .    Hint: It is true.    Hint: It is false.     "
},
{
  "id": "exer_equals_own_sq_predicate",
  "level": "2",
  "url": "sec_quant_cex.html#exer_equals_own_sq_predicate",
  "type": "",
  "number": "8",
  "title": "Practice.",
  "body": " Practice   For any integer , the statement means that . Decide if each statement is true or false. Briefly justify your answers.                         "
},
{
  "id": "exer_equals_own_sq_quants",
  "level": "2",
  "url": "sec_quant_cex.html#exer_equals_own_sq_quants",
  "type": "",
  "number": "9",
  "title": "Practice.",
  "body": " Practice   For any integer , the statement means that . Decide if each statement is true or false. Briefly justify your answers.                       Hint: You can find an example of an integer with .    True. For example .    Hint: True.     "
},
{
  "id": "exer_list_integers_true",
  "level": "2",
  "url": "sec_quant_cex.html#exer_list_integers_true",
  "type": "",
  "number": "10",
  "title": "Understand.",
  "body": " Understand   For any integer , the statement means that is greater than six and means that is less than 11. For what value(s) of , if any, is each statement true? Report your answer as a list, using to indicate an infinite set. No explanation required.                        (think!)      "
},
{
  "id": "exer_dyk_quants",
  "level": "2",
  "url": "sec_quant_cex.html#exer_dyk_quants",
  "type": "",
  "number": "11",
  "title": "Recap.",
  "body": " Recap   Do you know    What the symbols and stand for?    Which common words indicate an existential or universal quantifier?    Whether a statement with no or none is universally quantified or existentially quantified?    When a statement of the form is true and when it is false?    When a statement of the form is true and when it is false?      "
},
{
  "id": "exer_quants_not_distribute_or",
  "level": "2",
  "url": "sec_quant_cex.html#exer_quants_not_distribute_or",
  "type": "",
  "number": "12",
  "title": "Explore.",
  "body": " Explore   Give an example of predicates and such that is true, but is false.   "
},
{
  "id": "exer_follows_social_media",
  "level": "2",
  "url": "sec_quant_cex.html#exer_follows_social_media",
  "type": "",
  "number": "13",
  "title": "Explore.",
  "body": " Explore   The predicate means that person follows person on social media.   Write as a sentence:     Write as a sentence:     Explain the difference between and .         Everybody follows Selena Gomez on social media.    Hint: Your answer should be different from (a).    Hint: Try using words everybody and somebody .     "
},
{
  "id": "exer_easy_proofs_exists",
  "level": "2",
  "url": "sec_quant_cex.html#exer_easy_proofs_exists",
  "type": "",
  "number": "14",
  "title": "Practice.",
  "body": " Practice   Use to prove each of the following statements.   There is a prime greater than 20.    There is a prime that divides 20.    Some bit strings have length 20.    There exists a graph with 20 vertices.          Proof. Consider . Note that and 23 is prime because , , and . (It is okay if you just wrote 23 is prime .) Therefore, there is a prime greater than 20, namely 23.    Hint: .    Hint: Find a bit string of length 20.    Hint: Use a standard graph with 20 vertices.     "
},
{
  "id": "exer_all_odd_degree",
  "level": "2",
  "url": "sec_quant_cex.html#exer_all_odd_degree",
  "type": "",
  "number": "15",
  "title": "Practice.",
  "body": " Practice   In the graph drawn in , prove that every vertex in has odd degree by checking every example, as in .   The graph in Exercise .        Hint: Copy and complete .   Checking that every vertex of the graph from has odd degree    vertex  degree  odd?                                                  3  yes                "
},
{
  "id": "exer_easy_proofs_forall",
  "level": "2",
  "url": "sec_quant_cex.html#exer_easy_proofs_forall",
  "type": "",
  "number": "16",
  "title": "Practice.",
  "body": " Practice   Use to prove each of the following statements.   For every integer , the integer is odd.     for any integer          Hint: Edit the proof in .    Hint: Edit the proof in  .     "
},
{
  "id": "exer_proof_exists_forall",
  "level": "2",
  "url": "sec_quant_cex.html#exer_proof_exists_forall",
  "type": "",
  "number": "17",
  "title": "Understand.",
  "body": " Understand   Use and to prove that there is an integer such that for any integer .    Hint: Edit the proof in .   "
},
{
  "id": "exer_rational_soln",
  "level": "2",
  "url": "sec_quant_cex.html#exer_rational_soln",
  "type": "",
  "number": "18",
  "title": "Understand.",
  "body": " Understand   Use and to prove that the equation has a rational solution for any integer .   "
},
{
  "id": "exer_dyk_pff_quants",
  "level": "2",
  "url": "sec_quant_cex.html#exer_dyk_pff_quants",
  "type": "",
  "number": "19",
  "title": "Recap.",
  "body": " Recap   Do you know    How to prove that a universally quantified statement is true?    How to prove that an existentially quantified statement is true?    How to nest proof formats?      "
},
{
  "id": "exer_cex_graphs",
  "level": "2",
  "url": "sec_quant_cex.html#exer_cex_graphs",
  "type": "",
  "number": "20",
  "title": "Practice.",
  "body": " Practice   Each of the following statements is false. Provide a counterexample.   Any graph with five vertices has five edges.    No graph has more edges than vertices.    A graph with five vertices is the cycle or the complete graph .    Every graph is regular. Recall that a graph is regular if every vertex has the same degree.    No graph has chromatic number greater than four.         Hint: Your graph should have five vertices but not five edges.    Hint: Your graph should have more edges than vertices.    Hint: Your graph should have five vertices and not be or .    Hint: Your graph should have at least two different numbers in its degree sequence.    Hint: Look at  . That is not a counterexample, but you can generalize to find a counterexample.     "
},
{
  "id": "exer_cex_numberthy",
  "level": "2",
  "url": "sec_quant_cex.html#exer_cex_numberthy",
  "type": "",
  "number": "21",
  "title": "Practice.",
  "body": " Practice   Each of the following statements is false. Provide a counterexample.   Every prime is odd.    Any composite is even.    No two composites are coprime.    Every integer has a prime divisor.         Hint: There is only one even prime.    Hint: One counterexample is . Find a different counterexample.    Hint: Find two composites that are not coprime.    Hint: The number 1 is not prime.     "
},
{
  "id": "exer_cex_bs",
  "level": "2",
  "url": "sec_quant_cex.html#exer_cex_bs",
  "type": "",
  "number": "22",
  "title": "Understand.",
  "body": " Understand   Each of the following statements is false. Provide a counterexample.   All bit strings of length six have an even number of 0 s.    No bit string of length seven can both begin and end with 00 .    Every bit string of length five begins or ends with 0 .      "
},
{
  "id": "exer_neg_numberthy",
  "level": "2",
  "url": "sec_quant_cex.html#exer_neg_numberthy",
  "type": "",
  "number": "23",
  "title": "Understand.",
  "body": " Understand   Each of the following statements is false. Write the negation. Hint: The negation should be true. Another hint: Use DeMorgan's Laws .   Every integer is divisible by three and five.    Any integer is divisible by three or five.    No integer is divisible by three and five.    Some integer is divisible by three but not divisible by six.         Some integers are divisible by three or five.    Hint: Use .    Hint: No indicates the universal quantifier.    Hint: Try starting the negation with No .     "
},
{
  "id": "exer_rearrange_3letter_word",
  "level": "2",
  "url": "sec_quant_cex.html#exer_rearrange_3letter_word",
  "type": "",
  "number": "24",
  "title": "Understand.",
  "body": " Understand       Give an example to prove that the following statement is true: There is a 3-letter word where there are 3! ways to arrange the letters (not all of which have to be real words).    Give a counterexample to prove that the following statement is false: For any 3-letter word, there are 3! ways to arrange the letters (not all of which have to be real words.)      "
},
{
  "id": "exer_dyk_cex",
  "level": "2",
  "url": "sec_quant_cex.html#exer_dyk_cex",
  "type": "",
  "number": "25",
  "title": "Recap.",
  "body": " Recap   Do you know    Why the negation of a universally quantified statement is an existentially quantified statement, and vice versa?    How to prove that a universally quantified statement is false?    How to prove that an existentially quantified statement is false?    What a counterexample is?    Which theorem can help us negate a statement involving and or or ?      "
},
{
  "id": "exer_irregular_graphs",
  "level": "2",
  "url": "sec_quant_cex.html#exer_irregular_graphs",
  "type": "",
  "number": "26",
  "title": "Explore.",
  "body": " Explore   Let be a graph with vertices.   What is the largest possible degree of a vertex in ? Hint: Your answer should involve .    Could have a vertex of degree zero and a vertex of degree ? Explain.    State the negation of the statement: There are at least two vertices in that have equal degree.    Use contradiction to prove that there are at least two vertices in that have equal degree. Hint: Consider what would happen if the vertices each had different degrees.      "
},
{
  "id": "exer_cex_gcd",
  "level": "2",
  "url": "sec_quant_cex.html#exer_cex_gcd",
  "type": "",
  "number": "27",
  "title": "Explore.",
  "body": " Explore   Each of the following statements is false. Provide a counterexample.   Consider the statement . Give an example of integers and where the statement is true and give a counterexample to show the statement is not true in general.    Consider the statement . Give an example of integers and where the statement is true and give a counterexample to show the statement is not true in general.    When is and when is ? Your answers should involve and . Hint: Prime factorization.      "
},
{
  "id": "sec_conditional_statements",
  "level": "1",
  "url": "sec_conditional_statements.html",
  "type": "Section",
  "number": "1.3",
  "title": "Conditional Statements",
  "body": " Conditional Statements   Most statements in mathematics and computer science involve conditionals: if one thing happens, then another thing happens. Consider, for example, a database that tracks patients who have scheduled follow-up visits (or not). We might want to send a reminder to patients who have not yet scheduled their follow-up visits. That is, if the patient has not scheduled their follow-up visit, then we want to send them a reminder.  In this section, we study conditional statements and how to prove that they are true. We also look at their negations and construct counterexamples.    Promises: Conditional Statements  We begin with a definition.   Conditional statements       For statements and , the statement if  , then  , denoted , is a conditional statement. We also say  implies  . The statement promises that if is true, then must also be true. For example, consider the following statement: For any integer , if , then . This statement is true because when we have .    In the statement , the statement is the hypothesis and is the conclusion . For example, consider the following statement: If a graph is a tree, then it has a leaf. The hypothesis is that a graph is a tree. The conclusion is that it has a leaf.       For to be true, it must be the case that if is true, then is 100% guaranteed to also be true. It might be the case that causes , for example, if : Tova dropped her glove in a puddle and : Tova's glove got wet. then : If Tova dropped her glove in a puddle, then Tova's glove got wet. is true. In this example, caused .  Alternatively, it might be the case that had to happen in order for to happen. For example, if : Derek got an A in Algorithms class and : Derek took the Algorithms class. then : if Derek got an A in Algorithms class, then Derek took the Algorithms class. is true. In this example, would have to happen before .  Let's look more closely at when a conditional is true or false.   Understanding when a conditional is true   Consider the following conditional statement : If you show up to class every day and do all of the homework on time,  then you will get an A in this class.   Is true or false if you show up to class every day and do all of the homework on time and you get an A in this class?  It is true. When both the hypothesis and the conclusion are true, we have kept the promise.      Is true or false if you show up to class every day and do all of the homework on time but you do not get an A in this class?  It is false. When the hypothesis is true but the conclusion is false, we have broken the promise.      Is true or false if I do not always show up to class and do not always get my homework in on time, but I still get an A in this class?  It is true. When the hypothesis is false but the conclusion is false, we have not broken the promise.      Is true or false if I do not always show up to class and do not always get my homework in on time and I get a C in this class?  It is true. When the hypothesis and the conclusion are false, we have not broken the promise.         We summarize our analysis from using a truth table.   Truth table for if\/then   Construct a truth table for .   The truth table is shown in .    Truth table for the logical connective implies                                     It is important to note the case where the hypothesis of a conditional is false.   False implies anything is true  The statement is true when is false, no matter what is.   Practice working with more complicated conditional statements.   Promises  In many parts of this activity, you are asked to construct a truth table. You may start a new truth table for each part, but consider adding columns to your existing truth table instead.   Copy the truth table for .    Add a column for and another column for .    Add a column for .    Use your truth table to show that is a tautology by adding a column for and another column for .    Add a column for . What do you notice? Discuss why that makes sense.      Make sure that you have completed because we are about to reveal some of the answers.   Truth tables for statements involving conditionals       Construct a truth table for .   shows the truth table. Note that the hypothesis is now and the conclusion is now . The only time is false is when the hypothesis is true but the conclusion is false.   Truth table for the converse                                       Use a truth table to show that is a tautology.   shows the truth table. Because the last column is all true, we can conclude that is a tautology.   Truth table showing the tautology for the simplification inference                                             Construct a truth table for . What do you notice?   shows the truth table. Because the last column is the same as the truth table for in , we can conclude that they are logically equivalent. That is, .   Truth table showing the implication equivalence                                                Note the new equivalence we found in  .   Implication equivalence       For statements and , .    Equivalently, for statements and , .       Note that the second statement of follows from the first by substituting and therefore .  A common use of if\/then in computer programming is the if\/then\/else construction.    If, then, else construction   A common command in computer programming is a statement of the form If , then , else . This statement tells the computer that if is true, then do what says and if is false, then do what says.   Write the statement if , then , else in logical notation.  The statement says if , then and also if , then so we have       Consider the following statement: for any integer , if is even, then the answer is , else the answer is . What is the answer when ? What is the answer when ?  When the statement is even is true and so the answer is . On the other hand, when the statement is even is false and so the answer is .           Proof Format: Direct Proof of  Since promises that if is true, then is true, our proof format begins by assuming that is true and concludes once we have shown that is true. The proof does not mention the case where is false since is automatically true if that happens, as stated in .   Prove:    Assume is true.  (Explain why it follows that is true.)  Thus is true.    As usual, when we introduce a new proof format, we present an example and ask you to edit it to prove a similar statement.   Direct proof of a conditional statement      Copy the following proof of a direct proof of a conditional statement. Note that we are using because the statement is universally quantified as well as . Prove for any integer , if is odd then is odd.  Let be an integer. Assume that is odd. By the definition of odd we can write for some integer . Then .  (Side note: to show that is odd, we need to write in the form .)  Note that .  Since is an integer, it follows from the definition of odd that is odd.      Edit the proof in to prove that for any integer if is odd, then is odd.        Broken Promises: Negating Conditional Statements  We have just seen how to prove that a conditional statement is true. How do we construct a counterexample involving a conditional statement to prove that it is false?   Counterexamples involving conditional statements  Show that each the statements (a)-(c) is false by finding a counterexample for each statement.   If a graph has chromatic number four, then it must be the complete graph .    Given real numbers and , if , then and .    For any integers and , if , then or .    What do we need to be true in order to show that is false?    Construct a truth table for . Include an intermediate column for .     is logically equivalent to a statement involving . What is it?      Make sure that you have completed because we are about to reveal the answers.   Counterexamples involving conditional statements   For each statement from (a)-(c), find a counterexample to show the statement is false.   If a graph has chromatic number four, then it must be the complete graph .  One possible counterexample is the wheel , drawn in . (By the way, we could not use as a counterexample because .) Notice that our counterexample has the hypothesis true and the conclusion false.      Given real numbers and , if , then and .  One possible counterexample is and . While it is true that , because it follows that the conclusion that and is false. Notice that our counterexample has the hypothesis true and the conclusion false. To insure that the conclusion was false, we used DeMorgan's Laws  .      For any integers and , if , then or .  One possible counterexample would be and because then but and . Notice that our counterexample has the hypothesis true and the conclusion false. To insure that the conclusion was false, we used DeMorgan's Laws  .         As we saw in and , a counterexample to must have true and false. After all, that is the only way to break the promise.   Broken promise   The negation of If , then is the broken promise  but not . That is,     Let's look at an example of writing the negation of conditional statements.   Negating conditional statements   Write the negation of each statement in a sentence. Hint: The negation should be true for your counterexample.   If a graph has chromatic number four, then it must be the complete graph .  Note that this statement does not state a specific quantifier, so following , we interpret this statement as universally quantified. Using and we get the following negation: There exists a graph that has chromatic number four but is not the complete graph . Our counterexample from found a graph, namely , that has chromatic number four but is not the complete graph .      Given real numbers and , if , then and .  We use and to find the following awkwardly-stated draft of the negation: There are real numbers and such that but it is not the case that and . We can eliminate the awkward it is not the case by using DeMorgan's law . Our negation is the following statement: There are real numbers and such that but either or . Our counterexample from found real numbers and where but .      For any integers and , if , then or .  We use and to find the following awkwardly-stated draft of the negation: There are integers and such that but it is not the case that or . We can eliminate the awkward it is not the case by using DeMorgan's law . Our negation is the following statement: There are integers and such that but and . Our counterexample from found integers and where but and .           Proof Formats: Proof of Using Implication  The implication equivalence gives us a new way to prove an or statement, which we saw earlier using cases in . That is, to prove we can prove .   Prove:    Assume is false.  (Explain why it follows that is true.)  Thus is true.    As usual, when we introduce a new proof format, we present an example and ask you to edit it to prove a similar statement.   Direct proof of an or statement using an equivalent conditional      Copy the following proof of proof of an or statement using the implication equivalence. Note that we are using because the statement is universally quantified as well as . Prove that for any positive real numbers and such that , either or .  Let and be positive real numbers such that . Assume . Multiplying each side of this equation by the positive number we get . Dividing each side of this equation by 10 we get . Thus either or .      Edit the proof in to prove that for any positive real numbers and such that , either or .      A common concern about proving an or statement using the implication equivalence is that we have proved that if is false, then is true, but it feels like we are missing a proof that if is false, then is true. It is not missing. Let's look at how to better understand by comparing it to proof by cases.   Compare proving an or statement using implication versus proof by cases    Explain by considering how to prove using cases with the cases are or .    Prove: using cases with the cases or .    We consider two cases.  Case 1: Assume . Thus, .  Case 2: Assume . (Explain why follows.) Thus, .  In either case, .    When we cross out the obvious lines of the proof we get the following proof:    \\st{We consider two cases.}  \\st{Case 1: Assume . Thus, .}  \\st{Case 2:} Assume . (Explain why follows.) Thus, .  \\st{In either case, .}    This proof is the .      Exercises   Exercises for Promises: Conditional Statements   Practice   Explain why each conditional statement is true.   For any integer , if , then . Hint: Plug in.    For any integer , if , then . Hint: Solve.         When we have .    Hint: Now explain how to solve the equation.       Practice   Use a truth table to verify that is a tautology. Include an intermediate column for .    Hint: The truth table should have four columns: , , , . The truth table should also have four rows, as in . To show that the statement is a tautology, the last column of your truth table should be all T s.     Practice       Construct a truth table for . Include an intermediate column for .    Construct a truth table for . Include an intermediate column for .    What do you notice?        Understand   Construct a truth table to show that is a tautology. This logical equivalence justifies modus ponens , a key logical inference we discuss in .     Understand   Construct a truth table for each statement. Include intermediate columns.                 Understand   Construct a truth table to show that . Include appropriate intermediate columns. This logical equivalence justifies (for 2 cases).    Hint: Your truth table should have eight columns: , , , , , , , and . Your truth table should also have eight rows, as in . The sixth and eighth columns should be the same.     Understand       Use the implication equivalence to rewrite the following statement as a conditional: Either you take a break from playing that video game or I will take away your controller for a week.    Use the implication equivalence to rewrite the following statement using or : If you do not text me by 6 PM, then I will text you.         If you do not take a break from playing that video game, then I will take away your controller for a week.    Hint: Your answer should not have any negative words (like not ).       Recap   Do you know    What the symbol means in this logic context?    What the statement if , then promises?    When a conditional statement is true and when it is false?    How to draw truth tables that involve conditional statements?    Why ?    How to use a truth table to verify that a logical equivalence is valid?        Explore   Is logically equivalent to ? Use a truth table to justify your answer. Include appropriate intermediate columns.      Exercises for Proof Format: Direct Proof of   Practice   Use and to prove each statement from Exercise .   Prove for any integer , if , then . Hint: Plug in.    Prove for any integer , if , then . Hint: Solve.        Practice   Use , , and to prove that for any integer , if is odd, then is odd. Hint: Write . Next, simplify and write it as .     Practice   Use , , and to prove that for any integer , if , then . Hint: Write for some integer . How can you write ?    Hint: The proof begins   Proof. Let be an integer. Assume . By definition of divides, \\ldots  Then use the hint.     Practice    Use , , and to prove if , then for any integers and . Hint: Write for some integer . Next, simplify and write it as .     Understand    Use , , and to prove for any integers and if is even and is odd, then is odd and is even. Hint: Write and for some integers and . (You cannot use the same integer for both.)    Hint: Here is an outline of the proof.   Proof. Let and be integers. Assume \\ldots. By the definitions of even and odd, we can write \\ldots (use hint) Then, first, \\ldots. Thus, \\ldots. Next, \\ldots. Thus, \\ldots.     Understand    Use , , and to prove that if and , then for any integers , , and . Hint: Write and for some integers and . You cannot use the same integer for both.     Proof. Let , , and be integers. Assume and . By the definitions of divides, we can write and for some integers and . Then, where is an integer. Thus, by definition of divides, .      Recap   Do you know    Why we only need to consider when is true when proving ?    What we assume at the beginning of the direct proof that ?    How to prove directly?        Explore   Prove that for any integer and digit that if is even, then is even and if is odd, then is odd. Use , , , and .  It follows from this exercise that if the last digit of an integer is even, then that integer is even and if the last digit of an integer is odd, then that integer is odd.    Hint: Here is an outline of the proof.   Proof. Let be an integer and let be a digit. First, assume is even. By definition of even we can write \\ldots. Then where is an integer. Thus is even. Next, assume is odd. By definition of odd we can write \\ldots. Then where is an integer. Thus is odd.     Explore   In this exercise, we prove  . Let , , , and be integers such that . (We are most interested in the case where  mod  , but the result holds in general.)   Use , , and to prove that for any integer , if and , then .    What does tell you is true about any common divisor of and ?    Use , , and to prove that for any integer , if and , then . Hint: Solve for .    What does tell you is true about any common divisor of and ?    Explain why it follows from and that the list of common divisors of and is the same as the list of common divisors of and .    Explain why it follows from that gcd  gcd  .         Exercises for Broken Promises: Negating Conditional Statements   Practice   Each of the following statements is false. Find a counterexample to each statement.   If a graph contains a 5-cycle, then contains a 4-cycle.    If two graphs and have the same degree sequence, then they are isomorphic. Hint: Try 3-regular graph with six vertices.    For any vertices and in the path , if and are adjacent, then and have the same degree.         Hint: Your graph should contain a 5-cycle.    Hint: Your graphs should not be isomorphic.    Hint: To show the counterexample, draw and label two of the vertices and .       Understand   Use a truth table to verify the equivalence in .     Understand   Each of the following statements is false. Find a counterexample to each statement.   For any integers and , if and , then .    For any integers and , if , then or .         Hint: One possible counterexample is and . Try to find a different counterexample.    Hint: Check that your counterexample has , , and . (We used DeMorgan's laws.)       Understand   Use to write the negation of each statement in a sentence.   If a graph contains a 5-cycle, then contains a 4-cycle. Note that by , this statement is universally quantified so use .    If two graphs and have the same degree sequence, then they are isomorphic. Again, use .    For any vertices and in the path , if and are adjacent, then and have the same degree.         There is a graph that contains a 5-cycle but does not contain a 4-cycle.    Hint: Your negation should not include the word if .    Hint: Your negation should not include the word if .       Understand   Each of the following statements is false. First, find a counterexample and then use to write the negation of each statement in a sentence. Hint: Use DeMorgan's laws .   For any integers and , if is even, then is even or is even.    For any integers and , if is even, then is even and is even.         For some integers and , is even, but is odd and is odd.    Hint: Make sure you understand how we got the answer to part (a). Your negation should not include the words if or and .       Recap   Do you know    How to use the idea of a broken promise to find a counterexample to ?    What the negation of is?         Exercises for Proof Formats: Proof of Using Implication   Practice   Consider the following statement : For any integer , either is even or is even.   Use to rewrite as a conditional statement without the word or .    Use and to prove . Recall that if is not even, then is odd.        Understand       Use a truth table to verify that is equivalent to .    Consider the following conditional statement : For any integers and , if , then or . Use to rewrite without or .        Understand    Consider the following conditional statement from Exercise : For any integers and , if , then or . Use , , and to prove . Hint: if , then you may divide each side of the equation by .     Recap   Do you know    How to prove using the implication equivalence?    Why we only need to consider when is false when proving ?         "
},
{
  "id": "defn_conditional",
  "level": "2",
  "url": "sec_conditional_statements.html#defn_conditional",
  "type": "Definition",
  "number": "1.3.1",
  "title": "Conditional statements.",
  "body": " Conditional statements       For statements and , the statement if  , then  , denoted , is a conditional statement. We also say  implies  . The statement promises that if is true, then must also be true. For example, consider the following statement: For any integer , if , then . This statement is true because when we have .    In the statement , the statement is the hypothesis and is the conclusion . For example, consider the following statement: If a graph is a tree, then it has a leaf. The hypothesis is that a graph is a tree. The conclusion is that it has a leaf.      "
},
{
  "id": "exam_understand_ifthen_true",
  "level": "2",
  "url": "sec_conditional_statements.html#exam_understand_ifthen_true",
  "type": "Example",
  "number": "1.3.2",
  "title": "Understanding when a conditional is true.",
  "body": " Understanding when a conditional is true   Consider the following conditional statement : If you show up to class every day and do all of the homework on time,  then you will get an A in this class.   Is true or false if you show up to class every day and do all of the homework on time and you get an A in this class?  It is true. When both the hypothesis and the conclusion are true, we have kept the promise.      Is true or false if you show up to class every day and do all of the homework on time but you do not get an A in this class?  It is false. When the hypothesis is true but the conclusion is false, we have broken the promise.      Is true or false if I do not always show up to class and do not always get my homework in on time, but I still get an A in this class?  It is true. When the hypothesis is false but the conclusion is false, we have not broken the promise.      Is true or false if I do not always show up to class and do not always get my homework in on time and I get a C in this class?  It is true. When the hypothesis and the conclusion are false, we have not broken the promise.        "
},
{
  "id": "exam_truthtable_conditionals",
  "level": "2",
  "url": "sec_conditional_statements.html#exam_truthtable_conditionals",
  "type": "Example",
  "number": "1.3.3",
  "title": "Truth table for if\/then.",
  "body": " Truth table for if\/then   Construct a truth table for .   The truth table is shown in .    Truth table for the logical connective implies                                    "
},
{
  "id": "rem_false_implies_is_true",
  "level": "2",
  "url": "sec_conditional_statements.html#rem_false_implies_is_true",
  "type": "Remark",
  "number": "1.3.5",
  "title": "False implies anything is true.",
  "body": " False implies anything is true  The statement is true when is false, no matter what is.  "
},
{
  "id": "act_promises",
  "level": "2",
  "url": "sec_conditional_statements.html#act_promises",
  "type": "Activity",
  "number": "1.3.A",
  "title": "Promises.",
  "body": " Promises  In many parts of this activity, you are asked to construct a truth table. You may start a new truth table for each part, but consider adding columns to your existing truth table instead.   Copy the truth table for .    Add a column for and another column for .    Add a column for .    Use your truth table to show that is a tautology by adding a column for and another column for .    Add a column for . What do you notice? Discuss why that makes sense.     "
},
{
  "id": "exam_truthtable_compound_conditionals",
  "level": "2",
  "url": "sec_conditional_statements.html#exam_truthtable_compound_conditionals",
  "type": "Example",
  "number": "1.3.6",
  "title": "Truth tables for statements involving conditionals.",
  "body": " Truth tables for statements involving conditionals       Construct a truth table for .   shows the truth table. Note that the hypothesis is now and the conclusion is now . The only time is false is when the hypothesis is true but the conclusion is false.   Truth table for the converse                                       Use a truth table to show that is a tautology.   shows the truth table. Because the last column is all true, we can conclude that is a tautology.   Truth table showing the tautology for the simplification inference                                             Construct a truth table for . What do you notice?   shows the truth table. Because the last column is the same as the truth table for in , we can conclude that they are logically equivalent. That is, .   Truth table showing the implication equivalence                                               "
},
{
  "id": "thm_implication",
  "level": "2",
  "url": "sec_conditional_statements.html#thm_implication",
  "type": "Theorem",
  "number": "1.3.10",
  "title": "Implication equivalence.",
  "body": " Implication equivalence       For statements and , .    Equivalently, for statements and , .      "
},
{
  "id": "exam_if_then_else",
  "level": "2",
  "url": "sec_conditional_statements.html#exam_if_then_else",
  "type": "Example",
  "number": "1.3.11",
  "title": "“If, then, else” construction.",
  "body": "  If, then, else construction   A common command in computer programming is a statement of the form If , then , else . This statement tells the computer that if is true, then do what says and if is false, then do what says.   Write the statement if , then , else in logical notation.  The statement says if , then and also if , then so we have       Consider the following statement: for any integer , if is even, then the answer is , else the answer is . What is the answer when ? What is the answer when ?  When the statement is even is true and so the answer is . On the other hand, when the statement is even is false and so the answer is .        "
},
{
  "id": "pff_if_then_direct",
  "level": "2",
  "url": "sec_conditional_statements.html#pff_if_then_direct",
  "type": "Proof",
  "number": "1.3.B.1",
  "title": "",
  "body": " Prove:    Assume is true.  (Explain why it follows that is true.)  Thus is true.   "
},
{
  "id": "act_pffifthen",
  "level": "2",
  "url": "sec_conditional_statements.html#act_pffifthen",
  "type": "Activity",
  "number": "1.3.B",
  "title": "Direct proof of a conditional statement.",
  "body": " Direct proof of a conditional statement      Copy the following proof of a direct proof of a conditional statement. Note that we are using because the statement is universally quantified as well as . Prove for any integer , if is odd then is odd.  Let be an integer. Assume that is odd. By the definition of odd we can write for some integer . Then .  (Side note: to show that is odd, we need to write in the form .)  Note that .  Since is an integer, it follows from the definition of odd that is odd.      Edit the proof in to prove that for any integer if is odd, then is odd.     "
},
{
  "id": "act_cex_conditionals",
  "level": "2",
  "url": "sec_conditional_statements.html#act_cex_conditionals",
  "type": "Activity",
  "number": "1.3.C",
  "title": "Counterexamples involving conditional statements.",
  "body": " Counterexamples involving conditional statements  Show that each the statements (a)-(c) is false by finding a counterexample for each statement.   If a graph has chromatic number four, then it must be the complete graph .    Given real numbers and , if , then and .    For any integers and , if , then or .    What do we need to be true in order to show that is false?    Construct a truth table for . Include an intermediate column for .     is logically equivalent to a statement involving . What is it?     "
},
{
  "id": "exam_cex_conditionals",
  "level": "2",
  "url": "sec_conditional_statements.html#exam_cex_conditionals",
  "type": "Example",
  "number": "1.3.12",
  "title": "Counterexamples involving conditional statements.",
  "body": " Counterexamples involving conditional statements   For each statement from (a)-(c), find a counterexample to show the statement is false.   If a graph has chromatic number four, then it must be the complete graph .  One possible counterexample is the wheel , drawn in . (By the way, we could not use as a counterexample because .) Notice that our counterexample has the hypothesis true and the conclusion false.      Given real numbers and , if , then and .  One possible counterexample is and . While it is true that , because it follows that the conclusion that and is false. Notice that our counterexample has the hypothesis true and the conclusion false. To insure that the conclusion was false, we used DeMorgan's Laws  .      For any integers and , if , then or .  One possible counterexample would be and because then but and . Notice that our counterexample has the hypothesis true and the conclusion false. To insure that the conclusion was false, we used DeMorgan's Laws  .        "
},
{
  "id": "thm_broken_promise",
  "level": "2",
  "url": "sec_conditional_statements.html#thm_broken_promise",
  "type": "Theorem",
  "number": "1.3.13",
  "title": "Broken promise.",
  "body": " Broken promise   The negation of If , then is the broken promise  but not . That is,    "
},
{
  "id": "exam_neg_ifthen",
  "level": "2",
  "url": "sec_conditional_statements.html#exam_neg_ifthen",
  "type": "Example",
  "number": "1.3.14",
  "title": "Negating conditional statements.",
  "body": " Negating conditional statements   Write the negation of each statement in a sentence. Hint: The negation should be true for your counterexample.   If a graph has chromatic number four, then it must be the complete graph .  Note that this statement does not state a specific quantifier, so following , we interpret this statement as universally quantified. Using and we get the following negation: There exists a graph that has chromatic number four but is not the complete graph . Our counterexample from found a graph, namely , that has chromatic number four but is not the complete graph .      Given real numbers and , if , then and .  We use and to find the following awkwardly-stated draft of the negation: There are real numbers and such that but it is not the case that and . We can eliminate the awkward it is not the case by using DeMorgan's law . Our negation is the following statement: There are real numbers and such that but either or . Our counterexample from found real numbers and where but .      For any integers and , if , then or .  We use and to find the following awkwardly-stated draft of the negation: There are integers and such that but it is not the case that or . We can eliminate the awkward it is not the case by using DeMorgan's law . Our negation is the following statement: There are integers and such that but and . Our counterexample from found integers and where but and .        "
},
{
  "id": "pff_or_implication",
  "level": "2",
  "url": "sec_conditional_statements.html#pff_or_implication",
  "type": "Proof",
  "number": "1.3.D.1",
  "title": "",
  "body": " Prove:    Assume is false.  (Explain why it follows that is true.)  Thus is true.   "
},
{
  "id": "act_pff_implication",
  "level": "2",
  "url": "sec_conditional_statements.html#act_pff_implication",
  "type": "Activity",
  "number": "1.3.D",
  "title": "Direct proof of an “or” statement using an equivalent conditional.",
  "body": " Direct proof of an or statement using an equivalent conditional      Copy the following proof of proof of an or statement using the implication equivalence. Note that we are using because the statement is universally quantified as well as . Prove that for any positive real numbers and such that , either or .  Let and be positive real numbers such that . Assume . Multiplying each side of this equation by the positive number we get . Dividing each side of this equation by 10 we get . Thus either or .      Edit the proof in to prove that for any positive real numbers and such that , either or .     "
},
{
  "id": "exam_implication_vs_cases_proof_or",
  "level": "2",
  "url": "sec_conditional_statements.html#exam_implication_vs_cases_proof_or",
  "type": "Example",
  "number": "1.3.15",
  "title": "Compare proving an “or” statement using implication versus proof by cases.",
  "body": " Compare proving an or statement using implication versus proof by cases    Explain by considering how to prove using cases with the cases are or .    Prove: using cases with the cases or .    We consider two cases.  Case 1: Assume . Thus, .  Case 2: Assume . (Explain why follows.) Thus, .  In either case, .    When we cross out the obvious lines of the proof we get the following proof:    \\st{We consider two cases.}  \\st{Case 1: Assume . Thus, .}  \\st{Case 2:} Assume . (Explain why follows.) Thus, .  \\st{In either case, .}    This proof is the .   "
},
{
  "id": "exer_explain_cond_true",
  "level": "2",
  "url": "sec_conditional_statements.html#exer_explain_cond_true",
  "type": "",
  "number": "1",
  "title": "Practice.",
  "body": " Practice   Explain why each conditional statement is true.   For any integer , if , then . Hint: Plug in.    For any integer , if , then . Hint: Solve.         When we have .    Hint: Now explain how to solve the equation.     "
},
{
  "id": "exer_verify_addition",
  "level": "2",
  "url": "sec_conditional_statements.html#exer_verify_addition",
  "type": "",
  "number": "2",
  "title": "Practice.",
  "body": " Practice   Use a truth table to verify that is a tautology. Include an intermediate column for .    Hint: The truth table should have four columns: , , , . The truth table should also have four rows, as in . To show that the statement is a tautology, the last column of your truth table should be all T s.   "
},
{
  "id": "exer_truthtable_PimpliesnegQ",
  "level": "2",
  "url": "sec_conditional_statements.html#exer_truthtable_PimpliesnegQ",
  "type": "",
  "number": "3",
  "title": "Practice.",
  "body": " Practice       Construct a truth table for . Include an intermediate column for .    Construct a truth table for . Include an intermediate column for .    What do you notice?      "
},
{
  "id": "exer_truthtable_mp",
  "level": "2",
  "url": "sec_conditional_statements.html#exer_truthtable_mp",
  "type": "",
  "number": "4",
  "title": "Understand.",
  "body": " Understand   Construct a truth table to show that is a tautology. This logical equivalence justifies modus ponens , a key logical inference we discuss in .   "
},
{
  "id": "exer_truthtable_compound_conditionals",
  "level": "2",
  "url": "sec_conditional_statements.html#exer_truthtable_compound_conditionals",
  "type": "",
  "number": "5",
  "title": "Understand.",
  "body": " Understand   Construct a truth table for each statement. Include intermediate columns.               "
},
{
  "id": "exer_truthtable_proof_cases",
  "level": "2",
  "url": "sec_conditional_statements.html#exer_truthtable_proof_cases",
  "type": "",
  "number": "6",
  "title": "Understand.",
  "body": " Understand   Construct a truth table to show that . Include appropriate intermediate columns. This logical equivalence justifies (for 2 cases).    Hint: Your truth table should have eight columns: , , , , , , , and . Your truth table should also have eight rows, as in . The sixth and eighth columns should be the same.   "
},
{
  "id": "exer_rewrite_implication",
  "level": "2",
  "url": "sec_conditional_statements.html#exer_rewrite_implication",
  "type": "",
  "number": "7",
  "title": "Understand.",
  "body": " Understand       Use the implication equivalence to rewrite the following statement as a conditional: Either you take a break from playing that video game or I will take away your controller for a week.    Use the implication equivalence to rewrite the following statement using or : If you do not text me by 6 PM, then I will text you.         If you do not take a break from playing that video game, then I will take away your controller for a week.    Hint: Your answer should not have any negative words (like not ).     "
},
{
  "id": "exer_dyk_iften",
  "level": "2",
  "url": "sec_conditional_statements.html#exer_dyk_iften",
  "type": "",
  "number": "8",
  "title": "Recap.",
  "body": " Recap   Do you know    What the symbol means in this logic context?    What the statement if , then promises?    When a conditional statement is true and when it is false?    How to draw truth tables that involve conditional statements?    Why ?    How to use a truth table to verify that a logical equivalence is valid?      "
},
{
  "id": "exer_equiv_PtoQtoR",
  "level": "2",
  "url": "sec_conditional_statements.html#exer_equiv_PtoQtoR",
  "type": "",
  "number": "9",
  "title": "Explore.",
  "body": " Explore   Is logically equivalent to ? Use a truth table to justify your answer. Include appropriate intermediate columns.   "
},
{
  "id": "exer_prove_cond_true",
  "level": "2",
  "url": "sec_conditional_statements.html#exer_prove_cond_true",
  "type": "",
  "number": "10",
  "title": "Practice.",
  "body": " Practice   Use and to prove each statement from Exercise .   Prove for any integer , if , then . Hint: Plug in.    Prove for any integer , if , then . Hint: Solve.      "
},
{
  "id": "exer_odd_sq_is_odd",
  "level": "2",
  "url": "sec_conditional_statements.html#exer_odd_sq_is_odd",
  "type": "",
  "number": "11",
  "title": "Practice.",
  "body": " Practice   Use , , and to prove that for any integer , if is odd, then is odd. Hint: Write . Next, simplify and write it as .   "
},
{
  "id": "exer_mult6_is_mult3",
  "level": "2",
  "url": "sec_conditional_statements.html#exer_mult6_is_mult3",
  "type": "",
  "number": "12",
  "title": "Practice.",
  "body": " Practice   Use , , and to prove that for any integer , if , then . Hint: Write for some integer . How can you write ?    Hint: The proof begins   Proof. Let be an integer. Assume . By definition of divides, \\ldots  Then use the hint.   "
},
{
  "id": "exer_divides_square_proof",
  "level": "2",
  "url": "sec_conditional_statements.html#exer_divides_square_proof",
  "type": "",
  "number": "13",
  "title": "Practice.",
  "body": " Practice    Use , , and to prove if , then for any integers and . Hint: Write for some integer . Next, simplify and write it as .   "
},
{
  "id": "exer_proof_sums_prod_even_odd",
  "level": "2",
  "url": "sec_conditional_statements.html#exer_proof_sums_prod_even_odd",
  "type": "",
  "number": "14",
  "title": "Understand.",
  "body": " Understand    Use , , and to prove for any integers and if is even and is odd, then is odd and is even. Hint: Write and for some integers and . (You cannot use the same integer for both.)    Hint: Here is an outline of the proof.   Proof. Let and be integers. Assume \\ldots. By the definitions of even and odd, we can write \\ldots (use hint) Then, first, \\ldots. Thus, \\ldots. Next, \\ldots. Thus, \\ldots.   "
},
{
  "id": "exer_divides_transitive",
  "level": "2",
  "url": "sec_conditional_statements.html#exer_divides_transitive",
  "type": "",
  "number": "15",
  "title": "Understand.",
  "body": " Understand    Use , , and to prove that if and , then for any integers , , and . Hint: Write and for some integers and . You cannot use the same integer for both.     Proof. Let , , and be integers. Assume and . By the definitions of divides, we can write and for some integers and . Then, where is an integer. Thus, by definition of divides, .    "
},
{
  "id": "exer_dyk_pffifthen",
  "level": "2",
  "url": "sec_conditional_statements.html#exer_dyk_pffifthen",
  "type": "",
  "number": "16",
  "title": "Recap.",
  "body": " Recap   Do you know    Why we only need to consider when is true when proving ?    What we assume at the beginning of the direct proof that ?    How to prove directly?      "
},
{
  "id": "exer_last_digit_even_odd",
  "level": "2",
  "url": "sec_conditional_statements.html#exer_last_digit_even_odd",
  "type": "",
  "number": "17",
  "title": "Explore.",
  "body": " Explore   Prove that for any integer and digit that if is even, then is even and if is odd, then is odd. Use , , , and .  It follows from this exercise that if the last digit of an integer is even, then that integer is even and if the last digit of an integer is odd, then that integer is odd.    Hint: Here is an outline of the proof.   Proof. Let be an integer and let be a digit. First, assume is even. By definition of even we can write \\ldots. Then where is an integer. Thus is even. Next, assume is odd. By definition of odd we can write \\ldots. Then where is an integer. Thus is odd.   "
},
{
  "id": "exer_proof_EAthm_recursion",
  "level": "2",
  "url": "sec_conditional_statements.html#exer_proof_EAthm_recursion",
  "type": "",
  "number": "18",
  "title": "Explore.",
  "body": " Explore   In this exercise, we prove  . Let , , , and be integers such that . (We are most interested in the case where  mod  , but the result holds in general.)   Use , , and to prove that for any integer , if and , then .    What does tell you is true about any common divisor of and ?    Use , , and to prove that for any integer , if and , then . Hint: Solve for .    What does tell you is true about any common divisor of and ?    Explain why it follows from and that the list of common divisors of and is the same as the list of common divisors of and .    Explain why it follows from that gcd  gcd  .      "
},
{
  "id": "exer_cex_graphs_cond",
  "level": "2",
  "url": "sec_conditional_statements.html#exer_cex_graphs_cond",
  "type": "",
  "number": "19",
  "title": "Practice.",
  "body": " Practice   Each of the following statements is false. Find a counterexample to each statement.   If a graph contains a 5-cycle, then contains a 4-cycle.    If two graphs and have the same degree sequence, then they are isomorphic. Hint: Try 3-regular graph with six vertices.    For any vertices and in the path , if and are adjacent, then and have the same degree.         Hint: Your graph should contain a 5-cycle.    Hint: Your graphs should not be isomorphic.    Hint: To show the counterexample, draw and label two of the vertices and .     "
},
{
  "id": "exer_truthtable_neg_conditional",
  "level": "2",
  "url": "sec_conditional_statements.html#exer_truthtable_neg_conditional",
  "type": "",
  "number": "20",
  "title": "Understand.",
  "body": " Understand   Use a truth table to verify the equivalence in .   "
},
{
  "id": "exer_product_divides12",
  "level": "2",
  "url": "sec_conditional_statements.html#exer_product_divides12",
  "type": "",
  "number": "21",
  "title": "Understand.",
  "body": " Understand   Each of the following statements is false. Find a counterexample to each statement.   For any integers and , if and , then .    For any integers and , if , then or .         Hint: One possible counterexample is and . Try to find a different counterexample.    Hint: Check that your counterexample has , , and . (We used DeMorgan's laws.)     "
},
{
  "id": "exer_negation_ifthen_graphs",
  "level": "2",
  "url": "sec_conditional_statements.html#exer_negation_ifthen_graphs",
  "type": "",
  "number": "22",
  "title": "Understand.",
  "body": " Understand   Use to write the negation of each statement in a sentence.   If a graph contains a 5-cycle, then contains a 4-cycle. Note that by , this statement is universally quantified so use .    If two graphs and have the same degree sequence, then they are isomorphic. Again, use .    For any vertices and in the path , if and are adjacent, then and have the same degree.         There is a graph that contains a 5-cycle but does not contain a 4-cycle.    Hint: Your negation should not include the word if .    Hint: Your negation should not include the word if .     "
},
{
  "id": "exer_negation_ifthen_even",
  "level": "2",
  "url": "sec_conditional_statements.html#exer_negation_ifthen_even",
  "type": "",
  "number": "23",
  "title": "Understand.",
  "body": " Understand   Each of the following statements is false. First, find a counterexample and then use to write the negation of each statement in a sentence. Hint: Use DeMorgan's laws .   For any integers and , if is even, then is even or is even.    For any integers and , if is even, then is even and is even.         For some integers and , is even, but is odd and is odd.    Hint: Make sure you understand how we got the answer to part (a). Your negation should not include the words if or and .     "
},
{
  "id": "exer_dyk_neg_conditional",
  "level": "2",
  "url": "sec_conditional_statements.html#exer_dyk_neg_conditional",
  "type": "",
  "number": "24",
  "title": "Recap.",
  "body": " Recap   Do you know    How to use the idea of a broken promise to find a counterexample to ?    What the negation of is?      "
},
{
  "id": "exer_integer_or_next_is_even",
  "level": "2",
  "url": "sec_conditional_statements.html#exer_integer_or_next_is_even",
  "type": "",
  "number": "25",
  "title": "Practice.",
  "body": " Practice   Consider the following statement : For any integer , either is even or is even.   Use to rewrite as a conditional statement without the word or .    Use and to prove . Recall that if is not even, then is odd.      "
},
{
  "id": "exer_no_zd_integers",
  "level": "2",
  "url": "sec_conditional_statements.html#exer_no_zd_integers",
  "type": "",
  "number": "26",
  "title": "Understand.",
  "body": " Understand       Use a truth table to verify that is equivalent to .    Consider the following conditional statement : For any integers and , if , then or . Use to rewrite without or .      "
},
{
  "id": "exer_proof_no_zd_integers",
  "level": "2",
  "url": "sec_conditional_statements.html#exer_proof_no_zd_integers",
  "type": "",
  "number": "27",
  "title": "Understand.",
  "body": " Understand    Consider the following conditional statement from Exercise : For any integers and , if , then or . Use , , and to prove . Hint: if , then you may divide each side of the equation by .   "
},
{
  "id": "exer_dyk_pfforimplication",
  "level": "2",
  "url": "sec_conditional_statements.html#exer_dyk_pfforimplication",
  "type": "",
  "number": "28",
  "title": "Recap.",
  "body": " Recap   Do you know    How to prove using the implication equivalence?    Why we only need to consider when is false when proving ?      "
},
{
  "id": "sec_converse_cp",
  "level": "1",
  "url": "sec_converse_cp.html",
  "type": "Section",
  "number": "1.4",
  "title": "Converse and Contrapositive",
  "body": " Converse and Contrapositive   In this section, we continue our discussion of conditional statements, including the converse and contrapositive of a conditional statement. The contrapositive provides an alternative proof format for proving that a conditional is true. We also introduce biconditional (if and only if) statements and the proof format for biconditional statements.    The Converse and Biconditional Statements  The statement promises that if is true, then is also true. It does not say the reverse. The reverse might be one of two statements, each of which has a name.   Converse and inverse       For statements and , the converse of is . For example, for the statement For all integers , if is even, then is even. the converse is For all integers , if is even, then is even.    In this context, we can translate the conditional as  if  and we can translate the converse as  only if  .    For statements and , the inverse of is . For example, for the statement For all integers , if is even, then is even. the inverse is For all integers , if is odd, then is odd.       Let's compare the truth table for a conditional statement to its converse.   The converse       Construct a truth table for a conditional statement and its converse.  We constructed the truth table for the converse in . We repeat that here alongside the conditional for comparison in . Notice that both a statement and its converse can be true or either can be true with the other false.   Truth table for a conditional and its converse                                             Give an example of a true conditional statement that has a false converse.  Consider the conditional statement If , then . This statement is true because if , then . The converse is if , then . The converse is false because if , then is true but is false. That is, we have a broken promise .      Give an example of a true conditional statement that has a true converse.  Consider the conditional statement If is odd, then is even. The converse is If is even, then is odd. We proved that both statements are true in Exercise and again in Exercise .         When both a conditional statement, , and its converse, , are true, we say  if and only if  . We give a formal definition of the biconditional.   Biconditional statements       For statements and , the biconditional statement, denoted , is the following compound statement: . For example, we saw in  that if : is odd and : is even, then and are true, so the biconditional statement is also true.    The biconditional is often translated as  if and only if  and may also be abbreviated iff . For example, when : is odd and : is even, the biconditional says For any integer , is odd if and only if is even.       Let's construct a truth table for a biconditional statement.   Truth table of biconditional statement        Construct a truth table for a biconditional statement.  We construct the truth table in .    Truth table for the biconditional                                                  Use this truth table to explain when the biconditional is true and when it is false.  The biconditional is true when and are both true (row 1) or and are both false (row 4). That is, is true when and have the same truth value meaning . On the other hand, the biconditional is false when is true but is false (row 2) or when is false but is true (row 3). That is, is false when and have the opposite truth value meaning .         Let's practice working with the converse and biconditional statements.   The converse and biconditional statements      State the converse of the following statement: if the graph has a vertex of degree five, then the graph has at least six vertices. Is the statement true? Is the converse true?    State the converse of the following statement: for any integer , if , then . Is the statement true? Is the converse true?    State the converse of the following statement: for any integer , if , then . Is the statement true? Is the converse true? Hint: is an integer.    True or false? For any integer , if and only if .    True or false? For any integer , is even if and only if is even.        Proof Format:  Since the biconditional is defined as , we can combine the proof formats for and  with the proof format for a conditional statement to get a new proof format to prove a biconditional statement. Normally in and proofs we begin the two parts with the words First and Second (or First and Next ). In the proof of a biconditional statement, the second part proves the converse, so we begin with the word Conversely instead.    Prove:    First, assume .  (Explain why is true.)  Thus, .  Conversely, assume .  (Explain why is true.)  Thus, .    As usual, when we introduce a new proof format, we provide an example for you to copy and edit.   Biconditional proof      Copy the following proof. Prove for any integer that if and only if . Proof. Let be an integer. First, assume that . By definition of mod , it follows that for some integer . Subtracting one from each side of this equation we get . By definition of divides, it follows that . Conversely, assume that . By definition of divides, we can write for some integer . Adding one to each side of this equation we get . By definition of mod , it follows that .    Edit the proof to prove for any integers and that if and only if .      We can now prove the connection between divides and fractions.   Fractions and Divisibility   Let and be integers with . Prove that exactly when is an integer.   Proof. Let and be integers with .  First, assume . By definition of divides, for some integer . By , it follows that is an integer.  Conversely, assume is an integer. Say, . By , it follows that or, equivalently, . By the definition of divides, .       The Contrapositive  While a conditional statement and its converse are not logically equivalent, there is a related conditional that is logically equivalent to a conditional.   Contrapositive   For statements and , the contrapositive of the conditional statement is the conditional statement . For example, consider the true statement If , then . then the contrapositive is If , then . which is also true.    Let's explore the logical equivalence of a conditional and its contrapositive.   Equivalence of statement and its contrapositive       Construct a truth table of conditional and its contrapositive. What do you notice?  The truth table is shown in . Notice that the columns for the conditional and its contrapositive are identical. That means that a conditional and its contrapositive are logically equivalent.    Truth table for the contrapositive                                                        Explain in words why the contrapositive is logically equivalent to the original conditional.  Think about what makes the conditional is true. We are promising that if is true, then is true. What happens if is true? That means is false and so cannot be true (or we would break our promise) and so must be false which means is true. That is, if , then , which is the contrapositive.         We add the contrapositive to our list of logical equivalences.   Contraposition equivalence   For statements and ,     Let's practice working with the contrapositive.   Contrapositive      Write the contrapositive of the true statement: For all integers , if , then .    Write the contrapositive of the true statement: For all graphs , if has at most five vertices, then has at most 10 edges. Hint: To negate at more use more than .    Write the contrapositive of the true statement: For all integers , if is odd, then is odd.    Which statement do you think would be easier to prove: the statement from or its contrapositive? Explain.        Proof Format: Using the Contrapositive  Since a conditional and its contrapositive are logically equivalent, we have a new way to prove : we can prove its contrapositive instead.   Prove:    We will prove the contrapositive, namely (fill in ).  Assume is true.  (Explain why it follows that is true.)  Thus is true.    Let's do an example with this new proof format.   Contrapositive proof if is odd, then is also odd      Perhaps you noticed in  that the contrapositive would be easier to prove. Copy the following proof. Prove for any integer , if is odd then is odd.  Let be an integer. We will prove the contrapositive, namely that if is even, then is even.  Assume that is even. By the definition of even, we can write for some integer . Then . Since is an integer, it follows from the definition of even that is even.      Edit the proof to prove for any integer if is odd, then is odd.      When a proof by contradiction does not use the supposed hypothesis until the ending contradiction, we can often rewrite the proof using the contrapositive, avoiding the proof by contradiction.   Rewriting a proof by contradiction using the contrapositive       Read the following proof by contradiction. Prove that for any integers and if is even, then is even or is even.  Suppose not. Then for some integers and we would have that is even but neither nor is even.  First, since neither nor is even, that means and are odd. By the definition of odd, we can write and for some integers and . Multiplying and we get and so is odd.  On the other hand, we said was even. This is a contradiction.  What are the contradictory statements and ?  The contradictory statements are is odd and is even.      State the contrapositive of the statement For any integers and if is even, then is even or is even.   By DeMorgan's Laws , the negation of the conclusion is even or is even. is the statement and are odd. The contrapositive is For any integers and , if and are odd, then is odd. Notice that we keep the universal quantifier.      Adapt the proof from to prove for any integers and if is even, then either is even or is even using the contrapositive . Hint: you should not have to change much of the proof.  Prove: for any integers and if is even, then either is even or is even.   Proof. We will prove the contrapositive, namely for any integers and , if and are odd, then is odd.  Let and be odd integers. By the definition of odd, we can write and for some integers and . Multiplying and we get and so is odd.           Exercises   Exercises for The Converse and Biconditional Statements   Practice   Consider the statement: for any real number , if , then .   Is the statement true or false?    State the converse.    Give a counterexample to show that the converse is false.         True. Note: In fact, .    Hint: The converse should still include .    Hint: Broken promise.       Practice   Consider the statement: for all integers , if , then .   Is the statement true or false?    State the converse.    Give a counterexample to show that the converse is false.        Practice   Consider the statement: for any integers and , if , then    Is the statement true or false?    State the converse.    Give a counterexample to show that the converse is false.         True    Hint: The converse should also involve .    Hint: Broken promise.       Practice   Use a truth table to show that the converse and the inverse are logically equivalent. Include intermediate columns for and . This result helps explain why we rarely discuss the inverse.     Practice   Decide if each biconditional statement (from ) is true or false. Explain briefly.   For any integers , if and only if .    For any integer , is even if and only if is even.    For any integer , if and only if .         Hint: One direction is true, but the other direction is false. Find a counterexample.    Hint: It is true. Check both directions.    Hint: One direction is true, but the other direction is false. Find a counterexample.       Understand       Construct a truth table for . Hint: Copy the truth table from and add one additional column.    The negation is logically equivalent to a simpler statement. What is it? Hint: .        Recap   Do you know    What the converse of is?    How to find examples to show that and its converse are not equivalent?    How the biconditional statement is defined?    When a biconditional statement is true and when it is false?         Exercises for Proof Format:   Practice   Use to prove that is even if and only if is odd, for any integer .    Use to prove that is even if and only if is odd, for any integer .     Practice   Use to prove that if and only if for any integer .    Hint: Here is an outline of the proof.   Proof. Let be an integer. First, assume is even. By definition of even we can write \\ldots. Then where is an integer. Thus is odd. Next, assume is odd. By definition of odd we can write \\ldots. Then where is an integer. Thus is even.  Hint: Here is an outline of the proof.   Proof. Let be an integer. First, assume . Then, \\ldots. Thus . Next, assume . Then, .     Recap   Do you know    How to format the proof of a biconditional statement?    Why the second part of the proof of a biconditional statement begins with the word Conversely ?         Exercises for The Contrapositive   Practice   Write the contrapositive of each statement.   For any real number , if , then .    For any integer , if is even, then is even.    For all graphs , if has at least 5 vertices, then must have at least 5 edges.         For any real number , if , then .    Hint: The negation of even is odd.    Hint: The negation of at least is fewer than .       Understand   Let be a subgraph of a graph . Consider the statement If is acyclic, then is acyclic.   State the contrapositive of this statement and explain why it's true.    Explain why it follows that this statement is true.         Hint: The negation of acyclic is contains a cycle.     If contains a subgraph that is a cycle, then is a subgraph of and so contains a cycle.       Understand   Write the contrapositive of each statement.   For all real numbers and , if is rational and is irrational, then is irrational. Note: from rational and irrational are negations.    For all real numbers and , if is irrational, then either is irrational or is irrational.    For all real numbers and , if is rational, then is rational and is rational.       Hints: First, rational and irrational are negations. Also, use DeMorgan's laws any time you need to negate a statement involving and or or .   Hint: The contrapositive begins For all real numbers and , if is rational, then     Hint: Your answer should include the word and . It should not include the word irrational .    Hint: Your answer should not include the word rational .        Recap   Do you know    What the contrapositive of is?    Why a conditional statement and its contrapositive are equivalent?    How to use a truth table to verify that a conditional statement and its contrapositive are logically equivalent?         Exercises for Proof Format: Using the Contrapositive   Practice   Use the contrapositive to prove that for any integer , if is even then is even.     Practice   Use the contrapositive to prove for any integer , if is odd, then is odd. (We proved the converse in  .)    Here is an outline of the proof.   Proof. Let be an integer. We will prove the contrapositive, namely \\ldots. Assume, \\ldots. Then, \\ldots. Thus, \\ldots.      Understand   In this exercise we prove  .  Use the contrapositive to prove that for any integers , , and , if , then . Note that this statement can be rephrased as if is not a divisor of , then no multiple of is a divisor of .    Here is an outline of the proof.   Proof. Let , , and be integers. We will prove the contrapositive, namely if , then . Assume, . Then, by definition of divides we can write where is an integer. Thus, .      Understand   In this exercise we prove  .  Prove for any integers , , and , if , then or . Hint: Prove the contrapositive .    Hint: Use DeMorgan's laws. Recall that .     Recap   Do you know    How to prove a conditional statement by proving the contrapositive instead?    When we want to prove the contrapositive instead of the original conditional statement?    What we can write in a proof using the contrapositive so that the reader knows we are using the contrapositive?        Explore   Use to prove that is odd if and only if is odd. Hint: Use the contrapositive for the converse (second part).    Hint: First, prove if is odd, then is odd. Conversely, prove the contrapositive of the converse, namely if is even, then is even. Another hint:      Explore   Copy the following proof by contradiction that is irrational, being sure to figure out why each statement is true.    Suppose not. Then is rational. By the definition of rational , we can write for some positive integers and with . By , we may assume that we have canceled any common factors so that and are coprime.  On the other hand, multiply each side of this equation by to get . Square each side of this equation to get .  Thus, is even. By Exercise , it follows that is even. By definition of even, we can write for some integer . Substituting in we get .  Simplifying we get . Thus, is also even. By Exercise , it follows that is also even. Since and are even, it follows that two is a common divisor of and . Thus, and are not coprime.  This is a contradiction. Thus is irrational.      "
},
{
  "id": "defn_converse",
  "level": "2",
  "url": "sec_converse_cp.html#defn_converse",
  "type": "Definition",
  "number": "1.4.1",
  "title": "Converse and inverse.",
  "body": " Converse and inverse       For statements and , the converse of is . For example, for the statement For all integers , if is even, then is even. the converse is For all integers , if is even, then is even.    In this context, we can translate the conditional as  if  and we can translate the converse as  only if  .    For statements and , the inverse of is . For example, for the statement For all integers , if is even, then is even. the inverse is For all integers , if is odd, then is odd.      "
},
{
  "id": "exam_converse",
  "level": "2",
  "url": "sec_converse_cp.html#exam_converse",
  "type": "Example",
  "number": "1.4.2",
  "title": "The converse.",
  "body": " The converse       Construct a truth table for a conditional statement and its converse.  We constructed the truth table for the converse in . We repeat that here alongside the conditional for comparison in . Notice that both a statement and its converse can be true or either can be true with the other false.   Truth table for a conditional and its converse                                             Give an example of a true conditional statement that has a false converse.  Consider the conditional statement If , then . This statement is true because if , then . The converse is if , then . The converse is false because if , then is true but is false. That is, we have a broken promise .      Give an example of a true conditional statement that has a true converse.  Consider the conditional statement If is odd, then is even. The converse is If is even, then is odd. We proved that both statements are true in Exercise and again in Exercise .        "
},
{
  "id": "sub_converse-6",
  "level": "2",
  "url": "sec_converse_cp.html#sub_converse-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "if and only if "
},
{
  "id": "defn_biconditional",
  "level": "2",
  "url": "sec_converse_cp.html#defn_biconditional",
  "type": "Definition",
  "number": "1.4.4",
  "title": "Biconditional statements.",
  "body": " Biconditional statements       For statements and , the biconditional statement, denoted , is the following compound statement: . For example, we saw in  that if : is odd and : is even, then and are true, so the biconditional statement is also true.    The biconditional is often translated as  if and only if  and may also be abbreviated iff . For example, when : is odd and : is even, the biconditional says For any integer , is odd if and only if is even.      "
},
{
  "id": "exam_truthtable_biconditional",
  "level": "2",
  "url": "sec_converse_cp.html#exam_truthtable_biconditional",
  "type": "Example",
  "number": "1.4.5",
  "title": "Truth table of biconditional statement.",
  "body": " Truth table of biconditional statement        Construct a truth table for a biconditional statement.  We construct the truth table in .    Truth table for the biconditional                                                  Use this truth table to explain when the biconditional is true and when it is false.  The biconditional is true when and are both true (row 1) or and are both false (row 4). That is, is true when and have the same truth value meaning . On the other hand, the biconditional is false when is true but is false (row 2) or when is false but is true (row 3). That is, is false when and have the opposite truth value meaning .        "
},
{
  "id": "act_converse_iff",
  "level": "2",
  "url": "sec_converse_cp.html#act_converse_iff",
  "type": "Activity",
  "number": "1.4.A",
  "title": "The converse and biconditional statements.",
  "body": " The converse and biconditional statements      State the converse of the following statement: if the graph has a vertex of degree five, then the graph has at least six vertices. Is the statement true? Is the converse true?    State the converse of the following statement: for any integer , if , then . Is the statement true? Is the converse true?    State the converse of the following statement: for any integer , if , then . Is the statement true? Is the converse true? Hint: is an integer.    True or false? For any integer , if and only if .    True or false? For any integer , is even if and only if is even.     "
},
{
  "id": "pff_iff",
  "level": "2",
  "url": "sec_converse_cp.html#pff_iff",
  "type": "Proof",
  "number": "1.4.B.1",
  "title": "",
  "body": "  Prove:    First, assume .  (Explain why is true.)  Thus, .  Conversely, assume .  (Explain why is true.)  Thus, .   "
},
{
  "id": "act_iff_proof",
  "level": "2",
  "url": "sec_converse_cp.html#act_iff_proof",
  "type": "Activity",
  "number": "1.4.B",
  "title": "Biconditional proof.",
  "body": " Biconditional proof      Copy the following proof. Prove for any integer that if and only if . Proof. Let be an integer. First, assume that . By definition of mod , it follows that for some integer . Subtracting one from each side of this equation we get . By definition of divides, it follows that . Conversely, assume that . By definition of divides, we can write for some integer . Adding one to each side of this equation we get . By definition of mod , it follows that .    Edit the proof to prove for any integers and that if and only if .     "
},
{
  "id": "exam_fractions_divides",
  "level": "2",
  "url": "sec_converse_cp.html#exam_fractions_divides",
  "type": "Example",
  "number": "1.4.7",
  "title": "Fractions and Divisibility.",
  "body": " Fractions and Divisibility   Let and be integers with . Prove that exactly when is an integer.   Proof. Let and be integers with .  First, assume . By definition of divides, for some integer . By , it follows that is an integer.  Conversely, assume is an integer. Say, . By , it follows that or, equivalently, . By the definition of divides, .    "
},
{
  "id": "defn_contrapositive",
  "level": "2",
  "url": "sec_converse_cp.html#defn_contrapositive",
  "type": "Definition",
  "number": "1.4.8",
  "title": "Contrapositive.",
  "body": " Contrapositive   For statements and , the contrapositive of the conditional statement is the conditional statement . For example, consider the true statement If , then . then the contrapositive is If , then . which is also true.   "
},
{
  "id": "exam_equiv_contrapositive",
  "level": "2",
  "url": "sec_converse_cp.html#exam_equiv_contrapositive",
  "type": "Example",
  "number": "1.4.9",
  "title": "Equivalence of statement and its contrapositive.",
  "body": " Equivalence of statement and its contrapositive       Construct a truth table of conditional and its contrapositive. What do you notice?  The truth table is shown in . Notice that the columns for the conditional and its contrapositive are identical. That means that a conditional and its contrapositive are logically equivalent.    Truth table for the contrapositive                                                        Explain in words why the contrapositive is logically equivalent to the original conditional.  Think about what makes the conditional is true. We are promising that if is true, then is true. What happens if is true? That means is false and so cannot be true (or we would break our promise) and so must be false which means is true. That is, if , then , which is the contrapositive.        "
},
{
  "id": "thm_cp",
  "level": "2",
  "url": "sec_converse_cp.html#thm_cp",
  "type": "Theorem",
  "number": "1.4.11",
  "title": "Contraposition equivalence.",
  "body": " Contraposition equivalence   For statements and ,    "
},
{
  "id": "act_cp",
  "level": "2",
  "url": "sec_converse_cp.html#act_cp",
  "type": "Activity",
  "number": "1.4.C",
  "title": "Contrapositive.",
  "body": " Contrapositive      Write the contrapositive of the true statement: For all integers , if , then .    Write the contrapositive of the true statement: For all graphs , if has at most five vertices, then has at most 10 edges. Hint: To negate at more use more than .    Write the contrapositive of the true statement: For all integers , if is odd, then is odd.    Which statement do you think would be easier to prove: the statement from or its contrapositive? Explain.     "
},
{
  "id": "pff_if_then_cp",
  "level": "2",
  "url": "sec_converse_cp.html#pff_if_then_cp",
  "type": "Proof",
  "number": "1.4.D.1",
  "title": "",
  "body": " Prove:    We will prove the contrapositive, namely (fill in ).  Assume is true.  (Explain why it follows that is true.)  Thus is true.   "
},
{
  "id": "act_direct_proof_ifnsqoddthennodd",
  "level": "2",
  "url": "sec_converse_cp.html#act_direct_proof_ifnsqoddthennodd",
  "type": "Activity",
  "number": "1.4.D",
  "title": "Contrapositive proof if <span class=\"process-math\">\\(n^2\\)<\/span> is odd, then <span class=\"process-math\">\\(n\\)<\/span> is also odd.",
  "body": " Contrapositive proof if is odd, then is also odd      Perhaps you noticed in  that the contrapositive would be easier to prove. Copy the following proof. Prove for any integer , if is odd then is odd.  Let be an integer. We will prove the contrapositive, namely that if is even, then is even.  Assume that is even. By the definition of even, we can write for some integer . Then . Since is an integer, it follows from the definition of even that is even.      Edit the proof to prove for any integer if is odd, then is odd.     "
},
{
  "id": "exam_product_even_implies_even_factor",
  "level": "2",
  "url": "sec_converse_cp.html#exam_product_even_implies_even_factor",
  "type": "Example",
  "number": "1.4.12",
  "title": "Rewriting a proof by contradiction using the contrapositive.",
  "body": " Rewriting a proof by contradiction using the contrapositive       Read the following proof by contradiction. Prove that for any integers and if is even, then is even or is even.  Suppose not. Then for some integers and we would have that is even but neither nor is even.  First, since neither nor is even, that means and are odd. By the definition of odd, we can write and for some integers and . Multiplying and we get and so is odd.  On the other hand, we said was even. This is a contradiction.  What are the contradictory statements and ?  The contradictory statements are is odd and is even.      State the contrapositive of the statement For any integers and if is even, then is even or is even.   By DeMorgan's Laws , the negation of the conclusion is even or is even. is the statement and are odd. The contrapositive is For any integers and , if and are odd, then is odd. Notice that we keep the universal quantifier.      Adapt the proof from to prove for any integers and if is even, then either is even or is even using the contrapositive . Hint: you should not have to change much of the proof.  Prove: for any integers and if is even, then either is even or is even.   Proof. We will prove the contrapositive, namely for any integers and , if and are odd, then is odd.  Let and be odd integers. By the definition of odd, we can write and for some integers and . Multiplying and we get and so is odd.        "
},
{
  "id": "exer_converse_TorF_lessthan",
  "level": "2",
  "url": "sec_converse_cp.html#exer_converse_TorF_lessthan",
  "type": "",
  "number": "1",
  "title": "Practice.",
  "body": " Practice   Consider the statement: for any real number , if , then .   Is the statement true or false?    State the converse.    Give a counterexample to show that the converse is false.         True. Note: In fact, .    Hint: The converse should still include .    Hint: Broken promise.     "
},
{
  "id": "exer_converse_TorF_divides",
  "level": "2",
  "url": "sec_converse_cp.html#exer_converse_TorF_divides",
  "type": "",
  "number": "2",
  "title": "Practice.",
  "body": " Practice   Consider the statement: for all integers , if , then .   Is the statement true or false?    State the converse.    Give a counterexample to show that the converse is false.      "
},
{
  "id": "exer_converse_TorF_mod",
  "level": "2",
  "url": "sec_converse_cp.html#exer_converse_TorF_mod",
  "type": "",
  "number": "3",
  "title": "Practice.",
  "body": " Practice   Consider the statement: for any integers and , if , then    Is the statement true or false?    State the converse.    Give a counterexample to show that the converse is false.         True    Hint: The converse should also involve .    Hint: Broken promise.     "
},
{
  "id": "exer_converse_inverse_equiv",
  "level": "2",
  "url": "sec_converse_cp.html#exer_converse_inverse_equiv",
  "type": "",
  "number": "4",
  "title": "Practice.",
  "body": " Practice   Use a truth table to show that the converse and the inverse are logically equivalent. Include intermediate columns for and . This result helps explain why we rarely discuss the inverse.   "
},
{
  "id": "exer_TorF_iff",
  "level": "2",
  "url": "sec_converse_cp.html#exer_TorF_iff",
  "type": "",
  "number": "5",
  "title": "Practice.",
  "body": " Practice   Decide if each biconditional statement (from ) is true or false. Explain briefly.   For any integers , if and only if .    For any integer , is even if and only if is even.    For any integer , if and only if .         Hint: One direction is true, but the other direction is false. Find a counterexample.    Hint: It is true. Check both directions.    Hint: One direction is true, but the other direction is false. Find a counterexample.     "
},
{
  "id": "exer_neg_biconditional",
  "level": "2",
  "url": "sec_converse_cp.html#exer_neg_biconditional",
  "type": "",
  "number": "6",
  "title": "Understand.",
  "body": " Understand       Construct a truth table for . Hint: Copy the truth table from and add one additional column.    The negation is logically equivalent to a simpler statement. What is it? Hint: .      "
},
{
  "id": "exer_dyk_converse_iff",
  "level": "2",
  "url": "sec_converse_cp.html#exer_dyk_converse_iff",
  "type": "",
  "number": "7",
  "title": "Recap.",
  "body": " Recap   Do you know    What the converse of is?    How to find examples to show that and its converse are not equivalent?    How the biconditional statement is defined?    When a biconditional statement is true and when it is false?      "
},
{
  "id": "exer_proof_iff_even",
  "level": "2",
  "url": "sec_converse_cp.html#exer_proof_iff_even",
  "type": "",
  "number": "8",
  "title": "Practice.",
  "body": " Practice   Use to prove that is even if and only if is odd, for any integer .    Use to prove that is even if and only if is odd, for any integer .   "
},
{
  "id": "exer_proof_iff_solution",
  "level": "2",
  "url": "sec_converse_cp.html#exer_proof_iff_solution",
  "type": "",
  "number": "9",
  "title": "Practice.",
  "body": " Practice   Use to prove that if and only if for any integer .    Hint: Here is an outline of the proof.   Proof. Let be an integer. First, assume is even. By definition of even we can write \\ldots. Then where is an integer. Thus is odd. Next, assume is odd. By definition of odd we can write \\ldots. Then where is an integer. Thus is even.  Hint: Here is an outline of the proof.   Proof. Let be an integer. First, assume . Then, \\ldots. Thus . Next, assume . Then, .   "
},
{
  "id": "exer_dyk_pff_iff",
  "level": "2",
  "url": "sec_converse_cp.html#exer_dyk_pff_iff",
  "type": "",
  "number": "10",
  "title": "Recap.",
  "body": " Recap   Do you know    How to format the proof of a biconditional statement?    Why the second part of the proof of a biconditional statement begins with the word Conversely ?      "
},
{
  "id": "exer_cp_assorted",
  "level": "2",
  "url": "sec_converse_cp.html#exer_cp_assorted",
  "type": "",
  "number": "11",
  "title": "Practice.",
  "body": " Practice   Write the contrapositive of each statement.   For any real number , if , then .    For any integer , if is even, then is even.    For all graphs , if has at least 5 vertices, then must have at least 5 edges.         For any real number , if , then .    Hint: The negation of even is odd.    Hint: The negation of at least is fewer than .     "
},
{
  "id": "exer_subgraph_acyclic",
  "level": "2",
  "url": "sec_converse_cp.html#exer_subgraph_acyclic",
  "type": "",
  "number": "12",
  "title": "Understand.",
  "body": " Understand   Let be a subgraph of a graph . Consider the statement If is acyclic, then is acyclic.   State the contrapositive of this statement and explain why it's true.    Explain why it follows that this statement is true.         Hint: The negation of acyclic is contains a cycle.     If contains a subgraph that is a cycle, then is a subgraph of and so contains a cycle.     "
},
{
  "id": "exer_cp_irrat",
  "level": "2",
  "url": "sec_converse_cp.html#exer_cp_irrat",
  "type": "",
  "number": "13",
  "title": "Understand.",
  "body": " Understand   Write the contrapositive of each statement.   For all real numbers and , if is rational and is irrational, then is irrational. Note: from rational and irrational are negations.    For all real numbers and , if is irrational, then either is irrational or is irrational.    For all real numbers and , if is rational, then is rational and is rational.       Hints: First, rational and irrational are negations. Also, use DeMorgan's laws any time you need to negate a statement involving and or or .   Hint: The contrapositive begins For all real numbers and , if is rational, then     Hint: Your answer should include the word and . It should not include the word irrational .    Hint: Your answer should not include the word rational .      "
},
{
  "id": "exer_dyk_cp",
  "level": "2",
  "url": "sec_converse_cp.html#exer_dyk_cp",
  "type": "",
  "number": "14",
  "title": "Recap.",
  "body": " Recap   Do you know    What the contrapositive of is?    Why a conditional statement and its contrapositive are equivalent?    How to use a truth table to verify that a conditional statement and its contrapositive are logically equivalent?      "
},
{
  "id": "exer_proof_sq_even_implies_even",
  "level": "2",
  "url": "sec_converse_cp.html#exer_proof_sq_even_implies_even",
  "type": "",
  "number": "15",
  "title": "Practice.",
  "body": " Practice   Use the contrapositive to prove that for any integer , if is even then is even.   "
},
{
  "id": "exer_proof_3m_odd",
  "level": "2",
  "url": "sec_converse_cp.html#exer_proof_3m_odd",
  "type": "",
  "number": "16",
  "title": "Practice.",
  "body": " Practice   Use the contrapositive to prove for any integer , if is odd, then is odd. (We proved the converse in  .)    Here is an outline of the proof.   Proof. Let be an integer. We will prove the contrapositive, namely \\ldots. Assume, \\ldots. Then, \\ldots. Thus, \\ldots.    "
},
{
  "id": "exer_prove_only_check_prime_divisors",
  "level": "2",
  "url": "sec_converse_cp.html#exer_prove_only_check_prime_divisors",
  "type": "",
  "number": "17",
  "title": "Understand.",
  "body": " Understand   In this exercise we prove  .  Use the contrapositive to prove that for any integers , , and , if , then . Note that this statement can be rephrased as if is not a divisor of , then no multiple of is a divisor of .    Here is an outline of the proof.   Proof. Let , , and be integers. We will prove the contrapositive, namely if , then . Assume, . Then, by definition of divides we can write where is an integer. Thus, .    "
},
{
  "id": "exer_prove_only_check_to_sqrtn",
  "level": "2",
  "url": "sec_converse_cp.html#exer_prove_only_check_to_sqrtn",
  "type": "",
  "number": "18",
  "title": "Understand.",
  "body": " Understand   In this exercise we prove  .  Prove for any integers , , and , if , then or . Hint: Prove the contrapositive .    Hint: Use DeMorgan's laws. Recall that .   "
},
{
  "id": "exer_dyk_pff_cp",
  "level": "2",
  "url": "sec_converse_cp.html#exer_dyk_pff_cp",
  "type": "",
  "number": "19",
  "title": "Recap.",
  "body": " Recap   Do you know    How to prove a conditional statement by proving the contrapositive instead?    When we want to prove the contrapositive instead of the original conditional statement?    What we can write in a proof using the contrapositive so that the reader knows we are using the contrapositive?      "
},
{
  "id": "exer_proof_iff_using_cp_evens",
  "level": "2",
  "url": "sec_converse_cp.html#exer_proof_iff_using_cp_evens",
  "type": "",
  "number": "20",
  "title": "Explore.",
  "body": " Explore   Use to prove that is odd if and only if is odd. Hint: Use the contrapositive for the converse (second part).    Hint: First, prove if is odd, then is odd. Conversely, prove the contrapositive of the converse, namely if is even, then is even. Another hint:    "
},
{
  "id": "part_prove_sqrtp_irrat",
  "level": "2",
  "url": "sec_converse_cp.html#part_prove_sqrtp_irrat",
  "type": "",
  "number": "21",
  "title": "Explore.",
  "body": " Explore   Copy the following proof by contradiction that is irrational, being sure to figure out why each statement is true.    Suppose not. Then is rational. By the definition of rational , we can write for some positive integers and with . By , we may assume that we have canceled any common factors so that and are coprime.  On the other hand, multiply each side of this equation by to get . Square each side of this equation to get .  Thus, is even. By Exercise , it follows that is even. By definition of even, we can write for some integer . Substituting in we get .  Simplifying we get . Thus, is also even. By Exercise , it follows that is also even. Since and are even, it follows that two is a common divisor of and . Thus, and are not coprime.  This is a contradiction. Thus is irrational.   "
},
{
  "id": "sec_inference",
  "level": "1",
  "url": "sec_inference.html",
  "type": "Section",
  "number": "1.5",
  "title": "Excursion: Equivalence and Inference",
  "body": " Excursion: Equivalence and Inference   Logical equivalences such as Demorgan's laws and the broken promise help us negate statements, which is useful for constructing counterexamples to false statements, for writing proofs by contradiction, and for stating the contrapositive. The contrapositive equivalence and implication equivalence gave us new proof formats for proving conditionals and or statements, respectively. Logical equivalences can also help simplify complicated compound statements, which has applications to computer science. In this section, we return to discuss logical equivalences in more detail and also introduce logical inference.    Logical Equivalence  In this section, we look at a long list of logical equivalences and see how to derive new logical equivalences from this list. We begin by introducing some new logical equivalences involving negations, tautologies, and contradictions.   Equivalences involving negations, tautologies, and contradictions   For any logical statement , tautology T , and contradiction F , we have the following logical equivalences.    Idempotent The word idempotent comes from the roots idem meaning self (as in the word identity ) and potent meaning power (in the normal English sense, as in omnipotent ) but used in mathematics to mean raised to an exponent. The word idempotent means the object equals its own power.  .     Identity  .     Domination  .     Negation  .     Double negation         These logical equivalences can be confirmed using a truth table, but they should also make sense. Let's look closely at a couple of these equivalences.   Understanding logical equivalences: negation, tautology, and contradiction   For each equivalence from , explain words why it is true. Recall that by that two statements are logical equivalent if they have the same truth values and so we can check if one statement is true, then so is the other and if one statement is false, then so is the other.      If is true, then either is true or is true. In either case, is true. If is false, then is false and is false. (We used Demorgan's laws, to negate the or .) In either case is false. Thus, .         If is true, then by definition of negation  is false and so is true. If is false, then by definition of negation  is true and so is false. Thus,          For the statement to be true, we would need both and to be true. But is a contradiction so it is always false. Therefore is also always false. That is, .         The equivalence in  , for example, is one of several equivalences that have names that may be familiar since we used the same names in integer algebra .   Commutative, associative, and distributive equivalences   For any logical statements , , and , we have the following logical equivalences.    Commutative property        Associative property        Distributive property          Each of the statements in can be confirmed using a truth table.  For reference, we repeat the implication and contraposition logical equivalences here.   Implication and contraposition equivalences, revisited   For statements , , and , we have the following equivalences.    Implication         Contraposition          We also repeat the equivalences that help us negate compound statements.   Negating compound statements, revisited   For statements and , we have the following equivalences.    DeMorgan's laws    .     Broken promise          We can use this long list of equivalences to prove new equivalences.   Proofs of Logical Equivalences      Many lists of equivalences omit contraposition because it can be proved from the other equivalences. Fill in the missing equivalences in to prove contraposition.  Fill in the blanks to prove the contraposition equivalence for     Proof:     \\hspace{.25in}  using \\hspace{1in}         using \\hspace{1in}         using \\hspace{1in}         using \\hspace{1in}          Fill in the missing steps of the proof in using the equivalences given. What new equivalence did we just prove?  Fill in the blanks to expand for     Proof:    \\hspace{1in}  \\hspace{.25in}  using implication       \\hspace{1in}   using the distributive property       \\hspace{1in}   using implication (twice)         Fill in the missing equivalences in to prove . This tautology that shows that modus ponens (which we will see in  is valid.  Using equivalences to prove modus ponens is valid for     Proof:     \\hspace{.25in}  using \\hspace{.75in}         using \\hspace{.75in}         using \\hspace{.75in}         using \\hspace{.75in}         using \\hspace{.75in}         using \\hspace{.75in}         using \\hspace{.75in}         using \\hspace{.75in}         using \\hspace{.75in}            Make sure to complete because we are about to reveal some of the answers.   Proofs of Logical Equivalences       Many lists of equivalences omit contraposition because it can be proved from the other equivalences. Fill in the missing equivalences in to prove contraposition.  See .    Using equivalences to prove the contraposition equivalence for     Proof:     \\hspace{.25in}  using implication         using the commutative property         using double negation         using implication         Fill in the missing steps of the proof in using the equivalences given. What new equivalence did we just prove?  See . We just proved a new equivalence:     Using equivalences to expand mathinlined4ce7bb95e50f26575f4d123af009e967f8d654fENDfor     Proof.     \\hspace{.25in}  using implication         using the distributive property         using implication (twice)              Simplifying Negations  We can use logical equivalences to simplify the negation of a statement.   Negating a complicated statement   Negate the statement and simplify your negation so that there are no negation signs in front of parentheses. State which equivalences you use.   We simplify the negation in .    Using equivalences to negate the complicated statement from        using De Morgan's laws        using De Morgan's laws (twice)        using double negation.        Simplifying complicated statements  Negate each statement and use logical equivalences to simplify your negation so that there are no negation signs in front of parentheses. State which equivalences you use.                      Logical Inference  The primary tool that drives our explanations in proofs are logical inferences.   Logical Inferences       For statements and statement , a logical inference , denoted , is a rule saying if we know that statement is true, then we can conclude that statement is also true. For example, in  we proved that is a tautology. Therefore, if we know that is true, we can conclude that is true. We write . (This inference is  .)    An logical inference can also involve multiple statements. That is, for statements , , , , and . The logical inference means that if we know that statements , , , are true, then we can conclude that statement is also true. For example, if we know that is true and is true, then we can conclude that is true. We write . (This inference is  .)    A logical inference is valid if the corresponding conditional statement is a tautology or, equivalently, if . For example, is a valid inference because is a tautology.       There are five key logical inferences.   Logical inferences   For any logical statements and we have the following valid logical inferences.    Simplification       Addition       Conjunction       Modus ponens (m.p.)       Modus tollens (m.t.)         We explained why simplification and conjunction are valid in . Let's look at why modus ponens is valid.   Why modus ponens is valid   We proved modus ponens in  using equivalences. In this example, we look at two different ways to show that modus ponens is a valid inference.   Explain in words why modus ponens makes sense.  Suppose we know that is true and that is true. The statement promises that if is true, then is guaranteed to be true. Since is indeed true, it follows that is true.      Prove modus ponens is valid using a truth table.  To prove modus ponens is valid, we need to prove that is a tautology. The truth table is shown in . Notice that the last column is all T , so is a tautology. Therefore, modus ponens is valid.    Truth table showing modus ponens is valid for                                                      Let's look at how to use logical inferences to write proofs.   Validity of modus tollens   Prove modus tollens is valid using equivalences and the other inferences.    We want to prove that if and are each true, then is true. As we work through the proof, let's number each statement for future reference.   Proof. Assume \\ding{192} and \\ding{193} .  By \\ding{192} and contraposition , it follows that \\ding{194} .  By \\ding{193}, \\ding{194}, and modus ponens , it follows that .      Your turn to work with logical inferences.   Proofs with equivalences and inferences      Fill in the missing inferences to prove . Proof. Assume \\ding{192} . By \\ding{192} and it follows that \\ding{193} . By \\ding{193} and , it follows that .      Fill in the missing conclusions to prove the transitivity inference . Proof. Assume \\ding{192} and \\ding{193} . We will use a direct proof to prove . Assume \\ding{194} . By \\ding{194}, \\ding{192}, and modus ponens , it follows that \\ding{195} . By \\ding{195}, \\ding{193}, and modus ponens , it follows that . Thus, .      Fill in the missing equivalences, inferences, or conclusions to prove . Proof. Assume \\ding{192} and \\ding{193} . By \\ding{192} and DeMorgan's Law it follows that \\ding{194} . By \\ding{194} and , it follows that \\ding{194} . By \\ding{194}, \\ding{193}, and modus tollens , it follows that \\ding{195} . By \\ding{194} and , it follows that \\ding{196} . By \\ding{196} and simplification, it follows that \\ding{197} . By \\ding{195}, \\ding{197}, and conjunction, it follows that \\ding{198} . By \\ding{198} and , it follows that .        Let's look at the proof from  .   Proof using equivalences and inferences   Fill in the missing equivalences, inferences, or conclusions to prove    Proof. Assume \\ding{192} and \\ding{193} .  By \\ding{192} and DeMorgan's Law it follows that \\ding{194} .  By \\ding{194} and simplification, it follows that \\ding{194} .  By \\ding{194}, \\ding{193}, and modus tollens , it follows that \\ding{195} .  By \\ding{194} and the commutative property, it follows that \\ding{196} .  By \\ding{196} and simplification, it follows that \\ding{197} .  By \\ding{195}, \\ding{197}, and conjunction, it follows that \\ding{198} .  By \\ding{198} and Demorgan's laws, it follows that .        Exercises   Exercises for Logical Equivalence   Practice   For each equivalence, explain words why it is true. Recall that by that two statements are logical equivalent if they have the same truth values and so we can check if one statement is true, then so is the other and if one statement is false, then so is the other.              Hint: Begin with for the statement to be false, we would need both          If is true, then is true and is true. That is, is true. On the other hand, if is false, then is false or is false. That is, is false.    Hint: Follow the format from (a).    Hint: Follow the hint. It should never be false.       Practice   Use a truth table to verify the associative property for : . Include intermediate columns for and .    Hint: Your truth table should have seven columns: , , , , , , and . Your truth table should have eight rows. The fifth column and the seventh column should match.     Understand       Explain in words why .    Use a truth table to verify that .         Hint: If is true, then is true or is true, but not both. Since at least one of or is true, it follows that is true. Since not both are true, it follows that is false. That is, is true. Thus, is true. Now explain what happens if is false.    Hint: Your truth table should have seven columns , , , , , , and . Your truth table should have four rows. The third and seventh columns should match.       Understand   Many lists of equivalences omit broken promise because it can be proved from the other equivalences. Fill in the missing equivalences in to prove broken promise.   Fill in the blanks to prove broken promise for Exercise    Proof:     \\hspace{.25in}  using \\hspace{1in}         busing \\hspace{1in}         using \\hspace{1in}         Hint: The three reasons, in some order, are DeMorgan's laws, double negation, and implication.     Understand   Fill in the missing equivalences in to prove .   Fill in the blanks to prove for Exercise    Proof:     \\hspace{.25in}  using \\hspace{1in}         using \\hspace{1in}         using \\hspace{1in}         using \\hspace{1in}         using \\hspace{1in}         Hint: The proof uses the associative property, DeMorgan's laws, and implication.     Understand   This exercise repeats  . Fill in the missing equivalences in to prove .    Hint: The first three reasons are, in some order, the distributive property, implication, and negation. Other reasons used include DeMorgan's laws and identity.     Understand   Use equivalences to simplify .    Hint: Start with the distributive property to get . Next, use negation.     Understand   Use equivalences to prove .     Recap   Do you know    What it means for two statements to be logically equivalent?    How to use a truth table to verify that a logical equivalence is valid?    What the commutative, associative, and distributive properties tell us?    What the double negation equivalence says?    How to use logical equivalences to prove new logical equivalences?        Explore   Use a truth table to verify the following equivalences involving xor.    Commutative property       Associative property          Explore   For statements and , the Sheffer stroke ( nand ), denoted , is defined by    Construct a truth table for .    Use equivalences to simplify and .    Use equivalences to simplify .    Use equivalences to simplify .         Exercises for Simplifying Negations   Practice   Negate each statement and use logical equivalences to simplify your negation so that there are no negation signs in front of parentheses. State which equivalences you use.                       The answer is Show the steps of your work and state which equivalences you use.    Hint: The answer has no negations.    Hint: Use broken promise.       Understand   Negate each statement and use logical equivalences to simplify your negation so that there are no negation signs in front of parentheses. State which equivalences you use.                 Understand   Negate each statement and use logical equivalences to simplify your negation so that there are no negation signs in front of parentheses. State which equivalences you use.                  The answer is . Show the steps of your work and state which equivalences you use.    Hint: The answer includes .       Recap   Do you know    What DeMorgan's laws say?    What the broken promise equivalence says?    How to simplify negations using equivalences?        Explore       Recall that . Negate and use logical equivalences to simplify your negation so that there are no negation signs in front of parentheses. State which equivalences you use.    Recall that . Negate and use logical equivalences to simplify your negation so that there are no negation signs in front of parentheses. State which equivalences you use.    What do you notice?         Exercises for Logical Inference   Practice   Fill in the missing conclusions to prove .   Proof. Assume \\ding{192} .  By \\ding{192} and the commutative property it follows that \\ding{193} .  By \\ding{193} and simplification, it follows that .       ,      Practice   Fill in the missing inferences to prove the inference    Proof. Assume \\ding{192} , \\ding{193} and \\ding{194} .  By \\ding{192}, \\ding{193}, and , it follows that \\ding{195} .  By \\ding{192}, \\ding{194}, and , it follows that \\ding{196} .  By \\ding{195}, \\ding{196}, and , it follows that .      Hint: The proof uses conjunction and modus ponens .     Practice       Use equivalences and inferences to prove .    Use equivalences and inferences from our lists to prove .         Hint: The proof uses modus ponens twice.    Hint: Use simplification, but be careful. It says . If you later want to conclude instead, you need to use the commutative property first.       Understand       Explain in your own words why .    Fill in the missing equivalences and inferences to prove . Proof. Assume \\ding{192} and \\ding{193} . By it follows from \\ding{192} that . By , it follows that . We know from \\ding{193}, so by it follows that          Understand   Fill in the missing equivalences, inferences, or conclusions, to prove the inference that justifies proof by cases ( .    Proof. Assume \\ding{192} , \\ding{193} , and \\ding{194} .  By \\ding{193}, \\ding{194}, and conjunction it follows that \\ding{195} .  By \\ding{195} and implication (twice), it follows that \\ding{196} .  By \\ding{196} and the commutative property (twice), it follows that \\ding{197} .  By \\ding{197} and the distributive property, it follows that \\ding{198} .  By \\ding{198} and the commutative property, it follows that \\ding{199} .  By \\ding{199} and Demorgan's law, it follows that \\ding{200} .  By \\ding{199} and implication, it follows that \\ding{201} .  By \\ding{201}, \\ding{192}, and it follows that .      Hint: The first blank should say .     Understand   Fill in the missing equivalences and inferences to prove    Proof. Assume \\ding{192} and \\ding{193} .  By it follows from \\ding{193} that .  By , it follows that .  By , it follows that .  By , it follows that .  By , it follows from \\ding{192} that .  By , it follows that .      Understand   Consider the inference . Fill in the missing steps to prove it, using the equivalences and inferences given.   Proof. Assume \\ding{192} and \\ding{193} .  By \\ding{192} and implication, it follows that \\ding{194} .  By \\ding{193} and DeMorgan's laws, it follows that \\ding{195} .  By \\ding{193}, \\ding{195}, modus tollens , it follows that .     Hint: The second blank is .     Understand    Use equivalences and inferences from our lists to prove which is the inference that justifies proof by contradiction . Hint: Start with conjunction.    Hint: Use conjunction to get . Next, use implication (twice), double negation (twice), the distributive property, negation, and then identity.     Recap   Do you know    What a logical inference is?    How to use a truth table to verify a logical inference?    What modus ponens and modus ponens say and how to use them in a proof?    Why the simplification, conjunction, and addition inferences are valid?    How to use logical equivalences and logical inferences to prove new logical inferences?         "
},
{
  "id": "thm_obvious_logical_equivalences",
  "level": "2",
  "url": "sec_inference.html#thm_obvious_logical_equivalences",
  "type": "Theorem",
  "number": "1.5.1",
  "title": "Equivalences involving negations, tautologies, and contradictions.",
  "body": " Equivalences involving negations, tautologies, and contradictions   For any logical statement , tautology T , and contradiction F , we have the following logical equivalences.    Idempotent The word idempotent comes from the roots idem meaning self (as in the word identity ) and potent meaning power (in the normal English sense, as in omnipotent ) but used in mathematics to mean raised to an exponent. The word idempotent means the object equals its own power.  .     Identity  .     Domination  .     Negation  .     Double negation        "
},
{
  "id": "exam_understand_equiv_negTF",
  "level": "2",
  "url": "sec_inference.html#exam_understand_equiv_negTF",
  "type": "Example",
  "number": "1.5.2",
  "title": "Understanding logical equivalences: negation, tautology, and contradiction.",
  "body": " Understanding logical equivalences: negation, tautology, and contradiction   For each equivalence from , explain words why it is true. Recall that by that two statements are logical equivalent if they have the same truth values and so we can check if one statement is true, then so is the other and if one statement is false, then so is the other.      If is true, then either is true or is true. In either case, is true. If is false, then is false and is false. (We used Demorgan's laws, to negate the or .) In either case is false. Thus, .         If is true, then by definition of negation  is false and so is true. If is false, then by definition of negation  is true and so is false. Thus,          For the statement to be true, we would need both and to be true. But is a contradiction so it is always false. Therefore is also always false. That is, .        "
},
{
  "id": "thm_logical_equiv_comm_assoc_dist",
  "level": "2",
  "url": "sec_inference.html#thm_logical_equiv_comm_assoc_dist",
  "type": "Theorem",
  "number": "1.5.3",
  "title": "Commutative, associative, and distributive equivalences.",
  "body": " Commutative, associative, and distributive equivalences   For any logical statements , , and , we have the following logical equivalences.    Commutative property        Associative property        Distributive property         "
},
{
  "id": "thm_equiv_implication_cp__again",
  "level": "2",
  "url": "sec_inference.html#thm_equiv_implication_cp__again",
  "type": "Theorem",
  "number": "1.5.4",
  "title": "Implication and contraposition equivalences, revisited.",
  "body": " Implication and contraposition equivalences, revisited   For statements , , and , we have the following equivalences.    Implication         Contraposition         "
},
{
  "id": "thm_equiv_neg_and_or_ifthen",
  "level": "2",
  "url": "sec_inference.html#thm_equiv_neg_and_or_ifthen",
  "type": "Theorem",
  "number": "1.5.5",
  "title": "Negating compound statements, revisited.",
  "body": " Negating compound statements, revisited   For statements and , we have the following equivalences.    DeMorgan's laws    .     Broken promise         "
},
{
  "id": "act_proof_logical_equiv",
  "level": "2",
  "url": "sec_inference.html#act_proof_logical_equiv",
  "type": "Activity",
  "number": "1.5.A",
  "title": "Proofs of Logical Equivalences.",
  "body": " Proofs of Logical Equivalences      Many lists of equivalences omit contraposition because it can be proved from the other equivalences. Fill in the missing equivalences in to prove contraposition.  Fill in the blanks to prove the contraposition equivalence for     Proof:     \\hspace{.25in}  using \\hspace{1in}         using \\hspace{1in}         using \\hspace{1in}         using \\hspace{1in}          Fill in the missing steps of the proof in using the equivalences given. What new equivalence did we just prove?  Fill in the blanks to expand for     Proof:    \\hspace{1in}  \\hspace{.25in}  using implication       \\hspace{1in}   using the distributive property       \\hspace{1in}   using implication (twice)         Fill in the missing equivalences in to prove . This tautology that shows that modus ponens (which we will see in  is valid.  Using equivalences to prove modus ponens is valid for     Proof:     \\hspace{.25in}  using \\hspace{.75in}         using \\hspace{.75in}         using \\hspace{.75in}         using \\hspace{.75in}         using \\hspace{.75in}         using \\hspace{.75in}         using \\hspace{.75in}         using \\hspace{.75in}         using \\hspace{.75in}           "
},
{
  "id": "exam_proof_logical_equiv",
  "level": "2",
  "url": "sec_inference.html#exam_proof_logical_equiv",
  "type": "Example",
  "number": "1.5.9",
  "title": "Proofs of Logical Equivalences.",
  "body": " Proofs of Logical Equivalences       Many lists of equivalences omit contraposition because it can be proved from the other equivalences. Fill in the missing equivalences in to prove contraposition.  See .    Using equivalences to prove the contraposition equivalence for     Proof:     \\hspace{.25in}  using implication         using the commutative property         using double negation         using implication         Fill in the missing steps of the proof in using the equivalences given. What new equivalence did we just prove?  See . We just proved a new equivalence:     Using equivalences to expand mathinlined4ce7bb95e50f26575f4d123af009e967f8d654fENDfor     Proof.     \\hspace{.25in}  using implication         using the distributive property         using implication (twice)           "
},
{
  "id": "exam_neg_complicated",
  "level": "2",
  "url": "sec_inference.html#exam_neg_complicated",
  "type": "Example",
  "number": "1.5.12",
  "title": "Negating a complicated statement.",
  "body": " Negating a complicated statement   Negate the statement and simplify your negation so that there are no negation signs in front of parentheses. State which equivalences you use.   We simplify the negation in .    Using equivalences to negate the complicated statement from        using De Morgan's laws        using De Morgan's laws (twice)        using double negation.      "
},
{
  "id": "act_simplify_complicated_statements",
  "level": "2",
  "url": "sec_inference.html#act_simplify_complicated_statements",
  "type": "Activity",
  "number": "1.5.B",
  "title": "Simplifying complicated statements.",
  "body": " Simplifying complicated statements  Negate each statement and use logical equivalences to simplify your negation so that there are no negation signs in front of parentheses. State which equivalences you use.                   "
},
{
  "id": "defn_logical_infer",
  "level": "2",
  "url": "sec_inference.html#defn_logical_infer",
  "type": "Definition",
  "number": "1.5.14",
  "title": "Logical Inferences.",
  "body": " Logical Inferences       For statements and statement , a logical inference , denoted , is a rule saying if we know that statement is true, then we can conclude that statement is also true. For example, in  we proved that is a tautology. Therefore, if we know that is true, we can conclude that is true. We write . (This inference is  .)    An logical inference can also involve multiple statements. That is, for statements , , , , and . The logical inference means that if we know that statements , , , are true, then we can conclude that statement is also true. For example, if we know that is true and is true, then we can conclude that is true. We write . (This inference is  .)    A logical inference is valid if the corresponding conditional statement is a tautology or, equivalently, if . For example, is a valid inference because is a tautology.      "
},
{
  "id": "thm_logical_infer",
  "level": "2",
  "url": "sec_inference.html#thm_logical_infer",
  "type": "Theorem",
  "number": "1.5.15",
  "title": "Logical inferences.",
  "body": " Logical inferences   For any logical statements and we have the following valid logical inferences.    Simplification       Addition       Conjunction       Modus ponens (m.p.)       Modus tollens (m.t.)        "
},
{
  "id": "exam_mp_valid",
  "level": "2",
  "url": "sec_inference.html#exam_mp_valid",
  "type": "Example",
  "number": "1.5.16",
  "title": "Why <em class=\"emphasis\">modus ponens<\/em> is valid.",
  "body": " Why modus ponens is valid   We proved modus ponens in  using equivalences. In this example, we look at two different ways to show that modus ponens is a valid inference.   Explain in words why modus ponens makes sense.  Suppose we know that is true and that is true. The statement promises that if is true, then is guaranteed to be true. Since is indeed true, it follows that is true.      Prove modus ponens is valid using a truth table.  To prove modus ponens is valid, we need to prove that is a tautology. The truth table is shown in . Notice that the last column is all T , so is a tautology. Therefore, modus ponens is valid.    Truth table showing modus ponens is valid for                                                     "
},
{
  "id": "exam_prove_mt_using_equiv_and_infer",
  "level": "2",
  "url": "sec_inference.html#exam_prove_mt_using_equiv_and_infer",
  "type": "Example",
  "number": "1.5.18",
  "title": "Validity of <em class=\"emphasis\">modus tollens<\/em>.",
  "body": " Validity of modus tollens   Prove modus tollens is valid using equivalences and the other inferences.    We want to prove that if and are each true, then is true. As we work through the proof, let's number each statement for future reference.   Proof. Assume \\ding{192} and \\ding{193} .  By \\ding{192} and contraposition , it follows that \\ding{194} .  By \\ding{193}, \\ding{194}, and modus ponens , it follows that .     "
},
{
  "id": "act_proofs_equiv_infer",
  "level": "2",
  "url": "sec_inference.html#act_proofs_equiv_infer",
  "type": "Activity",
  "number": "1.5.C",
  "title": "Proofs with equivalences and inferences.",
  "body": " Proofs with equivalences and inferences      Fill in the missing inferences to prove . Proof. Assume \\ding{192} . By \\ding{192} and it follows that \\ding{193} . By \\ding{193} and , it follows that .      Fill in the missing conclusions to prove the transitivity inference . Proof. Assume \\ding{192} and \\ding{193} . We will use a direct proof to prove . Assume \\ding{194} . By \\ding{194}, \\ding{192}, and modus ponens , it follows that \\ding{195} . By \\ding{195}, \\ding{193}, and modus ponens , it follows that . Thus, .      Fill in the missing equivalences, inferences, or conclusions to prove . Proof. Assume \\ding{192} and \\ding{193} . By \\ding{192} and DeMorgan's Law it follows that \\ding{194} . By \\ding{194} and , it follows that \\ding{194} . By \\ding{194}, \\ding{193}, and modus tollens , it follows that \\ding{195} . By \\ding{194} and , it follows that \\ding{196} . By \\ding{196} and simplification, it follows that \\ding{197} . By \\ding{195}, \\ding{197}, and conjunction, it follows that \\ding{198} . By \\ding{198} and , it follows that .       "
},
{
  "id": "exam_proof_equiv_infer",
  "level": "2",
  "url": "sec_inference.html#exam_proof_equiv_infer",
  "type": "Example",
  "number": "1.5.19",
  "title": "Proof using equivalences and inferences.",
  "body": " Proof using equivalences and inferences   Fill in the missing equivalences, inferences, or conclusions to prove    Proof. Assume \\ding{192} and \\ding{193} .  By \\ding{192} and DeMorgan's Law it follows that \\ding{194} .  By \\ding{194} and simplification, it follows that \\ding{194} .  By \\ding{194}, \\ding{193}, and modus tollens , it follows that \\ding{195} .  By \\ding{194} and the commutative property, it follows that \\ding{196} .  By \\ding{196} and simplification, it follows that \\ding{197} .  By \\ding{195}, \\ding{197}, and conjunction, it follows that \\ding{198} .  By \\ding{198} and Demorgan's laws, it follows that .     "
},
{
  "id": "exer_understanding_equiv_negTF",
  "level": "2",
  "url": "sec_inference.html#exer_understanding_equiv_negTF",
  "type": "",
  "number": "1",
  "title": "Practice.",
  "body": " Practice   For each equivalence, explain words why it is true. Recall that by that two statements are logical equivalent if they have the same truth values and so we can check if one statement is true, then so is the other and if one statement is false, then so is the other.              Hint: Begin with for the statement to be false, we would need both          If is true, then is true and is true. That is, is true. On the other hand, if is false, then is false or is false. That is, is false.    Hint: Follow the format from (a).    Hint: Follow the hint. It should never be false.     "
},
{
  "id": "exer_truthtable_assoc",
  "level": "2",
  "url": "sec_inference.html#exer_truthtable_assoc",
  "type": "",
  "number": "2",
  "title": "Practice.",
  "body": " Practice   Use a truth table to verify the associative property for : . Include intermediate columns for and .    Hint: Your truth table should have seven columns: , , , , , , and . Your truth table should have eight rows. The fifth column and the seventh column should match.   "
},
{
  "id": "exer_xor_equiv",
  "level": "2",
  "url": "sec_inference.html#exer_xor_equiv",
  "type": "",
  "number": "3",
  "title": "Understand.",
  "body": " Understand       Explain in words why .    Use a truth table to verify that .         Hint: If is true, then is true or is true, but not both. Since at least one of or is true, it follows that is true. Since not both are true, it follows that is false. That is, is true. Thus, is true. Now explain what happens if is false.    Hint: Your truth table should have seven columns , , , , , , and . Your truth table should have four rows. The third and seventh columns should match.     "
},
{
  "id": "exer_proof_equiv_broken_promise",
  "level": "2",
  "url": "sec_inference.html#exer_proof_equiv_broken_promise",
  "type": "",
  "number": "4",
  "title": "Understand.",
  "body": " Understand   Many lists of equivalences omit broken promise because it can be proved from the other equivalences. Fill in the missing equivalences in to prove broken promise.   Fill in the blanks to prove broken promise for Exercise    Proof:     \\hspace{.25in}  using \\hspace{1in}         busing \\hspace{1in}         using \\hspace{1in}         Hint: The three reasons, in some order, are DeMorgan's laws, double negation, and implication.   "
},
{
  "id": "exer_proof_equiv_PtoQtoR",
  "level": "2",
  "url": "sec_inference.html#exer_proof_equiv_PtoQtoR",
  "type": "",
  "number": "5",
  "title": "Understand.",
  "body": " Understand   Fill in the missing equivalences in to prove .   Fill in the blanks to prove for Exercise    Proof:     \\hspace{.25in}  using \\hspace{1in}         using \\hspace{1in}         using \\hspace{1in}         using \\hspace{1in}         using \\hspace{1in}         Hint: The proof uses the associative property, DeMorgan's laws, and implication.   "
},
{
  "id": "exer_proof_mp_using_equiv",
  "level": "2",
  "url": "sec_inference.html#exer_proof_mp_using_equiv",
  "type": "",
  "number": "6",
  "title": "Understand.",
  "body": " Understand   This exercise repeats  . Fill in the missing equivalences in to prove .    Hint: The first three reasons are, in some order, the distributive property, implication, and negation. Other reasons used include DeMorgan's laws and identity.   "
},
{
  "id": "exer_simplify_equiv",
  "level": "2",
  "url": "sec_inference.html#exer_simplify_equiv",
  "type": "",
  "number": "7",
  "title": "Understand.",
  "body": " Understand   Use equivalences to simplify .    Hint: Start with the distributive property to get . Next, use negation.   "
},
{
  "id": "exer_another_equiv_ifthen",
  "level": "2",
  "url": "sec_inference.html#exer_another_equiv_ifthen",
  "type": "",
  "number": "8",
  "title": "Understand.",
  "body": " Understand   Use equivalences to prove .   "
},
{
  "id": "exer_dyk_logical_equiv",
  "level": "2",
  "url": "sec_inference.html#exer_dyk_logical_equiv",
  "type": "",
  "number": "9",
  "title": "Recap.",
  "body": " Recap   Do you know    What it means for two statements to be logically equivalent?    How to use a truth table to verify that a logical equivalence is valid?    What the commutative, associative, and distributive properties tell us?    What the double negation equivalence says?    How to use logical equivalences to prove new logical equivalences?      "
},
{
  "id": "exer_equiv_xor",
  "level": "2",
  "url": "sec_inference.html#exer_equiv_xor",
  "type": "",
  "number": "10",
  "title": "Explore.",
  "body": " Explore   Use a truth table to verify the following equivalences involving xor.    Commutative property       Associative property        "
},
{
  "id": "exer_sheffer_stroke",
  "level": "2",
  "url": "sec_inference.html#exer_sheffer_stroke",
  "type": "",
  "number": "11",
  "title": "Explore.",
  "body": " Explore   For statements and , the Sheffer stroke ( nand ), denoted , is defined by    Construct a truth table for .    Use equivalences to simplify and .    Use equivalences to simplify .    Use equivalences to simplify .      "
},
{
  "id": "exer_neg_simple_2vars",
  "level": "2",
  "url": "sec_inference.html#exer_neg_simple_2vars",
  "type": "",
  "number": "12",
  "title": "Practice.",
  "body": " Practice   Negate each statement and use logical equivalences to simplify your negation so that there are no negation signs in front of parentheses. State which equivalences you use.                       The answer is Show the steps of your work and state which equivalences you use.    Hint: The answer has no negations.    Hint: Use broken promise.     "
},
{
  "id": "exer_neg_complicated_and_or",
  "level": "2",
  "url": "sec_inference.html#exer_neg_complicated_and_or",
  "type": "",
  "number": "13",
  "title": "Understand.",
  "body": " Understand   Negate each statement and use logical equivalences to simplify your negation so that there are no negation signs in front of parentheses. State which equivalences you use.               "
},
{
  "id": "exer_neg_ifthen",
  "level": "2",
  "url": "sec_inference.html#exer_neg_ifthen",
  "type": "",
  "number": "14",
  "title": "Understand.",
  "body": " Understand   Negate each statement and use logical equivalences to simplify your negation so that there are no negation signs in front of parentheses. State which equivalences you use.                  The answer is . Show the steps of your work and state which equivalences you use.    Hint: The answer includes .     "
},
{
  "id": "exer_dyk_simplify_neg",
  "level": "2",
  "url": "sec_inference.html#exer_dyk_simplify_neg",
  "type": "",
  "number": "15",
  "title": "Recap.",
  "body": " Recap   Do you know    What DeMorgan's laws say?    What the broken promise equivalence says?    How to simplify negations using equivalences?      "
},
{
  "id": "exer_negating_biconditional_using_equiv",
  "level": "2",
  "url": "sec_inference.html#exer_negating_biconditional_using_equiv",
  "type": "",
  "number": "16",
  "title": "Explore.",
  "body": " Explore       Recall that . Negate and use logical equivalences to simplify your negation so that there are no negation signs in front of parentheses. State which equivalences you use.    Recall that . Negate and use logical equivalences to simplify your negation so that there are no negation signs in front of parentheses. State which equivalences you use.    What do you notice?      "
},
{
  "id": "exer_proof_PandQimpliesQ",
  "level": "2",
  "url": "sec_inference.html#exer_proof_PandQimpliesQ",
  "type": "",
  "number": "17",
  "title": "Practice.",
  "body": " Practice   Fill in the missing conclusions to prove .   Proof. Assume \\ding{192} .  By \\ding{192} and the commutative property it follows that \\ding{193} .  By \\ding{193} and simplification, it follows that .       ,    "
},
{
  "id": "exer_prove_complicated_infer",
  "level": "2",
  "url": "sec_inference.html#exer_prove_complicated_infer",
  "type": "",
  "number": "18",
  "title": "Practice.",
  "body": " Practice   Fill in the missing inferences to prove the inference    Proof. Assume \\ding{192} , \\ding{193} and \\ding{194} .  By \\ding{192}, \\ding{193}, and , it follows that \\ding{195} .  By \\ding{192}, \\ding{194}, and , it follows that \\ding{196} .  By \\ding{195}, \\ding{196}, and , it follows that .      Hint: The proof uses conjunction and modus ponens .   "
},
{
  "id": "exer_proof_doublemp_equiv_infer",
  "level": "2",
  "url": "sec_inference.html#exer_proof_doublemp_equiv_infer",
  "type": "",
  "number": "19",
  "title": "Practice.",
  "body": " Practice       Use equivalences and inferences to prove .    Use equivalences and inferences from our lists to prove .         Hint: The proof uses modus ponens twice.    Hint: Use simplification, but be careful. It says . If you later want to conclude instead, you need to use the commutative property first.     "
},
{
  "id": "exer_or_form_mp",
  "level": "2",
  "url": "sec_inference.html#exer_or_form_mp",
  "type": "",
  "number": "20",
  "title": "Understand.",
  "body": " Understand       Explain in your own words why .    Fill in the missing equivalences and inferences to prove . Proof. Assume \\ding{192} and \\ding{193} . By it follows from \\ding{192} that . By , it follows that . We know from \\ding{193}, so by it follows that        "
},
{
  "id": "exer_proof_equiv_infer_proof_by_cases",
  "level": "2",
  "url": "sec_inference.html#exer_proof_equiv_infer_proof_by_cases",
  "type": "",
  "number": "21",
  "title": "Understand.",
  "body": " Understand   Fill in the missing equivalences, inferences, or conclusions, to prove the inference that justifies proof by cases ( .    Proof. Assume \\ding{192} , \\ding{193} , and \\ding{194} .  By \\ding{193}, \\ding{194}, and conjunction it follows that \\ding{195} .  By \\ding{195} and implication (twice), it follows that \\ding{196} .  By \\ding{196} and the commutative property (twice), it follows that \\ding{197} .  By \\ding{197} and the distributive property, it follows that \\ding{198} .  By \\ding{198} and the commutative property, it follows that \\ding{199} .  By \\ding{199} and Demorgan's law, it follows that \\ding{200} .  By \\ding{199} and implication, it follows that \\ding{201} .  By \\ding{201}, \\ding{192}, and it follows that .      Hint: The first blank should say .   "
},
{
  "id": "exer_proof_infer_random",
  "level": "2",
  "url": "sec_inference.html#exer_proof_infer_random",
  "type": "",
  "number": "22",
  "title": "Understand.",
  "body": " Understand   Fill in the missing equivalences and inferences to prove    Proof. Assume \\ding{192} and \\ding{193} .  By it follows from \\ding{193} that .  By , it follows that .  By , it follows that .  By , it follows that .  By , it follows from \\ding{192} that .  By , it follows that .    "
},
{
  "id": "exer_proof_infer_random2",
  "level": "2",
  "url": "sec_inference.html#exer_proof_infer_random2",
  "type": "",
  "number": "23",
  "title": "Understand.",
  "body": " Understand   Consider the inference . Fill in the missing steps to prove it, using the equivalences and inferences given.   Proof. Assume \\ding{192} and \\ding{193} .  By \\ding{192} and implication, it follows that \\ding{194} .  By \\ding{193} and DeMorgan's laws, it follows that \\ding{195} .  By \\ding{193}, \\ding{195}, modus tollens , it follows that .     Hint: The second blank is .   "
},
{
  "id": "exer_proof_infer_contradiction",
  "level": "2",
  "url": "sec_inference.html#exer_proof_infer_contradiction",
  "type": "",
  "number": "24",
  "title": "Understand.",
  "body": " Understand    Use equivalences and inferences from our lists to prove which is the inference that justifies proof by contradiction . Hint: Start with conjunction.    Hint: Use conjunction to get . Next, use implication (twice), double negation (twice), the distributive property, negation, and then identity.   "
},
{
  "id": "exer_dyk_logical_inference",
  "level": "2",
  "url": "sec_inference.html#exer_dyk_logical_inference",
  "type": "",
  "number": "25",
  "title": "Recap.",
  "body": " Recap   Do you know    What a logical inference is?    How to use a truth table to verify a logical inference?    What modus ponens and modus ponens say and how to use them in a proof?    Why the simplification, conjunction, and addition inferences are valid?    How to use logical equivalences and logical inferences to prove new logical inferences?      "
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
