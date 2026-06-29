"""Carga de configuración desde .env usando pydantic-settings."""
from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    model_config = SettingsConfigDict(env_file=".env", env_file_encoding="utf-8", extra="ignore")

    DATABASE_URL: str = "postgresql://postgres:kSE95dex4egjduzY@aws-0-us-west-1.pooler.supabase.com:6543/postgres"
    SECRET_KEY: str
    ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 480
    PORT: int = 8002
    CORS_ORIGINS: str = "http://localhost:5174,https://homebanking-fonrt-mibanco.vercel.app"

    @property
    def cors_origins_list(self) -> list[str]:
        return [o.strip() for o in self.CORS_ORIGINS.split(",") if o.strip()]


settings = Settings()
