from django.contrib.auth.models import User
from django.contrib.auth import authenticate

from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework import status

from rest_framework_simplejwt.tokens import RefreshToken


# ==============================
# REGISTER USER
# ==============================

@api_view(['POST'])
@permission_classes([AllowAny])
def register(request):

    username = request.data.get('username')
    email = request.data.get('email')
    password = request.data.get('password')

    # Check empty fields
    if not username or not email or not password:
        return Response(
            {
                'success': False,
                'message': 'Username, email and password are required.'
            },
            status=status.HTTP_400_BAD_REQUEST
        )

    # Check username
    if User.objects.filter(username=username).exists():
        return Response(
            {
                'success': False,
                'message': 'Username already exists.'
            },
            status=status.HTTP_400_BAD_REQUEST
        )

    # Check email
    if User.objects.filter(email=email).exists():
        return Response(
            {
                'success': False,
                'message': 'Email already exists.'
            },
            status=status.HTTP_400_BAD_REQUEST
        )

    # Create user
    user = User.objects.create_user(
        username=username,
        email=email,
        password=password
    )

    return Response(
        {
            'success': True,
            'message': 'Account created successfully.',
            'username': user.username
        },
        status=status.HTTP_201_CREATED
    )


# ==============================
# LOGIN USER
# ==============================

@api_view(['POST'])
@permission_classes([AllowAny])
def login(request):

    username = request.data.get('username')
    password = request.data.get('password')

    # Check empty fields
    if not username or not password:
        return Response(
            {
                'success': False,
                'message': 'Username and password are required.'
            },
            status=status.HTTP_400_BAD_REQUEST
        )

    # Authenticate user
    user = authenticate(
        username=username,
        password=password
    )

    # Invalid credentials
    if user is None:
        return Response(
            {
                'success': False,
                'message': 'Invalid username or password.'
            },
            status=status.HTTP_401_UNAUTHORIZED
        )

    # Generate JWT tokens
    refresh = RefreshToken.for_user(user)

    return Response(
        {
            'success': True,
            'message': 'Login successful!',
            'username': user.username,
            'email': user.email,
            'access': str(refresh.access_token),
            'refresh': str(refresh),
        },
        status=status.HTTP_200_OK
    )