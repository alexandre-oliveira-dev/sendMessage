import Express, { Request, Response } from 'express';
import Twilio from 'twilio';

 export const app =  Express();
const accountSid = 'AC668782be34ce934fbcb6b8b93dc5da9e';
const authToken = '5e37480cb82f2ef560aa9528074d6fc0';
const client = Twilio(accountSid, authToken);

async function sendWhatsappMessage(req:Request,res:Response) {
  try {
    const message = await client.messages.create({
      from: 'whatsapp:+14155238886', // Número de WhatsApp do Twilio Sandbox
      to: 'whatsapp:+5511994076414',  // Número do destinatário (com código do país)
      body: 'Te Amo vida, essa mensagem foi enviada pelo meu serviço de mensagem automatica.'
    });
    
    console.log('Mensagem enviada! SID:', message.sid);
    res.json(message)
  } catch (error) {
    res.json(error)
    console.error('Erro ao enviar mensagem:',error);
  }
}


app.get('/send', sendWhatsappMessage)

app.listen(4000)