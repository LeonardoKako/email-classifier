from django.urls import path
from .views import EmailClassifier

urlpatterns = [
    path('classify-email/', EmailClassifier.as_view(), name="classify-email"),
]
