from django.db import models
from ckeditor.fields import RichTextField

class Secao(models.Model):
    titulo = models.CharField(max_length=200)
    descricao = RichTextField()
    imagem = models.ImageField(upload_to="banners/", blank=True, null=True)
    ordem = models.PositiveIntegerField(default=0, help_text="Defina a ordem de exibição")

    class Meta:
        ordering = ["ordem"]

    def __str__(self):
        return self.titulo
