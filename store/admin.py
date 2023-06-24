from django.contrib import admin
from .models import *
admin.site.register(Customer)  # Добавление модулей в админ панель
admin.site.register(Product)
admin.site.register(Order)
admin.site.register(OrderItem)
admin.site.register(ShippingAddress)
