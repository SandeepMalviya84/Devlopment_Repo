import { Pipe, PipeTransform } from '@angular/core';
import { PostModel,Table } from '././table';
@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {
  transform(posts: PostModel[], search: Table): any {

    console.log(posts, 'data');
    console.log(search, 'd');
   // no post return
   if(!posts || posts.length === 0) return posts;
   console.table(posts);

   // search is blank, return post
   if(!search ||  !search.title && !search.id) return posts;
// debugger;
 console.log(search);
   return posts.filter((post) => {
    
    return  (!search.title || post.title.startsWith(search.title))  &&
        
         (!search.id || post.id === Number(search.id));
   })
   
 }

}
