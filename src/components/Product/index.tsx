import Tag from '../Tag'

import { Card, Descricao, Titulo } from './styles'

const Product = () => (
  <Card>
    <img src="//placehold.it/222x250" />
    <Titulo>Nome do jogo</Titulo>
    <Tag>Categoria</Tag>
    <Tag>Windows</Tag>
    <Descricao>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut tenetur
      itaque ipsum rerum cupiditate, molestiae, voluptates eaque quo eveniet
      qui, molestias vel inventore distinctio! Ullam, dicta. Quos necessitatibus
      nihil autem!
    </Descricao>
  </Card>
)

export default Product
