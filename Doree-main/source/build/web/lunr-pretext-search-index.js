var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "sec_listing",
  "level": "1",
  "url": "sec_listing.html",
  "type": "Section",
  "number": "1.1",
  "title": "Organized Listing",
  "body": " Organized Listing   It is often helpful to have a list. We might be trying to solve a problem by looking for a pattern among a list of examples. Or, we might want to check for every possibility using a list of all possible examples. In this section, we practice listing.  We begin this section by giving you the opportunity to list on your own, so that you can appreciate the challenges. Try not to get frustrated, just try your best. Later in the section, we describe a few strategies to help create organized lists, including considering cases and constructing possibility trees, that can make the process a little less frustrating.    Squares and Dominoes  We begin with a puzzle.   Squares and Dominoes Puzzle  You have a large supply of (striped) squares and (gray) dominoes with which to tile a board. That is, you want to cover every square on the board with either a square or a domino so that there is no overlap. For example, there are three different ways to tile a board shown in . Notice that the order of the tiles matters.   Three ways to tile the board with squares and dominoes.      We write a dot ( ) for each square and a dash ( ) for each domino to obtain the shorthand listed below each tiling.   There is one way to tile the board. What is it? Use our shorthand.    There are two ways to tile the board. List them using our shorthand.    We have already seen that there are three ways to tile the . You might expect there to be four ways to tile the board, but there are actually five ways. List them.    List the ways to tile the board. How many ways are there?    List all the ways to tile the board. Hint: first list all the ways that start with a square ( ) and then list all the ways that start with a domino ( ).    Make a table to record the number of ways to tile the board for .    Conjecture the number of ways to tile a board. Explain your reasoning and show your work. Your answer should be a specific number.    Conjecture the number of ways to tile a board.      Make sure that you have tried before reading on.   Squares and dominoes tiling of a board       As in , list all the ways to tile a board with squares and dominoes by first listing the ways that start with a square ( ) and then listing all the ways that start with a domino ( ).  First, we list the ways that start with a square. After the square, there is effectively a board to tile. Therefore, we copy all the ways to tile the board (shown with a square bracket) and put a square in front of each, as shown in .   Tiling the board starting with a square.     Next, we list the ways that start with a domino. After the domino, there is effectively a board to tile. Therefore, we copy all the ways to tile the board (shown with a square bracket) and put a domino in front of each, as shown in .   Tiling the board starting with a domino.    Since every tiling of a board either starts with a square or with a domino, we have listed all ways to tile a board.      How many ways are there to tile a board? Explain how your answer related to the number of ways to tile a board and the number of ways to tile a board.  We listed a total of 13 ways to tile a board. Because we get one tiling of a board for each of the eight ways to tile a board and we get one tiling of a board for each of the five ways to tile a board, , the number of ways to tile a board equals the sum of the number of ways to tile a board plus the number of ways to tile a board. That is, there are ways to tile a board.         In and , we saw our first example of a recursive solution where we use tilings of smaller boards to tile a larger board. Specifically, we can tile a board using the tilings for the next two smaller boards: a board and a board. We study recursions in Recursion and Induction. We can use this recursion to count the number of tilings on a board.   Counting squares and dominoes tilings of a board       Based on the recursive solution to tile a board using squares and dominoes in , how many ways can we tile a board?  We saw in that there are ways to tile a board: eight are obtained by putting a square in front of each tiling of a board and five are obtained by putting a domino in front of each tiling of a board.  Similarly, there are ways to tile a board: 13 are obtained by placing a square in front of each tiling of a board and eight are obtained by placing a domino in front of each tiling of a board.  Continuing this reasoning, there are tilings of a board.      Conjecture the number of ways to tile a board.  The one-shorter board is and the two-shorter board is . Since we got one tiling of the board for each tiling of a board and for each tiling of a board, the number of tilings of a equals the sum of the number of tilings of a board and the number of tilings of a board. That last sentence is a mouthful. Using sequence notation, which we introduce formally in , we might write where the subscript on represents the number of ways to tile a board.         The number of ways to tile a board with squares and dominoes is a Fibonacci number it is the sum of the previous two Fibonacci numbers, usually starting with . We revisit the Fibonacci numbers again in . The first few Fibonacci numbers are     Sets of Digits  Throughout this course, we use mathematical structures. One structure is a set , which is understood to be an unordered collection of elements . For example, the set has three elements: 1, 4, and 5. The set is the same as the set because has the same three elements: 1, 4, and 5. That is, the order in which we list the elements in a set does not matter. There is no need to repeat elements within a set because it does not change the set. For example, the set is the same as the set because each set has two elements: 2 and 7. Sets are very important in mathematics. In fact, we might say that   Sets are the most fundamental structure of mathematics because all of mathematics can be defined using sets.   Since discrete mathematics comes from all areas of mathematics, it should not be surprising that this textbook uses a large mathematical vocabulary. Some words in that vocabulary are not defined. For example, the words set or element are not defined in the previous paragraph, although we hope that their meaning is clear from the narrative. It turns out that any vocabulary must be built on a set of undefined words because you have to start somewhere. We try to keep the list of undefined terms as short as possible.  When we can, we give a formal mathematical definition of a new word that states what the word means in mathematics. We sometimes add a quick example or note, but those additions are not officially part of the definition. Definitions in mathematics also serve another purpose. There might be several different, but equivalent, ways to explain the meaning of a word. In such situations, a definition establishes an agreement on which of those different explanations is the official mathematical definition of the word.  Here are a few examples of definitions. First, there are a few ways to refer to types of numbers.   Integers       The numbers are integers .    The numbers are natural numbers (or non-negative integers ) You may find that other mathematics classes have the natural numbers starting with  . For example, the phrase for any natural number means for any integer .    The numbers are positive integers . For example, the phrase for any positive integer means for any integer .       The integers have a special name.   Digit       Each of the integers is a digit .    Two digits (or two integers) are distinct if they are not equal.    A digit (or an integer) is nonzero if it does not equal zero.       We also have a name for the result of adding, subtracting, or multiplying two integers.   Sum, difference, and product       The sum (or total ) of two integers and is . For example, the sum of 2 and 3 is 5 and the sum of 3 and is .    In any sum, terms are the integers that are added. For example, in the sum , the terms are 3 and .    The negative of the integer is the integer . Note that could be positive, negative, or 0. For example, the negative of 5 is , the negative of is , and the negative of 0 is 0.    The difference of the integers and , in that order, is the integer . Note that if we subtract in the opposite order, we get the negative. For example, and . That is, and are negatives of each other.    The product of the integers and is , which is normally written as . For example, the product of 2 and 3 is 6 and the product of 5 and is . Multiplication is shorthand for addition, so officially     In any product, the factors are the integers being multiplied. For example, in the product , the factors are 5 and .       Here is an example that uses these definitions.   2-digit sets       List all sets of two distinct nonzero digits where the sum of the digits is 14.  Since and , two such sets are and . Notice that , but the digits that are added are not distinct. There are no other sets because the largest digit is 9, and so the smallest digit we might use is . The final list is and .      List all sets of two distinct digits where the product of the digits is 12.  Start with the smallest digit 1. We know , but 12 is not a digit. The next digit is 2 and . Thus, one set is . Next, we have the digit 3 and . Thus, another set is . The final list is , .         Try working with sets.   Digit sums  Be sure to write sets in set notation using curly brackets.   List all sets of two distinct nonzero digits where the sum of the digits is seven.    List all sets of three distinct nonzero digits where the sum of the digits is nine.    List all sets of four distinct nonzero digits where the sum of the digits is 21.    How might you organize your lists to avoid accidentally listing the same set twice, to make it easy to compare answers with a classmate, and to determine if you included all the possibilities?      As we saw in and , there are two key challenges to making a list.   How do we know if our list includes all the possibilities?    How can we avoid accidentally listing the same object twice?     The short version of the answer is that we try to be organized, and if possible, we try to write the list in a standard order. For example, in you might have organized your list based on whether the tiling started with a square or a domino, or you might have organized your list based on the number of dominoes. In you might have organized your work by considering the smallest or largest element in your set. In general, we can create an organized list by breaking the problem into special cases.   Using cases to list digit sums   Use cases based on the largest digit to list all sets of four distinct nonzero digits where the sum of the digits is 17.    We consider cases based on the largest digit in the set.  Case 1: The largest digit is 9. The other three distinct nonzero digits must be less than 9 and have a sum of , either or . The two sets in this case are and .  Case 2: The largest digit is 8. The other three distinct nonzero digits must be less than 8 and have a sum of , either or . The two sets in this case are and .  Case 3: The largest digit is 7. The other three distinct nonzero digits must be less than 7 and have a sum of , either or . The two sets in this case are and .  Case 4: The largest digit is 6. The other three distinct nonzero digits must be less than 6 have a sum of which must be . The only set in this case is .  Note that the largest digit cannot be 5 because we cannot find three distinct nonzero digits that are less than 5 and add to . The largest sum of three distinct nonzero less than 5 is .  We have found all seven sets of four distinct nonzero digits where the sum of the digits is 17. They are , , , , , , and .      Strings  Another example of a mathematical structure is a string. Your passwords are probably all strings. We represented a tiling of a board with squares and dominoes as a string of dots ( ) and dashes ( ) in . Here is the definition of string and more vocabulary about strings.   Characters and strings       An alpha-numeric character is either a digit, a lowercase English letter, or an uppercase (capital) English letter. There are 26 letters in the English alphabet and each letter has a lower and upper case.    In this textbook (and most of mathematics and computer science), all alphanumeric characters are case-sensitive . For example, A and a are different characters. There are, alphanumeric characters    Any other single symbol, such as & or > , that is typically found on a keyboard key is a special character .    A character is either an alphanumeric character or a special character.    A string is a finite sequence of characters. For example, A0y2%0 is a string. Note that characters may be repeated within a string and the order matters. For example, 00%2Ay is a different string.    The length of a string is the total number of characters in the string. For example, A0y2%0 is a string of length six.       In our next example, we highlight two organizational strategies for creating lists: considering cases or drawing a possibility tree Possibility trees get their name from natural trees because they have branches. .   2-strings   List all strings of length two where the first character is a , b , or c and the second character is 2 or 6 .   Construct your list by considering cases based on the first character.  Let's consider cases based on the first character.  Case 1: If the first character is a , then we have a2 or a6 .  Case 2: If the first character is b , then we have b2 and b6 .  Case 3: If the first character is c , then we have c2 and c6 .  The strings are a2 , a6 , b2 , b6 , c2 , c6 .   A possibility tree for 2-strings.          Construct your list by drawing a possibility tree.  In , we begin by drawing a starting point on the left. We draw three branches to nodes a , b , c which are the possibilities for the first character in the string.  If the first character is a , then the second character is either 2 or 6 , and so we draw two branches from a to a2 and from a to a6 . Similarly we draw branches from b to b2 , from b to b6 , from c to c2 , and from c to c6 . As before, the strings are: a2 , a6 , b2 , b6 , c2 , and c6 .  There is a shorthand way to draw the tree where we only list the new character in each spot instead as shown in . In this case, it takes a little less work to draw the tree but a little more work to write out the final list.   A possibility tree for 2-strings, shorthand version.             Notice in that we considered the letters in alphabetical order , the order of the English alphabet: a , b , c , d , e , f , g , h , i , j , k , l , m , n , o , p , q , r , s , t , u , v , w , x , y , z    A , B , C , D , E , F , G , H , I , J , K , L , M , N , O , P , Q , R , S , T , U , V , W , X , Y , Z For strings beginning with a , we first list the string ending in 2 and then the string ending in 6 . That is, we considered the digits in numerical order , from smallest to largest.  Practice using possibility trees to create lists.   Listing strings      Use a possibility tree to list all strings of length two where each character is a , b , or c .    Let's change the rules. Use a possibility tree to list all strings of length three where each character is a , b , c if repetitions are not allowed, meaning that each letter is used exactly once.    Look back at the tree you drew in . How many strings of length are there where each character is a , b , or c ? Repetition is allowed. Conjecture without writing a list or drawing a tree.    Look back at the tree you drew in . How many strings of length ten are there where each character is a , b , c , , j and repetition is not allowed? Conjecture without writing a list or drawing a tree.      In the possibility trees that we have drawn so far, each branch is of the same length. Let's look at an example where the branches are different lengths.   Tiling a board with squares and dominoes   Draw the possibility tree to list the ways to tile a board using squares ( ) and dominoes ( ) as in .    The tree in shows all eight possibilities. Notice that we changed the root symbol to to avoid confusion with the square symbol ( ). Reading across the top row, for example, gives the all-square tiling and reading the next path from branch to leaf gives the tiling .   Tiling the board with squares and dominos.      As we build a tiling of length five, we have to be careful. If we have a tiling of length four, then the only option to finish the tiling is a square because a domino would make length six. For example, the branch that begins can only be followed by . Once we have a tiling of length five, the branch ends. For example, the branch ends after three tiles.      Integer Algebra  Often, the numbers we consider in this textbook are integers. For example, we might make a conjecture that involves an unknown integer. Historically, integers were commonly named using the letters , or because some computer programming languages, such as Fortran, used to reserve these letters for integer quantities (perhaps because the word integer begins with and then ). In this textbook, we use a variety of letters for integers, although we tend to save the letters , , and for real-valued (decimal) quantities.  When you studied algebra, you probably worked a lot with quantities named , occasionally with quantities named , , or , and rarely with quantities named , , , or other common letters for integers. The rules of algebra remain the same for whatever letters we use, but it can take some practice to be comfortable working with a variety of letters. In this section, we discuss integer arithmetic. To start with, it is useful to name various arithmetic properties of the integers.   Integer algebra and the order of operations       When several operations are involved in a single calculation, we need to know the order of operations (PEMDAS) , the priority ranking for arithmetic operations. The order is   First, calculate anything inside P arentheses.    Next, calculate E xponents , in order from left to right.    Then, M ultiply and D ivide , in order from left to right.    Last, A dd and S ubtract , in order from left to right.       The commutative properties of the integers tell us that . We often use the commutative property to rewrite sums or products in standard order. For example, products are usually written alphabetically ( is standard, not ) and in products numbers come before letters ( is standard, not ). In sums, numbers often come after letters ( is common, although is also acceptable).    The associative properties of the integers tells us that . We often use the associative property to write an expression such as without parentheses, since the location of parentheses would not change the sum.    We factor an integer by writing it as a product of two integers. For example, we can factor as which we could write as or . Although it is correct to factor as , if an activity or exercise asks you to factor, the answer should not use the factor . Notice that factor can be a noun, which means the quantity we are multiplying, or a verb, which means write as a product.    The distributive property of the integers tells us that . Reading this equation from left to right tells us how to expand (or distribute or multiply out ). For example, . Equations tell us that two things are equal, so we can equally well read this equation from right to left which tells us how to factor. For example, .       Let's practice working with the vocabulary factor and term.   Factors and terms       Describe the quantity using factors and terms.  There are two factors: 2 and . The second factor has two terms: and 1.      Describe the quantity using factors and terms.  There are two terms: and 1. The first term has two factors: 2 and .         We can use the distributive propensity to combine like terms , which means terms having a common factor.   Combining like terms   Simplify the expression .    You have seen . You might have learned that this equation is analogous to saying that if I have 2 apples plus another 3 apples, then I have a total of 5 apples. In the same way, .  Alternatively, we can use the definition of the product. Since and , together we have   Yet another way of thinking about this simplification is to use the distributive property to factor   Each of these approaches is useful. So, even if you favor one approach, learn the other methods as well.    Now it is your turn to practice some integer algebra.   Integer algebra      Simplify .    Simplify .    Expand and simplify     Factor .        Exercises   Exercises for Squares and Dominoes   Practice       Using the strategy in , conjecture the number of ways to tile a board.    Using the strategy and results in , list all 21 ways to tile a board using squares and dominoes.         233    Hint: The eight ways that start with a domino are , , , , , , , and . Each is a domino followed by a way to tile a board. There are also 13 ways to start with a square.       Understand   Suppose we have squares ( ), dominoes ( ), and new trominoes ( ).   List the ways to tile , , , and boards using squares, dominoes, and trominoes.    List the ways to tile , , , and boards using only squares and trominoes.         Hint: The , , and only involve squares and dominoes, so you should have the same list as before. For , the list is: , , , , , , and .    Now there is one way for , one way for , two ways for , and three ways for .       Recap   Do you know    What does it mean to tile a board with squares and tiles?    How to create a list of ways to tile a board with squares and dominoes using the lists from the next two smaller boards?    What the phrase \"recursive solution\" means?    How to generate a list of Fibonacci numbers?        Explore   Suppose we have squares, dominoes, and trominoes, as in .   Conjecture the number of ways to tile a board with squares, dominoes, and trominoes. Explain your reasoning and make sure you get the correct number when .    Conjecture the number of ways to tile a board with only squares and trominoes. Explain your reasoning and make sure you get the correct number when .         Exercises for Sets of Digits   Practice       List all sets of three distinct nonzero digits where the sum of the digits is 10.    List all sets of three distinct nonzero digits where the sum of the digits is 18.         Hint: , , , and there is one more that does not use 1.    Hint: , , , , and three more.       Understand   We define the term prime later in the course. For this problem, you only need to know that the first few primes are .  List all positive integers less than 50 that are the product of two distinct primes.    Hint: The list includes , , , , , , , and .     Understand       The only set of two distinct nonzero digits whose sum is 16 is . Find all other integers where there is exactly one set of two distinct nonzero digits whose sum is and list the corresponding set. Hint: the smallest possible value is and the largest possible value is .    Give an example of a number where there is exactly one set of three distinct nonzero digits where the sum of the digits is . Are there other examples? Can you list all possible examples?         3, 4, 16, and 17    One example is where the only set is . Yes, there are others. Hint: There are four such numbers .       Recap   Do you know    How to decide if two sets are equal?    What an integer is?    What is the name of the result of adding integers?    What is the name of the result of multiplying integers?    Which integers are digits?    Why we want to be organized when listing?    How to organize lists by considering cases?        Explore   A Kakuro puzzle is like a crossword puzzle but with digits instead of letters. The clues are written within the puzzle. The number in an upper triangle tells you the sum of the digits in the row to the right of the clue, and the number in a lower triangle tells you the sum of the digits in the column below the clue. Each box can be filled in with any digit from 1 to 9, except that no digit is repeated within an answer.   Play Kakuro online at \\url{https:\/\/www.kakuroconquest.com\/} and take a screenshot of your solution to the largest puzzle that you can solve. Try to figure out what each cell must be without any guessing and don't overuse the CHECK feature.    Play Kakuro online at \\url{https:\/\/www.kakuro.com\/index.php} and take a screenshot of your solution to the puzzle of the highest difficulty that you can solve. Try to figure out what each cell must be without any guessing. The Use Pencil option allows you to list the possibilities for each cell. Click on Use Pencil again to enter your guesses.        Explore   This exercise is based on the Kakuro puzzle introduced in . We use the shorthand clue n-in-k to mean a set of digits 1-9 without repeats whose sum is . For example, 20-in-3 could be . We cannot use that because would repeat. In the actual puzzle, the digits would be filled in the cells in some order, such as 479 or 947.  A kakuro is a clue having only one possible set. For example, 17-in-2 is a kakuro because the only set is while 20-in-3 is not a kakuro because there were four possible sets. Kakuros are very helpful for solving Kakuro puzzles. We found kakuros of the form -in-2 and -in-3 in .   What is the only digit that the kakuros 3-in-2 and 4-in-2 have in common?    What is the only digit that the kakuros 15-in-5 and 29-in-4 have in common?    List all kakuros of the form -in-4.     List all kakuros of the form -in-8. Hint: what is ?         Exercises for Strings   Practice       Calculate the length of the string 8fG#tt8 .    Are there special characters in the string 8fG#tt8 ? Explain.    How many times does the digit 8 appear in the string 8fG#tt8 ?    How many times does the letter g appear in the string 8fG#tt8 ? Be careful.         Seven    Yes, #    Two    Zero. Note that G is different from g .       Practice       Look back at the tree you drew in  . Conjecture the number of strings of length four where each character is a , b , c , or d and repetition is not allowed.    Use a possibility tree to list all strings of length four where each character is a , b , c , or d and repetition is not allowed. Do not forget to state the final list.    How many strings are in your list in part ? Compare your answer to your conjecture.         24    Hint: The first branches go to , , , and , but after that the list narrows. For example, from , there are branches only to , , and .    Hint: You should get 24 again.       Understand    Use a possibility tree to list all strings of length three where each character is a , b , or c if repetition is allowed, but not consecutively. For example, aba is allowed but baa is not. Do not forget to state the final list.    Hint: the list begins aba , abc , aca , acb , , cbc . There are 12 possible strings.     Understand   There are four tasks on my to-do list: laundry (L), cleaning (C), grocery shopping (G), and exercise (E). I plan to complete two of the four tasks today. Use a possibility tree to list all possible ordered list of tasks in each situation.   I do one task this morning and then a different task this afternoon.    I do laundry or clean in the morning and then have a different task in the afternoon.    I do one task this morning and then a different task this afternoon, but I refuse to do laundry and cleaning on the same day.         Hint: The possible to-do lists are: LC, LG, LE, CL, CG, CE, GL, GC, GE, EL, EC, EG, where the first letter represents the morning chore and the second letter represents the afternoon chore.    Hint: only keep the to-do lists that start with L or C.    Hint: Keep all possible to-do lists except for LC and CL.       Understand   Draw a possibility tree showing the ways to tile a board using squares and dominoes, as described in . Hint: Look at .    Hint: Your tree should look like the tree in , but only for length four (not length five).     Recap   Do you know    What is the distinction between a set and a string?    Whether y and Y are considered the same character?    How to calculate the length of a string or construct a string of a given length?    How to create an organized list using alphabetical or numerical order?    How to create an organized list by considering cases?    How to draw a possibility tree and how to use a possibility tree to create an organized list?        Explore   A permutation of the set  is a string of length four using each of the digits 1 , 2 , 3 , and 4 exactly once.   Use a possibility tree to list all permutations of the set starting with 1 .    Use a possibility tree to list all permutations of the set starting with 2 .    Based on your answer to the previous parts, make a conjecture about the total number of permutations of the set . Explain your reasoning using cases.         Hint: Your tree should produce the list , , , , , .    Hint: You should again get six permutations.    Hint: Use case 1: starts with 1 , case 2: starts with 2 , case 3: starts with 3 , and case 4: starts with 4 . There are six permutations in each case.       Explore   In each part, use a possibility tree to list the permutations of meeting the given condition.   The first first two characters are odd ( 1 or 3 ) and the second two characters are even ( 2 or 4 ). For example, we might have the string 1342 .    The 1 appears before 2 and 3 appears before 4 . For example, we might have the string 3142 .    There is only one decrease , meaning that there is only one place in the permutation of the set where a digit is followed by a smaller digit. For example, 1324 is allowed because 32 is the only decrease, but 3142 is not allowed because both 31 and 42 are decreases.         Hint: The first branches go to 1 and 3 . From 1 there is a single branch to 3 and vice versa. Next, there is a branch from each endpoint to 2 and 4 . Lastly, from each 2 there is a single branch to 4 and vice versa. In all, there are four such permutations.    Hint: The permutation must begin with 1 or 3 . There are three such permutations in each case.    Hint: Consider cases. Case 1: The decrease happens from first to second digits. There are three such strings: 2134 , 3124 , and 4123 . Case 2: The decrease happens from second to third digit. There are five such strings (list them). Case 3: The decrease happens from third to fourth digit. There are three such strings (list them).        Exercises for Integer Algebra   Practice       Expand and simplify     Factor               Hint: Factor out the two.       Understand   Explain how to simplify using each of the three methods from .    Hint: Follow the methods in . In each case, your answer should simplify to .     Recap   Do you know    Which algebraic property of the integers allows us to write sums and products in either order?    Which algebraic property helps us expand and factor integers?    How to combine like terms using the definition of multiplication?    How to combine like terms by factoring?        Explore   The square of the integer is    Use this definition to calculate .    Simplify .    Simplify . Hint: first, use the associative property to write the product as .    Expand .    Factor .    Factor .    Factor .         Nine         Hint: See the hint.    Hint: The answer begins with .    Hint: Factor out the three.    Hint: Factor out .             "
},
{
  "id": "act_squares_dominoes",
  "level": "2",
  "url": "sec_listing.html#act_squares_dominoes",
  "type": "Activity",
  "number": "1.1.A",
  "title": "Squares and Dominoes Puzzle.",
  "body": " Squares and Dominoes Puzzle  You have a large supply of (striped) squares and (gray) dominoes with which to tile a board. That is, you want to cover every square on the board with either a square or a domino so that there is no overlap. For example, there are three different ways to tile a board shown in . Notice that the order of the tiles matters.   Three ways to tile the board with squares and dominoes.      We write a dot ( ) for each square and a dash ( ) for each domino to obtain the shorthand listed below each tiling.   There is one way to tile the board. What is it? Use our shorthand.    There are two ways to tile the board. List them using our shorthand.    We have already seen that there are three ways to tile the . You might expect there to be four ways to tile the board, but there are actually five ways. List them.    List the ways to tile the board. How many ways are there?    List all the ways to tile the board. Hint: first list all the ways that start with a square ( ) and then list all the ways that start with a domino ( ).    Make a table to record the number of ways to tile the board for .    Conjecture the number of ways to tile a board. Explain your reasoning and show your work. Your answer should be a specific number.    Conjecture the number of ways to tile a board.     "
},
{
  "id": "exam_sq_dom6",
  "level": "2",
  "url": "sec_listing.html#exam_sq_dom6",
  "type": "Example",
  "number": "1.1.2",
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
  "number": "1.1.5",
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
  "number": "1.1.6",
  "title": "Integers.",
  "body": " Integers       The numbers are integers .    The numbers are natural numbers (or non-negative integers ) You may find that other mathematics classes have the natural numbers starting with  . For example, the phrase for any natural number means for any integer .    The numbers are positive integers . For example, the phrase for any positive integer means for any integer .      "
},
{
  "id": "defn_digit",
  "level": "2",
  "url": "sec_listing.html#defn_digit",
  "type": "Definition",
  "number": "1.1.7",
  "title": "Digit.",
  "body": " Digit       Each of the integers is a digit .    Two digits (or two integers) are distinct if they are not equal.    A digit (or an integer) is nonzero if it does not equal zero.      "
},
{
  "id": "defn_sum_product",
  "level": "2",
  "url": "sec_listing.html#defn_sum_product",
  "type": "Definition",
  "number": "1.1.8",
  "title": "Sum, difference, and product.",
  "body": " Sum, difference, and product       The sum (or total ) of two integers and is . For example, the sum of 2 and 3 is 5 and the sum of 3 and is .    In any sum, terms are the integers that are added. For example, in the sum , the terms are 3 and .    The negative of the integer is the integer . Note that could be positive, negative, or 0. For example, the negative of 5 is , the negative of is , and the negative of 0 is 0.    The difference of the integers and , in that order, is the integer . Note that if we subtract in the opposite order, we get the negative. For example, and . That is, and are negatives of each other.    The product of the integers and is , which is normally written as . For example, the product of 2 and 3 is 6 and the product of 5 and is . Multiplication is shorthand for addition, so officially     In any product, the factors are the integers being multiplied. For example, in the product , the factors are 5 and .      "
},
{
  "id": "exam_two_digit_sets",
  "level": "2",
  "url": "sec_listing.html#exam_two_digit_sets",
  "type": "Example",
  "number": "1.1.9",
  "title": "2-digit sets.",
  "body": " 2-digit sets       List all sets of two distinct nonzero digits where the sum of the digits is 14.  Since and , two such sets are and . Notice that , but the digits that are added are not distinct. There are no other sets because the largest digit is 9, and so the smallest digit we might use is . The final list is and .      List all sets of two distinct digits where the product of the digits is 12.  Start with the smallest digit 1. We know , but 12 is not a digit. The next digit is 2 and . Thus, one set is . Next, we have the digit 3 and . Thus, another set is . The final list is , .        "
},
{
  "id": "act_digit_sum",
  "level": "2",
  "url": "sec_listing.html#act_digit_sum",
  "type": "Activity",
  "number": "1.1.B",
  "title": "Digit sums.",
  "body": " Digit sums  Be sure to write sets in set notation using curly brackets.   List all sets of two distinct nonzero digits where the sum of the digits is seven.    List all sets of three distinct nonzero digits where the sum of the digits is nine.    List all sets of four distinct nonzero digits where the sum of the digits is 21.    How might you organize your lists to avoid accidentally listing the same set twice, to make it easy to compare answers with a classmate, and to determine if you included all the possibilities?     "
},
{
  "id": "exam_kakuro_12in4",
  "level": "2",
  "url": "sec_listing.html#exam_kakuro_12in4",
  "type": "Example",
  "number": "1.1.10",
  "title": "Using cases to list digit sums.",
  "body": " Using cases to list digit sums   Use cases based on the largest digit to list all sets of four distinct nonzero digits where the sum of the digits is 17.    We consider cases based on the largest digit in the set.  Case 1: The largest digit is 9. The other three distinct nonzero digits must be less than 9 and have a sum of , either or . The two sets in this case are and .  Case 2: The largest digit is 8. The other three distinct nonzero digits must be less than 8 and have a sum of , either or . The two sets in this case are and .  Case 3: The largest digit is 7. The other three distinct nonzero digits must be less than 7 and have a sum of , either or . The two sets in this case are and .  Case 4: The largest digit is 6. The other three distinct nonzero digits must be less than 6 have a sum of which must be . The only set in this case is .  Note that the largest digit cannot be 5 because we cannot find three distinct nonzero digits that are less than 5 and add to . The largest sum of three distinct nonzero less than 5 is .  We have found all seven sets of four distinct nonzero digits where the sum of the digits is 17. They are , , , , , , and .   "
},
{
  "id": "defn_characters_and_strings",
  "level": "2",
  "url": "sec_listing.html#defn_characters_and_strings",
  "type": "Definition",
  "number": "1.1.11",
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
  "number": "1.1.12",
  "title": "2-strings.",
  "body": " 2-strings   List all strings of length two where the first character is a , b , or c and the second character is 2 or 6 .   Construct your list by considering cases based on the first character.  Let's consider cases based on the first character.  Case 1: If the first character is a , then we have a2 or a6 .  Case 2: If the first character is b , then we have b2 and b6 .  Case 3: If the first character is c , then we have c2 and c6 .  The strings are a2 , a6 , b2 , b6 , c2 , c6 .   A possibility tree for 2-strings.          Construct your list by drawing a possibility tree.  In , we begin by drawing a starting point on the left. We draw three branches to nodes a , b , c which are the possibilities for the first character in the string.  If the first character is a , then the second character is either 2 or 6 , and so we draw two branches from a to a2 and from a to a6 . Similarly we draw branches from b to b2 , from b to b6 , from c to c2 , and from c to c6 . As before, the strings are: a2 , a6 , b2 , b6 , c2 , and c6 .  There is a shorthand way to draw the tree where we only list the new character in each spot instead as shown in . In this case, it takes a little less work to draw the tree but a little more work to write out the final list.   A possibility tree for 2-strings, shorthand version.            "
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
  "number": "1.1.C",
  "title": "Listing strings.",
  "body": " Listing strings      Use a possibility tree to list all strings of length two where each character is a , b , or c .    Let's change the rules. Use a possibility tree to list all strings of length three where each character is a , b , c if repetitions are not allowed, meaning that each letter is used exactly once.    Look back at the tree you drew in . How many strings of length are there where each character is a , b , or c ? Repetition is allowed. Conjecture without writing a list or drawing a tree.    Look back at the tree you drew in . How many strings of length ten are there where each character is a , b , c , , j and repetition is not allowed? Conjecture without writing a list or drawing a tree.     "
},
{
  "id": "exam_sq_dom5_tree",
  "level": "2",
  "url": "sec_listing.html#exam_sq_dom5_tree",
  "type": "Example",
  "number": "1.1.15",
  "title": "Tiling a <span class=\"process-math\">\\(1 \\times 5\\)<\/span> board with squares and dominoes.",
  "body": " Tiling a board with squares and dominoes   Draw the possibility tree to list the ways to tile a board using squares ( ) and dominoes ( ) as in .    The tree in shows all eight possibilities. Notice that we changed the root symbol to to avoid confusion with the square symbol ( ). Reading across the top row, for example, gives the all-square tiling and reading the next path from branch to leaf gives the tiling .   Tiling the board with squares and dominos.      As we build a tiling of length five, we have to be careful. If we have a tiling of length four, then the only option to finish the tiling is a square because a domino would make length six. For example, the branch that begins can only be followed by . Once we have a tiling of length five, the branch ends. For example, the branch ends after three tiles.   "
},
{
  "id": "defn_integer_algebra_order_operations",
  "level": "2",
  "url": "sec_listing.html#defn_integer_algebra_order_operations",
  "type": "Definition",
  "number": "1.1.17",
  "title": "Integer algebra and the order of operations.",
  "body": " Integer algebra and the order of operations       When several operations are involved in a single calculation, we need to know the order of operations (PEMDAS) , the priority ranking for arithmetic operations. The order is   First, calculate anything inside P arentheses.    Next, calculate E xponents , in order from left to right.    Then, M ultiply and D ivide , in order from left to right.    Last, A dd and S ubtract , in order from left to right.       The commutative properties of the integers tell us that . We often use the commutative property to rewrite sums or products in standard order. For example, products are usually written alphabetically ( is standard, not ) and in products numbers come before letters ( is standard, not ). In sums, numbers often come after letters ( is common, although is also acceptable).    The associative properties of the integers tells us that . We often use the associative property to write an expression such as without parentheses, since the location of parentheses would not change the sum.    We factor an integer by writing it as a product of two integers. For example, we can factor as which we could write as or . Although it is correct to factor as , if an activity or exercise asks you to factor, the answer should not use the factor . Notice that factor can be a noun, which means the quantity we are multiplying, or a verb, which means write as a product.    The distributive property of the integers tells us that . Reading this equation from left to right tells us how to expand (or distribute or multiply out ). For example, . Equations tell us that two things are equal, so we can equally well read this equation from right to left which tells us how to factor. For example, .      "
},
{
  "id": "exam_factors_terms",
  "level": "2",
  "url": "sec_listing.html#exam_factors_terms",
  "type": "Example",
  "number": "1.1.18",
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
  "number": "1.1.19",
  "title": "Combining like terms.",
  "body": " Combining like terms   Simplify the expression .    You have seen . You might have learned that this equation is analogous to saying that if I have 2 apples plus another 3 apples, then I have a total of 5 apples. In the same way, .  Alternatively, we can use the definition of the product. Since and , together we have   Yet another way of thinking about this simplification is to use the distributive property to factor   Each of these approaches is useful. So, even if you favor one approach, learn the other methods as well.   "
},
{
  "id": "act_integer_algebra",
  "level": "2",
  "url": "sec_listing.html#act_integer_algebra",
  "type": "Activity",
  "number": "1.1.D",
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
  "body": " Explore   Suppose we have squares, dominoes, and trominoes, as in .   Conjecture the number of ways to tile a board with squares, dominoes, and trominoes. Explain your reasoning and make sure you get the correct number when .    Conjecture the number of ways to tile a board with only squares and trominoes. Explain your reasoning and make sure you get the correct number when .      "
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
  "body": " Explore   This exercise is based on the Kakuro puzzle introduced in . We use the shorthand clue n-in-k to mean a set of digits 1-9 without repeats whose sum is . For example, 20-in-3 could be . We cannot use that because would repeat. In the actual puzzle, the digits would be filled in the cells in some order, such as 479 or 947.  A kakuro is a clue having only one possible set. For example, 17-in-2 is a kakuro because the only set is while 20-in-3 is not a kakuro because there were four possible sets. Kakuros are very helpful for solving Kakuro puzzles. We found kakuros of the form -in-2 and -in-3 in .   What is the only digit that the kakuros 3-in-2 and 4-in-2 have in common?    What is the only digit that the kakuros 15-in-5 and 29-in-4 have in common?    List all kakuros of the form -in-4.     List all kakuros of the form -in-8. Hint: what is ?      "
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
  "number": "1.2",
  "title": "Counting with Steps and Cases",
  "body": " Counting with Steps and Cases   Sometimes we want to count how many objects are in a list. We might want to know if there will be enough different ID numbers for students (past, present, and future) or if we need new area codes for telephone numbers (as happened when people first started using cellphones). In this section, we practice counting including two rules related to steps and cases. We also discuss factorial notation that arises frequently in counting.  Mathematicians who like to count things famously ask The Three Questions .   Is there (or does there exist ) an example of ?    If so, then is it unique , which means it is the only example of ?    If it exists but is not unique, then how many examples of are there?     The third question asks us to count , which means to determine how many examples of something there are.  Try your hand at counting.   Lunch  My favorite cafe offers three types of salad, five types of pizza, and four types of cookies for lunch.   How many lunch options are there if I decide to have a salad and a pizza? Hint: What would the possibility tree look like with salads ( s1 , s2 , s3 ) and pizzas ( p1 , p2 , p3 , p4 , p5 )?    How does your answer to relate to the number of salads and the number of pizzas?    How many lunch options are there if I choose a salad or pizza (but not both) instead? Hint: Consider cases.    How does your answer to relate to the number of salads and the number of pizzas?    How many lunch options are there if I order the special Pick Two which is either a salad and a pizza, a salad and a cookie, or a pizza and a cookie? Hint: Consider cases.        Counting with Steps and Cases  Be sure to try before continuing to read because we are about to discuss two strategies steps and cases, that help us find the solution.   Salad and pizza   As in , my favorite cafe offers three types of salad, five types of pizza, and four types of cookies for lunch. How many lunch options are there if I decide to have a salad and a pizza? This question was .    The possibility tree would have three branches from , one to each of s1 , s2 , and s3 . Then each of those nodes would have five branches, one to each of p1 , p2 , p3 , p4 , p5 . Our list would have each possible lunch option. s1 & p1 , s1 & p2 , s1 & p3 , s1 & p4 , s1 & p5 ,   s2 & p1 , s2 & p2 , s2 & p3 , s2 & p4 , s2 & p5 ,   s3 & p1 , s3 & p2 , s3 & p3 , s3 & p4 , s3 & p5 . Notice that we have three rows with five options in each row. The total number of lunch options is .  Formally, we can build each lunch option through a sequence of two steps. Step 1: choose a salad and then Step 2: choose a pizza. There are three ways to do Step 1 and then, no matter which salad we choose, there are five ways to do Step 2.    In general, when there are the same number of branches at each step, we can multiply to find the total number. We state this rule formally.   Steps multiply   If we can build each example through a sequence of steps and if there are ways to do the first step, and then for each way to do the first step there are ways to do the second step, and then for each way to do the first two steps there are ways to do the third step, and so on, then there are total ways to build an example.    Notice the phrase and then , which often indicates that steps are involved.  A special situation that is counted using steps is the number of permutations of the set .   Permutation of the set    For a positive integer , a permutation of the set  is a string of length using each of the digits 1 , 2 , , and n exactly once. For example, 2413 is a permutation of the set .    We consider the case where in our next example.   Permutations of the set   How many permutations of the set are there?    Imagine building each permutation by filling in four spaces:   Step 1: Fill in the first space. There are four ways to fill the first space because the first digit can be any of 1 , 2 , 3 , or 4 . (4 ways)  Step 2: Fill in the second space. There are only three ways to fill the second space, because the second digit cannot be the same as the first digit. For example, if we filled in the first space with a 2 as then the second space can only be 1 , 3 , or 4 . (3 ways)  Step 3: Fill in the third space. There are only two ways to fill in the third space because the third digit cannot be the same as the first or second digit. For example, if we filled in the first two spaces with 2 and then 4 as then the third space can only be 1 or 3 . (2 ways)  Step 4: Fill in the fourth space. There is no choice , which means that there is only one way to fill in the fourth space. It must be the last missing digit. For example, if we filled in the first three spaces with 2 , and then 4 , and then 1 as then the fourth space can only be 3 and so our final permutation would be . (1 way)  Since steps multiply , there are permutations of the set . You can check by drawing the possibility tree, as in  .    Products such as the answer to occur often enough that they have a name and notation. For example, our product is 4 factorial  .  We state the formal definition and discuss factorials in .  Let's continue our discussion of .   Salad or pizza   As in , my favorite cafe offers three types of salad, five types of pizza, and four types of cookies for lunch. How many lunch options are there if I decide to have a salad or a pizza (but not both)? This question was .    We could make a list by considering cases. On our list would be each of the three salads and each of the five pizzas: s1 , s2 , s3 , p1 , p2 , p3 , p4 , p5 , The total number of lunch options is .  Formally, we separate lunch options into two cases: in the first case, we choose a salad (in 3 ways) and in the second case, we choose a pizza (in 5 ways). Notice that we do Case 1 or Case 2, but not both.    In general, when there are separate cases, we can add to find the total number. We state this rule formally.   Cases add   If we can build each example by considering separate cases and if there are ways in the first case, ways in the second case, ways in the third case, and so on, then there are total ways to build an example.    Notice the word or which often indicates that cases are involved. When we refer to separate cases , we mean that each example is covered by exactly one case.  An application of cases is to count the opposite.   Counting 0-99   How many integers from 0 to 99 include the digit 5?    We can list the integers that include the digit 5. They are:   A direct count gives 19 such integers. This strategy would not generalize well if we wanted 0 to 999 instead.  Alternatively, we can use cases to count the opposite. Each integer from 0 to 99 can be written as 2-digit numbers. For example, write 05 instead of 5. We know that there are 100 integers from 0 to 99. We can list the integers from 0 to 99 that do not include the digit 5 in steps.  Step 1: Choose the first (non-5) digit from (9 ways)  Step 2: Choose the second (non-5) digit from (9 ways)  Since steps multiply , there are integers from 0 to 99 that do not include the digit 5.  Since cases add, the number of integers from 0 to 99 that include the digit 5 plus the number of integers from 0 to 99 that do not include the digit 5 must equal the total number of integers from 0 to 99. That is, if is the number of integers from 0 to 99 that include the digit 5, then or, equivalently .    We summarize the strategy from in a theorem.   Counting the opposite   If there are objects, of which objects have a given property, then there are objects that have the opposite property.    In more complicated examples, we can combine steps and cases.   Pick two lunch   As in , my favorite cafe offers three types of salad, five types of pizza, and four types of cookies for lunch. How many lunch options are there if I order the Pick Two special, which is either a salad and a pizza, a salad and a cookie, or a pizza and a cookie? This question was .    We consider cases.  Case 1: Order salad and pizza. As in , we can build each lunch option through a sequence of two steps. Step 1: choose the salad (3 ways) and then step 2: choose the pizza (5 ways). Since steps multiply , there are options listed in this case.  Case 2: Order salad and a cookie. We can build each lunch choice through a sequence of two steps. Step 1: choose the salad (3 ways) and then step 2: choose the cookie (4 ways). Since steps multiply, there are options listed in this case.  Case 3: Order pizza and a cookie. We can build each lunch choice through a sequence of two steps. Step 1: choose the pizza (5 ways) and then step 2: choose the cookie (4 ways). Since steps multiply, there are options listed in this case.  Since cases add , there are  Pick Two lunch options.    It would be reasonable to report the answer to , as . In fact, the unevaluated version can help us to see generalizations. For example, if there were salads, pizzas, and cookies, then the total number of Pick Two lunches would be   In some counting situations, we want an exact number as an answer. For example, we usually evaluate the answer if it is 20 or less. More often, it is acceptable not to evaluate the answer.   Not evaluating counts, version 1  Unless stated otherwise, when counting you may leave any answer greater than twenty in a format that could easily be evaluated on a calculator. In particular, your answer may involve addition, subtraction, multiplication, division, and parentheses.   Now it is your turn to practice counting using steps and uses.   Passwords  In this problem, a password is a string of eight characters. Imagine building each password by filling in the eight spaces:  Eight spaces to fill when building a password.      Use steps and\/or cases to count how many different passwords are possible in each situation. Follow to determine whether you should simplify your answer.   All characters are digits ( 0 - 9 ). Hint: Step 1: fill in the first space, Step 2: fill in the second space, , Step 8: fill in the eighth space.    The first three characters must be letters ( a - z , A - Z ) and the rest of the characters are digits or, vice versa The phrase vice versa means in reverse. , the first three characters are digits and the rest of the characters are letters. Hint: Consider two cases.    The characters are lowercase letters ( a - z ), but no letters may be repeated.    The characters are uppercase letters, and exactly one of the characters must be the letter X . Hint: Step 1: select which space is X , Step 2: fill in the first open space with an uppercase letter other than X , Step 3: fill in the next open space with an uppercase letter other than X , etc.         In each of the examples so far in this section, we have been able to count using steps, cases, or a combination of steps and cases. Some situations do not fit these rules. For example, to use steps , there must be the same number of options at each step. That means that in the possibility tree, there must be the same number of branches at any given level. Here is an example where steps do not work.   Steps do not work   Explain why we cannot use steps to count the number of tilings of the board using squares ( ) and dominoes ( ), as in .    In , we drew the possibility tree shown in .  If we think of building the tiling in steps, the first step is to choose the first tile, which can be a square or a domino. In the tree, we see two branches from the root.  The second step is to choose the second tile, which can also be a square or a domino. In the tree, we see two branches from the original square or domino. So far, so good.  But in the third step, when we choose the third tile, the situation changes. In most cases, the third tile can be a square or domino, but if we started with two dominoes , then the next tile must be a square because the total length is five (and three dominoes would have length six). In the tree, we see only one branch following the option .  In the fourth step, when we choose the fourth tile, the situation becomes even more complicated. In some cases, we still have the option of a square or a domino, which corresponds to two branches of the tree. In other cases, we only have the option of a square, which corresponds to one branch in the tree. In some cases, we are done, so there are no options, which corresponds to zero branches in the tree.  To use the steps rule , we would need each step to have a constant number of branches. Since the third step could have one or two branches and the fourth (and fifth) steps could have zero, one, or two branches, we cannot use the steps rule.    Similarly, to use cases , the cases must be separate. Here is an example where cases do not work.   Cases do not work   Explain why we cannot use cases to count the number of tilings of the board using squares and dominoes that begin or end with a square.    Let's see what happens if we try to count using cases. Even though we do not normally make a list when counting, it will be illustrative here to make a list in each case.  Case 1: The tiling begins with a square. The remainder of the tiling can be any square and domino tiling of a board: , , or . Therefore, we have three strings in this case:   Case 2: The tiling ends with a square. Now, the beginning of the tiling can be any square and domino tiling of a board: , , or . Therefore, we also have three strings in this case:   Notice that the tilings and appear on both lists, so there are only four distinct tilings: . The answer is 4, but if we had added the numbers from our cases, we would have , which is not correct.    There is a workaround when we have cases that are not separate. See for an example. For now, try to keep your cases separate.   Counting incorrectly  Consider all strings of length four that use only the characters X , f , and 2 and include at least one X . When explaining why the given count does not work, your reasons might be that we missed counting some of the options, that we counted some options that we should not have counted, or that we counted some (or all) options more than once.   Explain why the following count does not work. Step 1: Fill in the first space. (3 ways). Step 2: Fill in the second space. (3 ways). Step 3: Fill in the third space. (3 ways). Step 4: Fill in the fourth space. (3 ways). Since steps multiply , there are such strings. Is the correct answer larger or smaller than 81?    Explain why the following count does not work. Step 1: Choose where an goes. (4 ways) Step 2: Fill in the first blank space with or . (2 ways) Step 3: Fill in the second blank space with or . (2 ways) Step 4: Fill in the third blank space with or . (2 ways). Since steps multiply , there are ways. Is the correct answer larger or smaller than 32?    Explain why the following count does not work. Step 1: Choose where an goes. (4 ways) Step 2: Fill in the first blank space. (3 ways) Step 3: Fill in the second blank space. (3 ways) Step 4: Fill in the third blank space. (3 ways). Since steps multiply , there are ways.     Find a way to count to get the answer of . Hint: Count the strings that do not use the character X .         In , we saw that the number of permutations of the set was is where . This product of consecutive integers denoted 4! is pronounced 4 factorial .  Before formally defining factorials, it is convenient to define consecutive integers.   Consecutive integers       A pair of integers is consecutive if . For example, 5 and 6 are consecutive integers because .    In general, a list of integers is consecutive if we get from each integer to the next by adding one. For example, are consecutive integers. We often refer to consecutive integers as appearing in a row on the list of integers in .       Let's practice writing consecutive integers.   Consecutive integers       List the three integers immediately after the integer .  Notice that and . The next three integers after the integer are: , , and .      List the three integers immediately before the integer .  Since we add one to get from an integer to the next consecutive integer, we must subtract one to get from an integer to the previous consecutive integer. That is, the integer before must be . Similarly, the integer before must be and the integer before that is . The three integers immediately before the integer are , , and          It can be helpful to think of the sequence around an integer as   Now we are ready to give a formal definition of a factorial.   Factorial       When is a positive integer, the factorial  is the product of the consecutive integers , usually written in reverse order. For example, .    We often write which can be misleading for small powers of . For example, by definition, . Neither of these factorials includes the integer 3 as a factor, even though the notation shows a factor of (3).    It is convenient to define .    Factorials are at the same priority in the order of operations as exponents in . For example, , while , definitely a different value.       Let's practice applying this definition.   Factorials   On this problem, we only use technology to check our answers.   Evaluate 6!.  By definition and using that from , we get       Evaluate when .  Since factorials come before products in the order of operations , we have .      Evaluate when .  Since parentheses come first in the order of operations, we calculate the product first to get , as in .         Now it is your turn to work with factorials.   Factorials  On this problem, you may only use technology to verify your answers. All letters represent positive integers.   Evaluate     Evaluate when .    Write as a single factorial:     Make a conjecture about how to simplify .    Make a conjecture about how to simplify .      Be sure to complete because we are about to reveal some of the answers.   Simplifying       Write as a single factorial:   We have       Write as a single factorial   Similarly, we have       Write as a single factorial   Similarly, we have          You may also leave factorials in your answers.   Not evaluating counts, version 2  Unless stated otherwise, when counting, you may leave any answer greater than twenty in a format that could easily be evaluated on a calculator. In particular, your answer may involve addition, subtraction, multiplication, division, factorials, and parentheses.     Exercises   Exercises for   When counting, follow . In particular, if the answer is greater than 20, leave it in a format that could be easily evaluated on a calculator.     As in , a password is a string of eight characters. Use steps to count how many different passwords are possible in each situation.   All of the characters are lower-case letters ( a - z ).    The characters must be alpha-numeric ( 0 - 9 , a - z , A - Z ).    The first character must be an uppercase letter ( A - Z ), and the rest of the characters are digits (0-9).          . See for additional explanation of exponential notation.    Hint: possible characters in each of the eight spaces.    Hint: The answer is of the form .         In this problem, a Personal Identification Number (PIN) is a string of digits. Use steps to count how many different PINs are possible in each situation.   Each PIN has length four.    Each PIN has length eight.    Each PIN has length four, but the digits cannot be repeated.    Each PIN has length eight, but digits may not be repeated.              Hint: Now the length is eight.         Hint: Continue as in the previous part.             How many permutations are there of the set ? List them using a possibility tree.    Show how to use steps to count the number of permutations of . Hint: Look at .         Six    Hint: You should get .         A small technology firm has six designers, ten engineers, 20 analysts, and five business people.   If a tech team has one designer, one engineer, one analyst, and one business person, how many different tech teams are possible?    The CEO proposes that the firm pay up to $30 for a designer and analyst or for an engineer and business person to go to lunch in order to help build community. If every possible pair takes the offer, what will the total cost be to the firm?              Hint: There are designer-analyst pairs. Now count how many engineer-business pairs there are. Do not forget to multiply by $30.         As in , a password is a string of length eight. Use steps to count how many different passwords are possible in each situation.   The first character must be a special character (one of: % , & , $ , # , or ? ), and the rest of the characters are alpha-numeric.    One of the characters must be a special character (one of: % , & , $ , # , or ? ) and the rest are alpha-numeric. Hint: Step 1: select which space is the special character, Step 2: fill in the special character, Step 3: fill in the first open space, Step 4: fill in the next open space, etc.         Hints: There are five choices for the special character and then 62 choices for each of the remaining seven spaces. Your answer should look like .    Hint: Follow the hint. There are eight spaces, so there are eight ways to complete Step 1. There are five ways to complete Step 2. For each of the next steps, there are 62 ways to pick the alpha-numeric character.         Each state of the United States decides on its own format for license plates. All states use only upper case letters (A-Z) and digits and allow repeated characters, such as MOM445 . Use steps to count how many license plates are possible in each format.   Minnesota standard license plates are in the format ABC123 consisting of three uppercase letters followed by three digits.    California standard license plates are in the format 1ABC234 consisting of one digit, then three uppercase letters, and then three digits.    Arizona standard license plates are in an unusual format consisting of strings of six characters, either uppercase letters or digits, with the restriction that the fourth character is always a digit. Some examples are ABC1DE , 0001AB , and 123456 .              Hint: This part is similar to the previous part.    Hint: The first character can be any of characters. The other characters also have 36 choices, except the fourth character only has ten choices.         Telephone numbers in the United States have the format 201-345-6789 . The first three digits ( 201 ) are the area code , the next three digits ( 345 ) are the exchange , and the last four digits ( 6789 ) are the extension .   Historically, area codes were strings of length three in the format ABC where each character was a digit but the first digit A could not be 0 or 1 , the second digit B had to be 0 or 1 , and the third digit C could be any digit. There were a few more restrictions that we ignore here. How many different area codes were there?    I grew up in New Jersey. When I was a child, the entire state of New Jersey shared one area code: 201 , the smallest possible area code. How many 201 telephone numbers were there if neither the first nor the second digit of the exchange was 0 or 1 ? That is, each telephone number is of the form 201-ABC-DEFG where A and B can be any digit other than 0 or 1 and C , D , E , F , and G can be any digit.    My neighborhood in Saint Paul, Minnesota, has historically had telephone numbers in the format 651-698-DEFG or 651-699-DEFG where D , E , F , and G can be any digit. How many of those telephone numbers are there? Hint: Consider two cases.         Hint: There are eight choices for A , two choices for B , and ten choices for C .    Hint: Now there are eight choices for A and B and ten choices for the rest of the characters.    Hint: There are in each case.         Do you know    What a question beginning how many asks for?    When to add and when to multiply when counting?    How to think of a counting problem as a sequence of steps?    How to think of a counting problem as a set of separate cases?    How to combine steps and cases?          How many permutations of satisfy each restriction?   Start with an even number ( 2 , 4 , or 6 )?    Start with the three even numbers followed by the three odd numbers ( 1 , 3 , and 5 )?    Alternate between even and odd numbers. Hint: Consider cases based on whether the first number is even or odd.    Have 3 always followed by 6 ? Hint: Think of five blanks to fill in with the five objects: 1 , 2 , 36 , 4 , and 5 .       Note: You should leave your answers unsimplified as part of showing your work.   Hint: The answer is equal to 360.    Hint: The answer is equal to 36.    Hint: The answer is not equal to 36 because there are two cases.    Hint: Follow the hint to get an answer equal to 120.         Exercises for      In this problem, a Personal Identification Number (PIN) is a string of three characters  0 , 1 , 2 , or 3 , where the digits appear in nondecreasing order. For example, 023 and 112 are possible PINs but the string 203 is not allowed because . Hint: You can think of the digits of a PIN as being arranged from the smallest to the largest.   Draw a possibility tree showing all possible PINs.    How many different PINs are there?    Explain why we cannot use steps to count.          In , we counted 19 integers from 0 to 99 that include the digit 5.   What (incorrect) answer would we get from the following cases: Case 1: The integer starts with the digit 5. Case 2: The integer ends with the digit 5.    Why do we get the incorrect answer? Did we forget to count some of the integers, count some integers that we should not have counted, or count some (or all) of the integers more than once?         20    We double counted the integer 55.         In the Handshakes puzzle , we counted the number of handshakes between a group of students. Suppose that there are six students.   Explain why the following count does not work. Reasons might be that we missed counting some of the options, that we counted some options that we shouldn't have, or that we counted some (or all) options more than once. Step 1: pick the first student (6 ways). Step 2: pick the second student (5 ways). Since steps multiply , there are handshakes.     Explain how to find the correct answer using 30 as a starting point.         We double count each pair of students.    Hint: We got twice the correct answer.         Do you know    When steps do not work and what we might do instead?    When cases do not work, and what we might do instead?    What are three reasons we might get the incorrect answer when counting?              There are 28 students in the discrete class, 32 students in the programming class, and 15 students in both classes. In a list of students who are in at least one of the classes, how many students are on that list? Use cases to count. Hint: Be careful! Once the discrete students are listed, only add programming students who are not already on the list.    Let's generalize. If there are students in the Discrete class, students in the Programming class, and students in both classes, how many students are in at least one of the classes? State your answer as a conjecture involving , , and . This conjecture is known as the Inclusion-Exclusion Principle .         45    Hint: There are students who are in the Programming class only.        Exercises for      Show how to calculate each quantity without using technology.   Evaluate , , and .    Evaluate when .         Note: by definition. Then and .    Hint: Evaluate .             How many integers are in the set ?    How many integers are in the set ? Your answer should depend on .              You are taking a picture of four friends. How many ways can they line up for the photo? Write your answer as a factorial.    A standard deck of playing cards as shown in (in ) has 52 distinct cards. In how many ways can a deck be ordered? Write your answer as a factorial and then use technology to calculate how large that is.              Hint: Explain why the answer has about 68 digits.             It turns out that 362,880. Use that information to evaluate .    Write as a single factorial: .         Hint: When multiplying by ten, you get another zero at the end.              Factor and simplify . Hint: See .    Hint: first factor out the . Then use the hint to further simplify your answer.       Do you know    What consecutive means?    What stands for and how to pronounce it?    How to evaluate ?    How is defined?    Where factorials rank in the order of operations?         "
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
  "number": "1.2.A",
  "title": "Lunch.",
  "body": " Lunch  My favorite cafe offers three types of salad, five types of pizza, and four types of cookies for lunch.   How many lunch options are there if I decide to have a salad and a pizza? Hint: What would the possibility tree look like with salads ( s1 , s2 , s3 ) and pizzas ( p1 , p2 , p3 , p4 , p5 )?    How does your answer to relate to the number of salads and the number of pizzas?    How many lunch options are there if I choose a salad or pizza (but not both) instead? Hint: Consider cases.    How does your answer to relate to the number of salads and the number of pizzas?    How many lunch options are there if I order the special Pick Two which is either a salad and a pizza, a salad and a cookie, or a pizza and a cookie? Hint: Consider cases.     "
},
{
  "id": "exam_salad_and_pizza",
  "level": "2",
  "url": "sec_counting_steps_cases.html#exam_salad_and_pizza",
  "type": "Example",
  "number": "1.2.1",
  "title": "Salad and pizza.",
  "body": " Salad and pizza   As in , my favorite cafe offers three types of salad, five types of pizza, and four types of cookies for lunch. How many lunch options are there if I decide to have a salad and a pizza? This question was .    The possibility tree would have three branches from , one to each of s1 , s2 , and s3 . Then each of those nodes would have five branches, one to each of p1 , p2 , p3 , p4 , p5 . Our list would have each possible lunch option. s1 & p1 , s1 & p2 , s1 & p3 , s1 & p4 , s1 & p5 ,   s2 & p1 , s2 & p2 , s2 & p3 , s2 & p4 , s2 & p5 ,   s3 & p1 , s3 & p2 , s3 & p3 , s3 & p4 , s3 & p5 . Notice that we have three rows with five options in each row. The total number of lunch options is .  Formally, we can build each lunch option through a sequence of two steps. Step 1: choose a salad and then Step 2: choose a pizza. There are three ways to do Step 1 and then, no matter which salad we choose, there are five ways to do Step 2.   "
},
{
  "id": "thm_steps_multiply",
  "level": "2",
  "url": "sec_counting_steps_cases.html#thm_steps_multiply",
  "type": "Theorem",
  "number": "1.2.2",
  "title": "Steps multiply.",
  "body": " Steps multiply   If we can build each example through a sequence of steps and if there are ways to do the first step, and then for each way to do the first step there are ways to do the second step, and then for each way to do the first two steps there are ways to do the third step, and so on, then there are total ways to build an example.   "
},
{
  "id": "defn_permutation_of_set",
  "level": "2",
  "url": "sec_counting_steps_cases.html#defn_permutation_of_set",
  "type": "Definition",
  "number": "1.2.3",
  "title": "Permutation of the set <span class=\"process-math\">\\(\\{\\str{1},\\str{2},\\ldots,\\str{n}\\}\\)<\/span>.",
  "body": " Permutation of the set    For a positive integer , a permutation of the set  is a string of length using each of the digits 1 , 2 , , and n exactly once. For example, 2413 is a permutation of the set .   "
},
{
  "id": "exam_perms_1to4",
  "level": "2",
  "url": "sec_counting_steps_cases.html#exam_perms_1to4",
  "type": "Example",
  "number": "1.2.4",
  "title": "Permutations of the set <span class=\"process-math\">\\(\\{\\str{1},\\str{2},\\str{3},\\str{4}\\}\\)<\/span>.",
  "body": " Permutations of the set   How many permutations of the set are there?    Imagine building each permutation by filling in four spaces:   Step 1: Fill in the first space. There are four ways to fill the first space because the first digit can be any of 1 , 2 , 3 , or 4 . (4 ways)  Step 2: Fill in the second space. There are only three ways to fill the second space, because the second digit cannot be the same as the first digit. For example, if we filled in the first space with a 2 as then the second space can only be 1 , 3 , or 4 . (3 ways)  Step 3: Fill in the third space. There are only two ways to fill in the third space because the third digit cannot be the same as the first or second digit. For example, if we filled in the first two spaces with 2 and then 4 as then the third space can only be 1 or 3 . (2 ways)  Step 4: Fill in the fourth space. There is no choice , which means that there is only one way to fill in the fourth space. It must be the last missing digit. For example, if we filled in the first three spaces with 2 , and then 4 , and then 1 as then the fourth space can only be 3 and so our final permutation would be . (1 way)  Since steps multiply , there are permutations of the set . You can check by drawing the possibility tree, as in  .   "
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
  "number": "1.2.5",
  "title": "Salad or pizza.",
  "body": " Salad or pizza   As in , my favorite cafe offers three types of salad, five types of pizza, and four types of cookies for lunch. How many lunch options are there if I decide to have a salad or a pizza (but not both)? This question was .    We could make a list by considering cases. On our list would be each of the three salads and each of the five pizzas: s1 , s2 , s3 , p1 , p2 , p3 , p4 , p5 , The total number of lunch options is .  Formally, we separate lunch options into two cases: in the first case, we choose a salad (in 3 ways) and in the second case, we choose a pizza (in 5 ways). Notice that we do Case 1 or Case 2, but not both.   "
},
{
  "id": "thm_cases_add",
  "level": "2",
  "url": "sec_counting_steps_cases.html#thm_cases_add",
  "type": "Theorem",
  "number": "1.2.6",
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
  "number": "1.2.7",
  "title": "Counting 0-99.",
  "body": " Counting 0-99   How many integers from 0 to 99 include the digit 5?    We can list the integers that include the digit 5. They are:   A direct count gives 19 such integers. This strategy would not generalize well if we wanted 0 to 999 instead.  Alternatively, we can use cases to count the opposite. Each integer from 0 to 99 can be written as 2-digit numbers. For example, write 05 instead of 5. We know that there are 100 integers from 0 to 99. We can list the integers from 0 to 99 that do not include the digit 5 in steps.  Step 1: Choose the first (non-5) digit from (9 ways)  Step 2: Choose the second (non-5) digit from (9 ways)  Since steps multiply , there are integers from 0 to 99 that do not include the digit 5.  Since cases add, the number of integers from 0 to 99 that include the digit 5 plus the number of integers from 0 to 99 that do not include the digit 5 must equal the total number of integers from 0 to 99. That is, if is the number of integers from 0 to 99 that include the digit 5, then or, equivalently .   "
},
{
  "id": "thm_count_complement",
  "level": "2",
  "url": "sec_counting_steps_cases.html#thm_count_complement",
  "type": "Theorem",
  "number": "1.2.8",
  "title": "Counting the opposite.",
  "body": " Counting the opposite   If there are objects, of which objects have a given property, then there are objects that have the opposite property.   "
},
{
  "id": "exam_pick_two_lunch",
  "level": "2",
  "url": "sec_counting_steps_cases.html#exam_pick_two_lunch",
  "type": "Example",
  "number": "1.2.9",
  "title": "Pick two lunch.",
  "body": " Pick two lunch   As in , my favorite cafe offers three types of salad, five types of pizza, and four types of cookies for lunch. How many lunch options are there if I order the Pick Two special, which is either a salad and a pizza, a salad and a cookie, or a pizza and a cookie? This question was .    We consider cases.  Case 1: Order salad and pizza. As in , we can build each lunch option through a sequence of two steps. Step 1: choose the salad (3 ways) and then step 2: choose the pizza (5 ways). Since steps multiply , there are options listed in this case.  Case 2: Order salad and a cookie. We can build each lunch choice through a sequence of two steps. Step 1: choose the salad (3 ways) and then step 2: choose the cookie (4 ways). Since steps multiply, there are options listed in this case.  Case 3: Order pizza and a cookie. We can build each lunch choice through a sequence of two steps. Step 1: choose the pizza (5 ways) and then step 2: choose the cookie (4 ways). Since steps multiply, there are options listed in this case.  Since cases add , there are  Pick Two lunch options.   "
},
{
  "id": "rem_not_eval_counts_1",
  "level": "2",
  "url": "sec_counting_steps_cases.html#rem_not_eval_counts_1",
  "type": "Remark",
  "number": "1.2.10",
  "title": "Not evaluating counts, version 1.",
  "body": " Not evaluating counts, version 1  Unless stated otherwise, when counting you may leave any answer greater than twenty in a format that could easily be evaluated on a calculator. In particular, your answer may involve addition, subtraction, multiplication, division, and parentheses.  "
},
{
  "id": "act_passwords",
  "level": "2",
  "url": "sec_counting_steps_cases.html#act_passwords",
  "type": "Activity",
  "number": "1.2.B",
  "title": "Passwords.",
  "body": " Passwords  In this problem, a password is a string of eight characters. Imagine building each password by filling in the eight spaces:  Eight spaces to fill when building a password.      Use steps and\/or cases to count how many different passwords are possible in each situation. Follow to determine whether you should simplify your answer.   All characters are digits ( 0 - 9 ). Hint: Step 1: fill in the first space, Step 2: fill in the second space, , Step 8: fill in the eighth space.    The first three characters must be letters ( a - z , A - Z ) and the rest of the characters are digits or, vice versa The phrase vice versa means in reverse. , the first three characters are digits and the rest of the characters are letters. Hint: Consider two cases.    The characters are lowercase letters ( a - z ), but no letters may be repeated.    The characters are uppercase letters, and exactly one of the characters must be the letter X . Hint: Step 1: select which space is X , Step 2: fill in the first open space with an uppercase letter other than X , Step 3: fill in the next open space with an uppercase letter other than X , etc.     "
},
{
  "id": "exam_not_steps",
  "level": "2",
  "url": "sec_counting_steps_cases.html#exam_not_steps",
  "type": "Example",
  "number": "1.2.12",
  "title": "Steps do not work.",
  "body": " Steps do not work   Explain why we cannot use steps to count the number of tilings of the board using squares ( ) and dominoes ( ), as in .    In , we drew the possibility tree shown in .  If we think of building the tiling in steps, the first step is to choose the first tile, which can be a square or a domino. In the tree, we see two branches from the root.  The second step is to choose the second tile, which can also be a square or a domino. In the tree, we see two branches from the original square or domino. So far, so good.  But in the third step, when we choose the third tile, the situation changes. In most cases, the third tile can be a square or domino, but if we started with two dominoes , then the next tile must be a square because the total length is five (and three dominoes would have length six). In the tree, we see only one branch following the option .  In the fourth step, when we choose the fourth tile, the situation becomes even more complicated. In some cases, we still have the option of a square or a domino, which corresponds to two branches of the tree. In other cases, we only have the option of a square, which corresponds to one branch in the tree. In some cases, we are done, so there are no options, which corresponds to zero branches in the tree.  To use the steps rule , we would need each step to have a constant number of branches. Since the third step could have one or two branches and the fourth (and fifth) steps could have zero, one, or two branches, we cannot use the steps rule.   "
},
{
  "id": "exam_not_cases",
  "level": "2",
  "url": "sec_counting_steps_cases.html#exam_not_cases",
  "type": "Example",
  "number": "1.2.13",
  "title": "Cases do not work.",
  "body": " Cases do not work   Explain why we cannot use cases to count the number of tilings of the board using squares and dominoes that begin or end with a square.    Let's see what happens if we try to count using cases. Even though we do not normally make a list when counting, it will be illustrative here to make a list in each case.  Case 1: The tiling begins with a square. The remainder of the tiling can be any square and domino tiling of a board: , , or . Therefore, we have three strings in this case:   Case 2: The tiling ends with a square. Now, the beginning of the tiling can be any square and domino tiling of a board: , , or . Therefore, we also have three strings in this case:   Notice that the tilings and appear on both lists, so there are only four distinct tilings: . The answer is 4, but if we had added the numbers from our cases, we would have , which is not correct.   "
},
{
  "id": "act_counting_incorrectly",
  "level": "2",
  "url": "sec_counting_steps_cases.html#act_counting_incorrectly",
  "type": "Activity",
  "number": "1.2.C",
  "title": "Counting incorrectly.",
  "body": " Counting incorrectly  Consider all strings of length four that use only the characters X , f , and 2 and include at least one X . When explaining why the given count does not work, your reasons might be that we missed counting some of the options, that we counted some options that we should not have counted, or that we counted some (or all) options more than once.   Explain why the following count does not work. Step 1: Fill in the first space. (3 ways). Step 2: Fill in the second space. (3 ways). Step 3: Fill in the third space. (3 ways). Step 4: Fill in the fourth space. (3 ways). Since steps multiply , there are such strings. Is the correct answer larger or smaller than 81?    Explain why the following count does not work. Step 1: Choose where an goes. (4 ways) Step 2: Fill in the first blank space with or . (2 ways) Step 3: Fill in the second blank space with or . (2 ways) Step 4: Fill in the third blank space with or . (2 ways). Since steps multiply , there are ways. Is the correct answer larger or smaller than 32?    Explain why the following count does not work. Step 1: Choose where an goes. (4 ways) Step 2: Fill in the first blank space. (3 ways) Step 3: Fill in the second blank space. (3 ways) Step 4: Fill in the third blank space. (3 ways). Since steps multiply , there are ways.     Find a way to count to get the answer of . Hint: Count the strings that do not use the character X .     "
},
{
  "id": "defn_consecutive_integers",
  "level": "2",
  "url": "sec_counting_steps_cases.html#defn_consecutive_integers",
  "type": "Definition",
  "number": "1.2.14",
  "title": "Consecutive integers.",
  "body": " Consecutive integers       A pair of integers is consecutive if . For example, 5 and 6 are consecutive integers because .    In general, a list of integers is consecutive if we get from each integer to the next by adding one. For example, are consecutive integers. We often refer to consecutive integers as appearing in a row on the list of integers in .      "
},
{
  "id": "exam_consecutive_integers",
  "level": "2",
  "url": "sec_counting_steps_cases.html#exam_consecutive_integers",
  "type": "Example",
  "number": "1.2.15",
  "title": "Consecutive integers.",
  "body": " Consecutive integers       List the three integers immediately after the integer .  Notice that and . The next three integers after the integer are: , , and .      List the three integers immediately before the integer .  Since we add one to get from an integer to the next consecutive integer, we must subtract one to get from an integer to the previous consecutive integer. That is, the integer before must be . Similarly, the integer before must be and the integer before that is . The three integers immediately before the integer are , , and         "
},
{
  "id": "defn_factorial",
  "level": "2",
  "url": "sec_counting_steps_cases.html#defn_factorial",
  "type": "Definition",
  "number": "1.2.16",
  "title": "Factorial.",
  "body": " Factorial       When is a positive integer, the factorial  is the product of the consecutive integers , usually written in reverse order. For example, .    We often write which can be misleading for small powers of . For example, by definition, . Neither of these factorials includes the integer 3 as a factor, even though the notation shows a factor of (3).    It is convenient to define .    Factorials are at the same priority in the order of operations as exponents in . For example, , while , definitely a different value.      "
},
{
  "id": "exam_factorials",
  "level": "2",
  "url": "sec_counting_steps_cases.html#exam_factorials",
  "type": "Example",
  "number": "1.2.17",
  "title": "Factorials.",
  "body": " Factorials   On this problem, we only use technology to check our answers.   Evaluate 6!.  By definition and using that from , we get       Evaluate when .  Since factorials come before products in the order of operations , we have .      Evaluate when .  Since parentheses come first in the order of operations, we calculate the product first to get , as in .        "
},
{
  "id": "act_factorials",
  "level": "2",
  "url": "sec_counting_steps_cases.html#act_factorials",
  "type": "Activity",
  "number": "1.2.D",
  "title": "Factorials.",
  "body": " Factorials  On this problem, you may only use technology to verify your answers. All letters represent positive integers.   Evaluate     Evaluate when .    Write as a single factorial:     Make a conjecture about how to simplify .    Make a conjecture about how to simplify .     "
},
{
  "id": "exam_simplify_factorials",
  "level": "2",
  "url": "sec_counting_steps_cases.html#exam_simplify_factorials",
  "type": "Example",
  "number": "1.2.18",
  "title": "Simplifying <span class=\"process-math\">\\(n(n-1)!\\)<\/span>",
  "body": " Simplifying       Write as a single factorial:   We have       Write as a single factorial   Similarly, we have       Write as a single factorial   Similarly, we have         "
},
{
  "id": "rem_not_eval_counts_2",
  "level": "2",
  "url": "sec_counting_steps_cases.html#rem_not_eval_counts_2",
  "type": "Remark",
  "number": "1.2.19",
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
  "number": "1.3",
  "title": "Counting Subsets",
  "body": " Counting Subsets   In we counted strings and other ordered objects. How might we count the number of ways to choose some items from a set when we do not care about the order, like a group of students to work on a project? In this section, we discuss subsets and introduce the binomial coefficients that count subsets. We combine counting subsets with our other rules for counting: steps , cases , and counting the opposite . We also introduce our first proof format, which is for combinatorial proof.  Before we learn any new rules, try the following activity.   Adopting two cats      There are five cats ( c1 , c2 , c3 , c4 , c5 ) waiting to be adopted at the animal shelter. You want to adopt two of the cats. Make a list of possibilities. Notice that the order in which we choose the cats does not matter. For example, choosing c2 and c5 is the same as choosing c5 and c2 . For that reason, we use set notation to indicate a choice, such as .    In how many ways can you choose two cats to adopt?    Betelehem tried to answer without making a list. Here is her work.  We will count the possibilities using steps.  Step 1: Choose the first cat. (5 ways)  Step 2: Choose the second cat. Note that the second cat must be a different cat from the first cat. (4 ways)  Since steps multiply , there must be ways to adopt two cats.  Uh oh! The correct answer is ten, so Betelehem's answer is incorrect. (Hint: If you also had 20, you should go back and fix your work.) What went wrong? Explain. Hint: Betelehem's answer is exactly twice ( ) the correct answer, so she must have double counted (counted each pair twice).    If there were cats and you wanted to adopt two cats, how many possibilities are there? Hint: You can use Betelehem's approach as long as you remember that you will get twice the correct answer. Another hint: handshakes!        Subsets and the Binomial Coefficients  In many situations, we want to select some of the elements of a set. We can think of a set as corralling The word corral means to collect and contain. A common usage is in reference to fencing in animals such as horses or sheep. its elements inside a rope. For example, the set is drawn in . If we corral some, all, or none of the elements within , we get a subset of . For example, shows the subset shaded in gray.   The subset corrals some of the elements of the set .     We formally define a subset.   Subsets       A subset of the set is a set consisting of some of the elements of , where the word some is understood to be any number of elements from none to all. That is, the set is a subset of the set , denoted if every element of is also an element of . For example, and . Note that the set is a subset of itself. For example, .    The empty set  is the set with no elements. That is . Note that is a subset of any set. Imagine corralling no elements or drawing a shaded shape within that contains none of the elements of . For example, .        Notation for zero  Computer scientists often write the number zero with a slash to avoid confusion with the letter , so the zero symbol in computer science looks similar to the empty set symbol . In this textbook, we write for zero without a slash and save to mean the empty set.   In , we chose two cats from a set of five cats. It is useful to have a name for the number of ways to select exactly objects from a set of distinct objects.   Binomial coefficient   For non-negative integers and ,   The number of ways to select a subset of elements from a set of elements is the binomial coefficient  which is pronounced choose . For example, 5 choose 2 is because we saw in that there are 10 ways to select two cats from a set of five cats.    Note that if , then .       The simplest way to evaluate a binomial coefficient is to search for it on the Internet or ask a virtual assistant. For example, search for five choose two and you will get ten. You can also evaluate binomial coefficients using some calculators and spreadsheet programs. Therefore, it is perfectly acceptable to leave binomial coefficients in an answer to a counting problem.   Not evaluating counts, version 3  Unless stated otherwise, when counting you may leave any answer greater than twenty in a format that could easily be evaluated on a calculator. In particular, your answer may involve addition, subtraction, multiplication, division, factorials, binomial coefficients, and parentheses.   For small values, we can evaluate binomial coefficients by listing the possible subsets. As usual, working with small values can help us to understand the concept.   Four choose   Evaluate for each nonnegative integer by listing the -element subsets of .    When , the only 0-element subset is and so .  When , the 1-element subsets are and so .  When , the 2-element subsets are and so .  When , the 3-element subsets are and so .  When , the only 4-element subset is and so .  When we have .    It is your turn to use subsets to evaluate some small binomial coefficients.   Six choose      Evaluate , , and by listing subsets of .    Conjecture the values of , , and where is a positive integer.    Evaluate by listing subsets of . Hint: stay organized by considering which integer is not in the set.    Conjecture the value of where is a positive integer.        Combining Counting Techniques  Many counting problems require a combination of techniques we have learned, including cases, steps, opposites, and subsets.   Team and leader   There are 25 students in the coding club, ten of whom are first-year students. For the coding competition, we need a team of four students that includes exactly one first-year student. How many different teams are possible?    Since ten of the 25 students are first-year students, the other are not first-year students. To make a team of four with exactly one first-year student, we will also need three students who are not first-year.  Step 1: Choose the first-year student. We want one first-year student out of ten, so there are ways to do this step.  Step 2: Choose the other three students. We want three students who are not first year out of 15, so there are ways to do this step.  Since steps multiply , there are a total of ways to choose a team.    Try your hand at combining these techniques.   Adopting two animals  There are five cats and 12 dogs waiting to be adopted.   In how many ways can you choose two animals to adopt? Hint: How many animals are there?    In how many ways can you choose two animals to adopt if they are both cats? Write your answer as a binomial coefficient. (Yes, we made a list and counted this same number in ).    In how many ways can you choose two animals to adopt if they are both dogs?    In how many ways can you choose two animals to adopt if you choose one cat and one dog?    How are your answers to , , and related to your answer to ? Use technology to evaluate the binomial coefficients.    Why? Hint: Use cases.      Several exercises in this section refer to a 52-card deck of playing cards, shown in . The key facts to know are stated in the following definition.   52-card deck of playing cards       A hand is a set of cards, without regard to order. The name comes from the fact that in many card games you hold the cards in your hand. The number of cards in a hand varies depending on the game. Poker is a family of card games that often uses hands with five or seven cards, whereas Bridge is a card game that uses hands with thirteen cards.    Each card in the deck has one of thirteen denominations : Ace (A), 2, 3, 4, 5, 6, 7, 8, 9, 10, Jack (J), Queen (Q), or King (K).    Each card in the deck also has one of four suits clubs , diamonds , hearts , or spades . For example, a card might be the Jack of hearts, denoted J . Note that for each choice of denomination and suit, there is exactly one card with that denomination and suit. For example, there is exactly one card that is J .    The cards with clubs and spades are black cards . The cards with diamonds and hearts are red cards .        A 52-card deck of playing cards (source: Pixabay).      Here is an example of counting hands.   Three-of-a-kind   In a 52-card deck of playing cards, as shown in , how many 5-card hands have a three-of-a-kind , which is three cards of one denomination, a fourth card of a different denomination, and fifth card of another denomination. The fourth or fifth cards cannot be the same denomination as the three-of-a-kind because that is a four-of-a-kind . The fourth and fifth cards cannot be the same denomination as each other because that is a full house . How many different 5-card hands have a three-of-a-kind?    Let's build such a hand through a series of steps.  Step 1: Select the denomination of the three-of-a-kind. Since there are 13 denominations, there are ways to complete this step.  Step 2: Select the cards for the three-of-a-kind. There are four cards in the denomination we chose in Step 1 and we want three of them, so there are ways to complete this step.  Step 3: Select the denominations of the other two cards. Since there are remaining denominations and we want two of them, there are ways to complete this step.  Step 4: Select the cards in the other two denominations. Since there are four cards in each denomination chosen in Step 3, there are ways to choose each. Since there are two cards and steps multiply , there are ways to complete this step, which finishes building our hand.  Since steps multiply , there are ways. (Any of those formats of the answer is acceptable.)      Proof Format: Combinatorial Proof  Jarrett and Xueqing solve the same counting problem, but they use two different methods. They should still get the same answer, right? This observation can lead to a way to prove that two quantities are equal: Jarrett's answer = Xueqing's answer. This strategy might remind you of the saying six of one, half dozen of the other which sounds like two different quantities, but because a dozen is twelve, half a dozen is also six.  There are many different types of proof. A proof format is a structure or outline of a particular type of proof. Our first proof format is combinatorial proof , a proof that counts , in which we prove that two quantities are equal by counting the same situation using two different methods.   Prove: using a combinatorial proof.   We use a combinatorial proof. Consider the following situation .  How many ways are there to ?  First, (explain how to count using one method to get .)  On the other hand, (explain how to count using a different method to get .)  Since we counted the same quantity in two different ways, it follows that .    Whenever we introduce a new proof format, we present an example of such a proof and then ask you to write a very similar proof by copying the example proof mutatis mutandis (mm) , which means changing what needs to be changed.   Combinatorial proof choosing two animals      Copy the following example of a combinatorial proof. Yes, that means copy every word. Use a combinatorial proof to prove for any positive integers and that  Proof We use a combinatorial proof. Consider the following situation: there are cats and dogs and we want to adopt two animals. How many ways are there to choose the two animals? First, since there are a total of animals and we want to choose two of them, the answer is . On the other hand, we can consider three cases. Case 1: Choose two cats. In this case, we want two out of cats, and so there are ways to choose the two animals. Case 2: Choose two dogs. In this case, we want two out of dogs, and so there are ways to choose the two animals. Case 3: The only remaining case is that we choose one cat and one dog. In this case, we want one out of cats ( ways) and then one out of dogs ( ways). Since steps multiply (by ), there are ways to choose the two animals. Since cases add (by ), there is a total of ways to choose two animals. Since we counted the same quantity in two different ways, it follows that     Edit the proof you copied in , changing what needs to be changed to prove for any positive integer that .      Here is another example of a combinatorial proof.   Combinatorial proof team and leader   Use a combinatorial proof to prove that       Proof. We use a combinatorial proof. Consider the following situation: there is a group of ten employees. How many ways are there to choose seven employees to be on a project team where one member of the team is the project leader?  First, we can choose the seven-person project team from the group of ten employees. There are ways to do this step. Then we need to choose one of those seven people on the project team to be the project leader. There are seven ways to do this step. (You could think of it as ways, but and that is simpler.) Since steps multiply , the answer is .  On the other hand, we can make the choices in reverse order. We can start by choosing the project leader, one of the ten people. There are ten ways to do this step. Then we need to choose the rest of the project team. Since we already chose the project leader, we only need six more people out of the nine remaining people. There are ways to do this step. Since steps multiply , the answer is also .  Since we counted the same quantity in two different ways, it follows that .    In we calculated and . We conjectured that for any integer we have and . In the next proof, we use a combinatorial proof to show the symmetry of the binomial coefficients, in general.   Symmetry of the binomial coefficients   For any positive integers and we have     Let's look at a combinatorial proof of this theorem.   Combinatorial proof symmetry of the binomial coefficients   Give a combinatorial proof of .     Proof We use a combinatorial proof. Consider the following situation: there are people who auditioned for a play, and we want to choose people to be in the play. How many ways are there to do this?  First, since we want to choose out of people, there are ways to select who is in the play.  On the other hand, instead of deciding who will be in the play, we can choose which people will not be in the play. There are people who auditioned but will not be in the play, so there are ways to select who will be in the play in this way.  Since we counted the same quantity in two different ways, it follows that .      Exercises   Exercises for Subsets and the Binomial Coefficients   Practice       Evaluate for by listing the subsets of .    Evaluate for by listing the subsets of .    Evaluate for by listing the subsets of .    Evaluate for by listing the subsets of .         When , the only 0-element subset is , and so . When , the 1-element subsets are , , and , and so . When , the 2-element subsets are , , and , and so . When , the only 3-element subset is , and so .    Hint: You should get , , and .    Hint: The only subsets of are and .    Hint: The only subset of is .       Practice   There are five courses that I would like to take this semester: Architectural drawing (A), bioinformatics (B), computational theory (C), differential equations (D), and ecological models (E).   If I can take three of these courses, what are my options? List them.    If I can take four of these courses, what are my options? List them.    Based on your answers, evaluate and and check your answers using technology.        Practice   The library's new arrivals section offers 24 mystery novels, 50 young adult novels, 17 biographies, and 46 fantasy novels. In each part of this problem, your answer should be a binomial coefficient.   In how many ways can I choose two young adult novels for my niece?    In how many ways can I choose three mystery novels to take on vacation?    My brother likes to read biographies, but he also likes fantasy novels. In how many ways can I choose four books to bring him?                   Hint: choose four out of books.       Understand   Explain how to evaluate each quantity involving a positive integer by explicitly discussing the subsets of .                       Hint: The only 0-element subset is .    Hint: .    Hint: The only -element subset is .       Recap   Do you know    How to pronounce ?    What counts?    How to evaluate for small values of by listing subsets?         Exercises for Combining Counting Techniques   Practice   This problem refers to the 52-card deck of playing cards in .   How many different ways are there to deal a hand of five cards?    How many different hands have all five cards of the same suit? Hint: First choose one of the four suits and then choose the cards. There are 13 cards in each suit.         Hint: Choose five out of 52.            Practice   There are usually 16 players on a Division III volleyball team. Of those, six players are starters, which means that they are on the court when the game starts. This year, 21 students tried out for the volleyball team.   How many different ways are there to choose the players from the group that tried out?    Once we have chosen the team, how many ways are there to choose the starters?    In total, how many ways are there to choose the players and then the starters?    How many ways are there to choose the players, then the starters, and then one of the starters to be captain?              Hint: Choose six out of 16.    Hint: Step 1 choose the players as in (a) and then step 2 choose the starter as in (b). Recall that by , we multiply the answers of each step.    Hint: Now there is a third step.       Understand   As in , the library's new arrivals section offers 24 mystery novels, 50 young adult novels, 17 biographies, and 46 fantasy novels.   In how many ways can I choose three books to read if I want two mystery novels and one fantasy novel?    In how many ways can I choose four books for my son if he wants two young adult novels and two biographies?    My mother would like two mystery novels, two biographies, and two fantasy novels. In how many ways can I choose books for her?          , or just .    Hint: There are two steps.    Hint: There are three steps.       Understand   Our local pizza parlor has a long list of toppings you can add to your pizza: five meats, three cheeses, and 12 vegetables. How many different build your own pizzas can you make if you want   (Exactly) three toppings?    One meat, one cheese, and one vegetable?    Two meats, one cheese, and three vegetables?    (Exactly) three toppings, including at least one meat and at least one cheese? Hint: Consider cases based on the number of meats, cheeses, and vegetables. For example, one case has one meat, two cheeses, and no vegetables.         Hint: there are a total of toppings and we want to choose three.     Note: It would also be correct to have , but since , it is simpler to write the numbers.         Hint: There are three cases. Case 1 is one meat, two cheeses, and no vegetables. Case 2 is two meats, one cheese, and no vegetables. Case 3 is one meat, one cheese, and one vegetable as in (b). In each case, the steps multiply and then, by , add the answers from the three cases.       Understand   There are 27 students in our Math Club.   We need five students to run Pi Day activities. How many ways are there to pick five students?    A team for the Problem Contest consists of three or four students. In how many different ways could we select a Problem Contest team?    The club has four officers: President, Secretary, Treasurer, and Information Officer. In how many ways can we pick officers?    We need a group of three students to write the annual report. Usually one of the officers volunteers and then two students who are not officers help. In how many ways could we form the group to write the annual report?              Hint: The word or indicates cases. Find the answer in each case and then add them together.         Hint: Choose one officer and then choose two students who are not officers. Your answer should involve the number 23.       Recap   Do you know    When to use choose versus steps or cases?    How to combine counting subsets with steps and cases?        Explore   This problem refers to the 52-card deck of playing cards in .   A hand is aces-over-eights if it has three aces and two eights. How many different aces over eights are possible?    A full house is a hand of five cards with three cards of one denomination (a triple ) and two cards of a different denomination (a pair ). Aces-over-eights is an example of a full house. How many different full houses are there? Hint: first choose the denomination for the triple, then choose a different denomination for the pair, and then choose the actual cards.        Explore   This problem refers to the 52-card deck of playing cards in . A bridge hand has thirteen cards.   How many bridge hands are there?    How many bridge hands have a 6-card spade suit, which means that exactly six of the thirteen cards are spades?    How many bridge hands have a 5-card spade suit and a 5-card heart suit, which means that the remaining three cards are diamonds or clubs.    A yarborough is a bridge hand with no ten, jack, queen, king, or ace. How many yarboroughs are there?    Which is more common a bridge hand with a 5-card space suit and a 5-card heart suit or a yarborough? Use technology to evaluate your answers to and .         Exercises for Proof Format: Combinatorial Proof   Practice       Copy the proof in .    Change what needs to be changed to prove that instead. You may edit the proof you copied instead of writing it out again.    Use technology to confirm this equation.        Practice       Copy the proof in .    Change what needs to be changed to prove that for any positive integers and instead. You may edit the proof you copied instead of writing it out again.       Hint: in (b) start with ``Consider a group of employees. How many ways are there to choose employees to be on a project team where one member of the team is the project manager?     Understand    Give a combinatorial proof that . Hint: from a group of 10 people, choose a committee of 7 people, and its (outside) chair.     Understand    Give a combinatorial proof that for any positive integers and .  Hint: This equation generalizes , so use the same hint.     Chair and Secretary   Give a combinatorial proof that for any positive integers and .  Hint: Choose a project team where one member of the team is the project manager and another member of the team is the lead analyst.     Understand   Give a combinatorial proof that for any integers , , and .  Hint: of people who show up to try-outs, we will select players for our team, of whom will be starters.    Hint: Follow the hint. The first way to count is the usual order: choose the players, and then choose the starters. The second way to count is the reverse order: choose the starters, and then choose the rest of the players from the rest of the students who tried out.     Recap   Do you know    Why a combinatorial proof works?    When we can use a combinatorial proof?    What the proof format for a combinatorial proof is?        Explore       Use a combinatorial argument to expand in terms of for any positive integer . Your answer may involve and . Hint: Suppose that there are cats, dogs, and birds. No justification required.    Use a combinatorial argument to expand in terms of and for any positive integers and . Your answer may involve , , , and . No justification required.          Hint: Consider six cases and then simplify the answer.    Hint: Suppose that there are cats and dogs and we want to choose three pets. Consider cases and simplify your final answer.        "
},
{
  "id": "act_adopting_two_cats",
  "level": "2",
  "url": "sec_counting_subsets.html#act_adopting_two_cats",
  "type": "Activity",
  "number": "1.3.A",
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
  "number": "1.3.1",
  "title": "",
  "body": " The subset corrals some of the elements of the set .    "
},
{
  "id": "defn_subsets",
  "level": "2",
  "url": "sec_counting_subsets.html#defn_subsets",
  "type": "Definition",
  "number": "1.3.2",
  "title": "Subsets.",
  "body": " Subsets       A subset of the set is a set consisting of some of the elements of , where the word some is understood to be any number of elements from none to all. That is, the set is a subset of the set , denoted if every element of is also an element of . For example, and . Note that the set is a subset of itself. For example, .    The empty set  is the set with no elements. That is . Note that is a subset of any set. Imagine corralling no elements or drawing a shaded shape within that contains none of the elements of . For example, .      "
},
{
  "id": "rem_notation_zero",
  "level": "2",
  "url": "sec_counting_subsets.html#rem_notation_zero",
  "type": "Remark",
  "number": "1.3.3",
  "title": "Notation for zero.",
  "body": " Notation for zero  Computer scientists often write the number zero with a slash to avoid confusion with the letter , so the zero symbol in computer science looks similar to the empty set symbol . In this textbook, we write for zero without a slash and save to mean the empty set.  "
},
{
  "id": "defn_binomial_coeff",
  "level": "2",
  "url": "sec_counting_subsets.html#defn_binomial_coeff",
  "type": "Definition",
  "number": "1.3.4",
  "title": "Binomial coefficient.",
  "body": " Binomial coefficient   For non-negative integers and ,   The number of ways to select a subset of elements from a set of elements is the binomial coefficient  which is pronounced choose . For example, 5 choose 2 is because we saw in that there are 10 ways to select two cats from a set of five cats.    Note that if , then .      "
},
{
  "id": "rem_not_eval_counts_3",
  "level": "2",
  "url": "sec_counting_subsets.html#rem_not_eval_counts_3",
  "type": "Remark",
  "number": "1.3.5",
  "title": "Not evaluating counts, version 3.",
  "body": " Not evaluating counts, version 3  Unless stated otherwise, when counting you may leave any answer greater than twenty in a format that could easily be evaluated on a calculator. In particular, your answer may involve addition, subtraction, multiplication, division, factorials, binomial coefficients, and parentheses.  "
},
{
  "id": "exam_four_choose_k",
  "level": "2",
  "url": "sec_counting_subsets.html#exam_four_choose_k",
  "type": "Example",
  "number": "1.3.6",
  "title": "Four choose <span class=\"process-math\">\\(k\\)<\/span>.",
  "body": " Four choose   Evaluate for each nonnegative integer by listing the -element subsets of .    When , the only 0-element subset is and so .  When , the 1-element subsets are and so .  When , the 2-element subsets are and so .  When , the 3-element subsets are and so .  When , the only 4-element subset is and so .  When we have .   "
},
{
  "id": "act_eval_6choosek",
  "level": "2",
  "url": "sec_counting_subsets.html#act_eval_6choosek",
  "type": "Activity",
  "number": "1.3.B",
  "title": "Six choose <span class=\"process-math\">\\(k\\)<\/span>.",
  "body": " Six choose      Evaluate , , and by listing subsets of .    Conjecture the values of , , and where is a positive integer.    Evaluate by listing subsets of . Hint: stay organized by considering which integer is not in the set.    Conjecture the value of where is a positive integer.     "
},
{
  "id": "exam_team_leader",
  "level": "2",
  "url": "sec_counting_subsets.html#exam_team_leader",
  "type": "Example",
  "number": "1.3.7",
  "title": "Team and leader.",
  "body": " Team and leader   There are 25 students in the coding club, ten of whom are first-year students. For the coding competition, we need a team of four students that includes exactly one first-year student. How many different teams are possible?    Since ten of the 25 students are first-year students, the other are not first-year students. To make a team of four with exactly one first-year student, we will also need three students who are not first-year.  Step 1: Choose the first-year student. We want one first-year student out of ten, so there are ways to do this step.  Step 2: Choose the other three students. We want three students who are not first year out of 15, so there are ways to do this step.  Since steps multiply , there are a total of ways to choose a team.   "
},
{
  "id": "act_adopting_two_animals",
  "level": "2",
  "url": "sec_counting_subsets.html#act_adopting_two_animals",
  "type": "Activity",
  "number": "1.3.C",
  "title": "Adopting two animals.",
  "body": " Adopting two animals  There are five cats and 12 dogs waiting to be adopted.   In how many ways can you choose two animals to adopt? Hint: How many animals are there?    In how many ways can you choose two animals to adopt if they are both cats? Write your answer as a binomial coefficient. (Yes, we made a list and counted this same number in ).    In how many ways can you choose two animals to adopt if they are both dogs?    In how many ways can you choose two animals to adopt if you choose one cat and one dog?    How are your answers to , , and related to your answer to ? Use technology to evaluate the binomial coefficients.    Why? Hint: Use cases.     "
},
{
  "id": "defn_52-card_deck",
  "level": "2",
  "url": "sec_counting_subsets.html#defn_52-card_deck",
  "type": "Definition",
  "number": "1.3.8",
  "title": "52-card deck of playing cards.",
  "body": " 52-card deck of playing cards       A hand is a set of cards, without regard to order. The name comes from the fact that in many card games you hold the cards in your hand. The number of cards in a hand varies depending on the game. Poker is a family of card games that often uses hands with five or seven cards, whereas Bridge is a card game that uses hands with thirteen cards.    Each card in the deck has one of thirteen denominations : Ace (A), 2, 3, 4, 5, 6, 7, 8, 9, 10, Jack (J), Queen (Q), or King (K).    Each card in the deck also has one of four suits clubs , diamonds , hearts , or spades . For example, a card might be the Jack of hearts, denoted J . Note that for each choice of denomination and suit, there is exactly one card with that denomination and suit. For example, there is exactly one card that is J .    The cards with clubs and spades are black cards . The cards with diamonds and hearts are red cards .      "
},
{
  "id": "fig_52card_deck",
  "level": "2",
  "url": "sec_counting_subsets.html#fig_52card_deck",
  "type": "Figure",
  "number": "1.3.9",
  "title": "",
  "body": " A 52-card deck of playing cards (source: Pixabay).     "
},
{
  "id": "exam_4ofakind",
  "level": "2",
  "url": "sec_counting_subsets.html#exam_4ofakind",
  "type": "Example",
  "number": "1.3.10",
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
  "id": "pff_comb_proof",
  "level": "2",
  "url": "sec_counting_subsets.html#pff_comb_proof",
  "type": "Proof",
  "number": "1.3.C.1",
  "title": "",
  "body": " Prove: using a combinatorial proof.   We use a combinatorial proof. Consider the following situation .  How many ways are there to ?  First, (explain how to count using one method to get .)  On the other hand, (explain how to count using a different method to get .)  Since we counted the same quantity in two different ways, it follows that .   "
},
{
  "id": "act_comb_proof_two_animals",
  "level": "2",
  "url": "sec_counting_subsets.html#act_comb_proof_two_animals",
  "type": "Activity",
  "number": "1.3.D",
  "title": "Combinatorial proof — choosing two animals.",
  "body": " Combinatorial proof choosing two animals      Copy the following example of a combinatorial proof. Yes, that means copy every word. Use a combinatorial proof to prove for any positive integers and that  Proof We use a combinatorial proof. Consider the following situation: there are cats and dogs and we want to adopt two animals. How many ways are there to choose the two animals? First, since there are a total of animals and we want to choose two of them, the answer is . On the other hand, we can consider three cases. Case 1: Choose two cats. In this case, we want two out of cats, and so there are ways to choose the two animals. Case 2: Choose two dogs. In this case, we want two out of dogs, and so there are ways to choose the two animals. Case 3: The only remaining case is that we choose one cat and one dog. In this case, we want one out of cats ( ways) and then one out of dogs ( ways). Since steps multiply (by ), there are ways to choose the two animals. Since cases add (by ), there is a total of ways to choose two animals. Since we counted the same quantity in two different ways, it follows that     Edit the proof you copied in , changing what needs to be changed to prove for any positive integer that .     "
},
{
  "id": "exam_comb_proof_teamandleader",
  "level": "2",
  "url": "sec_counting_subsets.html#exam_comb_proof_teamandleader",
  "type": "Example",
  "number": "1.3.11",
  "title": "Combinatorial proof — team and leader.",
  "body": " Combinatorial proof team and leader   Use a combinatorial proof to prove that       Proof. We use a combinatorial proof. Consider the following situation: there is a group of ten employees. How many ways are there to choose seven employees to be on a project team where one member of the team is the project leader?  First, we can choose the seven-person project team from the group of ten employees. There are ways to do this step. Then we need to choose one of those seven people on the project team to be the project leader. There are seven ways to do this step. (You could think of it as ways, but and that is simpler.) Since steps multiply , the answer is .  On the other hand, we can make the choices in reverse order. We can start by choosing the project leader, one of the ten people. There are ten ways to do this step. Then we need to choose the rest of the project team. Since we already chose the project leader, we only need six more people out of the nine remaining people. There are ways to do this step. Since steps multiply , the answer is also .  Since we counted the same quantity in two different ways, it follows that .   "
},
{
  "id": "thm_sym_binom",
  "level": "2",
  "url": "sec_counting_subsets.html#thm_sym_binom",
  "type": "Theorem",
  "number": "1.3.12",
  "title": "Symmetry of the binomial coefficients.",
  "body": " Symmetry of the binomial coefficients   For any positive integers and we have    "
},
{
  "id": "exam_comb_pf_sym_arith_tri",
  "level": "2",
  "url": "sec_counting_subsets.html#exam_comb_pf_sym_arith_tri",
  "type": "Example",
  "number": "1.3.13",
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
  "body": " Understand   As in , the library's new arrivals section offers 24 mystery novels, 50 young adult novels, 17 biographies, and 46 fantasy novels.   In how many ways can I choose three books to read if I want two mystery novels and one fantasy novel?    In how many ways can I choose four books for my son if he wants two young adult novels and two biographies?    My mother would like two mystery novels, two biographies, and two fantasy novels. In how many ways can I choose books for her?          , or just .    Hint: There are two steps.    Hint: There are three steps.     "
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
  "body": " Understand    Give a combinatorial proof that for any positive integers and .  Hint: This equation generalizes , so use the same hint.   "
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
  "number": "1.4",
  "title": "Counting Bit Strings",
  "body": " Counting Bit Strings   Strings consisting only of 0 s and 1 s, or bit strings , play a central role in computer science. All numbers, data, logical commands, and computer programs are encoded in a computer as bit strings. Similarly, every text message or email message is encoded as a bit string. In fact, we might say that  Bit strings are a fundamental structure of computer science because all of computer science can be defined using bit strings.  In this section, we count bit strings, demonstrate clever ways to count by modeling using bit strings, and discuss exponential notation and logarithms.    Bit Strings  We start with a definition.   Bit string       A character that is 0 or 1 is a bit .    A bit string is a string where each character is a bit. For example, 1101 is a bit string.    The weight of a bit string is the number of 1 s in the bit string. For example, the bit string 1101 has length four and weight three.    The empty bit string  , pronounced lambda , is the unique bit string of length zero. The symbol is a place holder. If we had just a blank space, you would not know that we meant the empty bit string. In computer science, the empty bit string is used as a start to build a new bit string. If we start with and write 1 at the end of the string, the resulting bit string is 1 (and we no longer write ).       Here is an example of listing bit strings using a possibility tree.   Listing bit strings in a possibility tree       List all bit strings of length three by drawing a possibility tree.  We draw the possibility tree in . The list is 000 , 001 , 010 , 011 , 100 , 101 , 110 , 111 .    The possibility tree of all bit strings of length three.         List all bit strings of length four and weight two.  We draw the possibility tree below. Each bit string has weight two, which means that it has exactly two 1 s and two 0 s. In the tree we need to be careful any time we have two 1 s or two 0 s, we have only one branch (either to just 0 or to just 1 ) instead of the usual two branches (to 0 and to 1 ). The strings are 0011 , 0101 , 0110 , 1001 , 1010 , 1100 .    The possibility tree of all bit strings of length four and weight two.            Now it is your turn to work with bit strings.   Listing bit strings      Give an example of a bit string of length four.    Give an example of a bit string of length five and weight three.    List all bit strings of length four using a possibility tree. Be sure to include the list itself.    Make a table showing the number of bit strings of length for . Hint: You can count the answers in your possibility tree from .    Based on the values in your table, how many bit strings of length five should there be?    Explain how you can use steps to count the number of bit strings of length five. Did you get the same answer?    Conjecture the number of bit strings of length .    List the bit strings of length five and weight three by drawing a possibility tree. Your tree should include only those bit strings.        Number of Bit Strings  One special situation that is counted using steps is the number of bit strings of length . Make sure that you have completed because we are about to reveal the answers.   Conjecture number of bit strings of length   How many bit strings of length are there? State your answer as a conjecture.    There is one bit string of length 0 ( ), two bit strings of length one ( 0 , 1 ) and four bit strings of length two ( 00 , 01 , 10 , 11 ). In , we listed the eight bit strings of length three. In , we counted 16 bit strings of length four and 32 bit strings of length five. Notice that each integer is twice the previous number, suggesting that we are multiplying by two. shows these examples written as a product of twos.   The number of bit strings of length for     Number of bit strings of length .        0  1        1         2  4 =        3         4         5      Based on these examples, it is reasonable to conjecture that there are bit strings of length .    Products in the format of the answer to occur often enough that they have a name and notation. For example, our product is 2 to the power of  which is denoted   We can prove our conjecture from using steps.   Number of bit strings of length    There are bit strings of length .    Imagine building each bit string of length by filling in the spaces:   There are two ways to fill in each space: either 0 or 1 . We fill in the spaces in a sequence of steps.  Step 1: Fill in the first space (2 ways).  Step 2: Fill in the second space (2 ways).  Step 3: Fill in the third space (2 ways).  We continue to fill spaces until Step : Fill in the last space (2 ways).  Since steps multiply , the total number of bit strings of length is     Let's practice counting bit strings.   Counting bit strings      How many bit strings of length eight are there?    How many bit strings of length eight and weight one are there? Hint: How many places are there for the one 1 ?    How many bit strings of length eight and weight two are there? Hint: We can build such a bit string by putting a 0 or 1 in each of eight spaces: but we need exactly two spaces to have 1 so filling in the spaces from left to right will not work and there are too many to draw a possibility tree. Instead, consider choosing which two spaces to fill in with 1 . Since the remaining spaces are 0 s, the number of bit strings of length eight and weight two equals the number of ways to choose the two spaces for 1 s.    Conjecture the number of bit strings of length with weight or, equivalently, exactly  1 s.      Sometimes, a counting problem asks about subsets of a set, which is convenient because counts the number of -element subsets of a set of elements. As we saw in , a counting problem might have nothing to do with subsets, but we can rephrase the problem in terms of subsets. Here is another example.   Bit strings of length 100 and weight three   How many bit strings of length 100 and weight three are there?    Let's figure out a way to rephrase this problem in terms of subsets. We can build such a bit string by putting a 0 or 1 in each of 100 spaces:   Following the hint in , let's choose which spaces have 1 s.  Step 1: Fill in three spaces with 1 . We choose a subset of three spaces for 1 s from the set of 100 spaces. There are ways to do this step.  Step 2: Fill in the remaining 97 spaces with 0 . There is one way to do this step because the 97 0 s go into the remaining 97 spaces. Alternatively, you can think of choosing a subset of 97 spaces for the 0 s from the set of 97 remaining spaces. There are ways to do this step.  Since steps multiply , there are bit strings of length 100 and weight three. Our final answer is , which a quick internet search shows equals 161,700 , too many to list by hand!    We can generalize our answer and rationale from , to get a formula for the number of bit strings of length with exactly  1 s (or with exactly  0 s).   Number of bit strings of length with exactly  s (or with exactly  s)   The number of bit strings of length with exactly  1 s (or with exactly  0 s) is .    Let's see this theorem in action.   Counting bit strings with given number of \\bs{0}s or \\bs{1}s       Count the number of bit strings of length five and weight three.  By , there are bit strings of length five and weight three. Note that , which should agree with the tree you drew in  .      Count the number of bit strings of length eight and weight two.  By , there are bit strings of length eight and weight two, which is the answer to .      How many bit strings of length 100 are exactly half 0 s and half 1 s?  By there are such bit strings.           Detour: Rephrasing the Question  Sometimes a counting problem does not mention bit strings, but we can rephrase the problem in terms of bit strings, which is convenient because we know and . Try your hand at such an example.   From point to point  In this activity we are interested in direct paths from to in . We begin each direct path at and then walk one unit to the right or one unit down at each step until we reach . We are not allowed to walk to the left or up.   Going from point to point .        Give an example of a direct path from to . How many steps did you take?    Draw a possibility tree to list all possible direct paths. Hint: The original node is which has branches to and to .    How many direct paths from to are there?    We can represent each path by a bit string where 1 represents walking one unit to the right and 0 represents walking one unit down. What is the bit string whose path is ?    What is the path whose bit string is ?    Explain how to use to count the number of paths. You should get the same answer as in .    We can describe the grid in as being because it has 3 rows of letters and 4 columns of letters. Conjecture the number of direct paths from the upper left corner to the lower right corner in a grid.    Generalize. That means conjecturing the number of direct paths from the upper left corner to the lower right corner in a grid.       Algebra: Exponential Notation and Logarithms  In , we proved that there are bit strings of length where   This exponential notation is a shorthand for a product of the same number multiplied by itself repeatedly.   Exponential notation       When is a positive integer,  raised to the power of  (or just  to the  ) is For example, and . Note that exponentiation is not commutative. For example, but . We practice evaluating powers without using technology to understand the definition, but, of course, you can use technology to check. Many computational tools, such as calculators, spreadsheet programs, or an Internet search, use the notation to indicate a power.    In the expression , the integer is the base , the number that we are repeatedly multiplying. The integer is the exponent , the number of times we multiply the base. The quantity is the power of  , the final product. For example, in , the base is 2, the exponent is 5, and the power of 2 is 32.    For , it is convenient to define . For example, is the number of bit strings of length zero.    The expression is  squared . For example, . This name comes from the fact that the area of a square with sides of length is .    The expression is  cubed . For example, . This name comes from the fact that the volume of a cube with sides of length is .       Let's work with these definitions.   Exponential notation   In this example, we only use technology to check our answers.   Evaluate .  By definition,     =      =      =  1,000     =  10,000.    Check that 10,000. Notice that has 4 zeros.      Evaluate and .  By definition,     =      =      =  -1,000     =  10,000.    Check that . On the other hand, according to  , exponents are higher in the order of operations in than subtraction (and negation), so . Check that .      Evaluate .  By definition, .  Check that .      Evaluate .  By definition, and check that .         It can be useful to write an integer as a power of a base . For example, we can write or . There is a name for the exponent.   Logarithm In this textbook, we only calculate logarithms of exact powers. We do not calculate quantities such as or . We have defined when is a nonnegative integer, but it is beyond the scope of this textbook to define what for any real number . With that definition, we can take evaluate logarithms of any positive real number. For example, and .       The logarithm base 10 of an integer , denoted is the exponent of the power 10 that equals . That is, if . For example, because .    The logarithm base 2 of an integer , denoted , is the exponent of the power of 2 that equals . That is, if . For example, because .    In this textbook, we only use base 2 and base 10, but logarithms can be defined in general. The logarithm base of an integer , denoted is the exponent of the power of that equals . That is, if . For example, because . In this notation, is short for and is short for . In calculus, a noninteger base is important. The corresponding logarithm is named ln .       Here are a few more examples.   Evaluating logs   In this example, we evaluate without using technology.   Evaluate .  Since , it follows that .      Evaluate and .  First, since , it follows that . Next, since , it follows that .         Practice working with exponents and logarithms.   Exponents and logarithms  On this problem, only use technology to check your answers.   Evaluate , , , .    Evaluate , , , .    Evaluate , , and .    Evaluate , , and .    Find an integer such that .    Find an integer of such that .    Simplify by writing it as a single power.    Simplify by writing it as a single power.    Simplify by writing it as a single power.      Let's look at examples of writing a combination of powers as a single power.   Simplifying exponents       Simplify by writing it as a single power.  Using , we have .  Notice that the base remains 2 and that since the powers shared a common base, the exponents added: .      Simplify by writing it as a single power.  Using , we have .  Notice that the exponents multiplied: .      Write as a power of 2.  First, write . Then, using what we learned in we get .  You can check that and .         We state these rules for exponents as a theorem, but, when in doubt, we suggest that you use the definition instead.   Simplifying exponents   For any integer and positive integers and we have the following rules.   Simplifying a product of powers (of the same base): .    Simplifying a power of a power: .       Here is an example of a common expression that we can simplify using these rules.   Simplify       Simplify using .  We can write to get       Confirm your answer to using the definition of exponents.  We can write          It is acceptable to leave exponential notation or logarithms in your answers.   Not evaluating counts, final version  Unless stated otherwise, when counting you may leave any answer greater than twenty in a format that could easily be evaluated on a calculator. In particular, your answer may involve addition, subtraction, multiplication, division, exponents, logarithms, factorials, binomial coefficients, and parentheses.     Exercises   Exercises for Bit Strings   Practice       Calculate the length and weight of the bit string 101100 .    Calculate the length and weight of the bit string 0 .    Give an example of a bit string of length ten and weight four.         Length six and weight three.    Length one and weight zero.    Hint: your bit string should have four 1 s and six 0 s.       Practice   List all bit strings of length five and weight two using a possibility tree.     Understand   In each part, list all bit strings of length five satisfying the stated property using a possibility tree. In each case, your tree should only include the bit strings that satisfy the stated property.   Bit strings with more 0 s than 1 s.    Bit strings that do not contain consecutive 0 s, which means that 00 does not appear in the bit string.    Bit strings where any 0 is immediately followed by 1 .         Hint: Start the possibility tree with two branches to 0 and 1 , as usual. Next, branch to 0 and 1 again. After that, you need to be careful. If you ever have two 1 s then the remainder of the bits are all 0 s. There are 16 such bit strings. One is all 0 s, five that have four 0 s, and ten that have three 0 s.    Hint: Start the possibility tree with two branches to 0 and 1 , as usual. After that, you need to be careful. After every 1 there are still two branches (to 0 and to 1 ), but after every 0 there is a single branch to 1 .    Hint: This part is similar to (b), except that the bit string must end in 1 because a final 0 would not be immediately followed by 1 .       Recap   Do you know    What a bit is?    How to calculate the length of a bit string or construct a bit string of a given weight?    How to calculate the weight of a bit string or construct a bit string of a given weight?    What the symbol for empty bit string is?        Explore   The Hamming distance between two bit strings is the number of places where their bits differ. For example, the Hamming distance between 10011 and 11010 is two because they have the same first bits (both 1 ), different second bits, the same third bits (both 0 ), the same fourth bits (both 1 ), and different fifth bits. Since the bit strings differ in two places (second and fifth), their Hamming distance equals two. Hamming distance is used in error-correcting codes to ensure the correct transmission of messages such as text messages.   Calculate the Hamming distance between 00011 and 11111 .    List all bit strings that are Hamming distance one from 00011 .    Give an example of a bit string that is Hamming distance two from 00011 .    If is any bit string of length five, how many bit strings are Hamming distance one from ? Explain.    If is any bit string of length five, how many bit strings are Hamming distance two from ? Explain.         Three     10011 , 01011 , , 00010 Note that these are organized by which bit is different: first, second, , fifth    Hint: check that exactly two bits are different.    Hint: See the note under (b).    Hint: We need to choose which two out of five bits to change.        Exercises for Number of Bit Strings   Practice   Use the relevant theorems.   How many bit strings of length twenty are there?    How many bit strings of length twenty contain exactly three 1 s?    How many bit strings of length twenty contain exactly three 0 s?                   Hint: There are two ways to do this problem. We can choose the three places out of 20 for the 0 s or we can choose the 17 places out of 20 for the 1 . Either answer is correct.       Understand   Use the relevant theorems.   How many bit strings of length nine are there?    How many bit strings of length nine or ten are there? Hint: Use cases.    Which number is greater: the number of bit strings of length nine or the number of bit strings of length less than nine? Calculate the actual numbers using technology. Note: do not forget the empty bit string.        Understand       How many bit strings of length 100 begin with 0 ? Explain.    How many bit strings of length 100 begin with 00 ? Explain.    How many bit strings of length 100 begin with 1 and end in 0 ?    How many bit strings of length 100 begin with or end in 0 ? Hint: To avoid double counting of bit strings that begin with 0 and end in 0 , consider Case 1: begins with 0 and Case 2: begins with 1 and ends in 0 .          . Hint: Steps multiply .    Hint: There are spaces left to fill in.    Hint: Use the hint from (b).    Hint: Case 1 is similar to (b) and case 2 is exactly (c). Cases add .       Recap   Do you know    How many bit strings of length there are?    How many bit strings of length have exactly  1 s (or exactly  0 s)?        Explore   A balanced ternary string is a string where each character is 0 , + , or - . For example, + 0+ is a balanced ternary string of length five.   Draw a possibility tree listing all balanced ternary strings of length three.    How many balanced ternary strings of length three are there?    Count the number of balanced ternary strings of length ten.    How many balanced ternary strings of length are there? State your answer as a conjecture.        Explore   Consider strings using only the characters A , B , C , and D . Recall that a string is ordered and repeats are allowed. Also, we do not need to use all the characters.   How many such strings consist of exactly two A s and three B s?    How many such strings consist of exactly two A s, three B s, and four C s?    How many such strings consist of exactly two A s, three B s, four C s, and five D s?         Hint: Step 1 is to choose two of the five spaces for the A s. Step 2 is to choose three of the three remaining spaces for the B s. Note that there is only one way to do Step 2 (so you can safely ignore it).    One way of stating the answer is .    Hint: Figure out how we got the answer to (b) and generalize.       Explore       Conjecture the number of permutations of the set .    Prove your conjecture in the style of our proof of .         Exercises for Detour: Rephrasing the Question   Practice   We are interested in going from to in . As in , we can represent each path by a bit string where 1 represents walking one unit to the right and 0 represents walking one unit down.   What is the bit string whose path is ?    What is the path whose bit string is 11010 ?          01101             Understand   You have fifteen (identical) coins. You want to put some coins in your piggy bank, some in your change jar at work, and some in your car.   How many ways are there to distribute your coins to these three locations? Note that some could mean zero in this context. Hint: Line up the fifteen coins. Put a dividing line after those you plan to put in the piggy bank, if any, and another line after those you plan to put in your change jar, if any. The remaining coins, if any, will go in your car. For example: six coins in the piggy bank, two coins in the change jar, and seven coins in the car could be represented as: whereas three coins in the piggy bank and the rest in the change jar would be: Explain how to rephrase our question about the coins as a question about bit strings. Then answer the question. Hint to the last part of the hint: squint.    Conjecture about the number of ways to distribute coins to locations.         Hint: Each coin is 0 and each dividing line is 1 . Note that the total length is .    Hint: The total length is because we only need dividing lines.       Recap   Do you know    How to rephrase a question in terms of subsets and why that can be useful?    How to rephrase a question in terms of bit strings, and why that can be useful?        Explore   In this problem we build on the ideas of .   How many nonnegative integer solutions are there to the equation Hint: how can we rephrase this question to be the same as the question in ?    How many non-negative integer solutions are there to the equation     Make a conjecture about the number of non-negative integer solutions of the equation               Hint: Let be the number of coins in the first location, be the number of coins in the second location, be the number of coins in the third location, and be the number of coins in the fourth location. Count the total number of coins and the number of dividing lines.    Hint: Count the total number of coins and the number of dividing lines.        Exercises for Algebra: Exponential Notation and Logarithms   Practice   On this exercise, do not use technology. Be sure to show some work.   Evaluate , , and .    Evaluate .    Evaluate and .         Hint: Use a calculator to check.    10,000,000,000    Hint: Use a calculator to check.       Practice   On this exercise, do not use technology. Be sure to show some work.   Evaluate , , and .    Find a value such that .    Evaluate , , , and .    Find a value of such that .         4, 1, 0     (or 1,000 )    Hint: .    Hint: The base is 2 and the logarithm tells you the exponent.       Understand   Write each quantity as a single power.                                      Hint: How many s are being multiplied?    Hint: How many twos are being multiplied?         Hint: How many 10s are being multiplied?       Understand   In this problem, all letters represent positive integers.   Factor     Factor .    Factor and simplify . Hint: See  and .         Hint: Factor out .         Hint: Factor out , using that .       Recap   Do you know    What means and how to pronounce it?    How to pronounce and ?    How to evaluate , , and ?    Where exponents rank in the order of operations?    What and mean and how to evaluate them?    How to rewrite a statement involving logs as a statement involving exponents?        Explore       Play the online game 2048 at \\url{https:\/\/play2048.co\/}. Report here how long you played and how high a level you achieved. Try to get to at least 128.    List the powers of 2 from 1 to 2048 from memory (that is, not using any technology or computing any products).        Explore       Write the exponential equation corresponding to .    For numbers and , write and . Write the corresponding exponential equations.    Simplify using and . Your answer should be in terms of and .    Use your answer to to evaluate . Your answer should be in terms of and .    Use your answer to to write in terms of and . Your answer is one of the rules known as a law of logs .        Explore       Without calculating values, decide which is larger: or . Hint: Use the definitions of factorials and powers to write each of and as a product. Then use those products to answer the question.    Calculate and using technology. Did you correctly determine which integer is larger?    Make a table for showing the values of and the values of . Challenge yourself to reciting the powers of two and as many factorials as you can from memory, but then you are welcome to use computing technology. Hint: Use three rows labeled , , and .    Conjecture when .         Hint: Compare and . Note , , , , .    Yes    Hint: the last column of your table should have 10 in the first row, 1,024 in the second row, and 3,628,800 in the third row.             "
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
  "number": "1.4.1",
  "title": "Bit string.",
  "body": " Bit string       A character that is 0 or 1 is a bit .    A bit string is a string where each character is a bit. For example, 1101 is a bit string.    The weight of a bit string is the number of 1 s in the bit string. For example, the bit string 1101 has length four and weight three.    The empty bit string  , pronounced lambda , is the unique bit string of length zero. The symbol is a place holder. If we had just a blank space, you would not know that we meant the empty bit string. In computer science, the empty bit string is used as a start to build a new bit string. If we start with and write 1 at the end of the string, the resulting bit string is 1 (and we no longer write ).      "
},
{
  "id": "exam_bit_string_length3",
  "level": "2",
  "url": "sec_bit_strings.html#exam_bit_string_length3",
  "type": "Example",
  "number": "1.4.2",
  "title": "Listing bit strings in a possibility tree.",
  "body": " Listing bit strings in a possibility tree       List all bit strings of length three by drawing a possibility tree.  We draw the possibility tree in . The list is 000 , 001 , 010 , 011 , 100 , 101 , 110 , 111 .    The possibility tree of all bit strings of length three.         List all bit strings of length four and weight two.  We draw the possibility tree below. Each bit string has weight two, which means that it has exactly two 1 s and two 0 s. In the tree we need to be careful any time we have two 1 s or two 0 s, we have only one branch (either to just 0 or to just 1 ) instead of the usual two branches (to 0 and to 1 ). The strings are 0011 , 0101 , 0110 , 1001 , 1010 , 1100 .    The possibility tree of all bit strings of length four and weight two.           "
},
{
  "id": "act_listing_bit_strings",
  "level": "2",
  "url": "sec_bit_strings.html#act_listing_bit_strings",
  "type": "Activity",
  "number": "1.4.A",
  "title": "Listing bit strings.",
  "body": " Listing bit strings      Give an example of a bit string of length four.    Give an example of a bit string of length five and weight three.    List all bit strings of length four using a possibility tree. Be sure to include the list itself.    Make a table showing the number of bit strings of length for . Hint: You can count the answers in your possibility tree from .    Based on the values in your table, how many bit strings of length five should there be?    Explain how you can use steps to count the number of bit strings of length five. Did you get the same answer?    Conjecture the number of bit strings of length .    List the bit strings of length five and weight three by drawing a possibility tree. Your tree should include only those bit strings.     "
},
{
  "id": "exam_conjecture_number_bit_strings",
  "level": "2",
  "url": "sec_bit_strings.html#exam_conjecture_number_bit_strings",
  "type": "Example",
  "number": "1.4.5",
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
  "number": "1.4.7",
  "title": "Number of bit strings of length <span class=\"process-math\">\\(n\\)<\/span>.",
  "body": " Number of bit strings of length    There are bit strings of length .    Imagine building each bit string of length by filling in the spaces:   There are two ways to fill in each space: either 0 or 1 . We fill in the spaces in a sequence of steps.  Step 1: Fill in the first space (2 ways).  Step 2: Fill in the second space (2 ways).  Step 3: Fill in the third space (2 ways).  We continue to fill spaces until Step : Fill in the last space (2 ways).  Since steps multiply , the total number of bit strings of length is    "
},
{
  "id": "act_countingbs",
  "level": "2",
  "url": "sec_bit_strings.html#act_countingbs",
  "type": "Activity",
  "number": "1.4.B",
  "title": "Counting bit strings.",
  "body": " Counting bit strings      How many bit strings of length eight are there?    How many bit strings of length eight and weight one are there? Hint: How many places are there for the one 1 ?    How many bit strings of length eight and weight two are there? Hint: We can build such a bit string by putting a 0 or 1 in each of eight spaces: but we need exactly two spaces to have 1 so filling in the spaces from left to right will not work and there are too many to draw a possibility tree. Instead, consider choosing which two spaces to fill in with 1 . Since the remaining spaces are 0 s, the number of bit strings of length eight and weight two equals the number of ways to choose the two spaces for 1 s.    Conjecture the number of bit strings of length with weight or, equivalently, exactly  1 s.     "
},
{
  "id": "exam_bit_strings_length100_weight3",
  "level": "2",
  "url": "sec_bit_strings.html#exam_bit_strings_length100_weight3",
  "type": "Example",
  "number": "1.4.8",
  "title": "Bit strings of length 100 and weight three.",
  "body": " Bit strings of length 100 and weight three   How many bit strings of length 100 and weight three are there?    Let's figure out a way to rephrase this problem in terms of subsets. We can build such a bit string by putting a 0 or 1 in each of 100 spaces:   Following the hint in , let's choose which spaces have 1 s.  Step 1: Fill in three spaces with 1 . We choose a subset of three spaces for 1 s from the set of 100 spaces. There are ways to do this step.  Step 2: Fill in the remaining 97 spaces with 0 . There is one way to do this step because the 97 0 s go into the remaining 97 spaces. Alternatively, you can think of choosing a subset of 97 spaces for the 0 s from the set of 97 remaining spaces. There are ways to do this step.  Since steps multiply , there are bit strings of length 100 and weight three. Our final answer is , which a quick internet search shows equals 161,700 , too many to list by hand!   "
},
{
  "id": "thm_bit_string_exactly_k",
  "level": "2",
  "url": "sec_bit_strings.html#thm_bit_string_exactly_k",
  "type": "Theorem",
  "number": "1.4.9",
  "title": "Number of bit strings of length <span class=\"process-math\">\\(n\\)<\/span> with exactly <span class=\"process-math\">\\(k\\)<\/span> <span class=\"process-math\">\\(\\str{1}\\)<\/span>s (or with exactly <span class=\"process-math\">\\(k\\)<\/span> <span class=\"process-math\">\\(\\str{0}\\)<\/span>s).",
  "body": " Number of bit strings of length with exactly  s (or with exactly  s)   The number of bit strings of length with exactly  1 s (or with exactly  0 s) is .   "
},
{
  "id": "exam_count_bs_exactlyk",
  "level": "2",
  "url": "sec_bit_strings.html#exam_count_bs_exactlyk",
  "type": "Example",
  "number": "1.4.10",
  "title": "Counting bit strings with given number of \\bs{0}s or \\bs{1}s.",
  "body": " Counting bit strings with given number of \\bs{0}s or \\bs{1}s       Count the number of bit strings of length five and weight three.  By , there are bit strings of length five and weight three. Note that , which should agree with the tree you drew in  .      Count the number of bit strings of length eight and weight two.  By , there are bit strings of length eight and weight two, which is the answer to .      How many bit strings of length 100 are exactly half 0 s and half 1 s?  By there are such bit strings.        "
},
{
  "id": "act_froma1_toc4",
  "level": "2",
  "url": "sec_bit_strings.html#act_froma1_toc4",
  "type": "Activity",
  "number": "1.4.C",
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
  "number": "1.4.12",
  "title": "Exponential notation.",
  "body": " Exponential notation       When is a positive integer,  raised to the power of  (or just  to the  ) is For example, and . Note that exponentiation is not commutative. For example, but . We practice evaluating powers without using technology to understand the definition, but, of course, you can use technology to check. Many computational tools, such as calculators, spreadsheet programs, or an Internet search, use the notation to indicate a power.    In the expression , the integer is the base , the number that we are repeatedly multiplying. The integer is the exponent , the number of times we multiply the base. The quantity is the power of  , the final product. For example, in , the base is 2, the exponent is 5, and the power of 2 is 32.    For , it is convenient to define . For example, is the number of bit strings of length zero.    The expression is  squared . For example, . This name comes from the fact that the area of a square with sides of length is .    The expression is  cubed . For example, . This name comes from the fact that the volume of a cube with sides of length is .      "
},
{
  "id": "exam_exponential_notation",
  "level": "2",
  "url": "sec_bit_strings.html#exam_exponential_notation",
  "type": "Example",
  "number": "1.4.13",
  "title": "Exponential notation.",
  "body": " Exponential notation   In this example, we only use technology to check our answers.   Evaluate .  By definition,     =      =      =  1,000     =  10,000.    Check that 10,000. Notice that has 4 zeros.      Evaluate and .  By definition,     =      =      =  -1,000     =  10,000.    Check that . On the other hand, according to  , exponents are higher in the order of operations in than subtraction (and negation), so . Check that .      Evaluate .  By definition, .  Check that .      Evaluate .  By definition, and check that .        "
},
{
  "id": "defn_log",
  "level": "2",
  "url": "sec_bit_strings.html#defn_log",
  "type": "Definition",
  "number": "1.4.14",
  "title": "Logarithm<details class=\"ptx-footnote\" aria-live=\"polite\" id=\"defn_log-1-1\"><summary class=\"ptx-footnote__number\" title=\"Footnote 1.4.1\"><sup> 1 <\/sup><\/summary>\n<div class=\"ptx-footnote__contents\" id=\"defn_log-1-1\">In this textbook, we only calculate logarithms of exact powers.  We do not calculate quantities such as <span class=\"process-math\">\\(\\fn{log}(25)\\)<\/span> or <span class=\"process-math\">\\(\\fn{lg}(3)\\text{.}\\)<\/span>  We have defined <span class=\"process-math\">\\(b^n\\)<\/span> when <span class=\"process-math\">\\(n\\)<\/span> is a nonnegative integer, but it is beyond the scope of this textbook to define what <span class=\"process-math\">\\(b^x\\)<\/span> for any real number <span class=\"process-math\">\\(x\\text{.}\\)<\/span>  With that definition, we can take evaluate logarithms of any positive real number.  For example, <span class=\"process-math\">\\(\\fn{log}(25) \\approx 1.398\\)<\/span> and <span class=\"process-math\">\\(\\fn{lg}(3) \\approx 1.585\\text{.}\\)<\/span>\n<\/div><\/details>.",
  "body": " Logarithm In this textbook, we only calculate logarithms of exact powers. We do not calculate quantities such as or . We have defined when is a nonnegative integer, but it is beyond the scope of this textbook to define what for any real number . With that definition, we can take evaluate logarithms of any positive real number. For example, and .       The logarithm base 10 of an integer , denoted is the exponent of the power 10 that equals . That is, if . For example, because .    The logarithm base 2 of an integer , denoted , is the exponent of the power of 2 that equals . That is, if . For example, because .    In this textbook, we only use base 2 and base 10, but logarithms can be defined in general. The logarithm base of an integer , denoted is the exponent of the power of that equals . That is, if . For example, because . In this notation, is short for and is short for . In calculus, a noninteger base is important. The corresponding logarithm is named ln .      "
},
{
  "id": "exam_eval_logs",
  "level": "2",
  "url": "sec_bit_strings.html#exam_eval_logs",
  "type": "Example",
  "number": "1.4.15",
  "title": "Evaluating logs.",
  "body": " Evaluating logs   In this example, we evaluate without using technology.   Evaluate .  Since , it follows that .      Evaluate and .  First, since , it follows that . Next, since , it follows that .        "
},
{
  "id": "act_exp_logs",
  "level": "2",
  "url": "sec_bit_strings.html#act_exp_logs",
  "type": "Activity",
  "number": "1.4.D",
  "title": "Exponents and logarithms.",
  "body": " Exponents and logarithms  On this problem, only use technology to check your answers.   Evaluate , , , .    Evaluate , , , .    Evaluate , , and .    Evaluate , , and .    Find an integer such that .    Find an integer of such that .    Simplify by writing it as a single power.    Simplify by writing it as a single power.    Simplify by writing it as a single power.     "
},
{
  "id": "exam_simplify_exponents",
  "level": "2",
  "url": "sec_bit_strings.html#exam_simplify_exponents",
  "type": "Example",
  "number": "1.4.16",
  "title": "Simplifying exponents.",
  "body": " Simplifying exponents       Simplify by writing it as a single power.  Using , we have .  Notice that the base remains 2 and that since the powers shared a common base, the exponents added: .      Simplify by writing it as a single power.  Using , we have .  Notice that the exponents multiplied: .      Write as a power of 2.  First, write . Then, using what we learned in we get .  You can check that and .        "
},
{
  "id": "thm_simplify_exp",
  "level": "2",
  "url": "sec_bit_strings.html#thm_simplify_exp",
  "type": "Theorem",
  "number": "1.4.17",
  "title": "Simplifying exponents.",
  "body": " Simplifying exponents   For any integer and positive integers and we have the following rules.   Simplifying a product of powers (of the same base): .    Simplifying a power of a power: .      "
},
{
  "id": "exam_simplify_22nminus1",
  "level": "2",
  "url": "sec_bit_strings.html#exam_simplify_22nminus1",
  "type": "Example",
  "number": "1.4.18",
  "title": "Simplify <span class=\"process-math\">\\(2\\cdot2^{n-1}\\)<\/span>.",
  "body": " Simplify       Simplify using .  We can write to get       Confirm your answer to using the definition of exponents.  We can write         "
},
{
  "id": "rem_not_eval_counts_final",
  "level": "2",
  "url": "sec_bit_strings.html#rem_not_eval_counts_final",
  "type": "Remark",
  "number": "1.4.19",
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
  "body": " Explore   In this problem we build on the ideas of .   How many nonnegative integer solutions are there to the equation Hint: how can we rephrase this question to be the same as the question in ?    How many non-negative integer solutions are there to the equation     Make a conjecture about the number of non-negative integer solutions of the equation               Hint: Let be the number of coins in the first location, be the number of coins in the second location, be the number of coins in the third location, and be the number of coins in the fourth location. Count the total number of coins and the number of dividing lines.    Hint: Count the total number of coins and the number of dividing lines.     "
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
  "body": " Understand   In this problem, all letters represent positive integers.   Factor     Factor .    Factor and simplify . Hint: See  and .         Hint: Factor out .         Hint: Factor out , using that .     "
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
  "body": " Explore       Play the online game 2048 at \\url{https:\/\/play2048.co\/}. Report here how long you played and how high a level you achieved. Try to get to at least 128.    List the powers of 2 from 1 to 2048 from memory (that is, not using any technology or computing any products).      "
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
},
{
  "id": "sec_graph_models",
  "level": "1",
  "url": "sec_graph_models.html",
  "type": "Section",
  "number": "2.1",
  "title": "Modeling with Graphs",
  "body": " Modeling with Graphs   After an introductory puzzle, we define a graph, introduce some vocabulary used to describe graphs, and practice modeling situations using a graph.    Crossing Bridges  We begin with a puzzle.   Bridges Puzzle  A small city sits on the north and south shores of a river and on two islands on the river, a small island and a big island, as shown in . Residents enjoy walking around the city each day, crossing the bridges that connect the islands to each other and to the north and south shore. To keep their walks interesting, they never cross the same bridge twice in a day.   A small city connected by bridges.        Show that it is possible to start a daily walk on the small island and cross every bridge (exactly once each). You end up somewhere other than the small island (with no way back to where you started). Where do you end? Any thoughts on why you end there?    Why is it impossible to start a daily walk on the small island, cross every bridge (exactly once each), and end on the small island? Hint: There are three bridges connected to the small island. The first bridge you cross takes you off the small island. At some point you cross a second bridge connected to the small island. Where are you then? Where are you after crossing the third bridge connected to the small island?    What happens if you start a daily walk somewhere else (not on small island) and cross every bridge connected to small island (exactly once each)? Hint: Whichever of the bridges connected to small island that you cross first takes you onto small island. Where are you after the next bridge you cross? At some point you cross the third bridge connected to the small island. Where are you then?    Explain why it is impossible to start a daily walk somewhere other than small island, cross every bridge (exactly once each), and end where you started.    Look at the number of bridges connected to each piece of land. What about that number matters in trying to find a daily walk that crosses each bridge (exactly once each)?     Let's examine the key elements of . In the puzzle, it did not matter where the north shore, the south shore, the small island, and the big island were geographically. We did not care how long the bridges were or what angle they made with the shore or island. It also did not matter that the small island is smaller than the big island. We did not even care which pieces of land were islands and which were the shores of the river. All that mattered was which pieces of land had a bridge, or two, between them.    The Definition of a Graph  In , the essential information we needed to know about the city was the set of objects (the pieces of land) and the connections between them (the bridges). Any set of objects with connections between pairs of objects is a graph .   Graph       A vertex (or node ) is an object. For example, a vertex could be a piece of land in the city from or perhaps a student at the university. The plural of vertex is vertices and so we refer to one vertex, two vertices, three vertices, and so on.    An edge is a set of two vertices. For example, if and are distinct vertices in a graph, then is an example of a possible edge. When we model a situation using a graph, each edge represents a connection between two objects. For example, in the Bridges Puzzle , we might want an edge between two vertices to indicate that those two pieces of land are connected by a bridge. We are ignoring, for the moment, that there are two bridges between the big island and the north shore. Technically we need a slightly more general definition of an edge and what we get is a multigraph , not a simple graph. As another example, in a graph where each vertex is a student at the university, we might want an edge between two vertices to indicate that those two students have a class together this semester.    Two vertices are adjacent (or neighbors ) if they are connected by an edge. That is, if and are distinct vertices and is an edge, then the vertices and are adjacent. We also say that is adjacent to  or that is adjacent to  . So, for example, if Camilla and Quang are both in discrete mathematics class this semester, then Camilla is adjacent to Quang (and vice versa) in the student graph.    A (simple) graph (or network ) is a pair of sets: a vertex set of vertices and a edge set of edges where the elements of each edge are in the vertex set. For example, we might have the graph with the vertex set and the edge set .    A graph drawing of a graph has a point for each vertex and a line (or curve) for each edge connecting its two vertices. In this textbook, we draw each vertex as a small, open circle instead of a point. The placement of the vertices and edges is at our convenience none of the geometry such as position, length, or angle matters. For example, shows four different drawings of the graph from .  Four different drawings of the graph .            The city in the Bridges Puzzle can be modeled with a multigraph which is a graph where multiple edges are allowed between the same pair of vertices.   Bridges as a graph   Draw a multigraph representing the city in the Bridges Puzzle .    The graph is drawn in . The graph has four vertices, one for each piece of land. We have labeled them in the graph drawing for convenience. For each bridge in between two pieces of land, we draw an edge connecting the corresponding vertices in the graph. For example, there is a bridge connecting the small island and the big island, so in our graph drawing we have an edge between the vertices labeled small island and big island. There is no bridge connecting the north shore and the south shore, so in our graph drawing we do not have an edge between the vertices labeled north shore and south shore.   A multigraph representing the city in the Bridges Puzzle.        Let's look at an another example of a graph model.   Classmates graph   Abdi, Bhavika, Cara, Drew, Elle, and Filipe are all new transfer students. This semester, Abdi, Bhavika, and Cara are in a discrete mathematics class together; Bhavika, Cara, and Drew are in an algorithms class together; and Abdi and Elle are in chemistry class together. These students do not have other classes in common.  We can model these relationships with a graph. The vertex set has a vertex for each student corresponding to the first letter of their name. Let's say two vertices are connected by an edge if those two students are taking the same class. If students have any number of classes together, we will just draw a single edge. This graph might be useful for visualizing who knows each other.   Explain why is an edge but is not.  Abdi and Cara are in the discrete mathematics class, so is an edge. All common classes are listed, and there is no class that Bhavika and Elle are taking, so is not an edge.      How many edges are in the graph?  First, since Abdi, Bhavika, and Cara are in a discrete mathematics class together, we have three edges , , and . Next, since Bhavika, Cara, and Drew are in an algorithms class, we have two more edges and . We already knew that was an edge, so we do not draw that edge again. Lastly, since Abdi and Elle are in the same chemistry class, we have one more edge: . There are a total of six edges.      Draw the graph.   shows one possible drawing of the graph. In this drawing, we chose to draw the vertices in a circle. The lines representing the edges and happen to cross, which is acceptable, but note that the point where those two edges cross is not a vertex. That is the sort of potential misunderstanding that we avoid by drawing our vertices as small circles instead of actual points.   One drawing of the classmates graph.             It is useful to have a name for the number of edges that include a particular vertex.   Degree of vertex       The degree of a vertex in a graph , denoted or just , is the number of edges of that contain the vertex . For example, in the graph from  with vertex set and edge set , vertex 1 has degree two because 1 is an element of two edges: and . Vertex 2 has degree three because 2 is an element of three edges: , , and . In the drawings in , we see two edges to vertex 1 and three edges to vertex 2.    Equivalently, the degree of a vertex is the number of neighbors of the vertex. For example, in the graph from  , vertex 1 has degree two because it has two neighbors, 2 and 4. Similarly, vertex 2 has degree three because it has three neighbors, 1, 3, and 4.    An isolated vertex is a vertex with degree zero. For example, is an isolated vertex in the classmates graph in , because Felipe was not a classmate of anyone else in the group of new transfer students. In there are no edges to the vertex .    A end vertex (or leaf or pendant ) is a vertex with degree 1. For example, in the classmates graph from , is an end vertex because Elle was only in a class with Abdi. In we see one edge to the vertex .       Practice modeling with graphs.   Cube graph  Consider a graph whose vertices are the bit strings of length three and where two vertices are connected by an edge if they differ in exactly one bit. We could equivalently say that the bit strings have Hamming distance one, as defined in  . For example, the vertices 010 and 011 which are connected by an edge because they differ in only their third bit, but the vertex 010 is not connected by an edge to the vertex 111 because they differ in both the first and third bit.   How many vertices does have? Hint: There should be one vertex for each bit string of length three.    List the vertices of the graph .    Explain why the vertices labeled 010 and 011 are connected by an edge.    List the vertices adjacent to the vertex labeled 010 . These are the neighbors of the vertex labeled 010 .    What is the degree of the vertex 010 ?    Explain why every vertex in has the same degree.    Draw the graph .    Count the number of edges in .    The graph is an example of a cube graph . Can you redraw to see where that name comes from?        Graph Complements  When we first introduced graphs in , we explained that in a graph, , an edge connecting two vertices, and , indicates that the two objects, and , are related in some way. For example, in , the objects were a group of new transfer students and an edge between two vertices indicated that the two students were in a class together this semester. That graph is helpful if we want to visualize who knows each other. Suppose instead that we wanted to set up one-on-one meetings for new transfer students who do not yet know each other. We might want to draw a new graph where the objects are the same group of new transfer students, but now an edge between two vertices indicates that the two students are not in a class together this semester. This new graph, , has the same vertices as , but now an edge connecting two vertices, and , indicates that the two objects, and are related in the opposite way.  We formally define the graph complement.   Graph complement   For a graph, , the (graph) complement , , has the same set of vertices but opposite edges in the sense that is an edge of exactly when is not an edge in . Equivalently, and are adjacent in exactly when and are not adjacent in .    Let's draw the complement of the classmates graph.   Complement of the classmates graph   Draw the complement of the classmates graph in .    We draw the complement in .   The complement of the classmates graph.      For example, and are not adjacent vertices in the classmates graph because Abdi and Drew are not in any of the same classes this semester. Therefore, and are adjacent vertices in the complement of the classmates graph. As another example, and are adjacent vertices in the classmates graph because Bhavika and Cara are in the algorithms class together this semester. Therefore, and are not adjacent vertices in the complement of the classmates graph.    Your turn to work with complements.   Graph complement  Consider the graph drawn in .   The graph .        How many vertices and edges does the graph have?    List each vertex of and its degree.    Draw the graph complement .    How many vertices and how many edges does the graph have?    List each vertex of and its degree.    What is the relationship between the degree of a vertex in and the degree of the same vertex in ?    What is the relationship between the number of edges in and the number of edges in ?     Let's work through  .   Degree of a vertex in the complement   In the graph drawn in , what is the relationship between the degree of a vertex in the graph and the degree of that same vertex in the complement ?    As an example, the vertex is adjacent to , , and in and is adjacent to in . Thus, and . As another example, the vertex is adjacent to and in and is adjacent to and in . Thus, and . In general, if is any vertex in , then .  This equation holds for any vertex, , because there are four other vertices in . Some of those four vertices are adjacent to in . The remainder of those four vertices must be adjacent to in . So, each of those other four vertices counts once in either or .      Exercises   Exercises for Crossing Bridges   Practice   Could we build a new bridge in the city described in so that it would be possible to take a daily walk crossing every bridge (exactly once each) and ending where you started? Explain.    Hint: Yes, say where and list a daily walk that crosses every bridge (exactly once each) and ends where you start.     Understand   In the city described in , we would like to start our daily walk on the big island and cross every bridge (exactly once each).   Suppose that there exists such a walk. Explain why we would end on the small island.    Again, suppose that there exists such a walk. Explain why it would end on the north shore.     Since we cannot end in two different places, we have a contradition (false statement). Therefore, our supposition that there exists such a walk is also false, which means that it is impossible. We discuss this type of proof by contradiction in .      Explore   Suppose that we have a completely new city on a river with islands and bridges. As in , residents enjoy walking around the city each day, crossing bridges, and to keep their walks interesting, they never cross the same bridge twice in a day.   Conjecture how you could tell if it is possible to take a daily walk that crosses every bridge (exactly once) and ends where you started. Hint: your answer should involve quantities that we can quickly calculate from a drawing of the city.    Now, conjecture how you could tell if it is possible to take a daily walk that crosses every bridge (exactly once) but ends at a location that is different from where you started. Hint: your answer should involve quantities that we can quickly calculate from a drawing of the city.         Exercises for The Definition of a Graph   Practice   Consider a graph with vertex set and edges , , , , , .   Count the number of vertices in .    Count the number of edges in .    List the neighbors of the vertex . Hint: The vertex might occur as the first or second element of the edge.    Calculate the degree of the vertex .    Draw the graph and check your answers.    Is there any end vertex in ? Explain.         Five    Six    Hint: The vertex is one neighbor and there are three others.    Hint: The degree of is equal to the number of neighbors.    Hint: Check that you have five vertices and six edges.    Yes, there is one end vertex.       Understand   Consider the map of midwest states in .   Draw a graph with a vertex for each state and an edge between two vertices if their corresponding states share a length of common border (more than a point).  Map of midwest states.         How many vertices does the graph have?    List the neighbors of Minnesota (MN).    Find the degree of each state.    Which two states have the highest degree? Explain.    How many edges does the graph have?         See in .    13    Hint: MN has four neighbors.    ND:2, SD: 4, NE: 4, , IL: 3    Iowa (IA) and Missouri (MO)    24       Understand   Given a set of words, we can construct a word graph whose vertices are the given words where two words are connected by an edge if one word can be changed to the other by making exactly one of the following changes.   Reorder  Keep the same letters, but change the order.    Replace  Keep the letters in the same order, but replace one letter with a different letter.     Note that each change is reversible, so it makes sense to say that two words are connected by an edge.   Draw the word graph for the set \\{ACT, APT, CAT, HAT, HOT, HIT, PAT, PIT, PUN\\}.    How many vertices does your graph have?    What is the degree of the vertex CAT?    Are any of the vertices in your graph an end vertex?    Are any of the vertices in your graph an isolated vertex?    How many edges does your graph have?         See the graph in .  Word graph for         Hint: count the number of words.    Hint: the neighbors of CAT are ACT, HAT, and PAT.    No    Yes    11       Understand   In front of you are two coins laying on the table: a quarter and then a dime to the right of the quarter. Each coin has two sides: heads (denoted with the subscript ) The name heads probably comes from the fact that there is the picture of a famous person's head on one side of the coin. or tails (denoted with the subscript ). Each coin begins heads up. We denote this initial state . There are two different moves:   Swap  Swap the position of the two coins (left\/right), or    Flip  Flip one coin from heads to tails, or vice versa.      How many different states are there? List them.    How can we go from state to state in a sequence of moves? Is this sequence of moves unique?    Draw the graph where each vertex is labeled by a state and each move is represented by an edge.         Eight     Hint: It takes two moves. It is not unique because you can start with a swap and then flip, or you can start with a flip and then swap.    Hint: Each vertex should have degree three.       Recap   Do you know    What the singular of vertices is? Hint: we do not say one vertice.     What it means for two vertices in a graph to be adjacent?    What the neighbors of a vertex are?    Why are there many different graph drawings for the same graph?    How to model a story with a graph, including describing what the vertices are and what the edges represent?    How to calculate the degree of a vertex from an edge list?    How to calculate the degree of a vertex from a graph drawing?    What an isolated vertex and end vertex are?        Explore   Five students applied for on-campus jobs, as listed in . Each job is willing to hire one of the students who applied. Each student can get at most one job.   Student's job preferences    Student  Admissions  Bookstore  Cafeteria  (tech) Desk  Events            Haloke                 Ian                 Jamar                 Khanh                 Levi            Could each student get a job? Explain.    Draw a graph to represent the situation. Hint: Use a vertex for each student and for each job. You might want to color the vertices that represent students in one color (say black) and the vertices that represent jobs in another color (say white). Yes, it is weird that we have objects of two types. Officially a graph with objects of two types, as in , is a bipartite graph.     Highlight key edges in your graph to illustrate your answer to .        Yes. Haloke: Admissions, Ian: Events, Jamar: Bookstore, Khanh: (tech) Desk, Levi: Cafeteria. Note that this solution is not unique. Can you find another solution?    Hint: Your graph should have five white vertices, five black vertices, and an edge for each in .    Hint: You should highlight five edges so that each student and each job are the endpoint of exactly one highlighted edge.        Exercises for Graph Complements   Practice   In a tech company, each employee typically works on several projects at a time, often with slightly different teams for each project.   Consider a graph where the vertices are the employees and there is an edge between two vertices if the corresponding employees are on a project team together. If is an employee working on exactly one team and that team has five other members (in addition to ), what does that tell you about the vertex ?    A manager is trying to arrange for each team to travel to that team's main client for a day. If two project teams do not have any members in common, then they can travel on the same day. The manager draws a new graph with the same vertices, but now there is an edge between two vertices if the corresponding employees are not on any project team together. How is the graph related to the graph ?        Practice   Consider the graphs , , and drawn in .   Three graphs.        Draw the complement .    Draw the complement .    Draw the complement .      The complements are drawn in .   Three complements         Practice       Draw the complement of the graph drawn in .  The graph .         List the edges of .    List the edges of .         Hint: Your complement should have six vertices and seven edges. The vertices and are the end vertices of the complement.     , , .       Recap   Do you know    Why we might model a situation with the complement of a graph instead of the original graph?    How to find the complement of a graph?        Explore   The set has eight subsets, as defined in . They are    Draw the graph whose vertices are these subsets where there is an edge between vertices if those subsets have at least one element in common. Which vertex is isolated?    Draw the graph whose vertices are these subsets where there is an edge between vertices if those subsets have no elements in common. Are there any isolated vertices?    How are these graphs related?         Hints: Your graph should have eight vertices and 15 edges. For example, the neighbors of are , . The isolated vertex is .    Hints: Your graph should have eight vertices and 13 edges. For example, the neighbors of are and . There is no isolated vertex.    Hint: They have opposite edges.       Explore   Consider a graph with vertices and its complement . Suppose is a vertex in . How are and related? Explain. Hint: .    Hint: For a vertex , there are other vertices each of which is a neighbor of in or a neighbor of in (and never both). Recall that counts the number of neighbors of in and counts the number of neighbors of in .      "
},
{
  "id": "act_bridges",
  "level": "2",
  "url": "sec_graph_models.html#act_bridges",
  "type": "Activity",
  "number": "2.1.A",
  "title": "Bridges Puzzle.",
  "body": " Bridges Puzzle  A small city sits on the north and south shores of a river and on two islands on the river, a small island and a big island, as shown in . Residents enjoy walking around the city each day, crossing the bridges that connect the islands to each other and to the north and south shore. To keep their walks interesting, they never cross the same bridge twice in a day.   A small city connected by bridges.        Show that it is possible to start a daily walk on the small island and cross every bridge (exactly once each). You end up somewhere other than the small island (with no way back to where you started). Where do you end? Any thoughts on why you end there?    Why is it impossible to start a daily walk on the small island, cross every bridge (exactly once each), and end on the small island? Hint: There are three bridges connected to the small island. The first bridge you cross takes you off the small island. At some point you cross a second bridge connected to the small island. Where are you then? Where are you after crossing the third bridge connected to the small island?    What happens if you start a daily walk somewhere else (not on small island) and cross every bridge connected to small island (exactly once each)? Hint: Whichever of the bridges connected to small island that you cross first takes you onto small island. Where are you after the next bridge you cross? At some point you cross the third bridge connected to the small island. Where are you then?    Explain why it is impossible to start a daily walk somewhere other than small island, cross every bridge (exactly once each), and end where you started.    Look at the number of bridges connected to each piece of land. What about that number matters in trying to find a daily walk that crosses each bridge (exactly once each)?    "
},
{
  "id": "sub_defn_graph-2",
  "level": "2",
  "url": "sec_graph_models.html#sub_defn_graph-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "graph "
},
{
  "id": "defn_graph",
  "level": "2",
  "url": "sec_graph_models.html#defn_graph",
  "type": "Definition",
  "number": "2.1.2",
  "title": "Graph.",
  "body": " Graph       A vertex (or node ) is an object. For example, a vertex could be a piece of land in the city from or perhaps a student at the university. The plural of vertex is vertices and so we refer to one vertex, two vertices, three vertices, and so on.    An edge is a set of two vertices. For example, if and are distinct vertices in a graph, then is an example of a possible edge. When we model a situation using a graph, each edge represents a connection between two objects. For example, in the Bridges Puzzle , we might want an edge between two vertices to indicate that those two pieces of land are connected by a bridge. We are ignoring, for the moment, that there are two bridges between the big island and the north shore. Technically we need a slightly more general definition of an edge and what we get is a multigraph , not a simple graph. As another example, in a graph where each vertex is a student at the university, we might want an edge between two vertices to indicate that those two students have a class together this semester.    Two vertices are adjacent (or neighbors ) if they are connected by an edge. That is, if and are distinct vertices and is an edge, then the vertices and are adjacent. We also say that is adjacent to  or that is adjacent to  . So, for example, if Camilla and Quang are both in discrete mathematics class this semester, then Camilla is adjacent to Quang (and vice versa) in the student graph.    A (simple) graph (or network ) is a pair of sets: a vertex set of vertices and a edge set of edges where the elements of each edge are in the vertex set. For example, we might have the graph with the vertex set and the edge set .    A graph drawing of a graph has a point for each vertex and a line (or curve) for each edge connecting its two vertices. In this textbook, we draw each vertex as a small, open circle instead of a point. The placement of the vertices and edges is at our convenience none of the geometry such as position, length, or angle matters. For example, shows four different drawings of the graph from .  Four different drawings of the graph .           "
},
{
  "id": "sub_defn_graph-4",
  "level": "2",
  "url": "sec_graph_models.html#sub_defn_graph-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "multigraph "
},
{
  "id": "exam_bridges_graph",
  "level": "2",
  "url": "sec_graph_models.html#exam_bridges_graph",
  "type": "Example",
  "number": "2.1.4",
  "title": "Bridges as a graph.",
  "body": " Bridges as a graph   Draw a multigraph representing the city in the Bridges Puzzle .    The graph is drawn in . The graph has four vertices, one for each piece of land. We have labeled them in the graph drawing for convenience. For each bridge in between two pieces of land, we draw an edge connecting the corresponding vertices in the graph. For example, there is a bridge connecting the small island and the big island, so in our graph drawing we have an edge between the vertices labeled small island and big island. There is no bridge connecting the north shore and the south shore, so in our graph drawing we do not have an edge between the vertices labeled north shore and south shore.   A multigraph representing the city in the Bridges Puzzle.       "
},
{
  "id": "exam_classmates_graph",
  "level": "2",
  "url": "sec_graph_models.html#exam_classmates_graph",
  "type": "Example",
  "number": "2.1.6",
  "title": "Classmates graph.",
  "body": " Classmates graph   Abdi, Bhavika, Cara, Drew, Elle, and Filipe are all new transfer students. This semester, Abdi, Bhavika, and Cara are in a discrete mathematics class together; Bhavika, Cara, and Drew are in an algorithms class together; and Abdi and Elle are in chemistry class together. These students do not have other classes in common.  We can model these relationships with a graph. The vertex set has a vertex for each student corresponding to the first letter of their name. Let's say two vertices are connected by an edge if those two students are taking the same class. If students have any number of classes together, we will just draw a single edge. This graph might be useful for visualizing who knows each other.   Explain why is an edge but is not.  Abdi and Cara are in the discrete mathematics class, so is an edge. All common classes are listed, and there is no class that Bhavika and Elle are taking, so is not an edge.      How many edges are in the graph?  First, since Abdi, Bhavika, and Cara are in a discrete mathematics class together, we have three edges , , and . Next, since Bhavika, Cara, and Drew are in an algorithms class, we have two more edges and . We already knew that was an edge, so we do not draw that edge again. Lastly, since Abdi and Elle are in the same chemistry class, we have one more edge: . There are a total of six edges.      Draw the graph.   shows one possible drawing of the graph. In this drawing, we chose to draw the vertices in a circle. The lines representing the edges and happen to cross, which is acceptable, but note that the point where those two edges cross is not a vertex. That is the sort of potential misunderstanding that we avoid by drawing our vertices as small circles instead of actual points.   One drawing of the classmates graph.            "
},
{
  "id": "defn_degree",
  "level": "2",
  "url": "sec_graph_models.html#defn_degree",
  "type": "Definition",
  "number": "2.1.8",
  "title": "Degree of vertex.",
  "body": " Degree of vertex       The degree of a vertex in a graph , denoted or just , is the number of edges of that contain the vertex . For example, in the graph from  with vertex set and edge set , vertex 1 has degree two because 1 is an element of two edges: and . Vertex 2 has degree three because 2 is an element of three edges: , , and . In the drawings in , we see two edges to vertex 1 and three edges to vertex 2.    Equivalently, the degree of a vertex is the number of neighbors of the vertex. For example, in the graph from  , vertex 1 has degree two because it has two neighbors, 2 and 4. Similarly, vertex 2 has degree three because it has three neighbors, 1, 3, and 4.    An isolated vertex is a vertex with degree zero. For example, is an isolated vertex in the classmates graph in , because Felipe was not a classmate of anyone else in the group of new transfer students. In there are no edges to the vertex .    A end vertex (or leaf or pendant ) is a vertex with degree 1. For example, in the classmates graph from , is an end vertex because Elle was only in a class with Abdi. In we see one edge to the vertex .      "
},
{
  "id": "act_cube_graph",
  "level": "2",
  "url": "sec_graph_models.html#act_cube_graph",
  "type": "Activity",
  "number": "2.1.B",
  "title": "Cube graph.",
  "body": " Cube graph  Consider a graph whose vertices are the bit strings of length three and where two vertices are connected by an edge if they differ in exactly one bit. We could equivalently say that the bit strings have Hamming distance one, as defined in  . For example, the vertices 010 and 011 which are connected by an edge because they differ in only their third bit, but the vertex 010 is not connected by an edge to the vertex 111 because they differ in both the first and third bit.   How many vertices does have? Hint: There should be one vertex for each bit string of length three.    List the vertices of the graph .    Explain why the vertices labeled 010 and 011 are connected by an edge.    List the vertices adjacent to the vertex labeled 010 . These are the neighbors of the vertex labeled 010 .    What is the degree of the vertex 010 ?    Explain why every vertex in has the same degree.    Draw the graph .    Count the number of edges in .    The graph is an example of a cube graph . Can you redraw to see where that name comes from?     "
},
{
  "id": "defn_graph_complement",
  "level": "2",
  "url": "sec_graph_models.html#defn_graph_complement",
  "type": "Definition",
  "number": "2.1.9",
  "title": "Graph complement.",
  "body": " Graph complement   For a graph, , the (graph) complement , , has the same set of vertices but opposite edges in the sense that is an edge of exactly when is not an edge in . Equivalently, and are adjacent in exactly when and are not adjacent in .   "
},
{
  "id": "exam_classmates_comp",
  "level": "2",
  "url": "sec_graph_models.html#exam_classmates_comp",
  "type": "Example",
  "number": "2.1.10",
  "title": "Complement of the classmates graph.",
  "body": " Complement of the classmates graph   Draw the complement of the classmates graph in .    We draw the complement in .   The complement of the classmates graph.      For example, and are not adjacent vertices in the classmates graph because Abdi and Drew are not in any of the same classes this semester. Therefore, and are adjacent vertices in the complement of the classmates graph. As another example, and are adjacent vertices in the classmates graph because Bhavika and Cara are in the algorithms class together this semester. Therefore, and are not adjacent vertices in the complement of the classmates graph.   "
},
{
  "id": "act_graph_comp",
  "level": "2",
  "url": "sec_graph_models.html#act_graph_comp",
  "type": "Activity",
  "number": "2.1.C",
  "title": "Graph complement.",
  "body": " Graph complement  Consider the graph drawn in .   The graph .        How many vertices and edges does the graph have?    List each vertex of and its degree.    Draw the graph complement .    How many vertices and how many edges does the graph have?    List each vertex of and its degree.    What is the relationship between the degree of a vertex in and the degree of the same vertex in ?    What is the relationship between the number of edges in and the number of edges in ?    "
},
{
  "id": "exam_deg_comp",
  "level": "2",
  "url": "sec_graph_models.html#exam_deg_comp",
  "type": "Example",
  "number": "2.1.13",
  "title": "Degree of a vertex in the complement.",
  "body": " Degree of a vertex in the complement   In the graph drawn in , what is the relationship between the degree of a vertex in the graph and the degree of that same vertex in the complement ?    As an example, the vertex is adjacent to , , and in and is adjacent to in . Thus, and . As another example, the vertex is adjacent to and in and is adjacent to and in . Thus, and . In general, if is any vertex in , then .  This equation holds for any vertex, , because there are four other vertices in . Some of those four vertices are adjacent to in . The remainder of those four vertices must be adjacent to in . So, each of those other four vertices counts once in either or .   "
},
{
  "id": "exer_add_bridge",
  "level": "2",
  "url": "sec_graph_models.html#exer_add_bridge",
  "type": "",
  "number": "1",
  "title": "Practice.",
  "body": " Practice   Could we build a new bridge in the city described in so that it would be possible to take a daily walk crossing every bridge (exactly once each) and ending where you started? Explain.    Hint: Yes, say where and list a daily walk that crosses every bridge (exactly once each) and ends where you start.   "
},
{
  "id": "exer_big_island",
  "level": "2",
  "url": "sec_graph_models.html#exer_big_island",
  "type": "",
  "number": "2",
  "title": "Understand.",
  "body": " Understand   In the city described in , we would like to start our daily walk on the big island and cross every bridge (exactly once each).   Suppose that there exists such a walk. Explain why we would end on the small island.    Again, suppose that there exists such a walk. Explain why it would end on the north shore.     Since we cannot end in two different places, we have a contradition (false statement). Therefore, our supposition that there exists such a walk is also false, which means that it is impossible. We discuss this type of proof by contradiction in .    "
},
{
  "id": "exer_bridges_conj",
  "level": "2",
  "url": "sec_graph_models.html#exer_bridges_conj",
  "type": "",
  "number": "3",
  "title": "Explore.",
  "body": " Explore   Suppose that we have a completely new city on a river with islands and bridges. As in , residents enjoy walking around the city each day, crossing bridges, and to keep their walks interesting, they never cross the same bridge twice in a day.   Conjecture how you could tell if it is possible to take a daily walk that crosses every bridge (exactly once) and ends where you started. Hint: your answer should involve quantities that we can quickly calculate from a drawing of the city.    Now, conjecture how you could tell if it is possible to take a daily walk that crosses every bridge (exactly once) but ends at a location that is different from where you started. Hint: your answer should involve quantities that we can quickly calculate from a drawing of the city.      "
},
{
  "id": "exer_my_first_graph",
  "level": "2",
  "url": "sec_graph_models.html#exer_my_first_graph",
  "type": "",
  "number": "4",
  "title": "Practice.",
  "body": " Practice   Consider a graph with vertex set and edges , , , , , .   Count the number of vertices in .    Count the number of edges in .    List the neighbors of the vertex . Hint: The vertex might occur as the first or second element of the edge.    Calculate the degree of the vertex .    Draw the graph and check your answers.    Is there any end vertex in ? Explain.         Five    Six    Hint: The vertex is one neighbor and there are three others.    Hint: The degree of is equal to the number of neighbors.    Hint: Check that you have five vertices and six edges.    Yes, there is one end vertex.     "
},
{
  "id": "exer_midwest_MAP",
  "level": "2",
  "url": "sec_graph_models.html#exer_midwest_MAP",
  "type": "",
  "number": "5",
  "title": "Understand.",
  "body": " Understand   Consider the map of midwest states in .   Draw a graph with a vertex for each state and an edge between two vertices if their corresponding states share a length of common border (more than a point).  Map of midwest states.         How many vertices does the graph have?    List the neighbors of Minnesota (MN).    Find the degree of each state.    Which two states have the highest degree? Explain.    How many edges does the graph have?         See in .    13    Hint: MN has four neighbors.    ND:2, SD: 4, NE: 4, , IL: 3    Iowa (IA) and Missouri (MO)    24     "
},
{
  "id": "exer_word_graphs_first",
  "level": "2",
  "url": "sec_graph_models.html#exer_word_graphs_first",
  "type": "",
  "number": "6",
  "title": "Understand.",
  "body": " Understand   Given a set of words, we can construct a word graph whose vertices are the given words where two words are connected by an edge if one word can be changed to the other by making exactly one of the following changes.   Reorder  Keep the same letters, but change the order.    Replace  Keep the letters in the same order, but replace one letter with a different letter.     Note that each change is reversible, so it makes sense to say that two words are connected by an edge.   Draw the word graph for the set \\{ACT, APT, CAT, HAT, HOT, HIT, PAT, PIT, PUN\\}.    How many vertices does your graph have?    What is the degree of the vertex CAT?    Are any of the vertices in your graph an end vertex?    Are any of the vertices in your graph an isolated vertex?    How many edges does your graph have?         See the graph in .  Word graph for         Hint: count the number of words.    Hint: the neighbors of CAT are ACT, HAT, and PAT.    No    Yes    11     "
},
{
  "id": "exer_quarter_dime",
  "level": "2",
  "url": "sec_graph_models.html#exer_quarter_dime",
  "type": "",
  "number": "7",
  "title": "Understand.",
  "body": " Understand   In front of you are two coins laying on the table: a quarter and then a dime to the right of the quarter. Each coin has two sides: heads (denoted with the subscript ) The name heads probably comes from the fact that there is the picture of a famous person's head on one side of the coin. or tails (denoted with the subscript ). Each coin begins heads up. We denote this initial state . There are two different moves:   Swap  Swap the position of the two coins (left\/right), or    Flip  Flip one coin from heads to tails, or vice versa.      How many different states are there? List them.    How can we go from state to state in a sequence of moves? Is this sequence of moves unique?    Draw the graph where each vertex is labeled by a state and each move is represented by an edge.         Eight     Hint: It takes two moves. It is not unique because you can start with a swap and then flip, or you can start with a flip and then swap.    Hint: Each vertex should have degree three.     "
},
{
  "id": "exer_dyk_defn_graph",
  "level": "2",
  "url": "sec_graph_models.html#exer_dyk_defn_graph",
  "type": "",
  "number": "8",
  "title": "Recap.",
  "body": " Recap   Do you know    What the singular of vertices is? Hint: we do not say one vertice.     What it means for two vertices in a graph to be adjacent?    What the neighbors of a vertex are?    Why are there many different graph drawings for the same graph?    How to model a story with a graph, including describing what the vertices are and what the edges represent?    How to calculate the degree of a vertex from an edge list?    How to calculate the degree of a vertex from a graph drawing?    What an isolated vertex and end vertex are?      "
},
{
  "id": "exer_matching_students_jobs",
  "level": "2",
  "url": "sec_graph_models.html#exer_matching_students_jobs",
  "type": "",
  "number": "9",
  "title": "Explore.",
  "body": " Explore   Five students applied for on-campus jobs, as listed in . Each job is willing to hire one of the students who applied. Each student can get at most one job.   Student's job preferences    Student  Admissions  Bookstore  Cafeteria  (tech) Desk  Events            Haloke                 Ian                 Jamar                 Khanh                 Levi            Could each student get a job? Explain.    Draw a graph to represent the situation. Hint: Use a vertex for each student and for each job. You might want to color the vertices that represent students in one color (say black) and the vertices that represent jobs in another color (say white). Yes, it is weird that we have objects of two types. Officially a graph with objects of two types, as in , is a bipartite graph.     Highlight key edges in your graph to illustrate your answer to .        Yes. Haloke: Admissions, Ian: Events, Jamar: Bookstore, Khanh: (tech) Desk, Levi: Cafeteria. Note that this solution is not unique. Can you find another solution?    Hint: Your graph should have five white vertices, five black vertices, and an edge for each in .    Hint: You should highlight five edges so that each student and each job are the endpoint of exactly one highlighted edge.     "
},
{
  "id": "exer_comp_model",
  "level": "2",
  "url": "sec_graph_models.html#exer_comp_model",
  "type": "",
  "number": "10",
  "title": "Practice.",
  "body": " Practice   In a tech company, each employee typically works on several projects at a time, often with slightly different teams for each project.   Consider a graph where the vertices are the employees and there is an edge between two vertices if the corresponding employees are on a project team together. If is an employee working on exactly one team and that team has five other members (in addition to ), what does that tell you about the vertex ?    A manager is trying to arrange for each team to travel to that team's main client for a day. If two project teams do not have any members in common, then they can travel on the same day. The manager draws a new graph with the same vertices, but now there is an edge between two vertices if the corresponding employees are not on any project team together. How is the graph related to the graph ?      "
},
{
  "id": "exer_comp_easy",
  "level": "2",
  "url": "sec_graph_models.html#exer_comp_easy",
  "type": "",
  "number": "11",
  "title": "Practice.",
  "body": " Practice   Consider the graphs , , and drawn in .   Three graphs.        Draw the complement .    Draw the complement .    Draw the complement .      The complements are drawn in .   Three complements       "
},
{
  "id": "exer_graph_elephant",
  "level": "2",
  "url": "sec_graph_models.html#exer_graph_elephant",
  "type": "",
  "number": "12",
  "title": "Practice.",
  "body": " Practice       Draw the complement of the graph drawn in .  The graph .         List the edges of .    List the edges of .         Hint: Your complement should have six vertices and seven edges. The vertices and are the end vertices of the complement.     , , .     "
},
{
  "id": "exer_dyk_graph_comp",
  "level": "2",
  "url": "sec_graph_models.html#exer_dyk_graph_comp",
  "type": "",
  "number": "13",
  "title": "Recap.",
  "body": " Recap   Do you know    Why we might model a situation with the complement of a graph instead of the original graph?    How to find the complement of a graph?      "
},
{
  "id": "exer_intersection_graphs",
  "level": "2",
  "url": "sec_graph_models.html#exer_intersection_graphs",
  "type": "",
  "number": "14",
  "title": "Explore.",
  "body": " Explore   The set has eight subsets, as defined in . They are    Draw the graph whose vertices are these subsets where there is an edge between vertices if those subsets have at least one element in common. Which vertex is isolated?    Draw the graph whose vertices are these subsets where there is an edge between vertices if those subsets have no elements in common. Are there any isolated vertices?    How are these graphs related?         Hints: Your graph should have eight vertices and 15 edges. For example, the neighbors of are , . The isolated vertex is .    Hints: Your graph should have eight vertices and 13 edges. For example, the neighbors of are and . There is no isolated vertex.    Hint: They have opposite edges.     "
},
{
  "id": "exer_deg_in_comp",
  "level": "2",
  "url": "sec_graph_models.html#exer_deg_in_comp",
  "type": "",
  "number": "15",
  "title": "Explore.",
  "body": " Explore   Consider a graph with vertices and its complement . Suppose is a vertex in . How are and related? Explain. Hint: .    Hint: For a vertex , there are other vertices each of which is a neighbor of in or a neighbor of in (and never both). Recall that counts the number of neighbors of in and counts the number of neighbors of in .   "
},
{
  "id": "sec_std_graphs",
  "level": "1",
  "url": "sec_std_graphs.html",
  "type": "Section",
  "number": "2.2",
  "title": "Standard Graphs and Representing Graphs",
  "body": " Standard Graphs and Representing Graphs   As we have seen, graphs can model many different situations. The drawing of a graph may lead to insights about the problem the graph is modeling. But the true power of graph models comes from a well-developed theory of graphs facts that are true about all graphs, and the ability to implement algorithms on graphs using computer tools. We begin this section with some theory, the first theorem of graph theory. Next, graphs often have standard pieces, such as a row of connected vertices (a path), a circle of connected vertices (a cycle), or even a group of vertices that are all adjacent to each other (a complete graph). We introduce these and other standard graphs. To implement algorithms on a graph, we first need to enter the graph into a computer program. We introduce one such tool, the adjacency matrix of a graph.    Degree Sequences  One characteristic of a graph is the list of degrees of all the vertices. Some algorithms that run on graphs require a certain smallest or largest degree, or even that all the vertices have the same degrees. We define a few relevant terms.   Degree sequence and regular graphs       The degree sequence of a graph is a list of the degrees of the vertices, including multiplicities. The degree sequence is usually written in nonincreasing order, which means largest to smallest. For example, the degree sequence of the classmates graph drawn in is .    It is possible that all the vertices of a graph have the same degree. A graph is regular if all its vertices have the same degree. A regular graph is - regular if every vertex has degree . For example, the graph in is regular because every vertex has degree four.      A 4-regular graph ( ).        Try working with these definitions.   Degrees  Consider the graph drawn in .   A graph of order six.        Find the degree sequence of .    Is regular?    Calculate the sum of the degrees of the vertices in .    How is the sum of the degrees of the vertices related to the number of edges in ? Can you explain why?    Draw a new 3-regular graph with six vertices.    Can you draw a 3-regular graph with five vertices? Explain.     In  , we observed a relationship between the degree sequence of and the number of edges in : if we add up the degrees of all the vertices in a graph, then we count each edge of the graph twice, because each endpoint of an edge counts that edge as part of their degree.  Perhaps this discussion reminds you of the Handshakes Puzzle . If each person reports the number of handshakes they did and we calculate the sum, then we count each handshake twice. Therefore, that sum would be twice the number of handshakes.  We state the general observation as a theorem.   The first theorem of graph theory   The sum of the degrees of the vertices of a graph, counting multiplicities, is twice the number of edges. Equivalently, the number of edges of a graph is half of the sum of the degrees of the vertices.    One benefit of this theorem is that visually counting edges in a complicated graph can be a challenge, but counting degrees is often easier.  Let's practice using this theorem.   Checking first theorem of graph theory       Check for the classmates graph drawn in .  The sum of the degrees is .  The number of edges is , as expected.      In  , we considered whether there exists a 3-regular graph of order five. Use to explain why there cannot exist such a graph.  If there were such a graph, then the sum of the degrees would be which is an odd integer but, by , the sum of the degrees is twice the number of edges, which is an even integer. Since an integer cannot be even and odd (which we will formally prove in ), such a graph is impossible.         It is interesting to ask if a given list of nonnegative integers is the degree sequence of a graph.   Is this list a degree sequence of a graph?   For each list of nonnegative integers, draw a graph with that degree sequence or explain why there cannot be a graph with that degree sequence.      Let's see what happens if we can draw a graph with this degree sequence. Note that there are six numbers listed, so our graph has six vertices. Therefore, each of the degree five vertices must be adjacent to all of the other five vertices. Therefore, our graph must start as shown on the left in . The vertices and have degree five, but the other vertices only have degree two. We can increase their degree to three, as desired, by adding the edges and , for example, obtaining the graph drawn on the right in . Thus, this list is the degree sequence of a graph.   Drawing a graph with degree sequence .      Note that this graph is not the only graph with this degree sequence. We could have drawn edges between and and between and , for example.         Let's see if we can draw a graph with this degree sequence. It would have six vertices. As before, the two vertices of degree five would each be adjacent to the other four vertices, as in the graph drawn on the left in . But then all of the other vertices in our graph would already have degree at least two. That is a problem because our degree sequence lists a vertex of degree one. Thus, this list is not the degree sequence of any graph.           Standard Graphs  We begin our tour of some standard graphs with two different families of graphs related to handshakes.   Handshakes graphs       In we drew a graph representing a group of six students shaking hands with each other, as drawn again in . How many vertices does this graph have and what does that number mean in the story? How many edges does that graph have and what does that number mean in the story?  The graph has six vertices that represent the six students. The graph has 15 edges that represent the 15 handshakes the group did.   A drawing of the complete graph showing six students shaking hands with each other.          Six discrete mathematics students had just finished shaking hands and started studying when three first-year students wandered into the room. The discrete students thought it would be polite to greet each visitor by shaking hands. (Each discrete mathematics student shakes hands with each first-year student.) Draw a graph representing this new situation, only including the new handshakes.  We draw the graph in and, as is common, we distinguish between the two types of students representing the discrete students with black vertices and the first-year students with white vertices. Which group is which color is not important and we do not have to color the vertices at all. Notice that there are vertices representing the nine students and there are edges representing the 18 new handshakes.   A drawing of the complete bipartite graph showing six discrete math students shaking hands with three first-year students.              introduced two important families of graphs.   Complete graphs and complete bipartite graphs       A family of graphs is a set of graphs that share many properties. We might define a family in terms of a parameter such as . In the name of the family, we often write that parameter as a subscript , a character written slightly smaller and lower. For example, the family of complete graphs (pronounced sub ) for are the graphs , , , .    For the complete graph (or handshake graph ) with vertices, denoted , has an edge between every pair of vertices. The subscript tells us the number of vertices. Note that complete starts with the sound of the letter K . For example, in  , we drew the complete graph .    For integers , the complete bipartite graph with vertices of the first type (perhaps colored black in the drawing) and vertices of the second type (perhaps colored white in the drawing), denoted has an edge between each vertex of the first type and each vertex of the second type (and no other edges). For example, in  , we drew the complete bipartite graph .    A special case of complete bipartite graphs is the star graphs for . For example, a star graph might model a corporate reporting structure such as a vice-president and their directors. shows drawings of and where we have drawn the white vertices in a circle around the central black hub vertex, as is customary.  The stars and .            Let's look more closely at a few examples.   Complete, complete bipartite, and star graphs       Draw the complete graphs , , , , and .  See .   The complete graphs , , , , and .          For each graph, count the number of vertices and edges and determine the degree sequence: the complete graph , the complete bipartite graph , and the star   The complete graph has six vertices and 15 edges. Every vertex has degree five, and so the degree sequence is .  The complete bipartite graph has nine vertices and 18 edges. The black vertices have degree three and the white vertices have degree six, so the degree sequence is .  The star graph has six vertices and five edges. Its hub vertex has degree five and the end vertices have degree one, so its degree sequence is .      Draw the complete bipartite graph .  See .   The complete bipartite graph             There are two more important families of graphs.   Paths and cycles       For , the path with vertices, denoted , has vertices each adjacent to the next in a row. Officially, if the vertex set is , then the edge set is . For example, shows drawings of the paths and .  The paths and .         For , the cycle with vertices, denoted , has vertices each adjacent to the next in a circle. Officially, if the vertex set is , then the edge set is . For example, shows drawings of the cycles and .  The cycles and .            Let's look at an example.   Paths and cycles   For each graph, count the number of vertices and edges and write the degree sequence.   The paths and .  The path has four vertices and three edges. The end vertices have degree one and the middle vertices have degree two. The degree sequence is .  The path has five vertices and four edges. The degree sequence is .      The cycles and .  The cycle has four vertices and four edges. Every vertex has degree two, and so the degree sequence is .  The cycle has five vertices, five edges, and degree sequence .         Practice working with standard graphs and reading new definitions for families of graphs.   Standard families of graphs  Draw each graph, count the number of vertices and edges, and list the degree sequence.    The complete graph .    The complete bipartite graph .    The star .    The path .    The cycle .    The wheel consists of the cycle with an additional hub vertex that is adjacent to each vertex in the cycle.    The ladder consists of two copies of the path with additional edges between each pair of corresponding vertices. Officially, if the vertex set is , then the edges are   top rail:     bottom rail:     rungs:  .         Let's check answers to  and . We begin with a definition.   Wheels and ladders       For , the wheel , denoted , consists of the cycle with an additional hub vertex that is adjacent to each vertex in the cycle. For example, shows a drawing of .  The wheel .         For , ladder , denoted , consists of two copies of the path with additional edges between each pair of corresponding vertices. Officially, if the vertex set is , then the edges are   top rail:     bottom rail:     rungs:  .   For example, shows a drawing of .  The ladder .            Let's work with wheels and ladders.   Wheels and ladders       Draw the wheels and . For each graph count the number of vertices and edges, and list the degree sequence.   shows a drawing of the graphs. The wheel has five vertices and eight edges. The hub vertex has degree four and each of the outer vertices has degree three. Its degree sequence is .  The wheel has six vertices and ten edges. The hub vertex has degree five and each of the outer vertices has degree three. Its degree sequence is .   The wheels and .          Draw the ladder , count the number of vertices and edges, and list the degree sequence.   shows a drawing of which has ten vertices and thirteen edges. The four corner vertices have degree two and the rest of the vertices have degree three. Its degree sequence is .   The ladder .               The Adjacency Matrix of a Graph  Graph models are especially useful because computers can work with graphs. For example, is a package of graph computation tools written in Python programming language. One way for a computer to work with a graph is to list the vertices and edges. Another way is to list each vertex and its neighbors. An especially useful option represents a graph with a matrix (rectangular array) of 0 s and 1 s.   Adjacency matrix       For any matrix , the -entry of , denoted , is the entry in row and column of . For example, if , then , , , and .    To create an adjacency matrix  of a graph with vertices, we first list the vertices of in order as . Then, the -entry of equals 1 if is an edge and 0 if is not an edge. See for an example.    Observe that , so the adjacency matrix of a graph is symmetric . We can use this symmetry to build an adjacency matrix. For example, once we knew that the first row of the adjacency matrix was 010010 , it follows that the first column of the adjacency matrix was also 010010 .    If the graph has vertices, then the adjacency matrix of is an matrix , which means that it has rows and columns.       Let's look at an example.   Adjacency matrix   Find an adjacency matrix of the graph from .     has an adjacency matrix shown in .   An adjacency matrix of the graph in             Notice that the matrix depends on the order of the vertices, here shown in alphabetical order. To obtain the first row of this matrix, we note that the vertex is adjacent to the vertices and . Thus, and and the other entries in the first row are 0 . Similarly, to get the second row, we note that is adjacent to , , , and . Thus, , , , and and the other entries are 0 . The other rows follow in a similar way.    It is your turn to work with adjacency matrices.   Adjacency matrix      Determine the adjacency matrix for the graph and its complement drawn in using the vertices in alphabetical order.  The graph and its complement .         How are the adjacency matrices for and from related?    Calculate the sum of the entries in each row of the adjacency matrix for from . How are these sums related to the vertices of ? Explain.    Determine the adjacency matrix for the complete graph .    Describe the general pattern for the adjacency matrix for the complete graph for .    Determine the adjacency matrix for the star . Hint: List the center black vertex first, and then list all the white vertices.    Describe the general pattern for the adjacency matrix for the star for .      We make a few observations about adjacency matrices.   Adjacency matrices   Let be a graph with adjacency matrix .   Let be a vertex in . The degree of is equal to the sum of the entries in the row (or column) of corresponding to .    The adjacency matrix of the complement has the property that for all , .         Exercises   Exercises for Degree Sequences   Practice   Consider the graphs drawn in .   Find the degree sequence of each graph: , , and .    Are any of the graphs , , or regular?         Hint: The degree sequence of is .    Hint: One of the graphs is regular.       Practice   Consider the complicated graph drawn in .   The complicated graph .        List each vertex of and its degree.    Calculate the sum of the degrees of the vertices in .    How many edges does have? Hint: Use the first theorem of graph theory .         , , , ,     54    Hint: Use the hint.       Understand   if is a 4-regular graph with 100 vertices, then how many edges does have? Explain.    Hint: The sum of the degrees is 400.     Understand   Draw a graph with the given degree sequence.                       Hint: There are two possible graphs. One is six vertices in a circle. The other has two separate pieces. Check that each vertex of the graph you drew has degree two.     shows one possible answer.  An example of a graph with degree sequence .         Hint: The degree three vertex and the degree two vertices must be adjacent.       Understand       Draw a 3-regular graph with four vertices.    Draw a 3-regular graph with six vertices.    Draw a 3-regular graph with ten vertices.        Understand       Draw a 2-regular graph with eight vertices.    Draw a 3-regular graph with eight vertices.    Draw a 4-regular graph with eight vertices.    Draw a 5-regular graph with eight vertices.         Hint: One possible answer is eight vertices drawn in a circle with each vertex adjacent to the next.     shows one possible answer (on the left), but there are other possible answers.  A 3-regular graph with eight vertices and a 5-regular graph with eight vertices.         Hint: Try something like , but with eight vertices.     shows one possible answer (on the right), but there are other possible answers.       Recap   Do you know    How to find the degree sequence of a graph?    What a regular graph is?    Why the sum of the degrees in a graph is twice the number of edges?    How to explain why a given list is not the degree sequence of any graph?        Explore   Explain why there does not exist a graph with the given degree sequence.                       Hint: There are only five vertices    Hint: See .    Hint: See .        Exercises for Standard Graphs   Practice   Draw each graph, list its degree sequence, and state whether it is regular.   The complete graph .    The complete bipartite graph .    The star .    The path .    The cycle .    The wheel .    The ladder .         The graph is drawn in . The degree sequence is . It is regular.    Hint: Your drawing should have three black vertices, four white vertices, and every possible black-white edge. The degree sequence is .    Hint: The graph has a total of seven vertices and the degree sequence is .    Hint: The graph has a total of six vertices and five edges.    Hint: The graph is 2-regular and has five vertices.    Hint: The graph has a total of seven vertices and the degree sequence is .    Hint: The graph should look like but without and (and edges to them.)       Practice   Consider the complete graph .   Count the number of vertices.    What is the degree of each vertex?    Show how to use to count the number of edges of .         10    Hint: The answer is not 10.    Hint: The answer is less than 50.       Practice   Draw each graph and its complement.   The cycle .    The path .    The wheel .        Understand       Draw the complete graph and its complement.    Draw the complete graph and its complement.    What can you say about the complement of the complete graph ?        Understand   When drawing a complete graph (or star) and its complement, show the usual black and white coloring of the vertices.   Draw the complete bipartite graph and its complement.    Draw the star and its complement.    Draw the complete bipartite graph and its complement.    Describe the complement of .         See .  The complete bipartite graph (left) and its complement (right).         Hint: The complement consists of a 3-cycle and an isolated vertex.    Hint: The complement has a piece with two vertices and a separate piece with five vertices. It has a total of 11 edges.    Hint: The answer involves complete graphs.       Understand   The Harary graphs  are a family of 4-regular graphs for . The graph is constructed from the cycle by adding an edge between each pair of vertices that are two edges apart in the cycle. For example, shows .   Draw and count the number of edges.    Draw and count the number of edges.    What is the standard name for ?    Conjecture the number of edges in based on the pattern so far. Your answer should involve .    Confirm the number of edges of using .         Hint: It has 14 edges.    See . It has 16 edges.  The Harary graph .         Hint: Draw the graph.    Hint: has 10 edges, has 12 edges, has 14 edges, and has 16 edges.    Hint: .       Recap   Do you know    What graphs are denoted , , , , , and ?    How the complete graphs are defined?    How the complete bipartite graphs are defined?    Why we often color the vertices of using two different colors?    How paths are defined?    How cycles are defined?    How wheels defined?    How ladders are defined?    How to draw standard graphs or graphs from newly defined graph families?        Explore   In  , we defined a word graph whose vertices are the given words where two words are connected by an edge if one word can be changed to the other by making exactly one of the following changes.   Reorder  Keep the same letters, but change the order.    Replace  Keep the letters in the same order, but replace one letter with a different letter.     For each graph listed, find a set of four words whose word graph is that graph. Be careful to check that if two vertices are not connected by an edge in the graph, then there is no way to change between those two words following the rules.   The complete graph .    The path .    The cycle .         Exercises for The Adjacency Matrix of a Graph   Practice       Determine the adjacency matrix of the graph shown in . List the vertices alphabetically.  Determine the adjacency matrix of this graph .         Draw the graph with adjacency matrix and vertices , , , , and in that order.         Hint: The matrix has five rows and five columns. The first row (and column) are 01101 .    See .  The graph with adjacency matrix from .            Practice       Draw the path and determine its adjacency matrix.    Draw the cycle graph and determine its adjacency matrix.    How are the matrices in and related? Hint: What is the same and what is different?         Hint: See . The adjacency matrix with vertices ordered from left to right is     Hint: See .    Hint: The adjacency matrix for is the adjacency matrix for with two more 1 s. Say where those two additional 1 s are.       Understand       Find the adjacency matrix for the wheel graph where the hub vertex is listed first.    Describe how to construct the adjacency matrix for using the adjacency matrix for .         The adjacency matrix with hub vertex listed first, and then the other vertices listed going around the cycle, is The dividing lines are not officially part of the matrix.    Hint: The dividing lines create four blocks. Explain how each of the four blocks is constructed. For example, the upper left-hand block is a 0 . The block to the right and block below it are each . The lower right-hand block is . Make sure to mention the adjacency matrix for .       Understand       Given an adjacency matrix, how can you determine the number of vertices in the corresponding graph?    Given the adjacency matrix, how can you determine the number of edges of the corresponding graph (without drawing the graph)?        Recap   Do you know    How might we store a graph on a computer?    How to construct the adjacency matrix of a graph or draw a graph given its adjacency matrix?    Where can we find the degrees of vertices in the adjacency matrix?    What the relationship is between the adjacency matrix of a graph and the adjacency matrix of its complement?    How to describe the adjacency matrix of a family of graphs?        Explore       Determine the adjacency matrix for the complete bipartite graph . List all the black vertices and then all the white vertices.    Describe the general pattern for the adjacency matrix for the complete graph for .         The adjacency matrix is The dividing lines are not officially part of the matrix.    Hint: The dividing lines create four blocks. Explain what size each block is and how each block is constructed.       Explore       Describe the general pattern for the adjacency matrix for the paths for . Hint: look at your matrix from  .    Describe how to construct the adjacency matrix for using the adjacency matrix for . Hint: look at your matrix from  and your answer to .        Explore   The Harary graphs are defined in .   Determine the adjacency matrix for , using the vertices in the order they appear around the main cycle.    Repeat for .    Describe the adjacency matrix of for in general.        Explore   Explain why each part of is true. Note: explain in general, not just examples.      "
},
{
  "id": "defn_ds_regular",
  "level": "2",
  "url": "sec_std_graphs.html#defn_ds_regular",
  "type": "Definition",
  "number": "2.2.1",
  "title": "Degree sequence and regular graphs.",
  "body": " Degree sequence and regular graphs       The degree sequence of a graph is a list of the degrees of the vertices, including multiplicities. The degree sequence is usually written in nonincreasing order, which means largest to smallest. For example, the degree sequence of the classmates graph drawn in is .    It is possible that all the vertices of a graph have the same degree. A graph is regular if all its vertices have the same degree. A regular graph is - regular if every vertex has degree . For example, the graph in is regular because every vertex has degree four.      A 4-regular graph ( ).       "
},
{
  "id": "act_deg_seq",
  "level": "2",
  "url": "sec_std_graphs.html#act_deg_seq",
  "type": "Activity",
  "number": "2.2.A",
  "title": "Degrees.",
  "body": " Degrees  Consider the graph drawn in .   A graph of order six.        Find the degree sequence of .    Is regular?    Calculate the sum of the degrees of the vertices in .    How is the sum of the degrees of the vertices related to the number of edges in ? Can you explain why?    Draw a new 3-regular graph with six vertices.    Can you draw a 3-regular graph with five vertices? Explain.    "
},
{
  "id": "thm_first_thm_graph_thy",
  "level": "2",
  "url": "sec_std_graphs.html#thm_first_thm_graph_thy",
  "type": "Theorem",
  "number": "2.2.4",
  "title": "The first theorem of graph theory.",
  "body": " The first theorem of graph theory   The sum of the degrees of the vertices of a graph, counting multiplicities, is twice the number of edges. Equivalently, the number of edges of a graph is half of the sum of the degrees of the vertices.   "
},
{
  "id": "exam_check_first_thm_graph_thy",
  "level": "2",
  "url": "sec_std_graphs.html#exam_check_first_thm_graph_thy",
  "type": "Example",
  "number": "2.2.5",
  "title": "Checking first theorem of graph theory.",
  "body": " Checking first theorem of graph theory       Check for the classmates graph drawn in .  The sum of the degrees is .  The number of edges is , as expected.      In  , we considered whether there exists a 3-regular graph of order five. Use to explain why there cannot exist such a graph.  If there were such a graph, then the sum of the degrees would be which is an odd integer but, by , the sum of the degrees is twice the number of edges, which is an even integer. Since an integer cannot be even and odd (which we will formally prove in ), such a graph is impossible.        "
},
{
  "id": "exam_graphical",
  "level": "2",
  "url": "sec_std_graphs.html#exam_graphical",
  "type": "Example",
  "number": "2.2.6",
  "title": "Is this list a degree sequence of a graph?",
  "body": " Is this list a degree sequence of a graph?   For each list of nonnegative integers, draw a graph with that degree sequence or explain why there cannot be a graph with that degree sequence.      Let's see what happens if we can draw a graph with this degree sequence. Note that there are six numbers listed, so our graph has six vertices. Therefore, each of the degree five vertices must be adjacent to all of the other five vertices. Therefore, our graph must start as shown on the left in . The vertices and have degree five, but the other vertices only have degree two. We can increase their degree to three, as desired, by adding the edges and , for example, obtaining the graph drawn on the right in . Thus, this list is the degree sequence of a graph.   Drawing a graph with degree sequence .      Note that this graph is not the only graph with this degree sequence. We could have drawn edges between and and between and , for example.         Let's see if we can draw a graph with this degree sequence. It would have six vertices. As before, the two vertices of degree five would each be adjacent to the other four vertices, as in the graph drawn on the left in . But then all of the other vertices in our graph would already have degree at least two. That is a problem because our degree sequence lists a vertex of degree one. Thus, this list is not the degree sequence of any graph.        "
},
{
  "id": "exam_handshake_graphs",
  "level": "2",
  "url": "sec_std_graphs.html#exam_handshake_graphs",
  "type": "Example",
  "number": "2.2.8",
  "title": "Handshakes graphs.",
  "body": " Handshakes graphs       In we drew a graph representing a group of six students shaking hands with each other, as drawn again in . How many vertices does this graph have and what does that number mean in the story? How many edges does that graph have and what does that number mean in the story?  The graph has six vertices that represent the six students. The graph has 15 edges that represent the 15 handshakes the group did.   A drawing of the complete graph showing six students shaking hands with each other.          Six discrete mathematics students had just finished shaking hands and started studying when three first-year students wandered into the room. The discrete students thought it would be polite to greet each visitor by shaking hands. (Each discrete mathematics student shakes hands with each first-year student.) Draw a graph representing this new situation, only including the new handshakes.  We draw the graph in and, as is common, we distinguish between the two types of students representing the discrete students with black vertices and the first-year students with white vertices. Which group is which color is not important and we do not have to color the vertices at all. Notice that there are vertices representing the nine students and there are edges representing the 18 new handshakes.   A drawing of the complete bipartite graph showing six discrete math students shaking hands with three first-year students.            "
},
{
  "id": "defn_complete_completebipartite",
  "level": "2",
  "url": "sec_std_graphs.html#defn_complete_completebipartite",
  "type": "Definition",
  "number": "2.2.11",
  "title": "Complete graphs and complete bipartite graphs.",
  "body": " Complete graphs and complete bipartite graphs       A family of graphs is a set of graphs that share many properties. We might define a family in terms of a parameter such as . In the name of the family, we often write that parameter as a subscript , a character written slightly smaller and lower. For example, the family of complete graphs (pronounced sub ) for are the graphs , , , .    For the complete graph (or handshake graph ) with vertices, denoted , has an edge between every pair of vertices. The subscript tells us the number of vertices. Note that complete starts with the sound of the letter K . For example, in  , we drew the complete graph .    For integers , the complete bipartite graph with vertices of the first type (perhaps colored black in the drawing) and vertices of the second type (perhaps colored white in the drawing), denoted has an edge between each vertex of the first type and each vertex of the second type (and no other edges). For example, in  , we drew the complete bipartite graph .    A special case of complete bipartite graphs is the star graphs for . For example, a star graph might model a corporate reporting structure such as a vice-president and their directors. shows drawings of and where we have drawn the white vertices in a circle around the central black hub vertex, as is customary.  The stars and .           "
},
{
  "id": "exam_complete_completebipartite_star",
  "level": "2",
  "url": "sec_std_graphs.html#exam_complete_completebipartite_star",
  "type": "Example",
  "number": "2.2.13",
  "title": "Complete, complete bipartite, and star graphs.",
  "body": " Complete, complete bipartite, and star graphs       Draw the complete graphs , , , , and .  See .   The complete graphs , , , , and .          For each graph, count the number of vertices and edges and determine the degree sequence: the complete graph , the complete bipartite graph , and the star   The complete graph has six vertices and 15 edges. Every vertex has degree five, and so the degree sequence is .  The complete bipartite graph has nine vertices and 18 edges. The black vertices have degree three and the white vertices have degree six, so the degree sequence is .  The star graph has six vertices and five edges. Its hub vertex has degree five and the end vertices have degree one, so its degree sequence is .      Draw the complete bipartite graph .  See .   The complete bipartite graph            "
},
{
  "id": "defn_paths_cycles",
  "level": "2",
  "url": "sec_std_graphs.html#defn_paths_cycles",
  "type": "Definition",
  "number": "2.2.16",
  "title": "Paths and cycles.",
  "body": " Paths and cycles       For , the path with vertices, denoted , has vertices each adjacent to the next in a row. Officially, if the vertex set is , then the edge set is . For example, shows drawings of the paths and .  The paths and .         For , the cycle with vertices, denoted , has vertices each adjacent to the next in a circle. Officially, if the vertex set is , then the edge set is . For example, shows drawings of the cycles and .  The cycles and .           "
},
{
  "id": "exam_paths_cycles",
  "level": "2",
  "url": "sec_std_graphs.html#exam_paths_cycles",
  "type": "Example",
  "number": "2.2.19",
  "title": "Paths and cycles.",
  "body": " Paths and cycles   For each graph, count the number of vertices and edges and write the degree sequence.   The paths and .  The path has four vertices and three edges. The end vertices have degree one and the middle vertices have degree two. The degree sequence is .  The path has five vertices and four edges. The degree sequence is .      The cycles and .  The cycle has four vertices and four edges. Every vertex has degree two, and so the degree sequence is .  The cycle has five vertices, five edges, and degree sequence .        "
},
{
  "id": "act_std_families",
  "level": "2",
  "url": "sec_std_graphs.html#act_std_families",
  "type": "Activity",
  "number": "2.2.B",
  "title": "Standard families of graphs.",
  "body": " Standard families of graphs  Draw each graph, count the number of vertices and edges, and list the degree sequence.    The complete graph .    The complete bipartite graph .    The star .    The path .    The cycle .    The wheel consists of the cycle with an additional hub vertex that is adjacent to each vertex in the cycle.    The ladder consists of two copies of the path with additional edges between each pair of corresponding vertices. Officially, if the vertex set is , then the edges are   top rail:     bottom rail:     rungs:  .        "
},
{
  "id": "defn_wheel_ladder",
  "level": "2",
  "url": "sec_std_graphs.html#defn_wheel_ladder",
  "type": "Definition",
  "number": "2.2.20",
  "title": "Wheels and ladders.",
  "body": " Wheels and ladders       For , the wheel , denoted , consists of the cycle with an additional hub vertex that is adjacent to each vertex in the cycle. For example, shows a drawing of .  The wheel .         For , ladder , denoted , consists of two copies of the path with additional edges between each pair of corresponding vertices. Officially, if the vertex set is , then the edges are   top rail:     bottom rail:     rungs:  .   For example, shows a drawing of .  The ladder .           "
},
{
  "id": "exam_wheel_ladder",
  "level": "2",
  "url": "sec_std_graphs.html#exam_wheel_ladder",
  "type": "Example",
  "number": "2.2.23",
  "title": "Wheels and ladders.",
  "body": " Wheels and ladders       Draw the wheels and . For each graph count the number of vertices and edges, and list the degree sequence.   shows a drawing of the graphs. The wheel has five vertices and eight edges. The hub vertex has degree four and each of the outer vertices has degree three. Its degree sequence is .  The wheel has six vertices and ten edges. The hub vertex has degree five and each of the outer vertices has degree three. Its degree sequence is .   The wheels and .          Draw the ladder , count the number of vertices and edges, and list the degree sequence.   shows a drawing of which has ten vertices and thirteen edges. The four corner vertices have degree two and the rest of the vertices have degree three. Its degree sequence is .   The ladder .            "
},
{
  "id": "defn_adj_matrix",
  "level": "2",
  "url": "sec_std_graphs.html#defn_adj_matrix",
  "type": "Definition",
  "number": "2.2.26",
  "title": "Adjacency matrix.",
  "body": " Adjacency matrix       For any matrix , the -entry of , denoted , is the entry in row and column of . For example, if , then , , , and .    To create an adjacency matrix  of a graph with vertices, we first list the vertices of in order as . Then, the -entry of equals 1 if is an edge and 0 if is not an edge. See for an example.    Observe that , so the adjacency matrix of a graph is symmetric . We can use this symmetry to build an adjacency matrix. For example, once we knew that the first row of the adjacency matrix was 010010 , it follows that the first column of the adjacency matrix was also 010010 .    If the graph has vertices, then the adjacency matrix of is an matrix , which means that it has rows and columns.      "
},
{
  "id": "exam_adj_mat",
  "level": "2",
  "url": "sec_std_graphs.html#exam_adj_mat",
  "type": "Example",
  "number": "2.2.27",
  "title": "Adjacency matrix.",
  "body": " Adjacency matrix   Find an adjacency matrix of the graph from .     has an adjacency matrix shown in .   An adjacency matrix of the graph in             Notice that the matrix depends on the order of the vertices, here shown in alphabetical order. To obtain the first row of this matrix, we note that the vertex is adjacent to the vertices and . Thus, and and the other entries in the first row are 0 . Similarly, to get the second row, we note that is adjacent to , , , and . Thus, , , , and and the other entries are 0 . The other rows follow in a similar way.   "
},
{
  "id": "act_adj_matrix",
  "level": "2",
  "url": "sec_std_graphs.html#act_adj_matrix",
  "type": "Activity",
  "number": "2.2.C",
  "title": "Adjacency matrix.",
  "body": " Adjacency matrix      Determine the adjacency matrix for the graph and its complement drawn in using the vertices in alphabetical order.  The graph and its complement .         How are the adjacency matrices for and from related?    Calculate the sum of the entries in each row of the adjacency matrix for from . How are these sums related to the vertices of ? Explain.    Determine the adjacency matrix for the complete graph .    Describe the general pattern for the adjacency matrix for the complete graph for .    Determine the adjacency matrix for the star . Hint: List the center black vertex first, and then list all the white vertices.    Describe the general pattern for the adjacency matrix for the star for .     "
},
{
  "id": "thm_adj_mat",
  "level": "2",
  "url": "sec_std_graphs.html#thm_adj_mat",
  "type": "Theorem",
  "number": "2.2.30",
  "title": "Adjacency matrices.",
  "body": " Adjacency matrices   Let be a graph with adjacency matrix .   Let be a vertex in . The degree of is equal to the sum of the entries in the row (or column) of corresponding to .    The adjacency matrix of the complement has the property that for all , .      "
},
{
  "id": "exer_deg_seq",
  "level": "2",
  "url": "sec_std_graphs.html#exer_deg_seq",
  "type": "",
  "number": "1",
  "title": "Practice.",
  "body": " Practice   Consider the graphs drawn in .   Find the degree sequence of each graph: , , and .    Are any of the graphs , , or regular?         Hint: The degree sequence of is .    Hint: One of the graphs is regular.     "
},
{
  "id": "exer_count_edges",
  "level": "2",
  "url": "sec_std_graphs.html#exer_count_edges",
  "type": "",
  "number": "2",
  "title": "Practice.",
  "body": " Practice   Consider the complicated graph drawn in .   The complicated graph .        List each vertex of and its degree.    Calculate the sum of the degrees of the vertices in .    How many edges does have? Hint: Use the first theorem of graph theory .         , , , ,     54    Hint: Use the hint.     "
},
{
  "id": "exer_size_4reg",
  "level": "2",
  "url": "sec_std_graphs.html#exer_size_4reg",
  "type": "",
  "number": "3",
  "title": "Understand.",
  "body": " Understand   if is a 4-regular graph with 100 vertices, then how many edges does have? Explain.    Hint: The sum of the degrees is 400.   "
},
{
  "id": "exer_show_graphical",
  "level": "2",
  "url": "sec_std_graphs.html#exer_show_graphical",
  "type": "",
  "number": "4",
  "title": "Understand.",
  "body": " Understand   Draw a graph with the given degree sequence.                       Hint: There are two possible graphs. One is six vertices in a circle. The other has two separate pieces. Check that each vertex of the graph you drew has degree two.     shows one possible answer.  An example of a graph with degree sequence .         Hint: The degree three vertex and the degree two vertices must be adjacent.     "
},
{
  "id": "exer_draw_regular_graph",
  "level": "2",
  "url": "sec_std_graphs.html#exer_draw_regular_graph",
  "type": "",
  "number": "5",
  "title": "Understand.",
  "body": " Understand       Draw a 3-regular graph with four vertices.    Draw a 3-regular graph with six vertices.    Draw a 3-regular graph with ten vertices.      "
},
{
  "id": "exer_regular_graph_order8",
  "level": "2",
  "url": "sec_std_graphs.html#exer_regular_graph_order8",
  "type": "",
  "number": "6",
  "title": "Understand.",
  "body": " Understand       Draw a 2-regular graph with eight vertices.    Draw a 3-regular graph with eight vertices.    Draw a 4-regular graph with eight vertices.    Draw a 5-regular graph with eight vertices.         Hint: One possible answer is eight vertices drawn in a circle with each vertex adjacent to the next.     shows one possible answer (on the left), but there are other possible answers.  A 3-regular graph with eight vertices and a 5-regular graph with eight vertices.         Hint: Try something like , but with eight vertices.     shows one possible answer (on the right), but there are other possible answers.     "
},
{
  "id": "exer_dyk_deg_seq",
  "level": "2",
  "url": "sec_std_graphs.html#exer_dyk_deg_seq",
  "type": "",
  "number": "7",
  "title": "Recap.",
  "body": " Recap   Do you know    How to find the degree sequence of a graph?    What a regular graph is?    Why the sum of the degrees in a graph is twice the number of edges?    How to explain why a given list is not the degree sequence of any graph?      "
},
{
  "id": "exer_show_not_graphical",
  "level": "2",
  "url": "sec_std_graphs.html#exer_show_not_graphical",
  "type": "",
  "number": "8",
  "title": "Explore.",
  "body": " Explore   Explain why there does not exist a graph with the given degree sequence.                       Hint: There are only five vertices    Hint: See .    Hint: See .     "
},
{
  "id": "exer_find_ds",
  "level": "2",
  "url": "sec_std_graphs.html#exer_find_ds",
  "type": "",
  "number": "9",
  "title": "Practice.",
  "body": " Practice   Draw each graph, list its degree sequence, and state whether it is regular.   The complete graph .    The complete bipartite graph .    The star .    The path .    The cycle .    The wheel .    The ladder .         The graph is drawn in . The degree sequence is . It is regular.    Hint: Your drawing should have three black vertices, four white vertices, and every possible black-white edge. The degree sequence is .    Hint: The graph has a total of seven vertices and the degree sequence is .    Hint: The graph has a total of six vertices and five edges.    Hint: The graph is 2-regular and has five vertices.    Hint: The graph has a total of seven vertices and the degree sequence is .    Hint: The graph should look like but without and (and edges to them.)     "
},
{
  "id": "exer_K10",
  "level": "2",
  "url": "sec_std_graphs.html#exer_K10",
  "type": "",
  "number": "10",
  "title": "Practice.",
  "body": " Practice   Consider the complete graph .   Count the number of vertices.    What is the degree of each vertex?    Show how to use to count the number of edges of .         10    Hint: The answer is not 10.    Hint: The answer is less than 50.     "
},
{
  "id": "exer_graph_comp_cycle_path_wheel",
  "level": "2",
  "url": "sec_std_graphs.html#exer_graph_comp_cycle_path_wheel",
  "type": "",
  "number": "11",
  "title": "Practice.",
  "body": " Practice   Draw each graph and its complement.   The cycle .    The path .    The wheel .      "
},
{
  "id": "exer_graph_comp_complete",
  "level": "2",
  "url": "sec_std_graphs.html#exer_graph_comp_complete",
  "type": "",
  "number": "12",
  "title": "Understand.",
  "body": " Understand       Draw the complete graph and its complement.    Draw the complete graph and its complement.    What can you say about the complement of the complete graph ?      "
},
{
  "id": "exer_comp_complete_bipartite",
  "level": "2",
  "url": "sec_std_graphs.html#exer_comp_complete_bipartite",
  "type": "",
  "number": "13",
  "title": "Understand.",
  "body": " Understand   When drawing a complete graph (or star) and its complement, show the usual black and white coloring of the vertices.   Draw the complete bipartite graph and its complement.    Draw the star and its complement.    Draw the complete bipartite graph and its complement.    Describe the complement of .         See .  The complete bipartite graph (left) and its complement (right).         Hint: The complement consists of a 3-cycle and an isolated vertex.    Hint: The complement has a piece with two vertices and a separate piece with five vertices. It has a total of 11 edges.    Hint: The answer involves complete graphs.     "
},
{
  "id": "exer_harary",
  "level": "2",
  "url": "sec_std_graphs.html#exer_harary",
  "type": "",
  "number": "14",
  "title": "Understand.",
  "body": " Understand   The Harary graphs  are a family of 4-regular graphs for . The graph is constructed from the cycle by adding an edge between each pair of vertices that are two edges apart in the cycle. For example, shows .   Draw and count the number of edges.    Draw and count the number of edges.    What is the standard name for ?    Conjecture the number of edges in based on the pattern so far. Your answer should involve .    Confirm the number of edges of using .         Hint: It has 14 edges.    See . It has 16 edges.  The Harary graph .         Hint: Draw the graph.    Hint: has 10 edges, has 12 edges, has 14 edges, and has 16 edges.    Hint: .     "
},
{
  "id": "exer_dyk_std_graphs",
  "level": "2",
  "url": "sec_std_graphs.html#exer_dyk_std_graphs",
  "type": "",
  "number": "15",
  "title": "Recap.",
  "body": " Recap   Do you know    What graphs are denoted , , , , , and ?    How the complete graphs are defined?    How the complete bipartite graphs are defined?    Why we often color the vertices of using two different colors?    How paths are defined?    How cycles are defined?    How wheels defined?    How ladders are defined?    How to draw standard graphs or graphs from newly defined graph families?      "
},
{
  "id": "exer_word_graphs_building",
  "level": "2",
  "url": "sec_std_graphs.html#exer_word_graphs_building",
  "type": "",
  "number": "16",
  "title": "Explore.",
  "body": " Explore   In  , we defined a word graph whose vertices are the given words where two words are connected by an edge if one word can be changed to the other by making exactly one of the following changes.   Reorder  Keep the same letters, but change the order.    Replace  Keep the letters in the same order, but replace one letter with a different letter.     For each graph listed, find a set of four words whose word graph is that graph. Be careful to check that if two vertices are not connected by an edge in the graph, then there is no way to change between those two words following the rules.   The complete graph .    The path .    The cycle .      "
},
{
  "id": "exer_my_first_adj_mat",
  "level": "2",
  "url": "sec_std_graphs.html#exer_my_first_adj_mat",
  "type": "",
  "number": "17",
  "title": "Practice.",
  "body": " Practice       Determine the adjacency matrix of the graph shown in . List the vertices alphabetically.  Determine the adjacency matrix of this graph .         Draw the graph with adjacency matrix and vertices , , , , and in that order.         Hint: The matrix has five rows and five columns. The first row (and column) are 01101 .    See .  The graph with adjacency matrix from .          "
},
{
  "id": "exer_adj_matrix_P5C5",
  "level": "2",
  "url": "sec_std_graphs.html#exer_adj_matrix_P5C5",
  "type": "",
  "number": "18",
  "title": "Practice.",
  "body": " Practice       Draw the path and determine its adjacency matrix.    Draw the cycle graph and determine its adjacency matrix.    How are the matrices in and related? Hint: What is the same and what is different?         Hint: See . The adjacency matrix with vertices ordered from left to right is     Hint: See .    Hint: The adjacency matrix for is the adjacency matrix for with two more 1 s. Say where those two additional 1 s are.     "
},
{
  "id": "exer_adj_matrix_wheels",
  "level": "2",
  "url": "sec_std_graphs.html#exer_adj_matrix_wheels",
  "type": "",
  "number": "19",
  "title": "Understand.",
  "body": " Understand       Find the adjacency matrix for the wheel graph where the hub vertex is listed first.    Describe how to construct the adjacency matrix for using the adjacency matrix for .         The adjacency matrix with hub vertex listed first, and then the other vertices listed going around the cycle, is The dividing lines are not officially part of the matrix.    Hint: The dividing lines create four blocks. Explain how each of the four blocks is constructed. For example, the upper left-hand block is a 0 . The block to the right and block below it are each . The lower right-hand block is . Make sure to mention the adjacency matrix for .     "
},
{
  "id": "exer_adj_mat_info",
  "level": "2",
  "url": "sec_std_graphs.html#exer_adj_mat_info",
  "type": "",
  "number": "20",
  "title": "Understand.",
  "body": " Understand       Given an adjacency matrix, how can you determine the number of vertices in the corresponding graph?    Given the adjacency matrix, how can you determine the number of edges of the corresponding graph (without drawing the graph)?      "
},
{
  "id": "exer_dyk_adj_matrix",
  "level": "2",
  "url": "sec_std_graphs.html#exer_dyk_adj_matrix",
  "type": "",
  "number": "21",
  "title": "Recap.",
  "body": " Recap   Do you know    How might we store a graph on a computer?    How to construct the adjacency matrix of a graph or draw a graph given its adjacency matrix?    Where can we find the degrees of vertices in the adjacency matrix?    What the relationship is between the adjacency matrix of a graph and the adjacency matrix of its complement?    How to describe the adjacency matrix of a family of graphs?      "
},
{
  "id": "exer_adj_mat_complete",
  "level": "2",
  "url": "sec_std_graphs.html#exer_adj_mat_complete",
  "type": "",
  "number": "22",
  "title": "Explore.",
  "body": " Explore       Determine the adjacency matrix for the complete bipartite graph . List all the black vertices and then all the white vertices.    Describe the general pattern for the adjacency matrix for the complete graph for .         The adjacency matrix is The dividing lines are not officially part of the matrix.    Hint: The dividing lines create four blocks. Explain what size each block is and how each block is constructed.     "
},
{
  "id": "exer_adj_mat_path_cycle",
  "level": "2",
  "url": "sec_std_graphs.html#exer_adj_mat_path_cycle",
  "type": "",
  "number": "23",
  "title": "Explore.",
  "body": " Explore       Describe the general pattern for the adjacency matrix for the paths for . Hint: look at your matrix from  .    Describe how to construct the adjacency matrix for using the adjacency matrix for . Hint: look at your matrix from  and your answer to .      "
},
{
  "id": "exer_adj_mat_harary",
  "level": "2",
  "url": "sec_std_graphs.html#exer_adj_mat_harary",
  "type": "",
  "number": "24",
  "title": "Explore.",
  "body": " Explore   The Harary graphs are defined in .   Determine the adjacency matrix for , using the vertices in the order they appear around the main cycle.    Repeat for .    Describe the adjacency matrix of for in general.      "
},
{
  "id": "exer_adj_mat_thm_explain",
  "level": "2",
  "url": "sec_std_graphs.html#exer_adj_mat_thm_explain",
  "type": "",
  "number": "25",
  "title": "Explore.",
  "body": " Explore   Explain why each part of is true. Note: explain in general, not just examples.   "
},
{
  "id": "sec_color_graphs",
  "level": "1",
  "url": "sec_color_graphs.html",
  "type": "Section",
  "number": "2.3",
  "title": "Coloring Graphs",
  "body": " Coloring Graphs   In many logistical applications of graph theory, the problem can be translated into a question about coloring graphs. Examples of such applications include source: wikipedia, graph coloring scheduling (events or tasks), resource allocation (such as assigning computer registers), and physical arrangements (such as assigning seating). In this section, we introduce graph coloring, look at applications to scheduling, and consider the minimum number of colors needed for standard graphs.    Coloring Maps  Another application of graph coloring is coloring regions of a map. We begin with an activity.   Map coloring  There are two rules for coloring a map.   Rule 1:  Each region gets a single color.    Rule 2:  Any two regions that share a common border (more than a point) must be different colors.      Following these rules, color the map in using the colors blue, green, red, and purple.  A map to color.     You can use letters for the colors, such as B = blue, G = green, R = red, P = purple. You can color it by hand or go to the website: \\url{https:\/\/www.geogebra.org\/m\/pjPgJdhV} (or Google search for Four Color Challenge ), color the map there, and capture a screenshot of your solution.    Draw a rectangle and divide it into six regions to create a new map that can be colored using only two colors. And show how to color it using B = blue and G = green.    Draw a rectangle and divide it into six regions to create a new map that can be colored using three colors but not two colors. Show how to color it using three colors: B = blue, G = green, and R = red and explain why it is impossible to color it using only two colors.    In the map you colored in , find a portion of the map with four regions where all four colors were needed. Copy that portion of the map and show that four colors work using B = blue, G = green, R = red, P = purple. Next, explain why it is impossible to color that portion of the map using only three colors. Hint: if it is possible to color that portion of the map using only three colors, then you need to pick a different portion.      We can model a map with a graph and rephrase our question about coloring a map into a question about coloring a graph.   Map coloring       Draw a graph with a vertex for each region of the map of midwest states shown in (in  ). Draw an edge between two vertices if the corresponding regions share an edge (more than a point).  We draw the map in .   A map of midwest states.          Rephrase the map coloring question as a question about the graph.  What is the smallest number of colors that we need in order to color the vertices of the graph in such a way that adjacent vertices are different colors?           Coloring Graphs  Let's formalize the idea of coloring the vertices of a graph.   Chromatic number       A (vertex) coloring of a graph is an assignment of a color to each vertex in such a way that adjacent vertices have different colors.    A -coloring of a graph is a vertex coloring using colors. For example, the graph in has a 3-coloring.    A graph is -colorable if there exists a coloring using or fewer colors.    The chromatic number of a graph is the smallest number of colors needed to color the graph. For example, the complete bipartite graph, , shown in has chromatic number two because it can be colored using two colors (black and white) and one color would not work because there are adjacent vertices.       Let's look at a few examples.   Chromatic number of complete graph and cycle   Determine the chromatic number of each graph by finding a -coloring and then explaining why all colors are necessary.   The complete graph .  First, we can color each vertex its own color using five colors. Since any pair of vertices in are adjacent, they must be different colors and so we cannot use fewer than five colors. Thus, the chromatic number of is five.      The cycle .  If we try to color the vertices of using only two colors (gray and black), as shown in , we run into a problem. The fifth vertex cannot be gray (because it is adjacent to a vertex colored gray) and it cannot be black (because it is adjacent to a vertex colored black). It must be a third color, say white.   Coloring the cycle .      Notice that actually shows that three colors (gray, black, and white) work. Thus, the chromatic number of is three.         Let's try determining the chromatic number of graphs.   Chromatic number of graphs  To show the chromatic number of a graph is , you should draw the graph, show how to color the vertices using colors, and then explain why fewer than colors cannot work.   Explain why the chromatic number of the cycle graph is two but the chromatic number of the cycle graph is three.    Find the chromatic number of the wheel graph . Hint: use .    What's the chromatic number of ? Explain.    The graph drawn in . Find the chromatic number of . Hint: use the result of .  The graph .           Let's look at  and .   Chromatic number of complicated graphs       Find the chromatic number of the wheel graph .  First, notice that the five outer vertices form a copy of . Since has chromatic number three, the outer vertices require at least three different colors. The hub vertex is adjacent to all five outer vertices, and so it must be yet another color. Therefore, we need at least four colors to color the wheel .  Second, shows a 4-coloring of the wheel . Thus, the chromatic number of the wheel is four.   A 4-coloring of the wheel .          Find the chromatic number of the graph drawn in .  First, notice that the center four vertices form a copy of . Since has chromatic number four, we know that those four vertices must be four different colors. Therefore, we need at least four colors to color the entire graph .  Second, shows a 4-coloring of the graph. Thus, the chromatic number of is four.    A 4-coloring of the graph .            Coloring can be used to solve scheduling problems.   Scheduling alumni events   There are three time slots for alumni events this Saturday: late morning, early afternoon, or late afternoon.   Alumni Office events: Meet & Greet (M), Campus Tours (C), and Alumni Panel (A).    Theater Department events: Poetry Slam (P), Screenplay Reading (R), and Viewing Student Films (V).    Career Services events: Speed Networking (N), Interviews (I), and Leadership Development Workshop (L).     Each organization can run only one of its events at a time. In addition, events A and V both want to use the theater and events M, P, and N all want to use the main conference hall, so those events need to be at different times.   Draw a graph representing the situation where each event is a vertex and an edge connects two events if they cannot be scheduled in the same time block.  See .   Graph for scheduling alumni events.          Is there a way to assign events times?  Yes, one solution is M, R, and L in late morning; C, V, and N in early afternoon; and A, P, and I in late afternoon.      Color each vertex with a time that event could be scheduled using the key: black = late morning, gray = early afternoon, and white = late afternoon.  See .   Graph for scheduling alumni events where colors represent event time.          Restate the question from in terms of the graph and colors.  Can we color the vertices of the graph using three colors so that adjacent vertices are different colors?           Graph Conjectures  We have looked at several specific graphs and calculated quantities such as the number of vertices and edges, the degree sequence, and the chromatic number. What about families of graphs? Let's look at an example.   Graph conjectures for the complete graphs   Consider the complete graphs for . Conjecture the number of vertices and edges, the degree sequence, and the chromatic number of . Some of your answers should involve .    By definition, has vertices. Recall that models the number of handshakes in a group of people. By , the number of edges is . Alternatively, there is an edge for each pair of vertices. Thus, the number of edges is equal to the number of ways to select two out of vertices, which is .  Each vertex in is adjacent to each of the other vertices. Therefore, the degree sequence is   We can color the vertices of with colors by assigning each vertex its own color. Because each vertex is adjacent to every other vertex, no two vertices can be the same color. Thus, all colors are necessary. The chromatic number of is .    We summarize the number of edges of the complete graph for later reference.   Number of edges in the complete graphs   For any positive integer , the complete graph has edges.    Try making conjectures about families of graphs.   Graph conjectures      Consider the star graphs for . Conjecture the number of vertices and edges, the degree sequence, and the chromatic number of . Some of your answers should involve .    Consider the paths for . Conjecture the number of vertices and edges, the degree sequence, and the chromatic number of . Some of your answers should involve .    Consider the cycles for . Conjecture the number of vertices and edges, the degree sequence, and the chromatic number of . Some of your answers should involve .        Exercises   Exercises for Coloring Maps   Practice   Go to the website: \\url{https:\/\/mathigon.org\/course\/graph-theory\/map-colouring} to color more complicated maps. Save screenshots of three puzzles that you attempted. Were you able to solve all three? If not, where did you get stuck?    Note: You do not need to submit the screenshots.     Practice   Copy the map of the northeast states drawn in and show how to 4-color the map. Note: Both parts of New York (NY) should be one color one part (Upstate New York) is labeled NY, the other part (NYC\/Long Island) sits below Connecticut (CT)\/Rhode Island (RI) and is long and skinny.   Map of the northeastern states.         Understand       Copy the map of midwest states drawn in (in  ) and show how to color the map using three colors. Note: We discussed this map in .    Find a portion of the map where all three colors were needed. Copy that portion of the map and explain why it is impossible to color that portion of the map using only two colors.         Hint: Start with ND: red, SD: blue, MN: red. Then, continue with states whose color must follow. For example, Iowa (IA) must be green. Continue.    Hint: Explain why the region formed by ND, SD, and MN needs three colors.       Recap   Do you know    What the connection is between coloring a map and coloring a graph?    How to draw a graph model of a map?        Explore    Read the Quanta magazine article Only Computers Can Solve This Map-Coloring Problem and answer the following questions based on that article.   According to this article, the Four-Color Problem was introduced in a letter, which is a common way mathematics was communicated historically. Who wrote the letter and to whom did they send it?    What does the Four-Color Theorem say?    When did the first proofs appear and who initially claimed to have proved it?    How can the Four-Color Problem be restated in terms of graph theory?    When did the final proof appear and who is credited with the final proof?    Why did the presentation of the final proof receive only polite applause, according to mathematician Don Albers?    The original, but flawed, proof has six special configurations. How many special configurations were considered in the final proof?    What is allegedly in Paul Erdös's The Book ?         Exercises for Coloring Graphs   Practice   Draw each graph and color the vertices with the fewest possible colors. No justification is necessary, but be sure that fewer colors would not work.   The star .    The path .    The cycle .    The wheel .    The ladder .         Hint: Draw the usual star with black and white vertices.    Hint: Two colors work.    Hint: Two colors work.    See .  A 3-coloring of the wheel .         Hint: Two colors work.       Understand       Show how to 3-color the vertices of the classmates graph from using red, blue, and green.    Explain why you need at least three colors to color the vertices of the classmates graph.    What is the chromatic number of the classmates graph?        Understand   Draw each graph and color the vertices with the fewest possible colors. Then explain why fewer colors would not work.   The path .    The cycle .    The complete bipartite graph .    The wheel .        Understand   Consider the graph drawn in .   The graph from .        Copy and show a 4-coloring of .    Find a subgraph (portion) of that needs at least 4 colors.    What can we conclude from and ?        Hint: Verify that you have colored all the vertices and that any pair of adjacent vertices is different colors.    Hint: Look for complete subgraphs.    Hint: (a) tells us the chromatic number is at most four and (b) tells us the chromatic number is at least four.       Understand   There are seven people and seven committees. Each person is on several committees, as described by . There are four standard meeting times: 8-9:30 AM, 10-11:30 AM, 2-3:30 PM, and 4-5:30 PM. We would like to schedule meeting times for the committees in such a way that we avoid having two meetings at the same time if any person is a member of both committees. Is there a way to do it?   Committee (cmte) members for    Person on Cmte?  Cmte 1  Cmte 2  Cmte 3  Cmte 4  Cmte 5  Cmte 6  Cmte 7              Alejandro                     Bjorn                     Cassie                     Denise                     Ebrahim                     Fiona                     Gloria              Draw a graph to represent the situation where each committee is a vertex. What should the edges represent?    Is there a way to assign meeting times? If so, color each vertex with a time it could meet using the key: red is 8-9:30 AM, blue is 10-11:30 AM, green is 2-3:30 PM, and orange is 4-5:30 PM.    Restate the question from in terms of the graph and colors.        Hint: An edge should indicate that the two committees have at least one member in common, which means that that pair of committees cannot be scheduled at the same time. The graph has seven vertices and 12 edges.    Hint: yes    Hint: Can we 4-color the graph?       Understand   What can we say about the chromatic number of a graph if ? Your answer should be a conjecture in the form of an equation or inequality involving .    contains a copy of .     can be 5-colored.         Hint: needs 5 colors, so needs 5 colors or maybe more colors.    Hint: Maybe can be colored using fewer than 5 colors if we try again.       Recap   Do you know    What a coloring of a graph is?    What the chromatic number of a graph is?    Which two things we need to check to determine the chromatic number of a graph?    How to model a scheduling problem as a graph-coloring problem?        Explore   Here is an algorithm to 4-color the vertices of graph when the maximum degree of any vertex in is three.   Assign each color a number: red (1), blue (2), green (3), and orange (4). Label the vertices , , , . Color the vertex red (1).    Go to the next vertex and color it the smallest number color that is available, keeping in mind that the vertex cannot be colored the same as any adjacent vertex. Repeat this step until is colored.    Apply this process to color the graph shown in .  Use an algorithm to color the vertices of this graph         Now consider a general graph where the maximum degree of any vertex is three. Explain why there will always be a color available in Step 2 of the algorithm. Hint: Each vertex has degree three.    What have we proved about the chromatic number of ? Hint: Your answer should be an inequality.         Hint: Color red, blue, red,     Hint: When we get to a new vertex to color, how many colors are already used by its neighbors? Explain why there is always at least one of the four colors available to color the new vertex?    Hint: We have found a 4-coloring of the graph. What does that tell us about the chromatic number?       Explore       Give an example of a graph with chromatic number two that is not a complete bipartite graph, a cycle, a path, a ladder, or a grid.    Give an example of a graph with chromatic number five that is not a complete graph.    Give an example of a graph with at least two vertices but chromatic number one.       There are many correct answers to each part. The hints describe how to build one such example.   Hint: There are many correct answers. Try starting with the star which is a complete bipartite graph, but then add more vertices and connect them with an edge to the leaves in .    Hint: Start with and add more to it, making sure you can still 5-color the graph.    Hint: The graph does not have to be connected. (And it cannot be connected.)         Exercises for Graph Conjectures   Practice   Consider the complete bipartite graphs for . Conjecture the number of vertices and edges, the degree sequence, and the chromatic number of . Some of your answers should involve or .    Hint: There are vertices, edges, the degree sequence is   (perhaps in the other order), and the chromatic number is two.     Understand   Consider the wheels for . Conjecture the number of vertices and edges, the degree sequence, and the chromatic number of . Some of your answers should involve .    Hint: There are vertices, there is exactly one vertex with degree , and the chromatic number is three or four depending on whether is even or odd (be sure to say which is which).     Understand   Consider the ladders for . Conjecture the number of vertices and edges, the degree sequence, and the chromatic number of . Some of your answers should involve .    Hint: There are four vertices of degree two, and the rest have degree three. One way to count edges is to add the number of horizontal edges in the first row, the number of horizontal edges in the second row, and the number of vertical rungs.   The grid graph .         Recap   Do you know    How many edges has?    How to count the number of vertices, the number of edges, the degree sequence, and the chromatic number for a family of graphs (in terms of parameters such as or )?        Explore   For , the grid graph (or lattice graph ) is denoted . Its vertices are the point,s , in the -plane where and . There is an edge connecting two points with the same -coordinate when their -coordinates differ by 1. Also, there is an edge connecting two points with the same -coordinate when their -coordinates differ by 1. The ladder graphs are the special case where .   List the vertices of and draw those points in the -plane.    List the edges of and add those edges to your points from .    How many vertices does the graph have? Your answer should involve and .    How many edges does the graph have? Your answer should involve and .         Hint: There are 12 vertices.    Hint: The graph is drawn in     Hint: Multiply    Hint: Count the number of vertical edges. Then count the number of horizontal edges. Then add your answers.       Explore    shows drawings of perfect binary trees , , and .   The perfect binary trees , , and .      The tree has a root vertex at the top. The root vertex is adjacent to two child vertices drawn below. The tree starts with the tree and then, for each end vertex, draws two new adjacent child vertices below. These new vertices are grandchildren of the root. The tree starts with and then, for each end vertex, draws two new adjacent child vertices below. These new vertices are great-grandchildren of the root. This pattern continues to give a family of perfect binary trees , denoted for .   In the perfect binary tree , count the number of children, the number of grandchildren, and the number of great-grandchildren of the root. Use these numbers to find the number of vertices in . Hint: don't forget the root.    Draw the perfect binary tree .    Conjecture the number of leaves In a natural tree the root is at the bottom and the leaves are at the top. Graph trees are upside down. (end vertices) in .    How many vertices does have? Hint: add up the generations as in .    How many edges does have? Explain.    What are the degrees of the vertices in and how many vertices of each degree are there? Hint: The root and the leaves have degrees that are from the middle vertices.        Explore       Draw the cycle . Then, using a different colored pen, add the edges of the complement to your graph. What is the resulting graph?    Draw the path . Then, using a different colored pen, add the edges of the complement to your graph. What is the resulting graph? It might look a little different than usual.    If we draw a graph that has five vertices and then, using a different colored pen, we add the edges of the complement to the graph, what is the resulting graph? Explain.    If is any graph with five vertices and edges, how many edges does the complement have?    Generalize: if is any graph with vertices and edges, how many edges does the complement have? Hint: is useful.         "
},
{
  "id": "act_map_coloring",
  "level": "2",
  "url": "sec_color_graphs.html#act_map_coloring",
  "type": "Activity",
  "number": "2.3.A",
  "title": "Map coloring.",
  "body": " Map coloring  There are two rules for coloring a map.   Rule 1:  Each region gets a single color.    Rule 2:  Any two regions that share a common border (more than a point) must be different colors.      Following these rules, color the map in using the colors blue, green, red, and purple.  A map to color.     You can use letters for the colors, such as B = blue, G = green, R = red, P = purple. You can color it by hand or go to the website: \\url{https:\/\/www.geogebra.org\/m\/pjPgJdhV} (or Google search for Four Color Challenge ), color the map there, and capture a screenshot of your solution.    Draw a rectangle and divide it into six regions to create a new map that can be colored using only two colors. And show how to color it using B = blue and G = green.    Draw a rectangle and divide it into six regions to create a new map that can be colored using three colors but not two colors. Show how to color it using three colors: B = blue, G = green, and R = red and explain why it is impossible to color it using only two colors.    In the map you colored in , find a portion of the map with four regions where all four colors were needed. Copy that portion of the map and show that four colors work using B = blue, G = green, R = red, P = purple. Next, explain why it is impossible to color that portion of the map using only three colors. Hint: if it is possible to color that portion of the map using only three colors, then you need to pick a different portion.     "
},
{
  "id": "exam_map_coloring",
  "level": "2",
  "url": "sec_color_graphs.html#exam_map_coloring",
  "type": "Example",
  "number": "2.3.2",
  "title": "Map coloring.",
  "body": " Map coloring       Draw a graph with a vertex for each region of the map of midwest states shown in (in  ). Draw an edge between two vertices if the corresponding regions share an edge (more than a point).  We draw the map in .   A map of midwest states.          Rephrase the map coloring question as a question about the graph.  What is the smallest number of colors that we need in order to color the vertices of the graph in such a way that adjacent vertices are different colors?        "
},
{
  "id": "defn_chromatic_number",
  "level": "2",
  "url": "sec_color_graphs.html#defn_chromatic_number",
  "type": "Definition",
  "number": "2.3.4",
  "title": "Chromatic number.",
  "body": " Chromatic number       A (vertex) coloring of a graph is an assignment of a color to each vertex in such a way that adjacent vertices have different colors.    A -coloring of a graph is a vertex coloring using colors. For example, the graph in has a 3-coloring.    A graph is -colorable if there exists a coloring using or fewer colors.    The chromatic number of a graph is the smallest number of colors needed to color the graph. For example, the complete bipartite graph, , shown in has chromatic number two because it can be colored using two colors (black and white) and one color would not work because there are adjacent vertices.      "
},
{
  "id": "exam_chromatic_K5_C5",
  "level": "2",
  "url": "sec_color_graphs.html#exam_chromatic_K5_C5",
  "type": "Example",
  "number": "2.3.5",
  "title": "Chromatic number of complete graph and cycle.",
  "body": " Chromatic number of complete graph and cycle   Determine the chromatic number of each graph by finding a -coloring and then explaining why all colors are necessary.   The complete graph .  First, we can color each vertex its own color using five colors. Since any pair of vertices in are adjacent, they must be different colors and so we cannot use fewer than five colors. Thus, the chromatic number of is five.      The cycle .  If we try to color the vertices of using only two colors (gray and black), as shown in , we run into a problem. The fifth vertex cannot be gray (because it is adjacent to a vertex colored gray) and it cannot be black (because it is adjacent to a vertex colored black). It must be a third color, say white.   Coloring the cycle .      Notice that actually shows that three colors (gray, black, and white) work. Thus, the chromatic number of is three.        "
},
{
  "id": "act_chromatic_number",
  "level": "2",
  "url": "sec_color_graphs.html#act_chromatic_number",
  "type": "Activity",
  "number": "2.3.B",
  "title": "Chromatic number of graphs.",
  "body": " Chromatic number of graphs  To show the chromatic number of a graph is , you should draw the graph, show how to color the vertices using colors, and then explain why fewer than colors cannot work.   Explain why the chromatic number of the cycle graph is two but the chromatic number of the cycle graph is three.    Find the chromatic number of the wheel graph . Hint: use .    What's the chromatic number of ? Explain.    The graph drawn in . Find the chromatic number of . Hint: use the result of .  The graph .          "
},
{
  "id": "exam_chromatic_complicated",
  "level": "2",
  "url": "sec_color_graphs.html#exam_chromatic_complicated",
  "type": "Example",
  "number": "2.3.8",
  "title": "Chromatic number of complicated graphs.",
  "body": " Chromatic number of complicated graphs       Find the chromatic number of the wheel graph .  First, notice that the five outer vertices form a copy of . Since has chromatic number three, the outer vertices require at least three different colors. The hub vertex is adjacent to all five outer vertices, and so it must be yet another color. Therefore, we need at least four colors to color the wheel .  Second, shows a 4-coloring of the wheel . Thus, the chromatic number of the wheel is four.   A 4-coloring of the wheel .          Find the chromatic number of the graph drawn in .  First, notice that the center four vertices form a copy of . Since has chromatic number four, we know that those four vertices must be four different colors. Therefore, we need at least four colors to color the entire graph .  Second, shows a 4-coloring of the graph. Thus, the chromatic number of is four.    A 4-coloring of the graph .           "
},
{
  "id": "exam_scheduling_alumni",
  "level": "2",
  "url": "sec_color_graphs.html#exam_scheduling_alumni",
  "type": "Example",
  "number": "2.3.11",
  "title": "Scheduling alumni events.",
  "body": " Scheduling alumni events   There are three time slots for alumni events this Saturday: late morning, early afternoon, or late afternoon.   Alumni Office events: Meet & Greet (M), Campus Tours (C), and Alumni Panel (A).    Theater Department events: Poetry Slam (P), Screenplay Reading (R), and Viewing Student Films (V).    Career Services events: Speed Networking (N), Interviews (I), and Leadership Development Workshop (L).     Each organization can run only one of its events at a time. In addition, events A and V both want to use the theater and events M, P, and N all want to use the main conference hall, so those events need to be at different times.   Draw a graph representing the situation where each event is a vertex and an edge connects two events if they cannot be scheduled in the same time block.  See .   Graph for scheduling alumni events.          Is there a way to assign events times?  Yes, one solution is M, R, and L in late morning; C, V, and N in early afternoon; and A, P, and I in late afternoon.      Color each vertex with a time that event could be scheduled using the key: black = late morning, gray = early afternoon, and white = late afternoon.  See .   Graph for scheduling alumni events where colors represent event time.          Restate the question from in terms of the graph and colors.  Can we color the vertices of the graph using three colors so that adjacent vertices are different colors?        "
},
{
  "id": "exam_graph_conj_Ks",
  "level": "2",
  "url": "sec_color_graphs.html#exam_graph_conj_Ks",
  "type": "Example",
  "number": "2.3.14",
  "title": "Graph conjectures for the complete graphs.",
  "body": " Graph conjectures for the complete graphs   Consider the complete graphs for . Conjecture the number of vertices and edges, the degree sequence, and the chromatic number of . Some of your answers should involve .    By definition, has vertices. Recall that models the number of handshakes in a group of people. By , the number of edges is . Alternatively, there is an edge for each pair of vertices. Thus, the number of edges is equal to the number of ways to select two out of vertices, which is .  Each vertex in is adjacent to each of the other vertices. Therefore, the degree sequence is   We can color the vertices of with colors by assigning each vertex its own color. Because each vertex is adjacent to every other vertex, no two vertices can be the same color. Thus, all colors are necessary. The chromatic number of is .   "
},
{
  "id": "thm_size_Ks",
  "level": "2",
  "url": "sec_color_graphs.html#thm_size_Ks",
  "type": "Theorem",
  "number": "2.3.15",
  "title": "Number of edges in the complete graphs.",
  "body": " Number of edges in the complete graphs   For any positive integer , the complete graph has edges.   "
},
{
  "id": "act_graph_conjectures",
  "level": "2",
  "url": "sec_color_graphs.html#act_graph_conjectures",
  "type": "Activity",
  "number": "2.3.C",
  "title": "Graph conjectures.",
  "body": " Graph conjectures      Consider the star graphs for . Conjecture the number of vertices and edges, the degree sequence, and the chromatic number of . Some of your answers should involve .    Consider the paths for . Conjecture the number of vertices and edges, the degree sequence, and the chromatic number of . Some of your answers should involve .    Consider the cycles for . Conjecture the number of vertices and edges, the degree sequence, and the chromatic number of . Some of your answers should involve .     "
},
{
  "id": "exer_map_coloring_website",
  "level": "2",
  "url": "sec_color_graphs.html#exer_map_coloring_website",
  "type": "",
  "number": "1",
  "title": "Practice.",
  "body": " Practice   Go to the website: \\url{https:\/\/mathigon.org\/course\/graph-theory\/map-colouring} to color more complicated maps. Save screenshots of three puzzles that you attempted. Were you able to solve all three? If not, where did you get stuck?    Note: You do not need to submit the screenshots.   "
},
{
  "id": "exer_color_northestUS",
  "level": "2",
  "url": "sec_color_graphs.html#exer_color_northestUS",
  "type": "",
  "number": "2",
  "title": "Practice.",
  "body": " Practice   Copy the map of the northeast states drawn in and show how to 4-color the map. Note: Both parts of New York (NY) should be one color one part (Upstate New York) is labeled NY, the other part (NYC\/Long Island) sits below Connecticut (CT)\/Rhode Island (RI) and is long and skinny.   Map of the northeastern states.       "
},
{
  "id": "exer_midwest_color",
  "level": "2",
  "url": "sec_color_graphs.html#exer_midwest_color",
  "type": "",
  "number": "3",
  "title": "Understand.",
  "body": " Understand       Copy the map of midwest states drawn in (in  ) and show how to color the map using three colors. Note: We discussed this map in .    Find a portion of the map where all three colors were needed. Copy that portion of the map and explain why it is impossible to color that portion of the map using only two colors.         Hint: Start with ND: red, SD: blue, MN: red. Then, continue with states whose color must follow. For example, Iowa (IA) must be green. Continue.    Hint: Explain why the region formed by ND, SD, and MN needs three colors.     "
},
{
  "id": "exer_dyk_color_maps",
  "level": "2",
  "url": "sec_color_graphs.html#exer_dyk_color_maps",
  "type": "",
  "number": "4",
  "title": "Recap.",
  "body": " Recap   Do you know    What the connection is between coloring a map and coloring a graph?    How to draw a graph model of a map?      "
},
{
  "id": "sec_color_graphs-6-2-6",
  "level": "2",
  "url": "sec_color_graphs.html#sec_color_graphs-6-2-6",
  "type": "",
  "number": "5",
  "title": "Explore.",
  "body": " Explore    Read the Quanta magazine article Only Computers Can Solve This Map-Coloring Problem and answer the following questions based on that article.   According to this article, the Four-Color Problem was introduced in a letter, which is a common way mathematics was communicated historically. Who wrote the letter and to whom did they send it?    What does the Four-Color Theorem say?    When did the first proofs appear and who initially claimed to have proved it?    How can the Four-Color Problem be restated in terms of graph theory?    When did the final proof appear and who is credited with the final proof?    Why did the presentation of the final proof receive only polite applause, according to mathematician Don Albers?    The original, but flawed, proof has six special configurations. How many special configurations were considered in the final proof?    What is allegedly in Paul Erdös's The Book ?      "
},
{
  "id": "exer_coloring_standard_graphs",
  "level": "2",
  "url": "sec_color_graphs.html#exer_coloring_standard_graphs",
  "type": "",
  "number": "6",
  "title": "Practice.",
  "body": " Practice   Draw each graph and color the vertices with the fewest possible colors. No justification is necessary, but be sure that fewer colors would not work.   The star .    The path .    The cycle .    The wheel .    The ladder .         Hint: Draw the usual star with black and white vertices.    Hint: Two colors work.    Hint: Two colors work.    See .  A 3-coloring of the wheel .         Hint: Two colors work.     "
},
{
  "id": "exer_chromatic_number_classmates_graph",
  "level": "2",
  "url": "sec_color_graphs.html#exer_chromatic_number_classmates_graph",
  "type": "",
  "number": "7",
  "title": "Understand.",
  "body": " Understand       Show how to 3-color the vertices of the classmates graph from using red, blue, and green.    Explain why you need at least three colors to color the vertices of the classmates graph.    What is the chromatic number of the classmates graph?      "
},
{
  "id": "exer_coloring_complete",
  "level": "2",
  "url": "sec_color_graphs.html#exer_coloring_complete",
  "type": "",
  "number": "8",
  "title": "Understand.",
  "body": " Understand   Draw each graph and color the vertices with the fewest possible colors. Then explain why fewer colors would not work.   The path .    The cycle .    The complete bipartite graph .    The wheel .      "
},
{
  "id": "exer_color_complicated_graph",
  "level": "2",
  "url": "sec_color_graphs.html#exer_color_complicated_graph",
  "type": "",
  "number": "9",
  "title": "Understand.",
  "body": " Understand   Consider the graph drawn in .   The graph from .        Copy and show a 4-coloring of .    Find a subgraph (portion) of that needs at least 4 colors.    What can we conclude from and ?        Hint: Verify that you have colored all the vertices and that any pair of adjacent vertices is different colors.    Hint: Look for complete subgraphs.    Hint: (a) tells us the chromatic number is at most four and (b) tells us the chromatic number is at least four.     "
},
{
  "id": "exer_schedule_meetings",
  "level": "2",
  "url": "sec_color_graphs.html#exer_schedule_meetings",
  "type": "",
  "number": "10",
  "title": "Understand.",
  "body": " Understand   There are seven people and seven committees. Each person is on several committees, as described by . There are four standard meeting times: 8-9:30 AM, 10-11:30 AM, 2-3:30 PM, and 4-5:30 PM. We would like to schedule meeting times for the committees in such a way that we avoid having two meetings at the same time if any person is a member of both committees. Is there a way to do it?   Committee (cmte) members for    Person on Cmte?  Cmte 1  Cmte 2  Cmte 3  Cmte 4  Cmte 5  Cmte 6  Cmte 7              Alejandro                     Bjorn                     Cassie                     Denise                     Ebrahim                     Fiona                     Gloria              Draw a graph to represent the situation where each committee is a vertex. What should the edges represent?    Is there a way to assign meeting times? If so, color each vertex with a time it could meet using the key: red is 8-9:30 AM, blue is 10-11:30 AM, green is 2-3:30 PM, and orange is 4-5:30 PM.    Restate the question from in terms of the graph and colors.        Hint: An edge should indicate that the two committees have at least one member in common, which means that that pair of committees cannot be scheduled at the same time. The graph has seven vertices and 12 edges.    Hint: yes    Hint: Can we 4-color the graph?     "
},
{
  "id": "exer_chr_ineq",
  "level": "2",
  "url": "sec_color_graphs.html#exer_chr_ineq",
  "type": "",
  "number": "11",
  "title": "Understand.",
  "body": " Understand   What can we say about the chromatic number of a graph if ? Your answer should be a conjecture in the form of an equation or inequality involving .    contains a copy of .     can be 5-colored.         Hint: needs 5 colors, so needs 5 colors or maybe more colors.    Hint: Maybe can be colored using fewer than 5 colors if we try again.     "
},
{
  "id": "exer_dyk_color_graphs",
  "level": "2",
  "url": "sec_color_graphs.html#exer_dyk_color_graphs",
  "type": "",
  "number": "12",
  "title": "Recap.",
  "body": " Recap   Do you know    What a coloring of a graph is?    What the chromatic number of a graph is?    Which two things we need to check to determine the chromatic number of a graph?    How to model a scheduling problem as a graph-coloring problem?      "
},
{
  "id": "exer_graph_color_algorithm",
  "level": "2",
  "url": "sec_color_graphs.html#exer_graph_color_algorithm",
  "type": "",
  "number": "13",
  "title": "Explore.",
  "body": " Explore   Here is an algorithm to 4-color the vertices of graph when the maximum degree of any vertex in is three.   Assign each color a number: red (1), blue (2), green (3), and orange (4). Label the vertices , , , . Color the vertex red (1).    Go to the next vertex and color it the smallest number color that is available, keeping in mind that the vertex cannot be colored the same as any adjacent vertex. Repeat this step until is colored.    Apply this process to color the graph shown in .  Use an algorithm to color the vertices of this graph         Now consider a general graph where the maximum degree of any vertex is three. Explain why there will always be a color available in Step 2 of the algorithm. Hint: Each vertex has degree three.    What have we proved about the chromatic number of ? Hint: Your answer should be an inequality.         Hint: Color red, blue, red,     Hint: When we get to a new vertex to color, how many colors are already used by its neighbors? Explain why there is always at least one of the four colors available to color the new vertex?    Hint: We have found a 4-coloring of the graph. What does that tell us about the chromatic number?     "
},
{
  "id": "exer_examples_chromatic_number",
  "level": "2",
  "url": "sec_color_graphs.html#exer_examples_chromatic_number",
  "type": "",
  "number": "14",
  "title": "Explore.",
  "body": " Explore       Give an example of a graph with chromatic number two that is not a complete bipartite graph, a cycle, a path, a ladder, or a grid.    Give an example of a graph with chromatic number five that is not a complete graph.    Give an example of a graph with at least two vertices but chromatic number one.       There are many correct answers to each part. The hints describe how to build one such example.   Hint: There are many correct answers. Try starting with the star which is a complete bipartite graph, but then add more vertices and connect them with an edge to the leaves in .    Hint: Start with and add more to it, making sure you can still 5-color the graph.    Hint: The graph does not have to be connected. (And it cannot be connected.)      "
},
{
  "id": "exer_graph_conjecture_Kbst",
  "level": "2",
  "url": "sec_color_graphs.html#exer_graph_conjecture_Kbst",
  "type": "",
  "number": "15",
  "title": "Practice.",
  "body": " Practice   Consider the complete bipartite graphs for . Conjecture the number of vertices and edges, the degree sequence, and the chromatic number of . Some of your answers should involve or .    Hint: There are vertices, edges, the degree sequence is   (perhaps in the other order), and the chromatic number is two.   "
},
{
  "id": "exer_graph_conj_wheels",
  "level": "2",
  "url": "sec_color_graphs.html#exer_graph_conj_wheels",
  "type": "",
  "number": "16",
  "title": "Understand.",
  "body": " Understand   Consider the wheels for . Conjecture the number of vertices and edges, the degree sequence, and the chromatic number of . Some of your answers should involve .    Hint: There are vertices, there is exactly one vertex with degree , and the chromatic number is three or four depending on whether is even or odd (be sure to say which is which).   "
},
{
  "id": "exer_graph_conj_ladders",
  "level": "2",
  "url": "sec_color_graphs.html#exer_graph_conj_ladders",
  "type": "",
  "number": "17",
  "title": "Understand.",
  "body": " Understand   Consider the ladders for . Conjecture the number of vertices and edges, the degree sequence, and the chromatic number of . Some of your answers should involve .    Hint: There are four vertices of degree two, and the rest have degree three. One way to count edges is to add the number of horizontal edges in the first row, the number of horizontal edges in the second row, and the number of vertical rungs.   The grid graph .       "
},
{
  "id": "exer_dyk_graph_conj",
  "level": "2",
  "url": "sec_color_graphs.html#exer_dyk_graph_conj",
  "type": "",
  "number": "18",
  "title": "Recap.",
  "body": " Recap   Do you know    How many edges has?    How to count the number of vertices, the number of edges, the degree sequence, and the chromatic number for a family of graphs (in terms of parameters such as or )?      "
},
{
  "id": "exer_grid_graphs",
  "level": "2",
  "url": "sec_color_graphs.html#exer_grid_graphs",
  "type": "",
  "number": "19",
  "title": "Explore.",
  "body": " Explore   For , the grid graph (or lattice graph ) is denoted . Its vertices are the point,s , in the -plane where and . There is an edge connecting two points with the same -coordinate when their -coordinates differ by 1. Also, there is an edge connecting two points with the same -coordinate when their -coordinates differ by 1. The ladder graphs are the special case where .   List the vertices of and draw those points in the -plane.    List the edges of and add those edges to your points from .    How many vertices does the graph have? Your answer should involve and .    How many edges does the graph have? Your answer should involve and .         Hint: There are 12 vertices.    Hint: The graph is drawn in     Hint: Multiply    Hint: Count the number of vertical edges. Then count the number of horizontal edges. Then add your answers.     "
},
{
  "id": "exer_perfect_binary_trees",
  "level": "2",
  "url": "sec_color_graphs.html#exer_perfect_binary_trees",
  "type": "",
  "number": "20",
  "title": "Explore.",
  "body": " Explore    shows drawings of perfect binary trees , , and .   The perfect binary trees , , and .      The tree has a root vertex at the top. The root vertex is adjacent to two child vertices drawn below. The tree starts with the tree and then, for each end vertex, draws two new adjacent child vertices below. These new vertices are grandchildren of the root. The tree starts with and then, for each end vertex, draws two new adjacent child vertices below. These new vertices are great-grandchildren of the root. This pattern continues to give a family of perfect binary trees , denoted for .   In the perfect binary tree , count the number of children, the number of grandchildren, and the number of great-grandchildren of the root. Use these numbers to find the number of vertices in . Hint: don't forget the root.    Draw the perfect binary tree .    Conjecture the number of leaves In a natural tree the root is at the bottom and the leaves are at the top. Graph trees are upside down. (end vertices) in .    How many vertices does have? Hint: add up the generations as in .    How many edges does have? Explain.    What are the degrees of the vertices in and how many vertices of each degree are there? Hint: The root and the leaves have degrees that are from the middle vertices.      "
},
{
  "id": "exer_size_graph_comp",
  "level": "2",
  "url": "sec_color_graphs.html#exer_size_graph_comp",
  "type": "",
  "number": "21",
  "title": "Explore.",
  "body": " Explore       Draw the cycle . Then, using a different colored pen, add the edges of the complement to your graph. What is the resulting graph?    Draw the path . Then, using a different colored pen, add the edges of the complement to your graph. What is the resulting graph? It might look a little different than usual.    If we draw a graph that has five vertices and then, using a different colored pen, we add the edges of the complement to the graph, what is the resulting graph? Explain.    If is any graph with five vertices and edges, how many edges does the complement have?    Generalize: if is any graph with vertices and edges, how many edges does the complement have? Hint: is useful.      "
},
{
  "id": "sec_subgraph_isomorphic",
  "level": "1",
  "url": "sec_subgraph_isomorphic.html",
  "type": "Section",
  "number": "2.4",
  "title": "Subgraphs and Isomorphic Graphs",
  "body": " Subgraphs and Isomorphic Graphs   There are many different ways to draw a graph. Suppose that you and I each draw a graph and our graph drawings look different. How do we know if our graphs are actually the same graph (isomorphic)? For example, are any of the graphs , , and drawn in the same (isomorphic)?   Are any of the graphs , , isomorphic?      Recognizing when two apparently different objects are, for all mathematical purposes, the same or different is a powerful skill. For example, suppose that we are modeling a problem and encounter a new graph , a graph that we know nothing about. But then we realize that is isomorphic to a graph that we know well. Then everything that is true about the known graph is automatically true for the new graph as well. The concept of isomorphic occurs throughout mathematics.  There is no known efficient algorithm for determining if two graphs are isomorphic. We begin this section with a visualization tool that can help and close this section by introducing vocabulary about graphs that live within other graphs (subgraphs), which can also offer clues about whether two graphs are isomorphic.    Planarity  When we draw a graph, it is acceptable to have edges that cross each other. Any point of intersection of those edges in the drawing is not a vertex. For example, the complete graph is typically drawn with many edges crossing, as in .   The standard drawing of the complete graph with many edges crossing.      In some situations, we might prefer to draw a graph without edges crossing. For example, if the graph were modeling a physical system, such as train tracks or electrical wires, we might want to avoid edge crossings, or at least find a drawing with as few edge crossings as possible. It is reasonable to ask whether a graph can be drawn without crossings. For example, can you find a way to draw without any edge crossings?  We formalize this idea with a definition.   Planar graph       An edge crossing in the drawing of a graph is a point of intersection of two edges other than at a vertex.    A graph is planar if it can be drawn in the plane without any edge crossings. For example, consider the graph drawn in . In the fourth drawing of , the edges and cross, but no edges cross in the first three drawings of . Thus, is planar.    A graph is nonplanar if it cannot be drawn in the plane without any edge crossings. For example, it turns out that the complete graph is nonplanar.       Let's look at an activity redrawing planar graphs without edge crossings.   Planarity puzzle      The online Planarity game by Jason Davies \\url{https:\/\/www.jasondavies.com\/planarity\/} gives you the opportunity to try your hand at moving planar graphs around until they appear without edge crossings. Play the game at level five and then at level eight.    Redraw the complete graph without edge crossings, using the vertex labels from .  The complete graph drawn with an edge crossing.         Redraw the complete bipartite graph without edge crossing, using the vertex labels from .  The complete graph drawn with multiple edge crossings.         Redraw the Harary graph without edge crossings, using the vertex labels from . Note: It is possible to draw without edge crossings using only straight lines for edges, but you are welcome to use curves to represent edges instead.  The Harary graph drawn with multiple edge crossings.             Isomorphic Graphs  The three graphs in have many common properties. For example, each graph has six vertices, five edges, and degree sequence 3, 2, 2, 1, 1, 1. They also all have chromatic number two. But they are not all isomorphic.  Here is the formal definition.   Isomorphic Graphs       Two graphs and are isomorphic , denoted , if it is possible to label the vertices of and the vertices of in such a way that and have the same set of vertices and the same set of edges. For example, the graphs and in are isomorphic. We show a common vertex labeling in . You can check that each graph has the vertex set and the edge set . (By the way, it is acceptable to abbreviate edges using strings. For example may be abbreviated when clear from context.)  Isomorphic graphs         A planarity-style move on a graph drawing consists of moving one vertex to a different location and redrawing the edges from in its new location to each of 's neighbors. These moves are named for the game Planarity from .        These moves give us another way to work with graph isomorphism.   Planarity-style moves  Graphs and are isomorphic exactly when we can transform a graph drawing of into a graph drawing of using a sequence of planarity-style moves. While visualizing such a transformation is a useful way to decide if two graphs are isomorphic, to prove that two graphs are isomorphic, you need to label the vertices according to the definition. If you can see the transformation, just follow the vertices to see what the labels should be. For example, we can think of transforming the graph into the graph from by shifting the vertex up and to the right and the vertices and down and to the left.   When two graphs are complicated, it can be useful to compare their complements instead. Note that if and are isomorphic and labeled with the same vertices and edges, then that labeling shows that and have the same vertices and edges and so and are also isomorphic. We have the following result.   Isomorphic Complements   For graphs and we have exactly when .    Here is an example of using the complement to prove that two graphs are isomorphic.   Using complements to prove isomorphic graphs   Consider the graphs and drawn in .   Are the graphs and isomorphic?        Draw their complements.  The complements and are drawn in .   Complements of graphs from .          Label the vertices of the complements to show .  We label the isolated vertex , the degree 3 vertex , and the degree 2 vertex . There is one leaf adjacent to which we label . Last, we label the other two leaves and (in either order). shows these complements labeled as well as a simplified graph drawing of the complement.   Labeling the complements from .          Is ? Explain.  Yes, by since , it follows that .        Practice showing graphs are isomorphic.   Show two graphs are isomorphic      Show the trees drawn in are isomorphic by labeling the vertices of each and listing the edges. Choose your labeling carefully.  Isomorphic trees for  .         Show the two graphs drawn in are isomorphic by labeling the vertices of each and listing the edges. Choose your labeling carefully.  Isomorphic graphs for  .         Show that the graphs drawn in are isomorphic by showing their complements are isomorphic. Label the complements and list the edges.  Isomorphic graphs for  .         Show that the graphs drawn in are isomorphic by labeling the vertices so they have the same edges. Hint: start with a 6-cycle in the graph on the left.  Two drawings of the Petersen graph for  and .             Subgraphs and Trees  A common type of graph used to store information in a computer is a tree . We saw examples of possibility trees in . Trees are defined using the concepts of subgraph and connectivity, so we start there.   Subgraph   The graph is a subgraph of the graph if each vertex of is a vertex of and each edge of is an edge of . Note that since is a graph, each edge of necessarily contains two vertices of . For example, in , the graph on the left is a subgraph of the graph on the right.   The graph is a subgraph of the graph .        In , we draw the vertices of the subgraph in the same position as they appeared in , but that is not required.   Less obvious subgraphs   Consider the graph from . Which of the following graphs are subgraphs of ?   The cycle drawn in .  The graph from .       The cycle is a subgraph of because each of 's vertices ( , , , and ) and each of 's edges ( , , , and ) are in . Note that is the cycle , so we say is a subgraph of .      The path drawn in .  The graph from .       The path is a subgraph of because each of 's vertices ( , , , , and ) and each of 's edges (\\{f,c\\}, \\{c,b\\}, \\{b,e\\}, and \\{e,a\\}) are in . Note that is the path , so we say is a subgraph of .      The graph drawn in .  The graph from .       The graph is not a subgraph of because is an edge in but not in .      The graph drawn in .  The graph from .       The graph is a subgraph of since each vertex and edge in is in , even though has two separate pieces.         We introduce a bit more vocabulary about subgraphs.   Cyclic subgraphs       A cyclic subgraph of a graph is a subgraph that is a copy of for some integer . For example, the graph from was a cyclic subgraph of the graph .    A graph  contains an cycle if is a subgraph for some . For example, the graph in contains several 3-cycles, a couple of 4-cycles, and 5-cycle.    A graph is acyclic if it does not contain any cyclic subgraphs. For example, the path graphs are acyclic.       Let's count all the cycles in a graph.   Counting cycles   Count all the cycles in the graph in .    First, there are three 3-cycles: one with vertices , , and ; a second with vertices , , and ; and a third with vertices , , and .  Next, there are two 4-cycles: one with vertices , , , and and the other with vertices , , , and .  Lastly, there is one 5-cycle with vertices , , , , and .    In most networks, we want to maintain connectivity. Casually speaking, a graph is connected if there are no separate pieces, which is difficult to define directly. We give a formal definition of connected here.   Paths and connectivity       A path in a graph is a subgraph that is a copy of for some integer . For example, the graph from was a path in the graph .    A -path is a path with endpoints and . For example, the graph from is a -path (or an -path) in the graph . A single vertex is considered a -path.    A graph is connected if for all vertices , there exists a -path in . For example, the graph in is connected, as are its subgraphs and from .    A graph that is not connected is disconnected . For example, the subgraph in was disconnected because, for example, there does not exist a -path in .       Let's look at an example.   Finding paths   Consider the graph drawn in . Find an -path in . Is it unique?    One -path is . It is not unique. For example is another -path as is .   The graph from .        We can now define a tree. Many applications of graph theory in computer science use trees.   Tree   A tree is an connected acyclic graph. For example, the path graphs are trees for . The graph drawn in is also a tree.   An example of a tree .        A tree needs to be connected and acyclic. If either condition fails in a graph, then that graph is not a tree.   Not a tree   Explain why each graph is not a tree.   The graph drawn in .  The graph is connected, but it is not a tree because it is not acyclic. For example, contains a 3-cycle with vertices , , and . By the way, also contains a 4-cycle with vertices , , , and and a 5-cycle with vertices , , , , and .      The graph drawn in .  The graph is acyclic, but it is not a tree because it is disconnected.         Try working with subgraphs and trees.   Subgraphs and trees  Consider the graphs , , and drawn in .   The graphs , , and from        Confirm that is a subgraph of .    Explain why is not a subgraph of .    Find an -path in . Is it unique? Explain.    List the 3-cycles in by listing the three vertices in each 3-cycle. Hint: There are four of them.    List four 4-cycles in by listing the four vertices in each cycle in the order you would go around the cycle. Hint: One looks like an X.    How many 5-cycles does have?    Check that is a tree.    How are the number of vertices of and the number of edges of related?       Exercises   Exercises for Planarity   Practice   Explain how to draw the complete bipartite graph in the plane without edge crossings.     Understand   Play planarity at \\url{https:\/\/www.jasondavies.com\/planarity\/}. Submit a screenshot of your solution to level eight of the puzzle in under two minutes.     Recap   Do you know    What an edge crossing is?    What a planar graph is?        Explore   Play planarity at \\url{https:\/\/www.jasondavies.com\/planarity\/}. Submit a screenshot of your solution to Level 16 of the puzzle.      Exercises for Isomorphic Graphs   Practice   Prove the trees drawn in are isomorphic by labeling the vertices of each tree so that they have the same set of vertices and edges.   Isomorphic trees for .        One solution is shown . (The only other solution switches and .)   Showing two trees are isomorphic.         Practice   Prove the graphs drawn in are isomorphic by labeling the vertices of each graph so that they have the same set of vertices and edges.   Isomorphic graphs for .        Hint: There is one vertex of degree four, so label that vertices in each graph. The other four vertices , , , and form a 4-cycle in each graph.     Practice   Prove the graphs drawn in are isomorphic by showing that their complements are isomorphic.   Isomorphic graphs for .        Hint: The complements are drawn in .   Compare the complements in .         Understand   Show that the graphs drawn in are isomorphic by labeling the vertices so that they have the same edges. Hint: Start with a 6-cycle in the graph on the left. Yes, this exercise repeats  .    Hint: Once you have labeled the vertices, make a list of the edges in each graph to check that your labeling produces the same graph.     Recap   Do you know    What it means when we say that two graphs are isomorphic?    How to show that two graphs are isomorphic (by labeling the vertices)?    How to use complements to show that two graphs are isomorphic?    How to use planarity-style moves to decide if two graphs are isomorphic?        Explore   A graph is self-complementary if it isomorphic to its complement. That is, if .   Show that the path is self-complementary.    Show that the cycle is self-complementary.         Hint: The path is the graph shown in . Its complement is shown in , but you will need to re-label it to match .    Hint: The cycle is the graph shown in . Its complement is shown in , but you will need to re-label it to match .       Explore   We defined self-complementary in .   If is a self-complementary graph with four vertices, how many edges must it have? Explain. Hint: How many edges does the complete graph have?    If is a self-complementary graph with five vertices, how many edges must it have? Explain. Hint: How many edges does the complete graph have?         Three    Hint: Use that the complement and the graph would have to have the same number of edges.        Exercises for Subgraphs and Trees   Practice   Consider the graphs , , and drawn in .   From left-to-right, the graphs , , and .        Show how to check that is a subgraph of .    Explain why is not a subgraph of .        Hint: List the edges of and verify that they are the edges of .    Hint: The graph contains the edge .       Practice   Again, consider the graphs , , and drawn in .   Draw a 4-cycle that is a subgraph of . Include the vertex labels.    Draw a 5-cycle (other than ) that is a subgraph of . Include the vertex labels.    Draw a 6-cycle that is a subgraph of . Include the vertex labels.    Draw an 8-cycle that is a subgraph of .         Hint: One such 4-cycle has vertices , , , and .    Hint: One such 5-cycle has vertices , , , , and .    Hint: You need six out of the eight vertices.    Hint: It includes all of the eight vertices.       Practice       Consider the graph in . Find a -path. Is it unique?  A graph that's not connected.         Show that the graph in is not connected by listing the vertices that are not connected by a path to the vertex .    Show that the graph in is not acyclic by finding a cyclic subgraph.  A graph that's not acyclic.               and it is unique.    Hint: , ,     Hint:        Understand       How many vertices and how many edges does the tree in have?    The paths are trees for . How many vertices and how many edges does the path have?    The stars are trees for . How many vertices and how many edges does the star have?    Conjecture how the number of edges in a tree is related to the number of vertices.         12 vertices, 11 edges    Hint: 99 edges    Hint: There is an edge from the hub vertex to each of the other 100 vertices.    Hint: Your conjecture should say A tree with vertices has edges.        Understand   Again, consider the graphs , , and drawn in . List seven different -paths in . Hint: Some begin and some begin . Note: There are more than seven can you find them all?     Understand   Which size cycles does the Harary graph shown in contain? Copy the graph and highlight one cycle of each possible size.    Hint: There are 3-cycles, 4-cycles, 5-cycles, and a 6-cycle. Highlight one of each.     Understand       Give an example of a graph having six vertices and seven edges that contains a 6-cycle but does not contain a 5-cycle.    Give an example of a tree with degree sequence .    Give an example of a planar graph that has a vertex of degree ten.         Hint: You can draw a 6-cycle with a chord (edge going across), but make sure that it does not form a 5-cycle.    Hint: One possibility is that the degree two vertex has two degree four neighbors. Fill in the degree one vertices.    Hint: Start with a vertex of degree ten and add vertices making sure no edges cross.       Recap   Do you know    How to decide whether one graph is a subgraph of another graph?    How to find cycle subgraphs of a graph?    What an acyclic graph is?    How to find a path between two vertices in a graph or determine that there is no path?    How to determine whether a graph is connected?    What a tree is?        Explore   A caterpillar is a tree such that if we remove each leaf and its corresponding edge, then we get a path. For example, the graph drawn on the far right in is a caterpillar because when we remove the leaves ( , , and ) and their corresponding edges, we get the path .   Is the graph drawn in a caterpillar? Justify your answer.    What is the smallest possible tree that is not a caterpillar?         Hint: The leaves are , , , , , , and . Decide if what remains when they are removed is a path. If so, then the tree is a caterpillar.    Hint: It has seven vertices.       Explore   In a connected graph , the distance between vertices and , denoted , is the number of edges of the shortest -path in .   Find each distance in the graph drawn in (in of ): , , , .    Find the distance between any pair of white vertices in the complete bipartite drawn in .    What can you say about a connected graph with vertices if every pair of vertices has distance one?    Give an example of a graph where the maximum distance between two vertices is three.         "
},
{
  "id": "fig_G1G2G3",
  "level": "2",
  "url": "sec_subgraph_isomorphic.html#fig_G1G2G3",
  "type": "Figure",
  "number": "2.4.1",
  "title": "",
  "body": " Are any of the graphs , , isomorphic?     "
},
{
  "id": "fig_K5",
  "level": "2",
  "url": "sec_subgraph_isomorphic.html#fig_K5",
  "type": "Figure",
  "number": "2.4.2",
  "title": "",
  "body": " The standard drawing of the complete graph with many edges crossing.     "
},
{
  "id": "defn_planar",
  "level": "2",
  "url": "sec_subgraph_isomorphic.html#defn_planar",
  "type": "Definition",
  "number": "2.4.3",
  "title": "Planar graph.",
  "body": " Planar graph       An edge crossing in the drawing of a graph is a point of intersection of two edges other than at a vertex.    A graph is planar if it can be drawn in the plane without any edge crossings. For example, consider the graph drawn in . In the fourth drawing of , the edges and cross, but no edges cross in the first three drawings of . Thus, is planar.    A graph is nonplanar if it cannot be drawn in the plane without any edge crossings. For example, it turns out that the complete graph is nonplanar.      "
},
{
  "id": "act_planarity_puzzle",
  "level": "2",
  "url": "sec_subgraph_isomorphic.html#act_planarity_puzzle",
  "type": "Activity",
  "number": "2.4.A",
  "title": "Planarity puzzle.",
  "body": " Planarity puzzle      The online Planarity game by Jason Davies \\url{https:\/\/www.jasondavies.com\/planarity\/} gives you the opportunity to try your hand at moving planar graphs around until they appear without edge crossings. Play the game at level five and then at level eight.    Redraw the complete graph without edge crossings, using the vertex labels from .  The complete graph drawn with an edge crossing.         Redraw the complete bipartite graph without edge crossing, using the vertex labels from .  The complete graph drawn with multiple edge crossings.         Redraw the Harary graph without edge crossings, using the vertex labels from . Note: It is possible to draw without edge crossings using only straight lines for edges, but you are welcome to use curves to represent edges instead.  The Harary graph drawn with multiple edge crossings.          "
},
{
  "id": "defn_ism_graphs",
  "level": "2",
  "url": "sec_subgraph_isomorphic.html#defn_ism_graphs",
  "type": "Definition",
  "number": "2.4.7",
  "title": "Isomorphic Graphs.",
  "body": " Isomorphic Graphs       Two graphs and are isomorphic , denoted , if it is possible to label the vertices of and the vertices of in such a way that and have the same set of vertices and the same set of edges. For example, the graphs and in are isomorphic. We show a common vertex labeling in . You can check that each graph has the vertex set and the edge set . (By the way, it is acceptable to abbreviate edges using strings. For example may be abbreviated when clear from context.)  Isomorphic graphs         A planarity-style move on a graph drawing consists of moving one vertex to a different location and redrawing the edges from in its new location to each of 's neighbors. These moves are named for the game Planarity from .       "
},
{
  "id": "rem_planarity_moves",
  "level": "2",
  "url": "sec_subgraph_isomorphic.html#rem_planarity_moves",
  "type": "Remark",
  "number": "2.4.9",
  "title": "Planarity-style moves.",
  "body": " Planarity-style moves  Graphs and are isomorphic exactly when we can transform a graph drawing of into a graph drawing of using a sequence of planarity-style moves. While visualizing such a transformation is a useful way to decide if two graphs are isomorphic, to prove that two graphs are isomorphic, you need to label the vertices according to the definition. If you can see the transformation, just follow the vertices to see what the labels should be. For example, we can think of transforming the graph into the graph from by shifting the vertex up and to the right and the vertices and down and to the left.  "
},
{
  "id": "thm_ism_complement",
  "level": "2",
  "url": "sec_subgraph_isomorphic.html#thm_ism_complement",
  "type": "Theorem",
  "number": "2.4.10",
  "title": "Isomorphic Complements.",
  "body": " Isomorphic Complements   For graphs and we have exactly when .   "
},
{
  "id": "exam_prove_ism_complements",
  "level": "2",
  "url": "sec_subgraph_isomorphic.html#exam_prove_ism_complements",
  "type": "Example",
  "number": "2.4.11",
  "title": "Using complements to prove isomorphic graphs.",
  "body": " Using complements to prove isomorphic graphs   Consider the graphs and drawn in .   Are the graphs and isomorphic?        Draw their complements.  The complements and are drawn in .   Complements of graphs from .          Label the vertices of the complements to show .  We label the isolated vertex , the degree 3 vertex , and the degree 2 vertex . There is one leaf adjacent to which we label . Last, we label the other two leaves and (in either order). shows these complements labeled as well as a simplified graph drawing of the complement.   Labeling the complements from .          Is ? Explain.  Yes, by since , it follows that .       "
},
{
  "id": "act_show_isomorphic",
  "level": "2",
  "url": "sec_subgraph_isomorphic.html#act_show_isomorphic",
  "type": "Activity",
  "number": "2.4.B",
  "title": "Show two graphs are isomorphic.",
  "body": " Show two graphs are isomorphic      Show the trees drawn in are isomorphic by labeling the vertices of each and listing the edges. Choose your labeling carefully.  Isomorphic trees for  .         Show the two graphs drawn in are isomorphic by labeling the vertices of each and listing the edges. Choose your labeling carefully.  Isomorphic graphs for  .         Show that the graphs drawn in are isomorphic by showing their complements are isomorphic. Label the complements and list the edges.  Isomorphic graphs for  .         Show that the graphs drawn in are isomorphic by labeling the vertices so they have the same edges. Hint: start with a 6-cycle in the graph on the left.  Two drawings of the Petersen graph for  and .          "
},
{
  "id": "sub_subgraph_tree-2",
  "level": "2",
  "url": "sec_subgraph_isomorphic.html#sub_subgraph_tree-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "tree "
},
{
  "id": "defn_subgraph",
  "level": "2",
  "url": "sec_subgraph_isomorphic.html#defn_subgraph",
  "type": "Definition",
  "number": "2.4.19",
  "title": "Subgraph.",
  "body": " Subgraph   The graph is a subgraph of the graph if each vertex of is a vertex of and each edge of is an edge of . Note that since is a graph, each edge of necessarily contains two vertices of . For example, in , the graph on the left is a subgraph of the graph on the right.   The graph is a subgraph of the graph .       "
},
{
  "id": "exam_less_obvious_subgraphs",
  "level": "2",
  "url": "sec_subgraph_isomorphic.html#exam_less_obvious_subgraphs",
  "type": "Example",
  "number": "2.4.21",
  "title": "Less obvious subgraphs.",
  "body": " Less obvious subgraphs   Consider the graph from . Which of the following graphs are subgraphs of ?   The cycle drawn in .  The graph from .       The cycle is a subgraph of because each of 's vertices ( , , , and ) and each of 's edges ( , , , and ) are in . Note that is the cycle , so we say is a subgraph of .      The path drawn in .  The graph from .       The path is a subgraph of because each of 's vertices ( , , , , and ) and each of 's edges (\\{f,c\\}, \\{c,b\\}, \\{b,e\\}, and \\{e,a\\}) are in . Note that is the path , so we say is a subgraph of .      The graph drawn in .  The graph from .       The graph is not a subgraph of because is an edge in but not in .      The graph drawn in .  The graph from .       The graph is a subgraph of since each vertex and edge in is in , even though has two separate pieces.        "
},
{
  "id": "defn_cyclic_subgraphs",
  "level": "2",
  "url": "sec_subgraph_isomorphic.html#defn_cyclic_subgraphs",
  "type": "Definition",
  "number": "2.4.26",
  "title": "Cyclic subgraphs.",
  "body": " Cyclic subgraphs       A cyclic subgraph of a graph is a subgraph that is a copy of for some integer . For example, the graph from was a cyclic subgraph of the graph .    A graph  contains an cycle if is a subgraph for some . For example, the graph in contains several 3-cycles, a couple of 4-cycles, and 5-cycle.    A graph is acyclic if it does not contain any cyclic subgraphs. For example, the path graphs are acyclic.      "
},
{
  "id": "exam_count_cycles",
  "level": "2",
  "url": "sec_subgraph_isomorphic.html#exam_count_cycles",
  "type": "Example",
  "number": "2.4.27",
  "title": "Counting cycles.",
  "body": " Counting cycles   Count all the cycles in the graph in .    First, there are three 3-cycles: one with vertices , , and ; a second with vertices , , and ; and a third with vertices , , and .  Next, there are two 4-cycles: one with vertices , , , and and the other with vertices , , , and .  Lastly, there is one 5-cycle with vertices , , , , and .   "
},
{
  "id": "defn_path_connected",
  "level": "2",
  "url": "sec_subgraph_isomorphic.html#defn_path_connected",
  "type": "Definition",
  "number": "2.4.28",
  "title": "Paths and connectivity.",
  "body": " Paths and connectivity       A path in a graph is a subgraph that is a copy of for some integer . For example, the graph from was a path in the graph .    A -path is a path with endpoints and . For example, the graph from is a -path (or an -path) in the graph . A single vertex is considered a -path.    A graph is connected if for all vertices , there exists a -path in . For example, the graph in is connected, as are its subgraphs and from .    A graph that is not connected is disconnected . For example, the subgraph in was disconnected because, for example, there does not exist a -path in .      "
},
{
  "id": "exam_finding_paths",
  "level": "2",
  "url": "sec_subgraph_isomorphic.html#exam_finding_paths",
  "type": "Example",
  "number": "2.4.29",
  "title": "Finding paths.",
  "body": " Finding paths   Consider the graph drawn in . Find an -path in . Is it unique?    One -path is . It is not unique. For example is another -path as is .   The graph from .       "
},
{
  "id": "defn_tree",
  "level": "2",
  "url": "sec_subgraph_isomorphic.html#defn_tree",
  "type": "Definition",
  "number": "2.4.31",
  "title": "Tree.",
  "body": " Tree   A tree is an connected acyclic graph. For example, the path graphs are trees for . The graph drawn in is also a tree.   An example of a tree .       "
},
{
  "id": "exam_not_a_tree",
  "level": "2",
  "url": "sec_subgraph_isomorphic.html#exam_not_a_tree",
  "type": "Example",
  "number": "2.4.33",
  "title": "Not a tree.",
  "body": " Not a tree   Explain why each graph is not a tree.   The graph drawn in .  The graph is connected, but it is not a tree because it is not acyclic. For example, contains a 3-cycle with vertices , , and . By the way, also contains a 4-cycle with vertices , , , and and a 5-cycle with vertices , , , , and .      The graph drawn in .  The graph is acyclic, but it is not a tree because it is disconnected.        "
},
{
  "id": "act_subgraphs_trees",
  "level": "2",
  "url": "sec_subgraph_isomorphic.html#act_subgraphs_trees",
  "type": "Activity",
  "number": "2.4.C",
  "title": "Subgraphs and trees.",
  "body": " Subgraphs and trees  Consider the graphs , , and drawn in .   The graphs , , and from        Confirm that is a subgraph of .    Explain why is not a subgraph of .    Find an -path in . Is it unique? Explain.    List the 3-cycles in by listing the three vertices in each 3-cycle. Hint: There are four of them.    List four 4-cycles in by listing the four vertices in each cycle in the order you would go around the cycle. Hint: One looks like an X.    How many 5-cycles does have?    Check that is a tree.    How are the number of vertices of and the number of edges of related?    "
},
{
  "id": "exer_K2bn_planar",
  "level": "2",
  "url": "sec_subgraph_isomorphic.html#exer_K2bn_planar",
  "type": "",
  "number": "1",
  "title": "Practice.",
  "body": " Practice   Explain how to draw the complete bipartite graph in the plane without edge crossings.   "
},
{
  "id": "exer_play_planarity",
  "level": "2",
  "url": "sec_subgraph_isomorphic.html#exer_play_planarity",
  "type": "",
  "number": "2",
  "title": "Understand.",
  "body": " Understand   Play planarity at \\url{https:\/\/www.jasondavies.com\/planarity\/}. Submit a screenshot of your solution to level eight of the puzzle in under two minutes.   "
},
{
  "id": "exer_dyk_planarity",
  "level": "2",
  "url": "sec_subgraph_isomorphic.html#exer_dyk_planarity",
  "type": "",
  "number": "3",
  "title": "Recap.",
  "body": " Recap   Do you know    What an edge crossing is?    What a planar graph is?      "
},
{
  "id": "exer_play_planarity_higher_level",
  "level": "2",
  "url": "sec_subgraph_isomorphic.html#exer_play_planarity_higher_level",
  "type": "",
  "number": "4",
  "title": "Explore.",
  "body": " Explore   Play planarity at \\url{https:\/\/www.jasondavies.com\/planarity\/}. Submit a screenshot of your solution to Level 16 of the puzzle.   "
},
{
  "id": "exer_show_tree_ism",
  "level": "2",
  "url": "sec_subgraph_isomorphic.html#exer_show_tree_ism",
  "type": "",
  "number": "5",
  "title": "Practice.",
  "body": " Practice   Prove the trees drawn in are isomorphic by labeling the vertices of each tree so that they have the same set of vertices and edges.   Isomorphic trees for .        One solution is shown . (The only other solution switches and .)   Showing two trees are isomorphic.       "
},
{
  "id": "exer_show_graph_ism",
  "level": "2",
  "url": "sec_subgraph_isomorphic.html#exer_show_graph_ism",
  "type": "",
  "number": "6",
  "title": "Practice.",
  "body": " Practice   Prove the graphs drawn in are isomorphic by labeling the vertices of each graph so that they have the same set of vertices and edges.   Isomorphic graphs for .        Hint: There is one vertex of degree four, so label that vertices in each graph. The other four vertices , , , and form a 4-cycle in each graph.   "
},
{
  "id": "exer_show_graph_ism_using_comp",
  "level": "2",
  "url": "sec_subgraph_isomorphic.html#exer_show_graph_ism_using_comp",
  "type": "",
  "number": "7",
  "title": "Practice.",
  "body": " Practice   Prove the graphs drawn in are isomorphic by showing that their complements are isomorphic.   Isomorphic graphs for .        Hint: The complements are drawn in .   Compare the complements in .       "
},
{
  "id": "exer_petersen",
  "level": "2",
  "url": "sec_subgraph_isomorphic.html#exer_petersen",
  "type": "",
  "number": "8",
  "title": "Understand.",
  "body": " Understand   Show that the graphs drawn in are isomorphic by labeling the vertices so that they have the same edges. Hint: Start with a 6-cycle in the graph on the left. Yes, this exercise repeats  .    Hint: Once you have labeled the vertices, make a list of the edges in each graph to check that your labeling produces the same graph.   "
},
{
  "id": "exer_dyk_ism_graphs",
  "level": "2",
  "url": "sec_subgraph_isomorphic.html#exer_dyk_ism_graphs",
  "type": "",
  "number": "9",
  "title": "Recap.",
  "body": " Recap   Do you know    What it means when we say that two graphs are isomorphic?    How to show that two graphs are isomorphic (by labeling the vertices)?    How to use complements to show that two graphs are isomorphic?    How to use planarity-style moves to decide if two graphs are isomorphic?      "
},
{
  "id": "exer_selfcomp_graph",
  "level": "2",
  "url": "sec_subgraph_isomorphic.html#exer_selfcomp_graph",
  "type": "",
  "number": "10",
  "title": "Explore.",
  "body": " Explore   A graph is self-complementary if it isomorphic to its complement. That is, if .   Show that the path is self-complementary.    Show that the cycle is self-complementary.         Hint: The path is the graph shown in . Its complement is shown in , but you will need to re-label it to match .    Hint: The cycle is the graph shown in . Its complement is shown in , but you will need to re-label it to match .     "
},
{
  "id": "exer_edges_selfcomp_graphs",
  "level": "2",
  "url": "sec_subgraph_isomorphic.html#exer_edges_selfcomp_graphs",
  "type": "",
  "number": "11",
  "title": "Explore.",
  "body": " Explore   We defined self-complementary in .   If is a self-complementary graph with four vertices, how many edges must it have? Explain. Hint: How many edges does the complete graph have?    If is a self-complementary graph with five vertices, how many edges must it have? Explain. Hint: How many edges does the complete graph have?         Three    Hint: Use that the complement and the graph would have to have the same number of edges.     "
},
{
  "id": "exer_subgraphs",
  "level": "2",
  "url": "sec_subgraph_isomorphic.html#exer_subgraphs",
  "type": "",
  "number": "12",
  "title": "Practice.",
  "body": " Practice   Consider the graphs , , and drawn in .   From left-to-right, the graphs , , and .        Show how to check that is a subgraph of .    Explain why is not a subgraph of .        Hint: List the edges of and verify that they are the edges of .    Hint: The graph contains the edge .     "
},
{
  "id": "exer_cyclic_subgraphs",
  "level": "2",
  "url": "sec_subgraph_isomorphic.html#exer_cyclic_subgraphs",
  "type": "",
  "number": "13",
  "title": "Practice.",
  "body": " Practice   Again, consider the graphs , , and drawn in .   Draw a 4-cycle that is a subgraph of . Include the vertex labels.    Draw a 5-cycle (other than ) that is a subgraph of . Include the vertex labels.    Draw a 6-cycle that is a subgraph of . Include the vertex labels.    Draw an 8-cycle that is a subgraph of .         Hint: One such 4-cycle has vertices , , , and .    Hint: One such 5-cycle has vertices , , , , and .    Hint: You need six out of the eight vertices.    Hint: It includes all of the eight vertices.     "
},
{
  "id": "exer_not_trees",
  "level": "2",
  "url": "sec_subgraph_isomorphic.html#exer_not_trees",
  "type": "",
  "number": "14",
  "title": "Practice.",
  "body": " Practice       Consider the graph in . Find a -path. Is it unique?  A graph that's not connected.         Show that the graph in is not connected by listing the vertices that are not connected by a path to the vertex .    Show that the graph in is not acyclic by finding a cyclic subgraph.  A graph that's not acyclic.               and it is unique.    Hint: , ,     Hint:      "
},
{
  "id": "exer_size_trees",
  "level": "2",
  "url": "sec_subgraph_isomorphic.html#exer_size_trees",
  "type": "",
  "number": "15",
  "title": "Understand.",
  "body": " Understand       How many vertices and how many edges does the tree in have?    The paths are trees for . How many vertices and how many edges does the path have?    The stars are trees for . How many vertices and how many edges does the star have?    Conjecture how the number of edges in a tree is related to the number of vertices.         12 vertices, 11 edges    Hint: 99 edges    Hint: There is an edge from the hub vertex to each of the other 100 vertices.    Hint: Your conjecture should say A tree with vertices has edges.      "
},
{
  "id": "exer_path_subgraphs",
  "level": "2",
  "url": "sec_subgraph_isomorphic.html#exer_path_subgraphs",
  "type": "",
  "number": "16",
  "title": "Understand.",
  "body": " Understand   Again, consider the graphs , , and drawn in . List seven different -paths in . Hint: Some begin and some begin . Note: There are more than seven can you find them all?   "
},
{
  "id": "exer_which_cycles",
  "level": "2",
  "url": "sec_subgraph_isomorphic.html#exer_which_cycles",
  "type": "",
  "number": "17",
  "title": "Understand.",
  "body": " Understand   Which size cycles does the Harary graph shown in contain? Copy the graph and highlight one cycle of each possible size.    Hint: There are 3-cycles, 4-cycles, 5-cycles, and a 6-cycle. Highlight one of each.   "
},
{
  "id": "exer_subgraph_examples",
  "level": "2",
  "url": "sec_subgraph_isomorphic.html#exer_subgraph_examples",
  "type": "",
  "number": "18",
  "title": "Understand.",
  "body": " Understand       Give an example of a graph having six vertices and seven edges that contains a 6-cycle but does not contain a 5-cycle.    Give an example of a tree with degree sequence .    Give an example of a planar graph that has a vertex of degree ten.         Hint: You can draw a 6-cycle with a chord (edge going across), but make sure that it does not form a 5-cycle.    Hint: One possibility is that the degree two vertex has two degree four neighbors. Fill in the degree one vertices.    Hint: Start with a vertex of degree ten and add vertices making sure no edges cross.     "
},
{
  "id": "exer_dyk_subgraphs",
  "level": "2",
  "url": "sec_subgraph_isomorphic.html#exer_dyk_subgraphs",
  "type": "",
  "number": "19",
  "title": "Recap.",
  "body": " Recap   Do you know    How to decide whether one graph is a subgraph of another graph?    How to find cycle subgraphs of a graph?    What an acyclic graph is?    How to find a path between two vertices in a graph or determine that there is no path?    How to determine whether a graph is connected?    What a tree is?      "
},
{
  "id": "exer_caterpillars",
  "level": "2",
  "url": "sec_subgraph_isomorphic.html#exer_caterpillars",
  "type": "",
  "number": "20",
  "title": "Explore.",
  "body": " Explore   A caterpillar is a tree such that if we remove each leaf and its corresponding edge, then we get a path. For example, the graph drawn on the far right in is a caterpillar because when we remove the leaves ( , , and ) and their corresponding edges, we get the path .   Is the graph drawn in a caterpillar? Justify your answer.    What is the smallest possible tree that is not a caterpillar?         Hint: The leaves are , , , , , , and . Decide if what remains when they are removed is a path. If so, then the tree is a caterpillar.    Hint: It has seven vertices.     "
},
{
  "id": "exer_distance_graph",
  "level": "2",
  "url": "sec_subgraph_isomorphic.html#exer_distance_graph",
  "type": "",
  "number": "21",
  "title": "Explore.",
  "body": " Explore   In a connected graph , the distance between vertices and , denoted , is the number of edges of the shortest -path in .   Find each distance in the graph drawn in (in of ): , , , .    Find the distance between any pair of white vertices in the complete bipartite drawn in .    What can you say about a connected graph with vertices if every pair of vertices has distance one?    Give an example of a graph where the maximum distance between two vertices is three.      "
},
{
  "id": "sec_classify_graphs",
  "level": "1",
  "url": "sec_classify_graphs.html",
  "type": "Section",
  "number": "2.5",
  "title": "Classifying Graphs",
  "body": " Classifying Graphs   A common theme across the sciences is to classify objects of a particular type. For example, how might we classify all trees with seven vertices? Since there are only finitely many, we can create a list of trees having seven vertices so that any tree with seven vertices is isomorphic to a tree on our list and no two trees on our list are isomorphic. We begin by discussing how to show that two graphs are not isomorphic.    Nonisomorphic Graphs  Here is a not terribly useful definition of nonisomorphic graphs.   Nonisomorphic   Two graphs and are nonisomorphic , denoted , if they are not isomorphic. That is, if it is impossible to label the vertices of and the vertices of in such a way that and have the same vertices and the same edges.    This definition is not useful in writing proofs because it is subtle to prove that something is impossible. We might not find a way to label the vertices that shows that two graphs are isomorphic, but that does not prove that there is no labeling. We might not be able to visualize how one graph can be transformed into the other, but that does not mean that there is no way to do so. Let's look at an example.   Showing and are nonisomorphic   Although they share many common properties, the graphs and drawn in are not isomorphic. Prove it.    Let's start with the labeling of from . The only degree 3 vertex in is labeled . That means is the only vertex that appears in exactly three edges. The graph has one degree 3 vertex, and if we want to produce the same edge list as , that vertex needs to be labeled to match, as shown in .   Trying to label to match (and failing).      Next, in , the vertex has exactly one neighbor with degree one, and it is labeled . But in , the vertex has two neighbors with degree one. If we label one of those neighbors , the other cannot be labeled (?). We are stuck. There is no common labeling. Therefore, and are not isomorphic.  Notice that we have identified a property that distinguishes from , namely has exactly one vertex with degree three and that vertex has exactly one neighbor with degree one, but does not have that property. This observation gives us a shorter proof that and are not isomorphic. After all, if they were the same graph, then they would have shared all graph-theoretic properties.    We can make the type of argument we used in more formal. We start with another definition.   Graph invariant   A graph invariant is a property that satisfies ( ) If a graph has the property and , then also has the property . For example, having exactly one degree three vertex is a graph invariant.     Examples of graph invariants   List some examples of specific graph invariants.    Here are some arbitrary examples.   Having exactly ten vertices.    Having exactly six edges.    Having exactly three vertices of degree four.    Having a vertex of degree four that is adjacent to two vertices of degree one.    Having the degree sequence .    Containing a 3-cycle.    Not containing any 4-cycles.    Containing two 4-cycles.    Being acyclic.    Containing a subgraph isomorphic to .    Having a path of length eight.    Being connected.    Having chromatic number three.    and so on.     Officially, we should prove that each of these properties is a graph invariant. Some properties that are not graph invariants are is drawn as a 5-cycle plus edges or has adjacent vertices labeled and . More generally, any property that refers to how a graph is drawn or labeled is not a graph invariant.    We can use graph invariants to prove that two graphs are not isomorphic.   Using graph invariants to prove that two graphs are not isomorphic  If two graphs are isomorphic, then they are the same graph, and therefore they must agree on all graph invariants. Equivalently The statement is the contrapositive of . We will prove in that a statement and its contrapositive are logically equivalent. , for a graph invariant , ( ) If a graph has the property but the graph does not have the property , then . Therefore, to prove that graphs and are not isomorphic, we can find an invariant that has but does not or vice versa.   Let's look at an example.   Use a graph invariant to show not isomorphic       Show that the graphs and drawn in are not isomorphic by finding a distinguishing graph invariant.  Nonisomorphic graphs from  .       One reason and are nonisomorphic is that has a vertex of degree one and does not. Another reason is that they have different degree sequences: for versus for . Yet another reason is contains a 4-cycle but does not. And so on. Only one distinguishing graph invariant is needed. For any of these reasons, .      Show that the graphs and drawn in are not isomorphic by finding a distinguishing graph invariant.  The graphs and are not isomorphic.       One reason and are nonisomorphic is that contains two 5-cycles and does not contain any 5-cycles. Another reason is that can be 2-colored but cannot, as shown in .   The graph can be 2-colored but the graph cannot.      Note that any 2-coloring of would have to alternate around the 8-cycle but then the opposite end of the chord would have to be a third color. A different, quite complicated reason why and are nonisomorphic is that in there is a pair of adjacent degree two vertices each of which has a degree three neighbor (the black vertex and white vertex to the right of the chord edge), but in no pair of adjacent degree two both have degree three neighbors. For any of these reasons, .         Your turn to practice showing graphs are not isomorphic and deciding whether or not two graphs are isomorphic.   Show two graphs are not isomorphic      Check that the graphs drawn in have the same number of vertices, the same number of edges, and the same degree sequence and find a 4-cycle in each graph.  Nonisomorphic graphs for  and .         Show that the graphs drawn in are nonisomorphic by finding a graph invariant that distinguishes the two graphs.    Show the trees drawn in are nonisomorphic by finding a graph invariant that distinguishes the two graphs.  Nonisomorphic trees for  .         Decide if the graphs drawn in are isomorphic or not and justify your answer.  Graphs for  .         Decide whether the graphs drawn in are isomorphic or not and justify your answer.  Graphs for  .             Graph Classification  We are ready to return to classifying graphs.   First example of classifying graphs       Classify all graphs with three vertices. That is, make a list of graphs having three vertices so that any graph with three vertices is isomorphic to a graph on our list and no two graphs on our list are isomorphic.  There are four such graphs drawn in . No two of these graphs are isomorphic because they have a different number of edges. You can (and should) convince yourself that there are no other options.   All graphs with three vertices.          Classify all graphs with four vertices and three edges.  There are three such graphs drawn in , labeled with their degree sequence. These graphs are not isomorphic because they have different degree sequences.  To check that this list is complete, suppose that we have a graph with four vertices and three edges. By , the sum of the degrees of the vertices is equal to twice the number of edges, which is . The degree sequence must be four nonnegative integers whose sum is equal to six. We consider the possibilities.  Case 1: The max degree is three. Notice that every other vertex is adjacent to the degree three vertex, and so the degree sequence is . We get , which is the graph on the left in .  Case 2: The max degree must be two and there is an isolated vertex. The degree sequence would have to be . Moreover, none of the three vertices having degree two can be adjacent to the isolated vertex, so the vertices having degree two must form a 3-cycle, and so we get the graph in the middle in .  Case 3: The max degree is two and there is no isolated vertices. Then, the degree sequence is . The two degree two vertices must be adjacent to each other, and so we obtain a copy of , which is the graph on the right in the graph in the middle of .  Notice that checking the graphs were non-isomorphic was much easier than checking that we found all such graphs.   All graphs with four vertices and three edges.             It can be challenging to decide whether a classification is complete. One tool that can help is graph complements.   Using complements to classify graphs       Classify all graphs with four vertices and two edges.  If the two edges share a common endpoint, then we get a graph that has the path and an isolated fourth vertex. Otherwise, we get a graph that has two separate copies of . Both are drawn in .      Use the result of to classify all graphs with four vertices and four edges.  Since the complete graph has six edges, the complement of any graph with four vertices and four edges must have four vertices and two edges. That is, the complement must be one of the two graphs we found in . The two graphs with four vertices and four edges are, therefore, and which are also drawn in . We drew them without edge crossings just for fun, so look closely at the vertex labels.   All graphs with four vertices and two or four edges.             Now, it is your turn to try classification.   Classifying trees      What is a tree?    Explain why the path is the only tree with three vertices.    There are two trees with four vertices. Draw them.    Classify all trees with five vertices. That is, make a list of trees having five vertices so that any tree with five vertices is isomorphic to a tree on your list and no two trees on your list are isomorphic.    Classify all trees with six vertices. Hint: Organize your work by drawing the longest possible path horizontally.    Classify all trees with seven vertices. Hint: Organize your work by drawing the longest possible path horizontally.        Detour: Robots  We continue to practice classification.   Robots  For the sake of this activity, we invent the following definition.   Robot   A connected graph is a robot if it contains one 3-cycle and no other cycles. For example, the graphs drawn in are robots. The left robot has seven vertices, and the right robot has eight.   Two robots.          The only robot with three vertices is a 3-cycle. There is only one robot with four vertices. Draw it and explain why it is the only one.    There are three different robots with five vertices. Draw them.    How many different robots are there with six vertices. Hint: Organize your work based on how many vertices of the 3-cycle have edges beyond the 3-cycle all three, two of them, or only one of them.       Exercises   Exercises for Nonisomorphic Graphs   Practice   Show that the graphs drawn in are nonisomorphic by finding a graph invariant that distinguishes the two graphs.   Nonisomorphic graphs for .        Hint: One answer is that the graph on the left has the degree sequence , but the graph on the right has a different degree sequence. Can you find an easier answer?     Practice   Use complements to show that the graphs drawn in are nonisomorphic by finding a graph invariant that distinguishes the complements of the two graphs.   Nonisomorphic graphs for .        The complement of the graph on the left is disconnected (it is two copies of ), but the graph on the right has a complement that is connected (it is isomorphic to ).     Practice   Decide whether the graphs in are isomorphic and carefully justify your answer.   The Harary graph and the complete bipartite graph for .        Hint: They are isomorphic. To prove that they are isomorphic, label the vertices so that they have the same vertices and the same edges. (It is not enough to show that they have many invariants in common.)     Practice   Decide whether the graphs in are isomorphic and carefully justify your answer.   The graphs for .        Hint: They are isomorphic. Label the vertices so that they have the same vertices and the same edges. Start with the degree two vertices, then their neighbors.     Practice   Use complements to decide whether the graphs in are isomorphic and carefully justify your answer.   The graphs for .        Hint: They are isomorphic. Their complements are a copy of and two isolated vertices. Prove that the complements are isomorphic by labeling the vertices.     Understand   Decide whether the graphs in are isomorphic and carefully justify your answer.   The graphs for .        Hint: They are not isomorphic. You can find a distinguishing invariant based on the cyclic subgraphs.     Understand   Use complements to decide whether the graphs in are isomorphic and carefully justify your answer.   The graphs for .        Hint: Look closely at the complements. The complements are nonisomorphic. Explain why.     Recap   Do you know    What a graph invariant is?    Why finding a distinguishing invariant proves that two graphs are not isomorphic?    What some examples of graph invariants are?    How we can prove that two graphs are not isomorphic (by finding a distinguishing invariant)?    How to use complements to prove that two graphs are isomorphic or nonisomorphic?    How to use planarity-style moves to decide whether two graphs are isomorphic or not?        Explore   Decide whether the graphs in are isomorphic and carefully justify your answer.   The graphs for .        Hint: Look at the neighbors of the degree four vertex. How are they adjacent to one another?      Exercises for Graph Classification  In these classification exercises, no justification is required, but make sure that your list is complete and that no two graphs on your list are isomorphic.   Practice   Classify all graphs with eight vertices and nine edges that contain an 8-cycle.     Understand   Classify all graphs with four vertices. Hint: and are useful.    Hint: There are 11 total. One graph has no edges, and one graph has one edge. lists all graphs with two edges and four edges. lists the graphs with three edges. The graphs with five or six edges are the complements of graphs already on the list.     Understand   Classify all connected graphs with five vertices and six edges.    Hint: Small graphs are often given names that describe what they look like. Four of the answers are named the house, the kite, the dart, and the bowtie. (Please figure these out yourself, without peeking at resources!) There is one more possibility, but I do not know if it has a name.     Understand       Classify all trees with six vertices. Yes, this exercise repeats  . Hint: organize your work by drawing the longest possible path horizontally.    Classify all trees with seven vertices. Yes, this exercise repeats  . Hint: organize your work by drawing the longest possible path horizontally.         Hint: There are six.    Hint: There are 11.       Recap   Do you know    What we mean by classifying graphs of a certain type?    How to use complements to help classify graphs?    How to organize your work when classifying graphs? (There are several ways.)        Explore   Classify all regular graphs with six vertices. Recall that in a regular graph, all vertices have the same degree . Consider the cases , , , , , and .    Hint: There are one 0-regular, one 1-regular, and two 2-regular graphs. You can check if you have the correct number of 3-regular, 4-regular, and 5-regular by considering their complements.     Explore   Classify all trees with eight vertices. Hint: Organize your work by drawing the longest possible path horizontally. Another hint: there are 23 of them.       Exercises for Detour: Robots   Practice   A connected graph is super-robot if it contains one 4-cycle and no other cycles. Draw a super-robot with six vertices, one with seven vertices, and one with eight vertices.     Explore   Classify all robots with seven vertices. No justification is required, but make sure that your list is complete and that no two robots on your list are isomorphic.     Explore   Super-robots were defined in . Draw all super-robots with eight vertices. No justification is required, but make sure that your list is complete and that no two super-robots on your list are isomorphic.     "
},
{
  "id": "defn_nonism",
  "level": "2",
  "url": "sec_classify_graphs.html#defn_nonism",
  "type": "Definition",
  "number": "2.5.1",
  "title": "Nonisomorphic.",
  "body": " Nonisomorphic   Two graphs and are nonisomorphic , denoted , if they are not isomorphic. That is, if it is impossible to label the vertices of and the vertices of in such a way that and have the same vertices and the same edges.   "
},
{
  "id": "exam_not_ism",
  "level": "2",
  "url": "sec_classify_graphs.html#exam_not_ism",
  "type": "Example",
  "number": "2.5.2",
  "title": "Showing <span class=\"process-math\">\\(G_1\\)<\/span> and <span class=\"process-math\">\\(G_3\\)<\/span> are nonisomorphic.",
  "body": " Showing and are nonisomorphic   Although they share many common properties, the graphs and drawn in are not isomorphic. Prove it.    Let's start with the labeling of from . The only degree 3 vertex in is labeled . That means is the only vertex that appears in exactly three edges. The graph has one degree 3 vertex, and if we want to produce the same edge list as , that vertex needs to be labeled to match, as shown in .   Trying to label to match (and failing).      Next, in , the vertex has exactly one neighbor with degree one, and it is labeled . But in , the vertex has two neighbors with degree one. If we label one of those neighbors , the other cannot be labeled (?). We are stuck. There is no common labeling. Therefore, and are not isomorphic.  Notice that we have identified a property that distinguishes from , namely has exactly one vertex with degree three and that vertex has exactly one neighbor with degree one, but does not have that property. This observation gives us a shorter proof that and are not isomorphic. After all, if they were the same graph, then they would have shared all graph-theoretic properties.   "
},
{
  "id": "defn_graph_invariant",
  "level": "2",
  "url": "sec_classify_graphs.html#defn_graph_invariant",
  "type": "Definition",
  "number": "2.5.4",
  "title": "Graph invariant.",
  "body": " Graph invariant   A graph invariant is a property that satisfies ( ) If a graph has the property and , then also has the property . For example, having exactly one degree three vertex is a graph invariant.   "
},
{
  "id": "exam_graph_invariants",
  "level": "2",
  "url": "sec_classify_graphs.html#exam_graph_invariants",
  "type": "Example",
  "number": "2.5.5",
  "title": "Examples of graph invariants.",
  "body": " Examples of graph invariants   List some examples of specific graph invariants.    Here are some arbitrary examples.   Having exactly ten vertices.    Having exactly six edges.    Having exactly three vertices of degree four.    Having a vertex of degree four that is adjacent to two vertices of degree one.    Having the degree sequence .    Containing a 3-cycle.    Not containing any 4-cycles.    Containing two 4-cycles.    Being acyclic.    Containing a subgraph isomorphic to .    Having a path of length eight.    Being connected.    Having chromatic number three.    and so on.     Officially, we should prove that each of these properties is a graph invariant. Some properties that are not graph invariants are is drawn as a 5-cycle plus edges or has adjacent vertices labeled and . More generally, any property that refers to how a graph is drawn or labeled is not a graph invariant.   "
},
{
  "id": "rem_show_not_ism",
  "level": "2",
  "url": "sec_classify_graphs.html#rem_show_not_ism",
  "type": "Remark",
  "number": "2.5.6",
  "title": "Using graph invariants to prove that two graphs are not isomorphic.",
  "body": " Using graph invariants to prove that two graphs are not isomorphic  If two graphs are isomorphic, then they are the same graph, and therefore they must agree on all graph invariants. Equivalently The statement is the contrapositive of . We will prove in that a statement and its contrapositive are logically equivalent. , for a graph invariant , ( ) If a graph has the property but the graph does not have the property , then . Therefore, to prove that graphs and are not isomorphic, we can find an invariant that has but does not or vice versa.  "
},
{
  "id": "exam_use_graph_invariant_show_nonism",
  "level": "2",
  "url": "sec_classify_graphs.html#exam_use_graph_invariant_show_nonism",
  "type": "Example",
  "number": "2.5.7",
  "title": "Use a graph invariant to show not isomorphic.",
  "body": " Use a graph invariant to show not isomorphic       Show that the graphs and drawn in are not isomorphic by finding a distinguishing graph invariant.  Nonisomorphic graphs from  .       One reason and are nonisomorphic is that has a vertex of degree one and does not. Another reason is that they have different degree sequences: for versus for . Yet another reason is contains a 4-cycle but does not. And so on. Only one distinguishing graph invariant is needed. For any of these reasons, .      Show that the graphs and drawn in are not isomorphic by finding a distinguishing graph invariant.  The graphs and are not isomorphic.       One reason and are nonisomorphic is that contains two 5-cycles and does not contain any 5-cycles. Another reason is that can be 2-colored but cannot, as shown in .   The graph can be 2-colored but the graph cannot.      Note that any 2-coloring of would have to alternate around the 8-cycle but then the opposite end of the chord would have to be a third color. A different, quite complicated reason why and are nonisomorphic is that in there is a pair of adjacent degree two vertices each of which has a degree three neighbor (the black vertex and white vertex to the right of the chord edge), but in no pair of adjacent degree two both have degree three neighbors. For any of these reasons, .        "
},
{
  "id": "act_show_nonism_or_decide",
  "level": "2",
  "url": "sec_classify_graphs.html#act_show_nonism_or_decide",
  "type": "Activity",
  "number": "2.5.A",
  "title": "Show two graphs are not isomorphic.",
  "body": " Show two graphs are not isomorphic      Check that the graphs drawn in have the same number of vertices, the same number of edges, and the same degree sequence and find a 4-cycle in each graph.  Nonisomorphic graphs for  and .         Show that the graphs drawn in are nonisomorphic by finding a graph invariant that distinguishes the two graphs.    Show the trees drawn in are nonisomorphic by finding a graph invariant that distinguishes the two graphs.  Nonisomorphic trees for  .         Decide if the graphs drawn in are isomorphic or not and justify your answer.  Graphs for  .         Decide whether the graphs drawn in are isomorphic or not and justify your answer.  Graphs for  .          "
},
{
  "id": "exam_classify_order3_order4",
  "level": "2",
  "url": "sec_classify_graphs.html#exam_classify_order3_order4",
  "type": "Example",
  "number": "2.5.15",
  "title": "First example of classifying graphs.",
  "body": " First example of classifying graphs       Classify all graphs with three vertices. That is, make a list of graphs having three vertices so that any graph with three vertices is isomorphic to a graph on our list and no two graphs on our list are isomorphic.  There are four such graphs drawn in . No two of these graphs are isomorphic because they have a different number of edges. You can (and should) convince yourself that there are no other options.   All graphs with three vertices.          Classify all graphs with four vertices and three edges.  There are three such graphs drawn in , labeled with their degree sequence. These graphs are not isomorphic because they have different degree sequences.  To check that this list is complete, suppose that we have a graph with four vertices and three edges. By , the sum of the degrees of the vertices is equal to twice the number of edges, which is . The degree sequence must be four nonnegative integers whose sum is equal to six. We consider the possibilities.  Case 1: The max degree is three. Notice that every other vertex is adjacent to the degree three vertex, and so the degree sequence is . We get , which is the graph on the left in .  Case 2: The max degree must be two and there is an isolated vertex. The degree sequence would have to be . Moreover, none of the three vertices having degree two can be adjacent to the isolated vertex, so the vertices having degree two must form a 3-cycle, and so we get the graph in the middle in .  Case 3: The max degree is two and there is no isolated vertices. Then, the degree sequence is . The two degree two vertices must be adjacent to each other, and so we obtain a copy of , which is the graph on the right in the graph in the middle of .  Notice that checking the graphs were non-isomorphic was much easier than checking that we found all such graphs.   All graphs with four vertices and three edges.            "
},
{
  "id": "exam_using_complements_classify_graphs",
  "level": "2",
  "url": "sec_classify_graphs.html#exam_using_complements_classify_graphs",
  "type": "Example",
  "number": "2.5.18",
  "title": "Using complements to classify graphs.",
  "body": " Using complements to classify graphs       Classify all graphs with four vertices and two edges.  If the two edges share a common endpoint, then we get a graph that has the path and an isolated fourth vertex. Otherwise, we get a graph that has two separate copies of . Both are drawn in .      Use the result of to classify all graphs with four vertices and four edges.  Since the complete graph has six edges, the complement of any graph with four vertices and four edges must have four vertices and two edges. That is, the complement must be one of the two graphs we found in . The two graphs with four vertices and four edges are, therefore, and which are also drawn in . We drew them without edge crossings just for fun, so look closely at the vertex labels.   All graphs with four vertices and two or four edges.            "
},
{
  "id": "act_classify_trees",
  "level": "2",
  "url": "sec_classify_graphs.html#act_classify_trees",
  "type": "Activity",
  "number": "2.5.B",
  "title": "Classifying trees.",
  "body": " Classifying trees      What is a tree?    Explain why the path is the only tree with three vertices.    There are two trees with four vertices. Draw them.    Classify all trees with five vertices. That is, make a list of trees having five vertices so that any tree with five vertices is isomorphic to a tree on your list and no two trees on your list are isomorphic.    Classify all trees with six vertices. Hint: Organize your work by drawing the longest possible path horizontally.    Classify all trees with seven vertices. Hint: Organize your work by drawing the longest possible path horizontally.     "
},
{
  "id": "act_robots",
  "level": "2",
  "url": "sec_classify_graphs.html#act_robots",
  "type": "Activity",
  "number": "2.5.C",
  "title": "Robots.",
  "body": " Robots  For the sake of this activity, we invent the following definition.   Robot   A connected graph is a robot if it contains one 3-cycle and no other cycles. For example, the graphs drawn in are robots. The left robot has seven vertices, and the right robot has eight.   Two robots.          The only robot with three vertices is a 3-cycle. There is only one robot with four vertices. Draw it and explain why it is the only one.    There are three different robots with five vertices. Draw them.    How many different robots are there with six vertices. Hint: Organize your work based on how many vertices of the 3-cycle have edges beyond the 3-cycle all three, two of them, or only one of them.    "
},
{
  "id": "exer_show_nonism_Ham5",
  "level": "2",
  "url": "sec_classify_graphs.html#exer_show_nonism_Ham5",
  "type": "",
  "number": "1",
  "title": "Practice.",
  "body": " Practice   Show that the graphs drawn in are nonisomorphic by finding a graph invariant that distinguishes the two graphs.   Nonisomorphic graphs for .        Hint: One answer is that the graph on the left has the degree sequence , but the graph on the right has a different degree sequence. Can you find an easier answer?   "
},
{
  "id": "exer_show_nonism_H3b6",
  "level": "2",
  "url": "sec_classify_graphs.html#exer_show_nonism_H3b6",
  "type": "",
  "number": "2",
  "title": "Practice.",
  "body": " Practice   Use complements to show that the graphs drawn in are nonisomorphic by finding a graph invariant that distinguishes the complements of the two graphs.   Nonisomorphic graphs for .        The complement of the graph on the left is disconnected (it is two copies of ), but the graph on the right has a complement that is connected (it is isomorphic to ).   "
},
{
  "id": "exer_show_ism_H3b6_K3b3",
  "level": "2",
  "url": "sec_classify_graphs.html#exer_show_ism_H3b6_K3b3",
  "type": "",
  "number": "3",
  "title": "Practice.",
  "body": " Practice   Decide whether the graphs in are isomorphic and carefully justify your answer.   The Harary graph and the complete bipartite graph for .        Hint: They are isomorphic. To prove that they are isomorphic, label the vertices so that they have the same vertices and the same edges. (It is not enough to show that they have many invariants in common.)   "
},
{
  "id": "exer_show_nonism_order5",
  "level": "2",
  "url": "sec_classify_graphs.html#exer_show_nonism_order5",
  "type": "",
  "number": "4",
  "title": "Practice.",
  "body": " Practice   Decide whether the graphs in are isomorphic and carefully justify your answer.   The graphs for .        Hint: They are isomorphic. Label the vertices so that they have the same vertices and the same edges. Start with the degree two vertices, then their neighbors.   "
},
{
  "id": "exer_show_ism_K4_minus_edge",
  "level": "2",
  "url": "sec_classify_graphs.html#exer_show_ism_K4_minus_edge",
  "type": "",
  "number": "5",
  "title": "Practice.",
  "body": " Practice   Use complements to decide whether the graphs in are isomorphic and carefully justify your answer.   The graphs for .        Hint: They are isomorphic. Their complements are a copy of and two isolated vertices. Prove that the complements are isomorphic by labeling the vertices.   "
},
{
  "id": "exer_show_nonism_order6",
  "level": "2",
  "url": "sec_classify_graphs.html#exer_show_nonism_order6",
  "type": "",
  "number": "6",
  "title": "Understand.",
  "body": " Understand   Decide whether the graphs in are isomorphic and carefully justify your answer.   The graphs for .        Hint: They are not isomorphic. You can find a distinguishing invariant based on the cyclic subgraphs.   "
},
{
  "id": "exer_show_nonism_complicated_Ham8",
  "level": "2",
  "url": "sec_classify_graphs.html#exer_show_nonism_complicated_Ham8",
  "type": "",
  "number": "7",
  "title": "Understand.",
  "body": " Understand   Use complements to decide whether the graphs in are isomorphic and carefully justify your answer.   The graphs for .        Hint: Look closely at the complements. The complements are nonisomorphic. Explain why.   "
},
{
  "id": "exer_dyk_nonism",
  "level": "2",
  "url": "sec_classify_graphs.html#exer_dyk_nonism",
  "type": "",
  "number": "8",
  "title": "Recap.",
  "body": " Recap   Do you know    What a graph invariant is?    Why finding a distinguishing invariant proves that two graphs are not isomorphic?    What some examples of graph invariants are?    How we can prove that two graphs are not isomorphic (by finding a distinguishing invariant)?    How to use complements to prove that two graphs are isomorphic or nonisomorphic?    How to use planarity-style moves to decide whether two graphs are isomorphic or not?      "
},
{
  "id": "exer_show_nonism_order7",
  "level": "2",
  "url": "sec_classify_graphs.html#exer_show_nonism_order7",
  "type": "",
  "number": "9",
  "title": "Explore.",
  "body": " Explore   Decide whether the graphs in are isomorphic and carefully justify your answer.   The graphs for .        Hint: Look at the neighbors of the degree four vertex. How are they adjacent to one another?   "
},
{
  "id": "exer_classify_8cycle_plus_edge",
  "level": "2",
  "url": "sec_classify_graphs.html#exer_classify_8cycle_plus_edge",
  "type": "",
  "number": "10",
  "title": "Practice.",
  "body": " Practice   Classify all graphs with eight vertices and nine edges that contain an 8-cycle.   "
},
{
  "id": "exer_classify_order4",
  "level": "2",
  "url": "sec_classify_graphs.html#exer_classify_order4",
  "type": "",
  "number": "11",
  "title": "Understand.",
  "body": " Understand   Classify all graphs with four vertices. Hint: and are useful.    Hint: There are 11 total. One graph has no edges, and one graph has one edge. lists all graphs with two edges and four edges. lists the graphs with three edges. The graphs with five or six edges are the complements of graphs already on the list.   "
},
{
  "id": "exer_classify_order5",
  "level": "2",
  "url": "sec_classify_graphs.html#exer_classify_order5",
  "type": "",
  "number": "12",
  "title": "Understand.",
  "body": " Understand   Classify all connected graphs with five vertices and six edges.    Hint: Small graphs are often given names that describe what they look like. Four of the answers are named the house, the kite, the dart, and the bowtie. (Please figure these out yourself, without peeking at resources!) There is one more possibility, but I do not know if it has a name.   "
},
{
  "id": "exer_classify_trees_order6_order7",
  "level": "2",
  "url": "sec_classify_graphs.html#exer_classify_trees_order6_order7",
  "type": "",
  "number": "13",
  "title": "Understand.",
  "body": " Understand       Classify all trees with six vertices. Yes, this exercise repeats  . Hint: organize your work by drawing the longest possible path horizontally.    Classify all trees with seven vertices. Yes, this exercise repeats  . Hint: organize your work by drawing the longest possible path horizontally.         Hint: There are six.    Hint: There are 11.     "
},
{
  "id": "exer_dyk_classify_graphs",
  "level": "2",
  "url": "sec_classify_graphs.html#exer_dyk_classify_graphs",
  "type": "",
  "number": "14",
  "title": "Recap.",
  "body": " Recap   Do you know    What we mean by classifying graphs of a certain type?    How to use complements to help classify graphs?    How to organize your work when classifying graphs? (There are several ways.)      "
},
{
  "id": "exer_classify_regular",
  "level": "2",
  "url": "sec_classify_graphs.html#exer_classify_regular",
  "type": "",
  "number": "15",
  "title": "Explore.",
  "body": " Explore   Classify all regular graphs with six vertices. Recall that in a regular graph, all vertices have the same degree . Consider the cases , , , , , and .    Hint: There are one 0-regular, one 1-regular, and two 2-regular graphs. You can check if you have the correct number of 3-regular, 4-regular, and 5-regular by considering their complements.   "
},
{
  "id": "exer_classify_trees_order8",
  "level": "2",
  "url": "sec_classify_graphs.html#exer_classify_trees_order8",
  "type": "",
  "number": "16",
  "title": "Explore.",
  "body": " Explore   Classify all trees with eight vertices. Hint: Organize your work by drawing the longest possible path horizontally. Another hint: there are 23 of them.   "
},
{
  "id": "exer_super_robot",
  "level": "2",
  "url": "sec_classify_graphs.html#exer_super_robot",
  "type": "",
  "number": "17",
  "title": "Practice.",
  "body": " Practice   A connected graph is super-robot if it contains one 4-cycle and no other cycles. Draw a super-robot with six vertices, one with seven vertices, and one with eight vertices.   "
},
{
  "id": "exer_robots7",
  "level": "2",
  "url": "sec_classify_graphs.html#exer_robots7",
  "type": "",
  "number": "18",
  "title": "Explore.",
  "body": " Explore   Classify all robots with seven vertices. No justification is required, but make sure that your list is complete and that no two robots on your list are isomorphic.   "
},
{
  "id": "exer_super_robot8",
  "level": "2",
  "url": "sec_classify_graphs.html#exer_super_robot8",
  "type": "",
  "number": "19",
  "title": "Explore.",
  "body": " Explore   Super-robots were defined in . Draw all super-robots with eight vertices. No justification is required, but make sure that your list is complete and that no two super-robots on your list are isomorphic.   "
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
