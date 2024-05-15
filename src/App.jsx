import './App.css'
import logo from './img/header_bk_reviews.svg'

function App({primeiroNome ='Guilherme', nomeOferta='Tudo BK', preco = 30.00}) {

  return (
    <div style={{ backgroundColor: "#ffffff",color:'#252525' ,width: '600px', height: '830px', margin: '0 auto', border: '1px solid black', fontSize: '14px', fontFamily: "Inter", fontWeight:'400', }}>
    <header>
        <img src={logo} alt="Logo-BK" style={{ width: '600px', height: '111px' }} />
    </header>
    <main style={{ padding: '40px 60px 70px 60px', gap: '10px', display: 'flex', flexDirection: 'column', height: '719px' }}>
        <div style={{ display: 'flex', alignItems:'center',flexDirection: 'column', gap: '29px', height: '609px' }}>
            <h1 style={{ lineHeight: '24.2px', fontSize: '20px', fontWeight: "400", textAlign: 'center', margin: '0px' }}>Olá! {primeiroNome}</h1>
            <p style={{ margin: '0px', width:'423px', fontWeight:'400'}}>Somos a BK Company, empresa responsável pelo produto que você acabou de fazer a compra.</p>
            <p style={{ margin: '0px' }}>O pagamento da sua assinatura <b>foi aprovado</b> e agora você poderá aproveitar do nosso ecossistema.</p>
            <h2><strong>Detalhes do pedido:</strong></h2>
            <p style={{ margin: '0px' }}>{nomeOferta} - R$:{preco}</p>
            <p style={{ margin: '0px' }}>Você pode cancelar sua assinatura para remover futuras cobranças a qualquer momento clicando no botão abaixo.</p>
            <a href="#" style={{ display: 'block', textDecoration: 'none', color: 'white', padding: '0.7em 1em', backgroundColor: 'black', margin: '0 auto', textAlign: 'center' }}>Cancelar Assinatura</a>
            <p style={{ margin: '0px' }}>Note que o cancelamento somente cancela as cobranças futuras, o reembolso deve ser feito <strong>diretamente com o nosso suporte.</strong></p>
            <p style={{ margin: '0px' }}>Se tiver qualquer problema pode entrar conosco em:</p>
            <p style={{ margin: '0px' }}>suporte.@bkcompay.app</p>
            <p style={{ margin: '0px' }}>Obrigado!<br />BK Company</p>
        </div>
    </main>
</div>


  )
}

export default App
