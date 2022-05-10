### Dados externos
* [React Navigation](https://www.npmjs.com/package/react-navigation)
* [CryptoJS](https://www.npmjs.com/package/crypto-js)
* [QRCode SVG](https://www.npmjs.com/package/react-native-qrcode-svg)
* [Expo BarCode Scanner](https://docs.expo.dev/versions/latest/sdk/bar-code-scanner/)
* [Ilustração 1 - Chave](https://icons8.com/illustrations/illustration/urban-line-key-4)

## Problemas
* App
  * Modificar o StatusBar para deixar personalizado
  * Padronizar os estilos gerais e as fontes do texto
  * Criar sistemas de rotas de retorno para a tela inicial
  * Corrigir os erros de tipagem dentro dos arquivos do projeto
* Inicio
  * Resolver o problema de erro com a importação da imagem
* Encriptar
  * Melhorar a experiência de uso com a digitação dentro dos campos de input
  * Adicionar um contador e limitador de caracteres para titulo e texto
  * Melhorar a distribuição dos elementos na tela
* QRKey
  * Criar sistema de compartilhamento do QR Code com outras redes
  * Criar sistema de download do QR Code no formato de imagem
* Scan
  * Verificar se não foi possível ler a imagem e dar opção de tentar novamente
  * Escanearnovamente quando o usuário volta da tela de exibição da mensagem para a tela de scan
* Decriptar
  * Verificar se a senha foi válida, e caso contrário, dar a chance de tentar novamente
  * Criar sistema de copiar amensagem que foi descriptografada