document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('#deleteSinhVien')
  button.onclick = e => {
    const { id } = e.target.dataset
    fetch(`/v1/auth/sinh-vien/${id}`, {
      method: 'delete',
    })
      .then(res => res.json())
      .then(result => {
        console.log(result)
        window.location.reload()
      })
      .catch(error => console.log({ error }))
  }
})
