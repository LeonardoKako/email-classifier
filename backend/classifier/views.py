from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
import re

class EmailClassifier(APIView):
    def post(self, request):
        email_text = request.data.get("text", "")

        # Simples limpeza de texto
        text = email_text.lower()

        # Regras básicas (MVP)
        produtivo_keywords = ["suporte", "problema", "erro", "atualização", "pedido"]
        improdutivo_keywords = ["obrigado", "feliz", "natal", "parabéns", "abraço"]

        categoria = "Improdutivo"
        resposta = "Obrigado pela sua mensagem!"

        if any(word in text for word in produtivo_keywords):
            categoria = "Produtivo"
            resposta = "Olá, recebemos sua solicitação e estamos processando."

        elif any(word in text for word in improdutivo_keywords):
            categoria = "Improdutivo"
            resposta = "Agradecemos sua mensagem, não é necessário retorno."

        return Response({
            "categoria": categoria,
            "resposta_sugerida": resposta
        }, status=status.HTTP_200_OK)
