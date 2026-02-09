var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "frontmatter",
  "level": "1",
  "url": "frontmatter.html",
  "type": "Front Matter",
  "number": "",
  "title": "Front Matter",
  "body": "  Mathematics Department Fort Lewis College  Last Updated:       "
},
{
  "id": "sec-section-name-4",
  "level": "1",
  "url": "sec-section-name-4.html",
  "type": "Worksheet",
  "number": "",
  "title": "Math 483 Homework 1",
  "body": " Math 483 Homework 1     Review uniform vs. pointwise convergence.    Prove that Riemann integrals are well behaved with respect to uniform convergence.      Our main goal this semester is to prove a theorem like Theorem 3.15 in your textbook (just a little different). To do so, we need to understand uniform convergence, and why it is nice.      Let . We say the sequence  converges pointwise (written as ) to on if for each and , there is some such that if , then       Let . We say the sequence  converges uniformy (written as ) to on if for each , there is some such that if , then for all     The Standard Example   Let and let Prove that pointwise on , but not uniformly.    Another Example   Let Prove that on , but not uniformly.    Now we have an important theorem about uniform convergence.    Let be a sequence of functions that are Riemann integrable on . If , then is Riemann integrable and       Prove the theorem given above. Here are some hints:   Find an element of the sequence that is uniformly close to . Use this to argue that is bounded on .    Find a partition of so that the upper sum and lower sum of the function approximating are close to one another.    Argue that this implies the upper and lower sums of over this partition are close to one another. This will get you integrability.    Now argue the integral of is the limit of the integral of the 's.   You should be making some arguments here.      Use one of the examples above to show uniform convergence is necessary in the previous theorem.     "
},
{
  "id": "sec-section-name-4-2",
  "level": "2",
  "url": "sec-section-name-4.html#sec-section-name-4-2",
  "type": "Objectives",
  "number": "",
  "title": "",
  "body": "   Review uniform vs. pointwise convergence.    Prove that Riemann integrals are well behaved with respect to uniform convergence.    "
},
{
  "id": "pointwise-convergence",
  "level": "2",
  "url": "sec-section-name-4.html#pointwise-convergence",
  "type": "Definition",
  "number": "1",
  "title": "",
  "body": "  Let . We say the sequence  converges pointwise (written as ) to on if for each and , there is some such that if , then    "
},
{
  "id": "uniform-convergence",
  "level": "2",
  "url": "sec-section-name-4.html#uniform-convergence",
  "type": "Definition",
  "number": "2",
  "title": "",
  "body": "  Let . We say the sequence  converges uniformy (written as ) to on if for each , there is some such that if , then for all    "
},
{
  "id": "sec-section-name-4-4-3",
  "level": "2",
  "url": "sec-section-name-4.html#sec-section-name-4-4-3",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "The Standard Example.",
  "body": "The Standard Example   Let and let Prove that pointwise on , but not uniformly.   "
},
{
  "id": "sec-section-name-4-4-4",
  "level": "2",
  "url": "sec-section-name-4.html#sec-section-name-4-4-4",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "Another Example.",
  "body": "Another Example   Let Prove that on , but not uniformly.   "
},
{
  "id": "uniform-integral-limit",
  "level": "2",
  "url": "sec-section-name-4.html#uniform-integral-limit",
  "type": "Theorem",
  "number": "3",
  "title": "",
  "body": "  Let be a sequence of functions that are Riemann integrable on . If , then is Riemann integrable and    "
},
{
  "id": "sec-section-name-4-4-7",
  "level": "2",
  "url": "sec-section-name-4.html#sec-section-name-4-4-7",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "",
  "body": "  Prove the theorem given above. Here are some hints:   Find an element of the sequence that is uniformly close to . Use this to argue that is bounded on .    Find a partition of so that the upper sum and lower sum of the function approximating are close to one another.    Argue that this implies the upper and lower sums of over this partition are close to one another. This will get you integrability.    Now argue the integral of is the limit of the integral of the 's.   You should be making some arguments here.   "
},
{
  "id": "sec-section-name-4-4-8",
  "level": "2",
  "url": "sec-section-name-4.html#sec-section-name-4-4-8",
  "type": "Worksheet Exercise",
  "number": "4",
  "title": "",
  "body": "  Use one of the examples above to show uniform convergence is necessary in the previous theorem.   "
},
{
  "id": "sec-section-name-5",
  "level": "1",
  "url": "sec-section-name-5.html",
  "type": "Worksheet",
  "number": "",
  "title": "Math 330 ODE Review",
  "body": " Math 330 ODE Review     See how much ODE material we remember.    See if we can apply our knowledge of ODEs in new ways.      Before we begin the study of partial differential equations (PDEs), we need to make sure we have a strong command of ordinary differential equations (ODEs) and multivariable Calculus. These topics must be understood both from a procedural point of view and conceptually. In this worksheet you'll test your understanding and procedural proficiency with ODEs, on Wednesday we'll do multivariable Calculus. The goal right now is to find out where we stand with background material.    Terminology Questions  Here are some questions of terminology. Answer each of them in the context of the differential equations class you previously took.    What is a differential equation ?      What does it mean to solve a differential equation ?      Given two functions and , what is the convolution , , and what is it good for?      What is the  -function and what is it good for?     Solving Exercises   For each of these questions, and all that you answer from now on, you need to explain your reasoning as you go. At the end of the question, if possible, try to conclude with a statement saying why the answer you obtained makes sense from a practical point of view.     A brine solution containing kg of salt per liter of water flows into a L mixing vat at a rate of L\/min. A well-stirred mixture leaves at a rate of L\/min. If the vat is initially full of fresh water, find a formula for the quantity of salt in the tank as a function of time.      A damped oscillator is governed by the 2nd order ODE when no external force is applied to it. Its initial position is and has a velocity of . At , an external force of is applied. Show that, in the long run, is approximately a periodic function. What is the period and amplitude of this function?      Consider the second order ODE Suppose is a non-negative integer. By guessing a power series solution, show that this equation has a polynomial solution for some initial conditions. Does it have polynomial solutions for all initial conditions?      "
},
{
  "id": "sec-section-name-5-2",
  "level": "2",
  "url": "sec-section-name-5.html#sec-section-name-5-2",
  "type": "Objectives",
  "number": "",
  "title": "",
  "body": "   See how much ODE material we remember.    See if we can apply our knowledge of ODEs in new ways.    "
},
{
  "id": "sec-section-name-5-3-1",
  "level": "2",
  "url": "sec-section-name-5.html#sec-section-name-5-3-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "both "
},
{
  "id": "sec-section-name-5-4-1",
  "level": "2",
  "url": "sec-section-name-5.html#sec-section-name-5-4-1",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "Terminology Questions.",
  "body": "Terminology Questions  Here are some questions of terminology. Answer each of them in the context of the differential equations class you previously took.    What is a differential equation ?      What does it mean to solve a differential equation ?      Given two functions and , what is the convolution , , and what is it good for?      What is the  -function and what is it good for?    "
},
{
  "id": "sec-section-name-5-4-2",
  "level": "2",
  "url": "sec-section-name-5.html#sec-section-name-5-4-2",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "Solving Exercises.",
  "body": "Solving Exercises   For each of these questions, and all that you answer from now on, you need to explain your reasoning as you go. At the end of the question, if possible, try to conclude with a statement saying why the answer you obtained makes sense from a practical point of view.     A brine solution containing kg of salt per liter of water flows into a L mixing vat at a rate of L\/min. A well-stirred mixture leaves at a rate of L\/min. If the vat is initially full of fresh water, find a formula for the quantity of salt in the tank as a function of time.      A damped oscillator is governed by the 2nd order ODE when no external force is applied to it. Its initial position is and has a velocity of . At , an external force of is applied. Show that, in the long run, is approximately a periodic function. What is the period and amplitude of this function?      Consider the second order ODE Suppose is a non-negative integer. By guessing a power series solution, show that this equation has a polynomial solution for some initial conditions. Does it have polynomial solutions for all initial conditions?    "
},
{
  "id": "sec-section-name-6",
  "level": "1",
  "url": "sec-section-name-6.html",
  "type": "Worksheet",
  "number": "",
  "title": "Mean Value Property and Maximum Principle for Harmonic Functions (2D)",
  "body": " Mean Value Property and Maximum Principle for Harmonic Functions (2D)   In this worksheet, you will prove the mean value property for harmonic functions in two dimensions using the polar form of the Laplacian.     A function defined on an open set is harmonic if .      Assume is harmonic in some open set with .  Defining and Showing it is Constant   Define the circular average Observe that this equals the arclength average   Our goal is to show that, under the given hypotheses, is constant.     Observe, the polar Laplacian of is given by   Since is harmonic, multiply by to obtain:   Use these facts (and integration) to prove that       Solve this ODE. Show:   hence       Argue that using boundedness of as . Conclude and is constant.         Show:   Conclude the mean value property for a circle centered at the origin:     Mean Value Property for Circles   Let . Using translation, show:   whenever .     The Mean Value Property for Disks   Let . Use the mean value property for circles to show that Hint: Do a double integral in polar coordinates in the order. (we started using because we need to integrate with respect to .)        "
},
{
  "id": "harmonic",
  "level": "2",
  "url": "sec-section-name-6.html#harmonic",
  "type": "Definition",
  "number": "4",
  "title": "",
  "body": "  A function defined on an open set is harmonic if .   "
},
{
  "id": "sec-section-name-6-4-2",
  "level": "2",
  "url": "sec-section-name-6.html#sec-section-name-6-4-2",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "Defining <span class=\"process-math\">\\(A(r)\\)<\/span> and Showing it is Constant.",
  "body": "Defining and Showing it is Constant   Define the circular average Observe that this equals the arclength average   Our goal is to show that, under the given hypotheses, is constant.     Observe, the polar Laplacian of is given by   Since is harmonic, multiply by to obtain:   Use these facts (and integration) to prove that       Solve this ODE. Show:   hence       Argue that using boundedness of as . Conclude and is constant.    "
},
{
  "id": "sec-section-name-6-5-1",
  "level": "2",
  "url": "sec-section-name-6.html#sec-section-name-6-5-1",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "",
  "body": "  Show:   Conclude the mean value property for a circle centered at the origin:    "
},
{
  "id": "sec-section-name-6-5-2",
  "level": "2",
  "url": "sec-section-name-6.html#sec-section-name-6-5-2",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "Mean Value Property for Circles.",
  "body": "Mean Value Property for Circles   Let . Using translation, show:   whenever .   "
},
{
  "id": "sec-section-name-6-5-3",
  "level": "2",
  "url": "sec-section-name-6.html#sec-section-name-6-5-3",
  "type": "Worksheet Exercise",
  "number": "4",
  "title": "The Mean Value Property for Disks.",
  "body": " The Mean Value Property for Disks   Let . Use the mean value property for circles to show that Hint: Do a double integral in polar coordinates in the order. (we started using because we need to integrate with respect to .)   "
},
{
  "id": "sec-section-name-7",
  "level": "1",
  "url": "sec-section-name-7.html",
  "type": "Worksheet",
  "number": "",
  "title": "Bounded Harmonic Functions and Differentiable Functions of a Complex Variable",
  "body": " Bounded Harmonic Functions and Differentiable Functions of a Complex Variable    In this worksheet, you will prove one major additional property of harmonic functions.   Bounded Harmonic Functions are Constant   Suppose is harmonic on and for some . Prove that is a constant function as follows:     Let and be points in . Explain why where is the same for both integrals.      Let . Combine the integrals from the last part into a single integral and sketch its region of integration. Give a geometric\/algebraic argument that the area of this region is less than .      Give an upper bound for based on previous parts and show that this approaches zero as . Say why this proves is constant.     Consider a function . Observe that letting , we can write We say is differentiable if exists.    Suppose a function is differentiable. By taking limits with and separately, show that       With and as above, show that and are harmonic. Thus, conclude that bounded differentiable functions of a complex variable are constant (what does boundedness mean here?).     "
},
{
  "id": "sec-section-name-7-2-2",
  "level": "2",
  "url": "sec-section-name-7.html#sec-section-name-7-2-2",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "Bounded Harmonic Functions are Constant.",
  "body": "Bounded Harmonic Functions are Constant   Suppose is harmonic on and for some . Prove that is a constant function as follows:     Let and be points in . Explain why where is the same for both integrals.      Let . Combine the integrals from the last part into a single integral and sketch its region of integration. Give a geometric\/algebraic argument that the area of this region is less than .      Give an upper bound for based on previous parts and show that this approaches zero as . Say why this proves is constant.    "
},
{
  "id": "sec-section-name-7-2-4",
  "level": "2",
  "url": "sec-section-name-7.html#sec-section-name-7-2-4",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "",
  "body": "  Suppose a function is differentiable. By taking limits with and separately, show that    "
},
{
  "id": "sec-section-name-7-2-5",
  "level": "2",
  "url": "sec-section-name-7.html#sec-section-name-7-2-5",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "",
  "body": "  With and as above, show that and are harmonic. Thus, conclude that bounded differentiable functions of a complex variable are constant (what does boundedness mean here?).   "
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
