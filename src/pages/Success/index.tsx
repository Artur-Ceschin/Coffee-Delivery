import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react'
import {
  Icon,
  OrderReceiptContainer,
  OrderSection,
  SuccessContainer,
  SuccessIllustrationContainer,
} from './styles'

import successIllustration from '../../assets/illustration.svg'

export function Success() {
  return (
    <SuccessContainer>
      <div className="heading">
        <h2>Uhu! Pedido confirmado</h2>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </div>

      <main>
        <OrderReceiptContainer>
          <OrderSection>
            <Icon iconbackgroundcolor="purple">
              <MapPin size={16} color="white" />
            </Icon>

            <p>
              Entrega em <span>Rua João Daniel Martinelli, 102</span> Farrapos -
              Porto Alegre, RS
            </p>
          </OrderSection>
          <OrderSection>
            <Icon iconbackgroundcolor="yellow">
              <Timer size={16} color="white" />
            </Icon>

            <div>
              <p>Previsão de entrega</p>
              <strong>20 min - 30 min</strong>
            </div>
          </OrderSection>

          <OrderSection>
            <Icon iconbackgroundcolor="yellowDark">
              <CurrencyDollar size={16} color="white" />
            </Icon>

            <div>
              <p>Pagamento na entrega </p>
              <strong>Cartão de Crédito</strong>
            </div>
          </OrderSection>
        </OrderReceiptContainer>

        <SuccessIllustrationContainer>
          <img src={successIllustration} alt="Imagem delivery" />
        </SuccessIllustrationContainer>
      </main>
    </SuccessContainer>
  )
}
