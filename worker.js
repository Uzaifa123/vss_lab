<script>
async function submitData() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    const response = await fetch('https://YOUR-WORKER-URL.workers.dev/api/save', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email })
    });

    const result = await response.text();
    alert(result);
}
</script>
