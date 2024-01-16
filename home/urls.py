from django.contrib import admin
from django.urls import path
from home import views
# In your urls.py
from django.conf import settings
from django.conf.urls.static import static
    


urlpatterns = [
    path("", views.index, name='home'),
    path("about", views.about, name='about'),
    path("services", views.services, name='services'),
    path("gallery", views.gallery, name='gallery'),
    path("contact", views.contact, name='bar'),
    path("login", views.login, name='login'),
    path("register", views.register, name='register'),
    path('thankyou', views.thankyou, name='Thankyou'),
    
]


if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)