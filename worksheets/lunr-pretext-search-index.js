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
