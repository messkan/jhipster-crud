import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { IStore, Store } from 'app/shared/model/store.model';
import { StoreService } from './store.service';

@Component({
  selector: 'jhi-store-update',
  templateUrl: './store-update.component.html',
})
export class StoreUpdateComponent implements OnInit {
  isSaving = false;

  editForm = this.fb.group({
    id: [],
    name: [],
  });

  constructor(protected storeService: StoreService, protected activatedRoute: ActivatedRoute, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ store }) => {
      this.updateForm(store);
    });
  }

  updateForm(store: IStore): void {
    this.editForm.patchValue({
      id: store.id,
      name: store.name,
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const store = this.createFromForm();
    if (store.id !== undefined) {
      this.subscribeToSaveResponse(this.storeService.update(store));
    } else {
      this.subscribeToSaveResponse(this.storeService.create(store));
    }
  }

  private createFromForm(): IStore {
    return {
      ...new Store(),
      id: this.editForm.get(['id'])!.value,
      name: this.editForm.get(['name'])!.value,
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IStore>>): void {
    result.subscribe(
      () => this.onSaveSuccess(),
      () => this.onSaveError()
    );
  }

  protected onSaveSuccess(): void {
    this.isSaving = false;
    this.previousState();
  }

  protected onSaveError(): void {
    this.isSaving = false;
  }
}
