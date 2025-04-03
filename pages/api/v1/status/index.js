function status(request, response) {
  response.status(200).json({ chave: "Eu serei um programador de sucesso!" });
}

export default status;
