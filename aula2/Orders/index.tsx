const handleSelectProduct = (product: Product) => {
  const isAlreadySelected = selectedProducts.some(item => item.id === product.id);

  if (isAlreadySelected) {
    const selected = selectedProducts.filter(item => item.id !== product.id);
    setSelectedProducts(selected);
  } else {
    setSelectedProducts(previous => [...previous, product]);
  }
}

const handleSubmit = () => {
  const productsIds = selectedProducts.map(({ id }) => ({ id }));
  const payload = {
    ...orderLocation!,
    products: productsIds
  }

  saveOrder(payload).then(() => {
    toast.error('Pedido enviado com sucesso!');
    setSelectedProducts([]);
  })
    .catch(() => {
      toast.warning('Erro ao enviar pedido');
    })
}
