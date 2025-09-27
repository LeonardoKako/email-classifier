from django.contrib import admin
from django.urls import path
from classifier.views import test_view

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/test/', test_view),
]
