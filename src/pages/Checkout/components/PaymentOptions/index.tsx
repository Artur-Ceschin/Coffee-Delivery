import { CurrencyDollar, CreditCard, Bank, Money } from '@phosphor-icons/react'
import { useTheme } from 'styled-components'
import {
  PaymentOptionsContainer,
  HeadingTitle,
  PaymentMethodsContainer,
  PaymentMethodButton,
} from './styles'

export function PaymentOptions() {
  const theme = useTheme()
  return (
    <PaymentOptionsContainer>
      <HeadingTitle className="heading">
        <CurrencyDollar size={22} color={theme?.purple} />
        <div>
          <h3>Pagamento</h3>
          <p className="subtitle">
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
        </div>
      </HeadingTitle>

      <PaymentMethodsContainer>
        <PaymentMethodButton>
          <CreditCard color={theme?.purple} />
          <p>Cartão de crédito</p>
        </PaymentMethodButton>

        <PaymentMethodButton>
          <Bank color={theme?.purple} />
          <p>Cartão de débito</p>
        </PaymentMethodButton>

        <PaymentMethodButton>
          <Money color={theme?.purple} />
          <p>Dinheiro</p>
        </PaymentMethodButton>
      </PaymentMethodsContainer>
    </PaymentOptionsContainer>
  )
}
