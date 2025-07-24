// Example: Add smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
function showContact() {
  const contactDiv = document.getElementById("contact-info");
  contactDiv.style.display = "block";
}
app.post('/contact', async (req, res) => {
  const { name, email, message } = req.body;
  await Contact.create({ name, email, message });
  res.status(200).send('Message saved!');
});
fetch("https://formspree.io/f/xanbelkw", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    name: "John Doe",
    _replyto: "john@example.com",
    message: "Hello!"
  })
});
