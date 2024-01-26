import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ArticleService } from './article.service';
import { CreateArticleDto } from './dto/create-article.dto';

@Controller('article')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @Get()
  getArticleList() {
    return this.articleService.getArticleList();
  }

  @Get(':id')
  getArticle(@Param('id') id: number) {
    return this.articleService.getArticle(id);
  }

  @Post()
  createArticle(@Body() createArticleDto: CreateArticleDto) {
    return this.articleService.createArticle(createArticleDto);
  }

  @Post(':id')
  updateArticle(
    @Param('id') id: number,
    @Body() createArticleDto: CreateArticleDto,
  ) {
    return this.articleService.updateArticle(id, createArticleDto);
  }

  @Delete(':id')
  deleteArticle(@Param('id') id: number) {
    return this.articleService.deleteArticle(id);
  }
}
