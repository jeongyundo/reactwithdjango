from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from infoapi.models import infoapi
from infoapi.serializers import infoapiSerializers

@csrf_exempt
def infoapi_list(request):
    """
    List all code snippets, or create a new snippet.
    """
    if request.method == 'GET':
        infoapis = infoapi.objects.all()
        serializer = infoapiSerializers(infoapis, many=True)
        return JsonResponse(serializer.data, safe=False)

    elif request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = infoapiSerializers(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)

@csrf_exempt
def infoapi_detail(request, pk):
    """
    Retrieve, update or delete a code infoapi.
    """
    try:
        infoapis = infoapi.objects.get(pk=pk)
    except infoapis.DoesNotExist:
        return HttpResponse(status=404)

    if request.method == 'GET':
        serializer = infoapiSerializers(infoapis)
        return JsonResponse(serializer.data)

    elif request.method == 'PUT':
        data = JSONParser().parse(request)
        serializer = infoapiSerializers(infoapis, data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors, status=400)

    elif request.method == 'DELETE':
        infoapis.delete()
        return HttpResponse(status=204)