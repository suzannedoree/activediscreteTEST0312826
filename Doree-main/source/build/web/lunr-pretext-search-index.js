var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "ch_prologue",
  "level": "1",
  "url": "ch_prologue.html",
  "type": "Chapter",
  "number": "1",
  "title": "Prologue: Handshakes",
  "body": " Prologue: Handshakes   This textbook introduces the widely-used topic of discrete mathematics. Discrete mathematics has many applications in computer science, information and data science, and mathematics, as well as throughout the sciences, business, and economics. Discrete mathematics topics are introduced in the K-12 school curriculum, although there is rarely a mathematics class named discrete mathematics before college. Discrete mathematics also helps prepare you for more advanced mathematics and computer science courses.    "
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
