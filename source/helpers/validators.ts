const validators = {
  name: (name) =>
    /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ. ]+$/.test(name) &&
    String(name).trim().split(' ').length > 1,

  email: (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
}

export default validators
