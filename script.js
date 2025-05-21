<script>
  const keySound = document.getElementById("keySound");
  const inputs = document.querySelectorAll("input[type='text'], input[type='password']");

  inputs.forEach(input => {
    input.addEventListener("keydown", () => {
      keySound.currentTime = 0; // يعيد الصوت للبداية
      keySound.play();
    });
  });

  const form = document.getElementById('loginForm');
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    // الانتقال إلى صفحة الترحيب
    window.location.href = "welcome.html";
  });
</script>