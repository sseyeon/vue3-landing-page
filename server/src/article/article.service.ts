import { CreateArticleDto } from './dto/create-article.dto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Article } from './entity/article.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ArticleService {
  constructor(
    @InjectRepository(Article)
    private readonly articleRepository: Repository<Article>,
  ) {}

  async getArticleList(): Promise<Article[]> {
    return await this.articleRepository.find();
  }

  async getArticle(id: number): Promise<Article> {
    return await this.articleRepository.findOne({ where: { id } });
  }

  async createArticle(createArticleDto: CreateArticleDto): Promise<Article> {
    return await this.articleRepository.save(createArticleDto);
  }

  async updateArticle(
    id: number,
    createArticleDto: CreateArticleDto,
  ): Promise<Article> {
    await this.articleRepository.update({ id }, createArticleDto);
    return await this.articleRepository.findOne({ where: { id } });
  }

  async deleteArticle(id: number): Promise<Article> {
    const deleteArticle = await this.articleRepository.findOne({
      where: { id },
    });
    await this.articleRepository.delete({ id });
    return deleteArticle;
  }
}
