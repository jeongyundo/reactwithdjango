from rest_framework import serializers
from infoapi.models import infoapi
from django.contrib.auth.models import User

# class infoapiSerializers(serializers.Serializer):
#     id = serializers.CharField(read_only=True)
#     name = serializers.CharField()
#     content = serializers.CharField()
#     image = serializers.ImageField(default='none')
#     date = serializers.DateTimeField()
#     website = serializers.URLField(default='none')
#     created = serializers.DateTimeField()

#     def create(self, validated_data):
#         return infoapi.object.create(**validated_data)

#     def update(self, validated_data):
#         instance.name = validated_data.get('name', instance.name)
#         instance.content = validated_data.get('content', instance.content)
#         instance.image = validated_data.get('image', instance.image)
#         instance.date = validated_data.get('date', instance.date)
#         instance.website = validated_data.get('website', instance.website)
#         instance.save()
 
#         return instance


class infoapiSerializer(serializers.HyperlinkedModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')
    highlight = serializers.HyperlinkedIdentityField(view_name='infoapi-highlight', format='html')

    class Meta:
        model = infoapi
        fields = ['id', 'name', 'content', 'image', 'date', 'website', 'created']


class UserSerializer(serializers.HyperlinkedModelSerializer):
    snippets = serializers.HyperlinkedRelatedField(many=True, view_name='infoapi-detail', read_only=True)

    class Meta:
        model = User
        fields = ['url', 'id', 'username', 'infoapi']